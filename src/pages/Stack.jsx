import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import TechStackIcon from "../components/TechStackIcon";
import { STACK } from "../../lib/data";
import { Titele } from "../components/Headings";


const StackPage = () => {
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
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]  "
      id="Tech_Stack"
    >
      <Titele head="My Tech Stack" paragraph="Use Modern Frameworks And Tools To Build Fast" />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {STACK.map((item, index) => (
            <div
              className="py-2"
              key={item.id}
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
            >
              <TechStackIcon TechStackIcon={item.photo} Language={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(StackPage);