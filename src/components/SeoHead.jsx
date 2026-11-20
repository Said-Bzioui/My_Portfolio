import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://saidbzioui.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SeoHead({
  title = 'Software Developer Full Stack & IA au Maroc | SAID BZIOUI',
  description = 'Said Bzioui, Software Developer au Maroc, développe des applications web et SaaS avec React, Next.js, Laravel, FastAPI et des solutions d’intelligence artificielle.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) {
  const canonicalUrl = new URL(path, SITE_URL).toString()
  const metaDescription = description.length > 160
    ? `${description.slice(0, 157).trimEnd()}…`
    : description
  const structuredData = type === 'article'
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: title,
        description,
        url: canonicalUrl,
        image,
        author: {
          '@type': 'Person',
          name: 'SAID BZIOUI',
          url: SITE_URL,
        },
      }
    : null

  useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonicalUrl
  }, [canonicalUrl])

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content="SAID BZIOUI" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      {image === DEFAULT_IMAGE && <meta property="og:image:type" content="image/jpeg" />}
      {image === DEFAULT_IMAGE && <meta property="og:image:width" content="1200" />}
      {image === DEFAULT_IMAGE && <meta property="og:image:height" content="630" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  )
}
