
import { useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
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
import Contact from './components/Contact'
import SeoHead from './components/SeoHead'


function Portfolio() {
  const { hash } = useLocation();
  useLayoutEffect(() => {
    if (hash === '#Projects') {
      const section = document.getElementById('Projects');
      if (section) window.scrollTo({ top: Math.max(0, section.getBoundingClientRect().top + window.scrollY - 104), behavior: 'instant' });
    }
  }, [hash]);
  return (
    <>
      <SeoHead />
      {/* <OpenTo /> */}
      <AnimatedBackground />
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Stack />
        <Projects />
        <ExperiencesPage />
        <EducationsPage />
        <Certificate />
        <Activities />
      </main>
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
