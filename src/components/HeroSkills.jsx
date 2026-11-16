import ReactLogo from "@thesvg/react/react";
import LaravelLogo from "@thesvg/react/laravel";
import NextjsLogo from "@thesvg/react/nextjs";
import PythonLogo from "@thesvg/react/python";
import DockerLogo from "@thesvg/react/docker";
import SupabaseLogo from "@thesvg/react/supabase";
import PostgreSQLLogo from "@thesvg/react/postgresql";
import MongoDBLogo from "@thesvg/react/mongodb";
import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Network, Search, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// ============================================================================
// Skills and project contributions from the CV
// ============================================================================
const SKILLS_DATA = [
  {
    id: "react",
    title: "React",
    category: "Front-end",
    highlight: "React, Vite et shadcn/ui",
    strength1: "Interfaces React pour Switchlab et Chiffrage.ai",
    strength2: "Espaces administrateurs, studios, coachs et clients",
    strength3: "TypeScript, Tailwind CSS et shadcn/ui",
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.45)",
  },
  {
    id: "laravel",
    title: "Laravel",
    category: "Back-end",
    highlight: "PHP et API Laravel",
    strength1: "Développement de l’API Laravel en stage chez DigiSense",
    strength2: "Application React connectée à PostgreSQL",
    strength3: "Développement back-end avec PHP et Laravel",
    color: "#FF2D20",
    glow: "rgba(255, 45, 32, 0.45)",
  },
  {
    id: "nextjs",
    title: "Next.js",
    category: "Front-end",
    highlight: "React et Next.js",
    strength1: "Next.js dans mon stack de développement front-end",
    strength2: "Développement web avec React et TypeScript",
    strength3: "Interfaces avec HTML5, CSS3 et Tailwind CSS",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.4)",
  },
  {
    id: "python",
    title: "Python",
    category: "IA et API",
    highlight: "FastAPI et intégration d’IA",
    strength1: "Service d’IA Python et FastAPI pour Switchlab",
    strength2: "Analyse de CCTP et de plans architecturaux pour Chiffrage.ai",
    strength3: "Intégration des API d’IA Gemini et Anthropic",
    color: "#3776AB",
    glow: "rgba(55, 118, 171, 0.45)",
  },
  {
    id: "docker",
    title: "Docker",
    category: "Déploiement",
    highlight: "Services IA conteneurisés",
    strength1: "Service d’IA Python conteneurisé avec Docker",
    strength2: "Déploiement du service FastAPI sur un VPS",
    strength3: "Git et CI/CD dans mon outillage de développement",
    color: "#2496ED",
    glow: "rgba(36, 150, 237, 0.45)",
  },
  {
    id: "supabase",
    title: "Supabase",
    category: "Données et back-end",
    highlight: "Supabase et Edge Functions",
    strength1: "Back-end et base de données de Switchlab",
    strength2: "Stockage des données de Chiffrage.ai",
    strength3: "Essayage virtuel par IA via Edge Functions sur Solimage",
    color: "#3ECF8E",
    glow: "rgba(62, 207, 142, 0.45)",
  },
  {
    id: "architecture",
    title: "Architecture",
    category: "Full stack",
    highlight: "De la conception à la production",
    strength1: "Conception et développement complet de Switchlab",
    strength2: "Architecture et développement autonome de Chiffrage.ai",
    strength3: "Architecture, base de données, front-end et back-end",
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.45)",
  },
  {
    id: "postgres",
    title: "PostgreSQL",
    category: "Bases de données",
    highlight: "PostgreSQL et SQL",
    strength1: "Base PostgreSQL pour l’application réalisée chez DigiSense",
    strength2: "Conception des bases de données des plateformes",
    strength3: "Stockage de données avec Supabase",
    color: "#4169E1",
    glow: "rgba(65, 105, 225, 0.45)",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    category: "Bases de données",
    highlight: "MongoDB et NoSQL",
    strength1: "MongoDB dans mon stack de bases de données",
    strength2: "Stockage de données documentaires avec MongoDB",
    strength3: "Bases relationnelles : PostgreSQL et SQL",
    color: "#47A248",
    glow: "rgba(71, 162, 72, 0.45)",
  },
  {
    id: "vps",
    title: "VPS",
    category: "Mise en production",
    highlight: "Déploiement d’applications",
    strength1: "Service d’IA Switchlab déployé sur un VPS",
    strength2: "Python et FastAPI conteneurisés avec Docker",
    strength3: "Déploiement et maintenance des applications web",
    color: "#E95420",
    glow: "rgba(233, 84, 32, 0.45)",
  },
  {
    id: "seo-geo",
    title: "SEO & GEO",
    category: "Visibilité",
    highlight: "Recherche web et réponses d’IA",
    strength1: "SEO pour Switchlab, Chiffrage.ai et Solimage",
    strength2: "GEO : visibilité dans les moteurs de réponse d’IA",
    strength3: "Optimisations SEO et GEO pour Switchlab et Solimage",
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.45)",
  },
];

const SKILL_ICONS = {
  react: ReactLogo,
  laravel: LaravelLogo,
  nextjs: NextjsLogo,
  python: PythonLogo,
  docker: DockerLogo,
  supabase: SupabaseLogo,
  postgres: PostgreSQLLogo,
  mongodb: MongoDBLogo,
  architecture: Network,
  vps: Server,
  "seo-geo": Search,
};

function SkillIcon({ skill, className = "size-7 xl:size-8" }) {
  const Icon = SKILL_ICONS[skill.id];
  const isGeneric = ["architecture", "vps", "seo-geo"].includes(skill.id);
  return (
    <Icon
      role="img"
      aria-label={skill.title}
      width={32}
      height={32}
      className={`shrink-0 ${className}`}
      style={isGeneric ? { color: skill.color } : undefined}
    />
  );
}

export default function HeroSkills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const reducedMotion = useReducedMotion();

  const isPaused = isHovered || isFocused || reducedMotion;

  // Next / Previous cycle handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SKILLS_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + SKILLS_DATA.length) % SKILLS_DATA.length);
  }, []);

  // Auto-advance timer (every 3.6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3600);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Active skill currently in the front card
  const activeSkill = SKILLS_DATA[activeIndex];

  // Butter-smooth spring config for high-end card deck transitions
  const springConfig = reducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 250, damping: 25, mass: 0.85 };

  return (
    <TooltipProvider delayDuration={150}>
      <aside
        aria-label="Deck de cartes interactif des compétences phares"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
          }
        }}
        className="relative ml-auto hidden w-full lg:flex lg:w-[48%] xl:w-[46%] max-w-[440px] xl:max-w-[470px] h-[360px] items-center justify-center shrink-0 self-center text-foreground xl:mr-4 select-none"
      >
        {/* Ambient atmospheric backdrop glow that morphs with active skill color */}
        <div
          className="pointer-events-none absolute inset-12  -z-10 transition-all duration-700 opacity-60"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 50% 55%, ${activeSkill.glow}, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* ============================================================== */}
        {/* 3D Staggered Cards Stack Deck (Continuous Spring Motion)        */}
        {/* ============================================================== */}
        <div className="relative w-[340px] sm:w-[370px] xl:w-[400px] h-[225px] flex items-center justify-center">
          {SKILLS_DATA.map((skill, idx) => {
            // Distance from current active index in the circular array
            const diff = (idx - activeIndex + SKILLS_DATA.length) % SKILLS_DATA.length;
            const isFront = diff === 0;

            // Compute exact stepped offset & scale for 3D deck look from user's sketch
            let targetY;
            let targetScale;
            let targetZIndex;
            let targetOpacity;
            let pointerEvents;

            if (isFront) {
              targetY = 0;
              targetScale = 1;
              targetZIndex = 20;
              targetOpacity = 1;
              pointerEvents = "auto";
            } else if (diff === 1) {
              targetY = -18;
              targetScale = 0.94;
              targetZIndex = 19;
              targetOpacity = 0.85;
              pointerEvents = "auto";
            } else if (diff === 2) {
              targetY = -34;
              targetScale = 0.88;
              targetZIndex = 18;
              targetOpacity = 0.65;
              pointerEvents = "auto";
            } else if (diff === 3) {
              targetY = -48;
              targetScale = 0.82;
              targetZIndex = 17;
              targetOpacity = 0.45;
              pointerEvents = "auto";
            } else if (diff === SKILLS_DATA.length - 1) {
              // Graceful exit curve to the bottom-back of the deck
              targetY = 24;
              targetScale = 0.96;
              targetZIndex = 5;
              targetOpacity = 0;
              pointerEvents = "none";
            } else {
              // Dormant deep background cards
              targetY = -52;
              targetScale = 0.78;
              targetZIndex = 0;
              targetOpacity = 0;
              pointerEvents = "none";
            }

            return (
              <motion.div
                key={skill.id}
                animate={{
                  y: targetY,
                  scale: targetScale,
                  opacity: targetOpacity,
                  zIndex: targetZIndex,
                }}
                transition={springConfig}
                onClick={() => {
                  if (!isFront && diff <= 3) {
                    setActiveIndex(idx);
                  }
                }}
                whileHover={
                  !isFront && diff <= 3 && !reducedMotion
                    ? {
                      y: targetY - 6,
                      scale: targetScale + 0.015,
                      opacity: 0.95,
                    }
                    : {}
                }
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x < -50 || velocity.x < -300) {
                    handleNext();
                  } else if (offset.x > 50 || velocity.x > 300) {
                    handlePrev();
                  }
                }}
                style={{
                  pointerEvents: pointerEvents,
                  borderColor: isFront ? `${skill.color}55` : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isFront
                    ? `0 20px 45px -10px rgba(0,0,0,0.85), 0 0 32px -4px ${skill.glow}`
                    : "0 10px 25px -5px rgba(0,0,0,0.6)",
                }}
                className={`absolute inset-0 rounded-2xl border bg-gradient-to-b from-[#1b1716]/98 via-[#171413]/94 to-[#110f0e]/98 p-4 backdrop-blur-2xl flex flex-col justify-between overflow-hidden ${isFront ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                  }`}
              >
                {/* ---------------------------------------------------- */}
                {/* Peeking Tab Header for Background Cards              */}
                {/* ---------------------------------------------------- */}
                {!isFront && (
                  <div className="absolute inset-x-0 top-0 px-4 py-2 flex items-center justify-between border-b border-white/5 bg-[#171413]/90">
                    <div className="flex items-center gap-2">
                      <SkillIcon skill={skill} className="size-4 object-contain" />
                      <span className="text-[11px] font-bold text-white/80 tracking-wide">{skill.title}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider text-primary-light font-mono">
                      {skill.category}
                    </span>
                  </div>
                )}

                {/* ---------------------------------------------------- */}
                {/* Front Active Card Content                            */}
                {/* ---------------------------------------------------- */}
                {isFront && (
                  <>
                    {/* Top Row: Icon (X) + Squiggly Wave (~) + Title & Category */}
                    <div className="flex items-center gap-3">
                      {/* Active Icon Bay */}
                      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full! border border-primary/40 bg-primary/10 p-2 shadow-inner">
                        <motion.div
                          className="pointer-events-none absolute -inset-1 rounded-full! border border-dashed"
                          style={{ borderColor: `${skill.color}60` }}
                          animate={reducedMotion ? {} : { rotate: 360 }}
                          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                          aria-hidden="true"
                        />

                        {!isPaused && (
                          <motion.span
                            className="pointer-events-none absolute -inset-2 rounded-full! border"
                            style={{ borderColor: `${skill.color}45` }}
                            animate={{ scale: [1, 1.3], opacity: [0.75, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            aria-hidden="true"
                          />
                        )}

                        <SkillIcon skill={skill} className="size-7.5 object-contain" />
                      </div>

                      {/* Right of Icon: Title, Wave (~), and Category Badge */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="truncate text-base font-bold text-white tracking-wide">
                            {skill.title}
                          </span>
                          <Badge
                            className="px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase border border-primary/30 bg-primary/15 text-primary-light"
                          >
                            {skill.category}
                          </Badge>
                        </div>

                        {/* Animated squiggly wave (matches ~ in user's drawing) */}
                        <div className="flex items-center gap-2 mt-0.5" aria-hidden="true">
                          <svg className="w-14 h-3 shrink-0 overflow-visible" viewBox="0 0 60 12" fill="none">
                            <motion.path
                              d="M 0 6 Q 7.5 1, 15 6 T 30 6 T 45 6 T 60 6"
                              stroke={skill.color || "var(--primary)"}
                              strokeWidth="2"
                              strokeLinecap="round"
                              animate={
                                reducedMotion
                                  ? {}
                                  : {
                                    d: [
                                      "M 0 6 Q 7.5 1, 15 6 T 30 6 T 45 6 T 60 6",
                                      "M 0 6 Q 7.5 11, 15 6 T 30 6 T 45 6 T 60 6",
                                      "M 0 6 Q 7.5 1, 15 6 T 30 6 T 45 6 T 60 6",
                                    ],
                                  }
                              }
                              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content: 3 Lines of Technical Value (from user's sketch) */}
                    <div className="space-y-1.5 my-2 px-0.5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white/95">
                        <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="truncate">{skill.strength1}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-white/80">
                        <span className="size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                        <span className="truncate">{skill.strength2}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-white/65">
                        <span className="size-1.5 shrink-0 rounded-full bg-primary-light/60" />
                        <span className="truncate">{skill.strength3}</span>
                      </div>
                    </div>

                    {/* Bottom Row: Progress countdown bar & Action Link */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="relative h-1.5 w-36 rounded-full overflow-hidden bg-white/10">
                        <motion.div
                          key={`${activeIndex}-${isPaused}`}
                          className="h-full bg-gradient-to-r from-primary via-primary-light to-secondary"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isPaused ? 0 : 1 }}
                          transition={{ duration: isPaused ? 0 : 3.6, ease: "linear" }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>

                      <a
                        href="#Tech_Stack"
                        className="group/btn inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-light transition-colors"
                      >
                        <span>Explorer</span>
                        <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </aside>
    </TooltipProvider>
  );
}
