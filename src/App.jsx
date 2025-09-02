
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
import Activities from './pages/activities'
import ActivityDetails from './components/ActivityDetail'
import { OpenTo } from './components/OpenTo'
import Contact from './pages/Contact'


function Portfolio() {
  return (
    <>
      <OpenTo />
      <AnimatedBackground />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificate />
      <Stack />
      <EducationsPage />
      <ExperiencesPage />
      <Activities />
      <Footer />

    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/activity/:id" element={<ActivityDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App
