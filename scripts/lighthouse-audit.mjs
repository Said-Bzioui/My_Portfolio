import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import lighthouse from 'lighthouse'

const root = fileURLToPath(new URL('../', import.meta.url))
const port = Number(process.env.LIGHTHOUSE_PORT || 4173)
const baseUrl = `http://127.0.0.1:${port}`
const categories = process.argv.includes('--quality')
  ? ['accessibility', 'best-practices', 'seo']
  : process.env.LIGHTHOUSE_CATEGORIES
  ? process.env.LIGHTHOUSE_CATEGORIES.split(',').map((category) => category.trim()).filter(Boolean)
  : ['performance', 'accessibility', 'best-practices', 'seo']
const reportsDir = path.join(root, 'reports', 'lighthouse')
const viteCli = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')
const require = createRequire(import.meta.resolve('lighthouse'))
const chromeLauncher = require('chrome-launcher')

const routes = [
  '/',
  '/contact',
  ...Array.from({ length: 11 }, (_, index) => `/project/${index + 1}`),
  ...Array.from({ length: 3 }, (_, index) => `/activity/${index + 1}`),
]

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: options.stdio ?? 'inherit',
      ...options,
    })
    child.once('error', reject)
    child.once('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} exited with code ${code}`))
    })
  })
}

async function waitForServer(server, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    if (server.exitCode !== null) throw new Error('Vite preview exited before becoming ready.')
    try {
      const response = await fetch(baseUrl)
      if (response.ok) return
    } catch {
      // Preview is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`Vite preview did not become available at ${baseUrl}.`)
}

await mkdir(reportsDir, { recursive: true })
console.log('Building production bundle…')
await run(process.execPath, [viteCli, 'build'])

const preview = spawn(process.execPath, [viteCli, 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], {
  cwd: root,
  stdio: 'ignore',
})

let failedAudits = false

try {
  await waitForServer(preview)

  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
  })
  const results = []
  try {
    for (const route of routes) {
      const reportPath = path.join(reportsDir, `${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}.json`)
      const url = `${baseUrl}${route}`
      console.log(`Auditing ${route}`)

      try {
        const result = await lighthouse(url, {
          port: chrome.port,
          output: 'json',
          logLevel: 'error',
          maxWaitForLoad: 30_000,
          onlyCategories: categories,
        })
        await writeFile(reportPath, JSON.stringify(result.lhr, null, 2))
        const scores = Object.fromEntries(
          categories.map((category) => [
            category,
            Math.round((result.lhr.categories[category]?.score ?? 0) * 100),
          ]),
        )
        results.push({ route, scores })
      } catch (error) {
        failedAudits = true
        results.push({ route, error: error.message })
      }
    }
  } finally {
    await chrome.kill()
  }

  console.log('\nLighthouse scores')
  console.table(results.map(({ route, scores, error }) => ({
    route,
    ...(scores || { error }),
  })))
  console.log(`\nDetailed JSON reports: ${path.relative(root, reportsDir)}`)
} finally {
  preview.kill('SIGTERM')
}

if (failedAudits) process.exitCode = 1
