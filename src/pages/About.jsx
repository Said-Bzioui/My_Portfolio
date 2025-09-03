import React, { useEffect } from "react"
import { FileText, Code, Award, Globe } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CERTIFICATES, PROJECTS } from "../../lib/data";
import { Titele } from "../components/Headings";
import StatusCard from "@/components/AboutStatusCard";

const AboutPage = () => {

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

  const statsData = [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      href: "#Projects",
      value: PROJECTS.length,
      label: "Total des projets",
      description: "Solutions web innovantes",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: CERTIFICATES.length,
      href: "#Certificates",
      label: "Certificats",
      description: "Compétences professionnelles validées",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: 0,
      href: "#Experiences",
      label: "Années d'expérience",
      description: "Parcours d'apprentissage continu",
      animation: "fade-left",
    },
  ];

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="About"
    >
      <Titele head="About Me" paragraph="Transforming Ideas Into Digital Experiences" />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Bonjour, je suis
              </span>
              <span
                className="block mt-2 text-gray-200 text-4xl"
                data-aos="fade-right"
                data-aos-duration="1300"
              >
                SAID BZIOUI
              </span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Je suis titulaire d’un diplôme en développement digital,
              spécialisé en développement web full stack,
              et je suis passionné par le développement front-end et back-end.
              Je me concentre sur la création d’expériences numériques engageantes et
              je m’efforce toujours de fournir les meilleures solutions pour chaque projet.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="/SAID_BZIOUI_CV.pdf" download className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="w-full cursor-pointer lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Télécharger CV
                </button>
              </a>

              <a href="#Projects" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 bg-[#a855f7]/10 animate-bounce-slow delay-200"
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Voir Les Projets
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
            <div
              className="relative group"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Optimized gradient backgrounds with reduced complexity for mobile */}
              <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
              </div>

              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-xl z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

                  <img
                    src="https://res.cloudinary.com/datjizbe8/image/upload/v1756574743/photo_cmw5f4.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading="lazy"
                  />

                  {/* Advanced hover effects - desktop only */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData?.map((stat) => (
              <StatusCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;