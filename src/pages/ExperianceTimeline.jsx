
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";
import { EXPERIANCES } from "../../lib/data";

const ExperiencesPage = () => {
    return (
        <div className="container mx-auto p-6" id="Experiences">
            <Titele head="Mes expériences" paragraph="Mes postes et stages en développement web." />
            <Timeline data={EXPERIANCES} />
        </div>
    );
};

export default ExperiencesPage;
