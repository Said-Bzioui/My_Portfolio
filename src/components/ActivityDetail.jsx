import { Instagram, Linkedin } from "./brand-icons";
import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { PARASCOLAIRRE } from "../../lib/data";
import JournalSpreadCarousel from "@/components/ui/journal-spread-carousel.jsx";
import SeoHead from "@/components/SeoHead";

function generateActivitySpreads(activity) {
  if (!activity) return [];
  const pics = activity.pictures && activity.pictures.length > 0
    ? activity.pictures
    : [activity.photo];

  const spreads = [];

  // Spread 1: Cover & Intro
  spreads.push({
    id: "cover",
    label: "Page de couverture",
    paper: "#282c44",
    image: activity.photo,
    imagePosition: "center",
    prints: pics[0] ? [
      { src: pics[0], x: 55, y: 15, w: 38, rotate: 4, caption: "Moment fort" }
    ] : [],
    notes: [
      { x: 6, y: 18, w: 42, style: "card", title: activity.title, body: activity.description ? activity.description.slice(0, 110) + "..." : "" }
    ]
  });

  // Group remaining pictures in pairs
  const remaining = pics.slice(1);
  const chunk = 2;
  for (let i = 0; i < remaining.length; i += chunk) {
    const p1 = remaining[i];
    const p2 = remaining[i + 1];
    const pageIndex = Math.floor(i / chunk) + 2;

    const prints = [];
    if (p1) {
      prints.push({
        src: p1,
        x: 8,
        y: 12 + (i % 3) * 4,
        w: 36,
        rotate: (i % 2 === 0 ? -4 : 5),
        caption: `Photo #${i + 2}`,
        tape: i % 2 === 0
      });
    }
    if (p2) {
      prints.push({
        src: p2,
        x: 54,
        y: 16 - (i % 2) * 4,
        w: 38,
        rotate: (i % 2 === 0 ? 6 : -3),
        caption: `Équipe & Action`,
        tape: i % 2 !== 0
      });
    }

    spreads.push({
      id: `spread-${pageIndex}`,
      label: `Épisode ${pageIndex - 1}`,
      paper: pageIndex % 2 === 0 ? "#e7e2d6" : "#efe8da",
      prints,
      notes: [
        {
          x: 24,
          y: 72,
          w: 52,
          style: "card",
          title: `Souvenir #${pageIndex - 1}`,
          body: activity.title
        }
      ]
    });
  }

  // Final summary spread
  spreads.push({
    id: "closing",
    label: "Clôture",
    paper: "#25293e",
    prints: pics[pics.length - 1] ? [
      { src: pics[pics.length - 1], x: 32, y: 14, w: 36, rotate: -2, caption: "Mission accomplie !", tape: true }
    ] : [],
    notes: [
      { x: 18, y: 72, w: 64, style: "card", title: "Clôture de l'activité", body: "Travail d'équipe, passion et innovation." }
    ]
  });

  return spreads;
}



const ProjectStats = ({ project }) => {

  return (
    <div className="p-3 md:p-4  rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-ember/20 to-burgundy/20 opacity-50 blur-2xl z-0" />
      <div className="flex gap-3 ">
        <a
          href={project.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer relative inline-flex items-center space-x-1.5 md:space-x-2 px-2 md:px-4 py-2 bg-gradient-to-r from-primary-deep/10 to-secondary-deep/10 hover:from-primary-deep/20 hover:to-secondary-deep/20 text-primary-soft rounded-xl transition-all duration-300 border border-primary/20 hover:border-primary/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        >
          <div className="absolute w-full inset-0 translate-y-[100%] bg-gradient-to-r from-primary-deep/10 to-secondary-deep/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
          <Linkedin className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
          <span className="relative font-base">LinkedIn</span>
        </a>

        <a
          href={project.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer relative inline-flex items-center space-x-1.5 md:space-x-2 px-2 md:px-4 py-2 bg-gradient-to-r from-secondary-deep/10 to-secondary-deep/10 hover:from-secondary-deep/20 hover:to-secondary-deep/20 text-secondary-soft rounded-xl transition-all duration-300 border border-secondary/20 hover:border-secondary/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        >
          <div className="absolute w-full inset-0 translate-y-[100%] bg-gradient-to-r from-secondary-deep/10 to-secondary-deep/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
          <Instagram className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
          <span className="relative font-base">Instagram</span>
        </a>
      </div>

    </div>
  );
};

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = PARASCOLAIRRE.find((p) => String(p.id) === id);
  const spreads = useMemo(() => generateActivitySpreads(activity), [activity]);

  useEffect(() => {
    window.scrollTo(0, 0);

  }, [id]);

  if (!activity) {
    return (
      <>
      <SeoHead title="Activité introuvable | SAID BZIOUI" description="Cette activité n’est pas disponible dans le portfolio de Said Bzioui." path={`/activity/${id}`} noindex />
      <div className="min-h-screen bg-page-background flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16  mx-auto border-8 border-primary/30 border-t-secondary-deep rounded-full animate-spin" />
        </div>
      </div>
      </>
    );
  }

  return (
    <>
    <SeoHead title={`${activity.title} | Activité de SAID BZIOUI`} description={activity.description} path={`/activity/${id}`} image={activity.photo} type="article" />
    <main className="min-h-screen  px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-burgundy  rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto  md:px-6 py-4">
          <div className="flex items-center  space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-1 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <span>Activity</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 hidden md:block  ">{activity.title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary-soft via-secondary-pale to-secondary bg-clip-text text-transparent  ">
                  {activity.title}
                </h1>
                <div className="relative h-1 w-21 md:w-45">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  {activity.description}
                </p>
              </div>

              <ProjectStats project={activity} />

            </div>

            <div className="space-y-4 md:space-y-6 animate-slideInRight">
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-xl">
                <JournalSpreadCarousel
                  spreads={spreads}
                  height="560px"
                  autoPlay={3500}
                  showTitle={false}
                  showActions={false}
                  showTop={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
    </>
  );
};

export default ActivityDetails;
