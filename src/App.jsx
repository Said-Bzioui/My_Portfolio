
import AnimatedBackground from './components/Background'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Certificate from './pages/certificate'
import EducationsPage from './pages/EducationTimeline'
import ExperiencesPage from './pages/ExperianceTimeline'
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
      <EducationsPage />
      <ExperiencesPage />
      <Footer />
 
    </>
  )
}

export default App
