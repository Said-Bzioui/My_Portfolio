import TechStackIcon from "../components/TechStackIcon";
import { Marquee } from "@/components/ui/marquee";
import { STACK } from "../../lib/data";
import { Titele } from "../components/Headings";

const stackRows = [STACK.slice(0, Math.ceil(STACK.length / 2)), STACK.slice(Math.ceil(STACK.length / 2))];

const StackPage = () => (
  <section
    className="relative scroll-mt-24 overflow-hidden px-[5%] pb-[10%] text-foreground lg:px-[10%]"
    id="Tech_Stack"
    aria-label="Mes outils de développement"
  >
    <Titele head="Mes outils de développement" paragraph="Les langages, frameworks et outils que j’utilise." />
    <div className="container mx-auto mt-8 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
      {stackRows.map((row, index) => (
        <Marquee
          key={index}
          reverse={index === 1}
          pauseOnHover
          repeat={3}
          tabIndex={0}
          aria-label={`Outils de développement, ligne ${index + 1}. Défilement en pause au survol ou au focus.`}
          className="rounded-2xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary [--duration:45s] [--gap:1rem]"
        >
          {row.map((item) => (
            <div key={item.id} className="w-32 shrink-0 py-2 sm:w-40">
              <TechStackIcon TechStackIcon={item.photo} Language={item.title} />
            </div>
          ))}
        </Marquee>
      ))}
    </div>
  </section>
);

export default StackPage;
