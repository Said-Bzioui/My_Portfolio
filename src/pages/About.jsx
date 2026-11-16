import { useEffect } from "react";
import { ArrowUpRight, FileText, Code, Award, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CERTIFICATES, PROJECTS } from "../../lib/data";
import StatusCard from "@/components/AboutStatusCard";
import cvFile from "../assets/CV-BZIOUI_SAID_FULLSTACK.pdf";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const statsData = [
    {
      icon: Code,
      href: "#Projects",
      value: `${PROJECTS.length} +`,
      label: "Total des projets",
      description: "Sites et applications web",
    },
    {
      icon: Award,
      href: "#Certificates",
      value: CERTIFICATES.length,
      label: "Certificats",
      description: "Certificats de formation",
    },
    {
      icon: Globe,
      href: "#Experiences",
      value: "1+",
      label: "An d’expérience professionnelle",
      description: "Applications web et solutions SaaS",
    },
  ];

  return (
    <section
      id="About"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 px-[5%] py-20 text-foreground sm:py-28 lg:px-[10%]"
    >
      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-24">
          <div data-aos="fade-up">
            <p className="mb-4 text-sm font-medium text-muted-foreground sm:text-base">
              Bonjour, je suis SAID BZIOUI
            </p>
            <h2 id="about-title" className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              De l’architecture{" "}
              <span className="text-primary">à la production.</span>
            </h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {["React & Next.js", "Laravel & FastAPI", "Supabase", "Docker & VPS", "Intégration d’IA"].map((specialty) => (
                <span key={specialty} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground/80">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-10 xl:pl-12" data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
              Développeur full stack avec plus d’un an d’expérience professionnelle,
              je conçois et déploie des applications web et des solutions SaaS.
              Je prends en charge l’architecture, les interfaces et le back-end,
              jusqu’à la mise en production.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Chez Wave Digital Agency à Kénitra, j’ai conçu et développé seul
              Switchlab, une plateforme d’accompagnement sportif et nutritionnel,
              et Chiffrage.ai, qui analyse des documents BTP avec l’IA.
              J’ai aussi contribué à Solimage et Effical, en travaillant sur
              l’intégration d’IA, la maintenance et les fonctionnalités métier.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Diplômé en développement digital, option full stack, à la CMC de Tamesna,
              je suis également certifié L’Hybride Praticien (2026) en IA appliquée,
              automatisation des workflows et acquisition digitale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={cvFile}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <FileText className="size-4" aria-hidden="true" />
                Télécharger CV
              </a>
              <a
                href="#Projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Voir les projets
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-3 sm:pt-10">
          {statsData.map((stat) => <StatusCard key={stat.label} {...stat} />)}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
