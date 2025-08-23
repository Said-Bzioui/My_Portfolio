import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardProject from "../components/CardProject";
import { PROJECTS } from "../../lib/data";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Projects
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));


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
      id="About"
    >
      <Header />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id || index}
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
            >
              <CardProject
                Img='/projects/dash.jpeg'
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