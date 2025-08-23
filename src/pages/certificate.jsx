import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardProject from "../components/CardProject";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        Certificates
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
      id="About"
    >
      <Header />
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