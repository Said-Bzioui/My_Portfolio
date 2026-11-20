
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";
import { EXPERIANCES } from "../../lib/data";

const ExperiencesPage = () => {
    return (
        <div className="container mx-auto p-6" id="Experiences">
            <Titele head="Mes expériences" paragraph="Responsabilités, compétences et projets menés en développement logiciel." />
            <Timeline data={EXPERIANCES} />
        </div>
    );
};

export default ExperiencesPage;
