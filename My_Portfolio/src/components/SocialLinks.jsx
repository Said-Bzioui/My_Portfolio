import { Github, Linkedin, Mail } from "lucide-react";

const SocialLink = () => (
    <>
        {/* // GITHUB */}
        <a href="https://github.com/Said-Bzioui" target="_blank" rel="noopener noreferrer"
            className="group relative p-3 cursor-pointer">
            <div className="relative rounded-xl  border-[#a855f7]/50 text-[#a855f7] bg-[#a855f7]/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                <Github className="w-5 h-5 text-text-[#6366f1]    transition-colors" />
            </div>
        </a>
        {/* // LINKED in */}
        <a href="https://www.linkedin.com/in/said-bzioui/" target="_blank" rel="noopener noreferrer" 
        className="group relative p-3 cursor-pointer">
                <div className="relative rounded-xl  border-[#a855f7]/50 text-[#a855f7] bg-[#a855f7]/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-text-[#6366f1]    transition-colors" />
                </div>
        </a>
        {/* // Email */}
        <a href="mailto:saidbzioui.contact@gmail.com" 
        className="group relative p-3 cursor-pointer" >
                <div className="relative rounded-xl  border-[#a855f7]/50 text-[#a855f7] bg-[#a855f7]/10 backdrop-blur-xl p-2 flex items-center justify-center border   transition-all duration-300">
                    <Mail className="w-5 h-5 text-text-[#6366f1] transition-colors" />
                </div>
        </a>
    </>
);

export default SocialLink