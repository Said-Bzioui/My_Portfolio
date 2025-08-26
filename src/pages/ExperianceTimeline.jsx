// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";
import { EXPERIANCES } from "../../lib/data";

const ExperiencesPage = () => {
    return (
        <div className="container mx-auto p-6" id="Experiences">
            <Titele head="My Experiences" paragraph="Experiences in Completing Individual And Group Projects" />
            <Timeline data={EXPERIANCES} />
        </div>
    );
};

export default ExperiencesPage;
