import React, { useState, useEffect, useCallback } from "react"
import { Mail, ExternalLink, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import SocialLink from "@/components/SocialLinks";
import HeroSkills from "@/components/HeroSkills";



const Button = ({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px] cursor-pointer">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-deep to-secondary-deep rounded-xl opacity-30 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11  bg-surface-raised/50 hover:bg-surface-hover/50 backdrop-blur-xl rounded-lg  leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-primary-deep/40 to-secondary-deep/40"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-foreground to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-foreground ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
);



// Constants
const WORDS = ["Applications web et SaaS", "Intégration d’IA", "De l’architecture à la production"];
const TECH_STACK = ["React", "Next.js", "TypeScript", "Laravel", "FastAPI", "Supabase", "Docker"];


const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,

      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? 100 : 50
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);



  return (
    <section className="relative isolate h-screen overflow-hidden" id="Home" aria-label="Introduction">
      <img
        src="/hero_image.webp"
        alt="Portrait in sunglasses against a warm orange and red background"
        width="1672"
        height="941"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-[28rem] w-full object-cover object-[58%_top] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] lg:h-full lg:object-center lg:[mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-page-background/25 to-transparent to-65% [mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]" aria-hidden="true" />
      <div className="relative z-10">
        <div className="container mx-auto px-[5%] sm:px-6">
          <div className="flex h-screen items-end pt-24 pb-6 sm:pb-10 lg:items-center lg:pt-24 lg:pb-10">
            {/* Left Column */}
            <div className="w-full max-w-[34rem] lg:w-[44%] space-y-8 text-left"
              data-aos="fade-right"
              data-aos-delay="200">
              <div className="space-y-4 sm:space-y-4">
                <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                  <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05] lg:text-[clamp(3rem,5.2vw,5.5rem)] font-bold tracking-tight text-white">
                    <span className="relative inline-block">
                      <span className="relative">
                        Software Developer
                      </span>
                    </span>
                    <br />
                  </h1>
                </div>

                {/* Typing Effect */}
                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-white to-primary-pale bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-primary to-secondary ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-white/85 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000">
                  Plus d’un an d’expérience dans le développement d’applications web et SaaS. Spécialisé en full stack, je maîtrise React, Next.js, Laravel et FastAPI, ainsi que l’intégration de solutions d’intelligence artificielle. J’interviens de la conception de l’architecture technique au déploiement et à la maintenance.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-start" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <div key={index} className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-sm text-white/90 hover:bg-white/10 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                  <Button href="#Projects" text="Mes projets" icon={ExternalLink} />
                  <Button href="/contact" text="Contact" icon={Mail} />
                </div>
              </div>
            </div>

            <HeroSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
