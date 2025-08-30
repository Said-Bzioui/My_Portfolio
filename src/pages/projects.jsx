import React, { useEffect, memo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardProject from "../components/CardProject";
import { PROJECTS } from "../../lib/data";
import { Titele } from "../components/Headings";




const ProjectsPage = () => {
  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="Projects"
    >
      <Titele head="Mes Projets" paragraph="Résolvez des problèmes concrets grâce à un code propre" />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id || index}
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
            >
              <CardProject
                Img='https://res.cloudinary.com/datjizbe8/image/upload/v1756573615/dash_rilu2k.jpg'
                Title={project.title}
                Description={project.description}
                Link={project.link}
                id={project.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectsPage);