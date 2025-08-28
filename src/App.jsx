
import { Route, Routes } from 'react-router-dom'
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
import ProjectDetails from './components/ProjectDetail'


function Portfolio() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
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
function App() {
  return (
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
  );
}
export default App
