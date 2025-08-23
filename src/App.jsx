
import AnimatedBackground from './components/Background'
import Navbar from './components/Navbar'
import About from './pages/About'
import Certificate from './pages/certificate'
import Home from './pages/Home'
import Projects from './pages/projects'
import Stack from './pages/Stack'

function App() {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <Home />
      <About />
      <Projects />
      <Certificate />
      <Stack />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
              S™
          </span>
        </center>
      </footer>
    </>
  )
}

export default App
