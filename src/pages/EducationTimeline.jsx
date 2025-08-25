// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";

const EducationsPage = () => {
    const educations = [
        {
            side: "left",
            title: "Technicien Spécialisé En Développement Digital option web full stack",
            date: "2023-2025",
            description: "Cités des Métiers et des Compétences | Rabat",
            photo : '/education/cmc.jpg'
        },
        {
            side: "right",
            title: "Baccalauréat Sciences Physiques",
            date: "2021-2022",
            description: "Zineb Nafzaouia | Sidi Slimane",

        }
    ];


    return (
        <div className="container mx-auto p-6"   id="Educations">
            <div className="text-center lg:mb-4 mb-2 px-[5%]">
                <div className="inline-block relative group">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                        data-aos="zoom-in-up"
                        data-aos-duration="600"
                    >
                        Educations
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
            <Timeline data={educations} />
        </div>
    );
};

export default EducationsPage;
