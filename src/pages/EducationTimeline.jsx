
import Timeline from "../components/Timeline";
import { Titele } from "../components/Headings";
import { EDUCATIONS } from "../../lib/data";

const EducationsPage = () => {
    return (
        <div className="container mx-auto p-6" id="Educations">
            <Titele head="Mes Études" paragraph="Mon parcours éducatif pour développer mes compétences en codage" />
            <Timeline data={EDUCATIONS} />
        </div>
    );
};

export default EducationsPage;
