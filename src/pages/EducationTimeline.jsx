// pages/About.jsx
import { Phone, Sparkles } from "lucide-react";
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";
import { EDUCATIONS } from "../../lib/data";

const EducationsPage = () => {
    return (
        <div className="container mx-auto p-6" id="Educations">
            <Titele head="My Educations" paragraph="My Educational Journey To Develop My Coding Skills" />
            <Timeline data={EDUCATIONS} />
        </div>
    );
};

export default EducationsPage;
