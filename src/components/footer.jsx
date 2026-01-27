import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "./SocialLinks";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="h-10 relative z-40" >
            <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
            {/* Logo */}
            <div className="flex items-center justify-around  w-full h-full px-2 p-6 pt-3 md:mt-0">
                <a
                    href="#Home"
                    className=" bg-gradient-to-r from-[#a855f7] to-[#6366f1]  flex items-center justify-center rounded-full p-0.5"
                >
                    <img
                        src="https://res.cloudinary.com/datjizbe8/image/upload/v1756574635/logo_tnlhz1.jpg"
                        alt="Profile"
                        className="w-7 h-7 rounded-full "
                        loading="lazy"
                    />
                </a>
                <span className="block text-sm  text-gray-500 text-center ">
                    © {year}{" "}
                    S™
                </span>
                <div className="text-slate-400  text-sm flex space-x-0 md:space-x-6 ">
                    <SocialLink />
                </div>
            </div>

        </div>
    );
}

export default Footer;
