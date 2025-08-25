// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";

const ExperiencesPage = () => {
    const experiences = [
        {
            side: "left",
            title: "Développeur Web Full Stack (Stagiaire)",
            date: "Avril–Juin 2025",
            description: "DigiSense SARL – Rabat Agdal",
            photo: '/education/cmc.jpg'
        }
    ];


    return (
        <div className="container mx-auto p-6" id="Experiences">
            <div className="text-center lg:mb-4 mb-2 px-[5%]">
                <div className="inline-block relative group">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                        data-aos="zoom-in-up"
                        data-aos-duration="600"
                    >
                        Experiences
                    </h2>
                </div>
                <p
                    className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
                    data-aos="zoom-in-up"
                    data-aos-duration="800"
                >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Transforming ideas into digital experiences
                    <Sparkles className="w-5 h-5 text-purple-400" />
                </p>
            </div>
            <Timeline data={experiences} />
        </div>
    );
};

export default ExperiencesPage;
