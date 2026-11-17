import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
        { href: "#Home", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Projects", label: "Projects" },
        { href: "#Certificates", label: "Certificates" },
        { href: "#Activity", label: "Activities" },
    ];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");



    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section =>
                currentPosition >= section.offset &&
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            aria-label="Navigation principale"
            className={`fixed w-full  top-0 z-50 transition-all duration-500 bg-transparent`}
        >
            <div className="mx-auto    px-4 sm:px-6 lg:px-[10%] ">
                <div className={`flex items-center justify-between h-14 mt-4 border bg-muted/20! border-secondary/10 rounded-full px-5
                      ${isOpen
                        ? "bg-nav-surface opacity-100"
                        : "bg-secondary/6 backdrop-blur-xl"
                    }
                    `}>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className=" bg-gradient-to-r from-secondary to-primary  flex items-center justify-center rounded-full p-0.5"
                        >
                            <img
                                src="https://res.cloudinary.com/datjizbe8/image/upload/v1756574635/logo_tnlhz1.jpg"
                                alt="logo"
                                className="w-9 h-9 rounded-full "
                                loading="lazy"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block ">
                        <div className=" flex items-center space-x-8 ">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="group relative px-1 py-2 text-sm font-medium"
                                >
                                    <span
                                        className={`relative z-10 transition-colors duration-300 ${activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold"
                                            : "text-nav-foreground group-hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </a>
                            ))}

                        </div>
                    </div>
                    <a
                        href="/contact"
                        className={`font-semibold hidden md:block bg-secondary/50 text-muted-foreground hover:ring-2 ring-secondary py-2 rounded-full px-4 cursor-pointer duration-300 `}
                    >
                        Contact
                    </a>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`relative p-2 text-nav-foreground hover:text-white transition-transform duration-300 ease-in-out transform ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                                }`}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-navigation"
                aria-label="Navigation mobile"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`md:hidden h-3/4 fixed mt-4 w-full bg-nav-overlay transition-all duration-300 ease-in-out
                     ${isOpen ?
                        "opacity-100 translate-x-0"
                        :
                        "opacity-0 translate-x-[-100%] pointer-events-none"
                    }`}
                style={{ top: "64px" }}
            >
                <div className="flex flex-col h-full px-4 py-6 space-y-4 ">
                    <div className="space-y-4 flex-1 ">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`block px-4 py-3 text-lg font-medium border  border-secondary/50 text-secondary  backdrop-blur-xl rounded-md transition-all duration-300 ease ${activeSection === item.href.substring(1)
                                    ? "bg-secondary/10"
                                    : "text-nav-foreground hover:text-white"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                    transform: isOpen ? "translateX(0)" : "translateX(50px)",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>
                    <a
                        href="/contact"
                        className={`font-semibold  bg-secondary/50 text-muted-foreground hover:ring-2 ring-secondary py-4 flex items-center justify-center  rounded-full  cursor-pointer duration-300 `}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
