import React, { useEffect, useState } from "react"
import {  Award, X, Fullscreen } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Titele } from "../components/Headings";
import { CERTIFICATES } from "../../lib/data";


const CertificatesPage = () => {
  const [open, setOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(null);
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
  // click 
  const handleClick = (e, photo) => {
    setOpen(true)
    e.stopPropagation();
    setSelectedPhoto(photo);
  }
  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="Certificates"
    >
      <Titele head="Mes certificats" paragraph="Valider mes compétences et mon état d'esprit axé sur l'apprentissage continu" />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CERTIFICATES.map((project, index) => (
            <div
              key={project.id || index}
              className="cursor-pointer"
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
              onClick={(e) => handleClick(e, project.photo)}
            >
              {/* Certificate Image with Initial Filter */}
              <div className="relative h-32 md:h-45 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 p-2">
                <img
                  className="w-full  block object-cover"
                  src={project.photo}
                  alt="Certificate"
                  style={{
                    filter: "contrast(1.10) brightness(0.8) saturate(1.1)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-1/2  "><Fullscreen className="w-21" /></div>
                <span className="absolute left-10 w-7 top-0 bg-purple-600 text-white text-xs  py-1  rounded-b-md flex items-center justify-center ">
                  <Award className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <div className="w-full h-screen z-100 flex p-3 md:p-0 items-center justify-center bg-slate-800/80 fixed inset-0">
            <div className="relative  border-[#a855f7]/50  bg-[#a855f7]/10  backdrop-blur-lg border  rounded-lg shadow-lg p-1 md:p-6 md:w-fit  w-full md:h-[80vh]">
              <button
                className="absolute -top-3 -right-3 bg-black/80 p-2 rounded-full text-[#a855f7] cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
              <img
                className="w-full h-full object-contain rounded-lg"
                src={selectedPhoto}
                alt={open.Title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesPage;