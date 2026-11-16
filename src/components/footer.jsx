import { Github, Linkedin } from "./brand-icons";
import { Mail } from "lucide-react";
import SocialLink from "./SocialLinks";

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className="h-10 relative z-40" >
            <hr className="my-3 border-muted-foreground opacity-15 sm:mx-auto lg:my-6 text-center" />
            {/* Logo */}
            <div className="flex items-center justify-around  w-full h-full px-2 p-6 pt-3 md:mt-0">
                <a
                    href="#Home"
                    className=" bg-gradient-to-r from-secondary to-primary  flex items-center justify-center rounded-full p-0.5"
                >
                    <img
                        src="https://res.cloudinary.com/datjizbe8/image/upload/v1756574635/logo_tnlhz1.jpg"
                        alt="Profile"
                        className="w-7 h-7 rounded-full "
                        loading="lazy"
                    />
                </a>
                <span className="block text-sm  text-muted-foreground text-center ">
                    © {year}{" "}
                    S™
                </span>
                <div className="text-muted-foreground  text-sm flex space-x-0 md:space-x-6 ">
                    <SocialLink />
                </div>
            </div>

        </div>
    );
}

export default Footer;
