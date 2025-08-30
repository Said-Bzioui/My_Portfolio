import  { useEffect, memo } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PARASCOLAIRRE } from "../../lib/data";
import { Titele } from "../components/Headings";
import ActivityCard from "../components/ActivityCard";




const Activity = () => {
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
      id="Activity"
    >
      <Titele head="ACTIVITÉS PARASCOLAIRES" paragraph="Les différentes activités que j'ai réalisées" />
      <div className="container mx-auto flex justify-center items-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {PARASCOLAIRRE.map((activity, index) => (
            <div
              key={activity.id || index}
              data-aos={index % 4 === 0 ? "fade-up-right" : index % 4 === 1 ? "fade-up" : "fade-up-left"}
              data-aos-duration={index % 4 === 0 ? "1000" : index % 4 === 1 ? "1200" : "1000"}
            >
              <ActivityCard
                Img={activity.photo}
                Title={activity.title}
                Description={activity.description}
                id={activity.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Activity);