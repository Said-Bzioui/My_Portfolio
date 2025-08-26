import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Titele } from "../components/Headings";


const CertificatesPage = () => {
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
      id="Certificates"
    >
      <Titele head="My Certificates" paragraph="Validate My Skills And Continuous Learning Mindset" />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
          {[
            { id: 1, Title: "Project One", Description: "Description for project one.", Link: "https://example.com/1" },
            { id: 2, Title: "Project Two", Description: "Description for project two.", Link: "https://example.com/2" },
            { id: 3, Title: "Project Three", Description: "Description for project three.", Link: "https://example.com/3" },
            { id: 4, Title: "Project Four", Description: "Description for project four.", Link: "https://example.com/4" },
            { id: 5, Title: "Project Five", Description: "Description for project five.", Link: "https://example.com/5" },
            { id: 6, Title: "Project Six", Description: "Description for project six.", Link: "https://example.com/6" }
          ].map((project, index) => (
            <div
              key={project.id || index}
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
            >
              {/* Certificate Image with Initial Filter */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 p-2">
                <img
                  className="w-full h-auto block object-cover "
                  src='/certifes/certife.jpg'
                  alt="Certificate"
                  style={{
                    filter: "contrast(1.10) brightness(0.8) saturate(1.1)",
                    transition: "filter 0.3s ease",
                  }}

                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CertificatesPage);