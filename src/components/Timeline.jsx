
const Timeline = ({ data = [] }) => {

    return (
        <div className=" py-16">
            <div className="relative max-w-5xl mx-auto">
                {/*line */}
                <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full  bg-gradient-to-b from-[#6366f1] to-[#a855f7]"></div>
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
                        <div className="w-full md:w-1/2 relative p-3  rounded-lg border border-[#a855f7]/50 text-[#a855f7] bg-[#a855f7]/10 transition-all duration-300 ease-in-out  cursor-pointer shadow-lg hover:shadow-xl">
                            {/* title*/}
                            <h3 className="text-[#6366f1] font-bold  mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                                <span className="py-0.5 px-2 mx-3 whitespace-nowrap rounded-lg text-xs bg-[#a855f7]/20 text-[#a855f7]/80">{item.date}</span>
                            </p>
                            {/* point*/}
                            <span
                                className={`hidden md:flex justify-center items-center absolute top-1/2 w-3 h-3   bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full transform -translate-y-1/2 ${item.side === "left"
                                    ? "-right-[23px]"
                                    : "-left-[23px]"
                                    }`}
                            >
                                <span
                                    className={`hidden animate-ping md:block  w-3 h-3   bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full `}
                                ></span>
                            </span>

                            {/* triangle*/}
                            <span
                                className={`hidden md:block absolute top-1/2 border-[10px] transform -translate-y-1/2 ${item.side === "left"
                                    ? "right-[-20px] border-y-transparent border-r-transparent border-l-[#a855f7]/50"
                                    : "left-[-20px] border-y-transparent border-l-transparent border-r-[#a855f7]/50"
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
                        <div className="w-full md:w-1/2 relative p-3  rounded-lg border border-[#a855f7]/50 text-[#a855f7] bg-[#a855f7]/10 transition-all duration-300 ease-in-out  cursor-pointer shadow-lg hover:shadow-xl">
 
                            <h3 className="text-[#6366f1] font-bold  mb-2">
                                {item.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                                <span className="py-0.5 px-2 mx-3 whitespace-nowrap rounded-lg text-xs bg-[#a855f7]/20 text-[#a855f7]/80">{item.date}</span>
                            </p>
                            <span
                                className={`md:hidden justify-center items-center absolute top-1/2 w-3 h-3   bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full transform -translate-y-1/2 -left-[23px] `}
                            >
                                <span
                                    className="md:hidden animate-ping w-3 h-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                                ></span>
                            </span>

                            <span
                                className={`md:hidden absolute top-1/2 border-[10px] transform -translate-y-1/2 left-[-20px] border-y-transparent border-l-transparent border-r-[#a855f7]/50`}
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
