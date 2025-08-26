// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";

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
            <Titele head="My Experiences" paragraph="Experiences in Completing Individual And Group Projects" />
            <Timeline data={experiences} />
        </div>
    );
};

export default ExperiencesPage;
