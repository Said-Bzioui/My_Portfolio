import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardProject from "../components/CardProject";
import { PROJECTS } from "../../lib/data";
import { Titele } from "../components/Headings";
import { ProjectDeck } from "@/components/ui/scroll-stacking-cards.jsx";
import { Layers, LayoutGrid, Mouse, ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// 5 featured projects mapped for the 3D scroll stacking cards deck
const FEATURED_DECK_PROJECTS = [
  {
    name: "Application de Gestion Scolaire",
    summary: "Plateforme éducative complète : gestion des présences, emploi du temps dynamique, statistiques et gestion avancée des rôles.",
    url: "https://github.com/Said-Bzioui/School-Managment",
    display: "github.com/School-Managment",
    image: "https://res.cloudinary.com/datjizbe8/image/upload/v1756639301/dashboard_vrhnrb.png",
    accent: "#ff6b26",
    stack: ["React", "Laravel", "SQL", "TailwindCss"],
  },
  {
    name: "Servio - Services & Réservation",
    summary: "Plateforme de réservation de services en ligne moderne et responsive propulsée par React, ShadCN UI et API Laravel.",
    url: "https://servio.ma/",
    display: "servio.ma",
    image: "https://res.cloudinary.com/datjizbe8/image/upload/v1757199293/sevio_o5z3js.png",
    accent: "#10b981",
    stack: ["React.js", "ShadCN", "Laravel", "SQL"],
  },
  {
    name: "Creative Agency Portfolio",
    summary: "Site vitrine contemporain pour agence de design digital avec animations interactives et mise en page responsive soignée.",
    url: "https://said-bzioui.github.io/Tamplate-6-html-css-JS/",
    display: "said-bzioui.github.io/Tamplate-6",
    image: "https://res.cloudinary.com/datjizbe8/image/upload/v1756639236/img_1_oi83vx.png",
    accent: "#6366f1",
    stack: ["HTML", "CSS", "Js"],
  },
  {
    name: "Learning Academy Web Site",
    summary: "Portail académique interactif présentant programmes pédagogiques, parcours de formations et modules d'apprentissage.",
    url: "https://said-bzioui.github.io/Learning-Academy-Web-Site/",
    display: "said-bzioui.github.io/Learning-Academy",
    image: "https://res.cloudinary.com/datjizbe8/image/upload/v1756639185/img_4_nxpwwq.png",
    accent: "#f59e0b",
    stack: ["HTML", "CSS", "Js"],
  },
  {
    name: "Modern Analytics Dashboard",
    summary: "Interface de tableau de bord modulaire avec indicateurs clés, composants UI réutilisables et visualisations graphiques.",
    url: "https://said-bzioui.github.io/Tamplate-4-html-css-DASHBOARD/",
    display: "said-bzioui.github.io/Dashboard",
    image: "https://res.cloudinary.com/datjizbe8/image/upload/v1756639102/img_1_vezd8e.png",
    accent: "#ec4899",
    stack: ["HTML", "CSS", "Js"],
  },
];

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState("deck"); // 'deck' | 'grid'

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full h-auto text-white mt-12 sm:mt-16 pb-20"
      id="Projects"
      aria-label="Projets Réalisés"
    >
      {/* Section Header */}
      <div className="container mx-auto px-[5%] sm:px-6">
        <Titele
          head="Mes Projets"
          paragraph="Feuilletez mes projets en cascade 3D interactive ou découvrez toute la collection."
        />

        {/* View Mode Switcher */}
        <div className="flex items-center justify-center gap-3 my-8 z-20 relative">
          <button
            type="button"
            onClick={() => setViewMode("deck")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
              viewMode === "deck"
                ? "bg-gradient-to-r from-primary to-secondary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                : "bg-surface-raised/80 text-muted-foreground border-white/10 hover:border-white/20 hover:text-white"
            )}
          >
            <Layers className="w-4 h-4 text-white" />
            <span>Deck 3D Stacking</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
              viewMode === "grid"
                ? "bg-gradient-to-r from-primary to-secondary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                : "bg-surface-raised/80 text-muted-foreground border-white/10 hover:border-white/20 hover:text-white"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Tous les projets ({PROJECTS.length})</span>
          </button>
        </div>
      </div>

      {/* 3D Stacking Deck View */}
      {viewMode === "deck" ? (
        <div className="w-full relative">
          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-2 text-xs text-white/50 mb-3 tracking-widest uppercase">
            <Mouse className="w-4 h-4 text-primary animate-bounce" />
            <span>Faites défiler pour empiler les cartes</span>
            <ArrowDown className="w-3.5 h-3.5 text-primary animate-pulse" />
          </div>

          <ProjectDeck projects={FEATURED_DECK_PROJECTS} ground="#0d0d0d">

          </ProjectDeck>
        </div>
      ) : (
        /* Full Grid View */
        <div id="all-projects-grid" className="container mx-auto px-[5%] sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id || index}
                data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
                data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
              >
                <CardProject
                  Img={project.photo}
                  Title={project.title}
                  Description={project.description}
                  Link={project.link}
                  Stack={project.stack}
                  id={project.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
