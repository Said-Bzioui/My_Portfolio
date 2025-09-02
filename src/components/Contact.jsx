import AOS from "aos";
import "aos/dist/aos.css";
import { Ban, CheckCircle, Github, Linkedin, Mail, MapPinCheckInside, MessageSquare, Phone, Send, User, X } from "lucide-react";
import { useEffect, useState } from "react"; import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});



const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const [open, setOpen] = useState(false); // success popup
    const [errorOpen, setErrorOpen] = useState(false); // error popup


    useEffect(() => {
        AOS.init({
            once: false,
        });
    }, []);




    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("message", data.message);
            formData.append("_captcha", "false");
            formData.append("_subject", "message jdid wslk mn Portfolio");
            formData.append("_next", "https://saidbzioui.vercel.app/contact");
            await axios.post("https://formsubmit.co/saidbzioui.contact@gmail.com", formData);
            setOpen(true); // success popup
            reset(); // reset form
        } catch (e) {
            console.log(e)
            setErrorOpen(true); // error popup
        }
    };

    return (
        <div className="relative " >
            <div className="fixed inset-0">
                <div className="absolute -inset-[10px] opacity-40">
                    <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-indigo-500 rounded-full   blur-3xl opacity-70 " />
                    <div className="absolute  -bottom-10 -left-10  w-72 md:w-96 h-72 md:h-96 bg-red-800  rounded-full  blur-3xl opacity-50 " />
                </div>

            </div>
            <div className="text-center lg:mt-[2%] mt-6 mb-2 sm:px-0 px-[5%]">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="100"
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
                    data-aos="fade-up"
                    data-aos-delay="200"
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
                    <div
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="flex flex-col  space-y-7 items-center md:items-start justify-between  w-full  md:w-1/2 ">
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="text-slate-300 text-lg md:text-3xl text-center md:text-start ">
                            Discutons ensemble de quelque chose de
                            <span className="text-[#a855f7] mx-1 uppercase font-bold text-3xl underline ">merveilleux</span>
                        </h1>

                        <div className="text-slate-400 space-y-4 text-sm ">
                            <span
                                data-aos="fade-up"
                                data-aos-delay="600"
                                className="flex items-center gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><Mail className="text-[#a855f7]" />saidbzioui.contact@gmail.com</span>
                            <span
                                data-aos="fade-up"
                                data-aos-delay="650"
                                className="flex items-center  gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><Phone className="text-[#a855f7]" />+212767366906</span>
                            <span
                                data-aos="fade-up"
                                data-aos-delay="700"
                                className="flex items-center  gap-2 py-2 w-fit px-4 bg-[#a855f7]/10 rounded-full  "><MapPinCheckInside className="text-[#a855f7]" /> La région de Rabat-Salé-Kénitra</span>
                        </div>
                        <div
                            className="text-slate-400  text-sm flex space-x-6 mx-auto ">
                            <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50 "><Github className="text-[#a855f7]" /></span>
                            <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50 "><Linkedin className="text-[#a855f7]" /></span>
                            <span className="flex items-center gap-2 py-2  px-2 bg-[#a855f7]/10 rounded-full border border-[#a855f7]/50  "><Mail className="text-[#a855f7]" /></span>
                        </div>
                    </div>
                    <form
                        data-aos="fade-left"
                        data-aos-delay="400"
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 grow p-5 rounded-xl bg-gradient-to-br from-slate-900/40 to-slate-800/60 backdrop-blur-lg"
                    >
                        <input type="text" name="_honey" style={{ display: "none" }} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="Nouveau message du Portfolio" />
                        <input type="hidden" name="_next" value="https://saidbzioui.vercel.app/contact" />
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="relative group">
                            <User className="absolute left-4 top-2 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <input
                                type="text"
                                name="name"
                                {...register("name")}
                                placeholder="Your Name"
                                className={`w-full p-2 pl-12 bg-white/10 rounded-xl border ${errors.message ? "border-red-500" : "border-white/20 hover:border-[#6366f1]/30"} placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300  disabled:opacity-50`}

                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="relative group"
                        >
                            <Mail className="absolute left-4 top-2 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />

                            <input
                                type="email"
                                name="email"
                                {...register("email")}
                                placeholder="Your Email"
                                className={`w-full p-2 pl-12 bg-white/10 rounded-xl border  placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300  disabled:opacity-50 ${errors.message ? "border-red-500" : "border-white/20 hover:border-[#6366f1]/30"}`}

                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className="relative group"
                        >
                            <MessageSquare className="absolute left-4 top-2 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                            <textarea
                                name="message"
                                {...register("message")}
                                placeholder="Your Message"
                                className={`w-full resize-none p-2 pl-12 bg-white/10 rounded-xl border ${errors.message ? "border-red-500" : "border-white/20 hover:border-[#6366f1]/30"}  placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300  h-[9rem] disabled:opacity-50`}

                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center  justify-center gap-3  bg-[#a855f7]/10 cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-101 "
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>
                    </form>

                </div>
            </div>
            {/*  Success popup */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300"
                    />
                    <div
                        className="fixed left-1/2 top-1/2 p-5 z-50 w-[90%] md:w-full  max-w-md -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-300 bg-gradient-to-r
                            from-green-950/50 to-emerald-950/30
                            border border-green-800 rounded-2xl shadow-2xl">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 rounded-lg p-1.5  text-green-400 hover:text-green-300 hover:bg-green-900/50 transition-colors"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Fermer</span>
                        </button>
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-green-900/50 p-3">
                                <CheckCircle className="h-8 w-8 text-green-400" />
                            </div>
                        </div>
                        <div className="text-center space-y-3">
                            <h3 className="text-lg font-semibold text-green-100">Réussi</h3>
                            <p className="text-sm text-green-200 leading-relaxed">Le message a été envoyé avec succès.</p>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-6 py-2.5 cursor-pointer   text-white font-medium rounded-lg
                                    transition-colors duration-200 focus:outline-none ring-green-600  focus:ring-1  focus:ring-offset-1
                                    bg-green-700 hover:bg-green-600"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </>
            )}
            {errorOpen && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300"
                    />
                    <div
                        className="fixed left-1/2 top-1/2 p-5 z-50 w-[90%] md:w-full max-w-md -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 duration-300 bg-gradient-to-r
                            from-red-950/50 to-red-400/30
                            border border-red-800 rounded-2xl shadow-2xl">
                        <button
                            onClick={() => setErrorOpen(false)}
                            className="absolute top-4 rounded-lg p-1.5  text-red-400 hover:text-red-300 hover:bg-red-900/50 transition-colors"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Fermer</span>
                        </button>
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-red-900/50 p-3">
                                <Ban className="h-8 w-8 text-red-400" />
                            </div>
                        </div>
                        <div className="text-center space-y-3">
                            <h3 className="text-lg font-semibold text-red-100">Échec</h3>
                            <p className="text-sm text-red-200 leading-relaxed">Le message n’a pas été envoyé.</p>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setErrorOpen(false)}
                                className="px-6 py-2.5 cursor-pointer   text-white font-medium rounded-lg
                                    transition-colors duration-200 focus:outline-none ring-red-600  focus:ring-1  focus:ring-offset-1
                                    bg-red-700 hover:bg-red-600"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div >
    )
}
export default Contact