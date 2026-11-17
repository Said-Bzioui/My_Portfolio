import { Github, Linkedin } from "./brand-icons";
import { Mail } from "lucide-react";

const SocialLink = () => (
    <>
        {/* // GITHUB */}
        <a href="https://github.com/Said-Bzioui" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Said Bzioui"
            className="group relative p-3 cursor-pointer">
            <div className="relative rounded-xl  border-secondary/50 text-secondary bg-secondary/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                <Github className="w-5 h-5 text-primary    transition-colors" />
            </div>
        </a>
        {/* // LINKED in */}
        <a href="https://www.linkedin.com/in/said-bzioui/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Said Bzioui"
        className="group relative p-3 cursor-pointer">
                <div className="relative rounded-xl  border-secondary/50 text-secondary bg-secondary/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-primary    transition-colors" />
                </div>
        </a>
        {/* // Email */}
        <a href="mailto:saidbzioui.contact@gmail.com" aria-label="Envoyer un e-mail à Said Bzioui"
        className="group relative p-3 cursor-pointer" >
                <div className="relative rounded-xl  border-secondary/50 text-secondary bg-secondary/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                    <Mail className="w-5 h-5 text-primary transition-colors" />
                </div>
        </a>
    </>
);

export default SocialLink
