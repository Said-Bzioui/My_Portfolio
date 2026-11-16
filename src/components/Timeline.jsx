const ExperienceProjects = ({ projects }) => {
    if (!projects?.length) return null;

    return (
        <ul className="mt-4 space-y-3 border-t border-secondary/20 pt-4">
            {projects.map((project) => (
                <li key={project.name} className="border-l-2 border-primary/40 pl-3 text-sm leading-relaxed">
                    <p className="font-medium text-foreground">{project.name}</p>
                    <p className="text-muted-foreground">{project.summary}</p>
                </li>
            ))}
        </ul>
    );
};

const Timeline = ({ data = [] }) => {

    return (
        <div className=" py-16">
            <div className="relative max-w-5xl mx-auto">
                {/*line */}
                <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full  bg-gradient-to-b from-primary to-secondary"></div>
                {/* desktop*/}
                {data.map((item, j) => (
                    <div
                        key={j}
                        className={`relative hidden md:flex ${item.side === "left"
                            ? "justify-center md:justify-start md:pr-8"
                            : "justify-center md:justify-end md:pl-8"
                            } mb-10`}
                        data-aos="zoom-in-up"
                        data-aos-duration="600"
                    >
                        <div className="w-full md:w-1/2 relative p-3  rounded-lg border border-secondary/50 text-secondary bg-secondary/10 transition-all duration-300 ease-in-out  cursor-pointer shadow-lg hover:shadow-xl">
                            {/* title*/}
                            <h3 className="text-primary font-bold  mb-2">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                                <span className="py-0.5 px-2 mx-3 whitespace-nowrap rounded-lg text-xs bg-secondary/20 text-secondary/80">{item.date}</span>
                            </p>
                            <ExperienceProjects projects={item.projects} />
                            {/* point*/}
                            <span
                                className={`hidden md:flex justify-center items-center absolute top-1/2 w-3 h-3   bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-y-1/2 ${item.side === "left"
                                    ? "-right-[23px]"
                                    : "-left-[23px]"
                                    }`}
                            >
                                <span
                                    className={`hidden animate-ping md:block  w-3 h-3   bg-gradient-to-r from-primary to-secondary rounded-full `}
                                ></span>
                            </span>

                            {/* triangle*/}
                            <span
                                className={`hidden md:block absolute top-1/2 border-[10px] transform -translate-y-1/2 ${item.side === "left"
                                    ? "right-[-20px] border-y-transparent border-r-transparent border-l-secondary/50"
                                    : "left-[-20px] border-y-transparent border-l-transparent border-r-secondary/50"
                                    }`}
                            ></span>
                        </div>
                    </div>
                ))}
                {/* mobile */}
                {data.map((item, j) => (
                    <div
                        key={j}
                        className={`relative md:hidden mb-10 pl-4`}
                        data-aos="zoom-in-up"
                        data-aos-duration="600"
                    >
                        <div className="w-full md:w-1/2 relative p-3  rounded-lg border border-secondary/50 text-secondary bg-secondary/10 transition-all duration-300 ease-in-out  cursor-pointer shadow-lg hover:shadow-xl">
 
                            <h3 className="text-primary font-bold  mb-2">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                                <span className="py-0.5 px-2 mx-3 whitespace-nowrap rounded-lg text-xs bg-secondary/20 text-secondary/80">{item.date}</span>
                            </p>
                            <ExperienceProjects projects={item.projects} />
                            <span
                                className={`md:hidden justify-center items-center absolute top-1/2 w-3 h-3   bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-y-1/2 -left-[23px] `}
                            >
                                <span
                                    className="md:hidden animate-ping w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"
                                ></span>
                            </span>

                            <span
                                className={`md:hidden absolute top-1/2 border-[10px] transform -translate-y-1/2 left-[-20px] border-y-transparent border-l-transparent border-r-secondary/50`}
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
