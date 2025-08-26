// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";

const EducationsPage = () => {
    const educations = [
        {
            side: "left",
            title: "Technicien Spécialisé En Développement Digital option web full stack",
            date: "2023-2025",
            description: "Cités des Métiers et des Compétences | Rabat",
            photo: '/education/cmc.jpg'
        },
        {
            side: "right",
            title: "Baccalauréat Sciences Physiques",
            date: "2021-2022",
            description: "Zineb Nafzaouia | Sidi Slimane",

        }
    ];


    return (
        <div className="container mx-auto p-6" id="Educations">
            <Titele head="My Educations" paragraph="My Educational Journey To Develop My Coding Skills" />
            <Timeline data={educations} />
        </div>
    );
};

export default EducationsPage;
