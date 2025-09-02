import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Mail, MapPinCheckInside, Phone, Send } from "lucide-react";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);
    return (
        <>
            <div className="fixed inset-0">
                <div className="absolute -inset-[10px] opacity-40">
                    {/* <div className="absolute -top-30 -left-4 w-72 md:w-96 h-72 md:h-96 bg-orange-500 rounded-full  blur-3xl opacity-50 " /> */}
                    <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500 rounded-full   blur-3xl opacity-70 " />
                    <div className="absolute  bottom-0  w-72 md:w-96 h-72 md:h-96 bg-red-800  rounded-full  blur-3xl opacity-70 " />
                </div>
            </div>
            <>
                <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
                    <h2

                        className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                    >
                        <span
                            style={{
                                color: "#6366f1",
                                backgroundImage:
                                    "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Contactez Moi
                        </span>
                    </h2>
                    <p

                        className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
                    >
                        Vous avez une question ? Envoyez-moi un message, je vous répondrai rapidement.
                    </p>
                </div>

                <div
                    className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0"
                    id="Contact"
                >
                    <div className="bg-[#a855f7]/20 flex flex-col md:flex-row gap-6 container md:max-w-4xl lg:max-w-6xl backdrop-blur-xl rounded-lg shadow-2xl p-3 md:p-7 transform transition-all duration-300 hover:shadow-[#6366f1]/10" >
                        <div className="flex flex-col space-y-7 items-center md:items-start justify-between  w-full  md:w-1/2 ">
                            <h1 className="text-slate-300 text-lg md:text-3xl text-center md:text-start ">
                                Discutons ensemble de quelque chose de
                                <span className="text-[#a855f7] mx-1 uppercase font-bold text-3xl underline ">merveilleux</span>
                            </h1>

                            <div className="text-slate-400 space-y-4 text-sm ">
                                <span className="flex items-center gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><Mail className="text-[#a855f7]" />saidbzioui.contact@gmail.com</span>
                                <span className="flex items-center  gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><Phone className="text-[#a855f7]" />+212767366906</span>
                                <span className="flex items-center  gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><MapPinCheckInside className="text-[#a855f7]" /> La région de Rabat-Salé-Kénitra</span>
                            </div>
                            <div className="text-slate-400  text-sm flex space-x-6 mx-auto ">
                                <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50 "><Github className="text-[#a855f7]" /></span>
                                <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50 "><Linkedin className="text-[#a855f7]" /></span>
                                <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50  "><Mail className="text-[#a855f7]" /></span>
                            </div>
                        </div>
                        <form
                            action="https://formsubmit.co/ekizulfarrachman@gmail.com"
                            method="POST"
                            className="space-y-6 grow p-5 rounded-xl bg-gradient-to-br from-slate-900/40 to-slate-800/60 backdrop-blur-lg"
                        >
                            <div

                                className="relative group"
                            >

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-2 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                                    required
                                />
                            </div>
                            <div

                                className="relative group"
                            >

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                                    required
                                />
                            </div>
                            <div

                                className="relative group"
                            >

                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="w-full resize-none p-2 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9rem] disabled:opacity-50"
                                    required
                                />
                            </div>
                            <button

                                type="submit"
                                className="w-full flex items-center  justify-center gap-3  bg-[#a855f7]/10 cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-101 "
                            >
                                Send<Send size={19} /> 
                            </button>
                        </form>

                    </div>
                </div>
            </>
        </>
    )
}
export default Contact