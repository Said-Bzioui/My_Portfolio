import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Instagram,
  Linkedin,
} from "lucide-react";
import { PARASCOLAIRRE } from "../../lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const ProjectStats = ({ project }) => {

  return (
    <div className="p-3 md:p-4  rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />
      <div className="flex gap-3 ">
        <a
          href={project.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer relative inline-flex items-center space-x-1.5 md:space-x-2 px-2 md:px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        >
          <div className="absolute w-full inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
          <Linkedin className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
          <span className="relative font-base">LinkedIn</span>
        </a>

        <a
          href={project.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer relative inline-flex items-center space-x-1.5 md:space-x-2 px-2 md:px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
        >
          <div className="absolute w-full inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
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
  const [activity, setActivity] = useState(null);
  const [picture, setPicture] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedActivity = PARASCOLAIRRE.find((p) => String(p.id) === id);
    setActivity(selectedActivity);

  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">Loading Activity...</h2>
        </div>
      </div>
    );
  }

  // click
  const handlePictureClick = (picture) => {
    setPicture(picture)
  };

  return (
    <div className="min-h-screen  px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-purple-800  rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
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
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-purple-500 bg-clip-text text-transparent  ">
                  {activity.title}
                </h1>
                <div className="relative h-1 w-21 md:w-45">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                  {activity.description}
                </p>
              </div>

              <ProjectStats project={activity} />

            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <div className="relative p-3 w-full  rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={picture ? picture : activity.photo}
                  alt={activity.title}
                  loading="lazy"
                  className="w-full md:h-96 object-contain rounded-md overflow-hidden "
                />
                <div className="mt-5">
                  <Carousel className="w-[80%] mx-auto">
                    <CarouselContent className="p-2">
                      {activity.pictures?.map((pic, i) => (
                        <CarouselItem key={i} className={`basis-1/3 md:basis-1/5 ml-1 h-20 flex items-center overflow-hidden  p-0 cursor-pointer hover:scale-105 transition-transform `}
                          onClick={() => handlePictureClick(pic)}
                        >
                          <img
                            src={pic}
                            alt={activity.title}
                            loading="lazy"
                            className={`object-cover  h-full   ${picture === pic ? 'ring-3 ring-purple-800' : ''} `}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
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
    </div>
  );
};

export default ActivityDetails;
