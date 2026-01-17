import { useState, useRef } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { Award, Sparkles, Quote, X, GraduationCap, Briefcase, Heart, Phone, Mail, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Founder Data ---
const founderData = {
    personal: {
        name: "Sachin Yelve",
        titles: "Yoga Expert, Yoga & Naturotherapist, Mindfulness Coach",
        role: "Founder, Vimukti Yoga & Wellness Center",
        phone: "771 002 1009",
        email: "vimuktiyoga2015@gmail.com",
        location: "Nerul, Navi Mumbai - 400706"
    },
    education: [
        { year: "July 2021", degree: "Certified Mindfulness Coach", inst: "Happitude Mumbai" },
        { year: "Jan 2021", degree: "Master of Science (Yoga)", inst: "SVYASA - Yoga University Bangaluru" },
        { year: "2017-2018", degree: "Diploma in Buddhist Studies & Vipassana", inst: "Mumbai University" },
        { year: "March 2017", degree: "Yoga Instructor Course", inst: "SVYASA - Bangaluru" },
        { year: "Aug 2016", degree: "Diploma in Yoga Therapy & Naturopathy", inst: "Yoga Vidhya Niketan, Mumbai" },
        { year: "Aug 2015", degree: "Diploma in Yoga Teacher Training", inst: "Yoga Vidhya Niketan, Mumbai" },
        { year: "Nov 2014", degree: "Bachelor of Commerce", inst: "Mumbai University" }
    ],
    skills: [
        "Hatha Yoga", "Yoga Therapy", "Naturopathy", "Meditation",
        "Adv. Healing Meditation", "Power Yoga", "Mindfulness",
        "Stress Management", "Breathing Techniques", "Creativity",
        "Communication", "Time Management"
    ],
    experience: [
        {
            role: "Yoga Teacher & Naturotherapist",
            place: "Vimukti Yoga And Wellness Center",
            period: "Sept 2015 - Present",
            details: [
                "Promote holistic well-being through teaching and consultation",
                "Designed integrated Yoga plans for beginner to advanced students",
                "Helped students develop body/mind awareness and strength",
                "Lead Group Yoga and Meditation sessions",
                "Conduct Mindfulness in Action courses",
                "Resolve doubts regarding physical and spiritual practice"
            ]
        },
        {
            role: "Support Yoga Teacher (TTC)",
            place: "Yoga Vidya Niketan, Navi Mumbai",
            period: "Aug 2016 - 2018",
            details: ["Assisted in training future yoga teachers"]
        }
    ]
};

const FounderSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("experience"); 

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="py-24 md:py-32 bg-stone-50 relative overflow-hidden" ref={ref}>
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="zen-container relative z-10 px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm block mb-3">Visionary Leadership</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-800 mb-4">Meet the Founder</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-60" />
                </motion.div>

                {/* Main Card */}
                <div className="flex justify-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative max-w-5xl w-full bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-white/50 shadow-2xl overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-sage-50 opacity-50" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center md:items-start">
                            {/* Profile Image */}
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-4 border border-dashed border-primary/30 rounded-full"
                                />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                                    animate={isInView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
                                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                                    className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-sage-100 to-amber-50 flex items-center justify-center shadow-2xl relative overflow-hidden ring-4 ring-white"
                                >
                                    <span className="text-6xl font-serif text-primary/40 font-bold z-10">SY</span>
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    className="absolute bottom-0 right-4 bg-white p-3 rounded-2xl shadow-lg border border-sage-100"
                                >
                                    <Award className="w-6 h-6 text-primary" />
                                </motion.div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-8 flex-1 text-center md:text-left">
                                <motion.div variants={itemVariants}>
                                    <h3 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">{founderData.personal.name}</h3>
                                    <p className="text-lg font-medium text-primary uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                                        Founder & Lead Consultant <Sparkles className="w-4 h-4" />
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="relative bg-white/60 p-6 rounded-2xl border border-white shadow-sm">
                                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/40 bg-white rounded-full p-1" />
                                    <p className="text-slate-600 leading-relaxed font-light text-lg italic">
                                        "True healing is not just about curing the body, but liberating the mind. My mission is to combine the ancient wisdom of Hatha Yoga with modern Naturopathy."
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="pt-2 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                                    <Button
                                        onClick={() => setIsModalOpen(true)}
                                        size="lg"
                                        className="rounded-full px-8 h-14 text-lg bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                                    >
                                        View Full Profile
                                        <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- PREMIUM MODAL OVERLAY --- */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0, rotateX: 10 }}
                            animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0, rotateX: 10 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 z-20 p-2 bg-white/50 hover:bg-white rounded-full border border-slate-200 transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-800" />
                            </button>

                            {/* Left Panel: Bio & Contact */}
                            <div className="w-full md:w-1/3 bg-slate-50 p-8 md:p-12 border-r border-slate-100 overflow-y-auto">
                                <div className="text-center md:text-left space-y-6">
                                    <div className="w-32 h-32 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-primary/20 to-sage-100 flex items-center justify-center text-4xl font-serif font-bold text-primary mb-6 ring-4 ring-white shadow-lg">
                                        SY
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl text-slate-900 mb-2">{founderData.personal.name}</h3>
                                        <p className="text-primary font-medium text-sm uppercase tracking-wide">{founderData.personal.titles}</p>
                                    </div>

                                    <div className="space-y-4 pt-6 border-t border-slate-200">
                                        <h4 className="font-serif text-lg text-slate-700">Contact Details</h4>
                                        <div className="space-y-3 text-sm text-slate-600">
                                            <div className="flex items-center gap-3">
                                                <Phone className="w-4 h-4 text-primary" /> {founderData.personal.phone}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Mail className="w-4 h-4 text-primary" /> {founderData.personal.email}
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-4 h-4 text-primary mt-1" /> {founderData.personal.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <h4 className="font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-primary" /> Free Sessions
                                        </h4>
                                        <ul className="text-xs space-y-2 text-slate-600">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" />Every Sunday: Yoga & Meditation</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" />Youtube: Vimukti Yoga & Natural Life</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel: Tabs & Details */}
                            <div className="w-full md:w-2/3 p-8 md:p-12 bg-white overflow-y-auto custom-scrollbar">
                                {/* Tabs */}
                                <div className="flex flex-wrap gap-4 mb-10 pb-4 border-b border-slate-100">
                                    {[
                                        { id: "experience", label: "Experience", icon: Briefcase },
                                        { id: "education", label: "Education", icon: GraduationCap },
                                        { id: "skills", label: "Skills", icon: Heart },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                                ? "bg-slate-900 text-white shadow-lg scale-105"
                                                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                                }`}
                                        >
                                            <tab.icon className="w-4 h-4" /> {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-8"
                                    >
                                        {activeTab === "education" && (
                                            <div className="space-y-6">
                                                {founderData.education.map((edu, idx) => (
                                                    <div key={idx} className="flex gap-4 group">
                                                        <div className="flex flex-col items-center">
                                                            <div className="w-3 h-3 rounded-full bg-primary mt-2 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all" />
                                                            <div className="w-0.5 flex-1 bg-slate-100 my-1" />
                                                        </div>
                                                        <div className="pb-6">
                                                            <span className="text-xs font-bold text-primary px-2 py-1 bg-primary/10 rounded-md">{edu.year}</span>
                                                            <h4 className="text-lg font-serif font-medium text-slate-800 mt-2">{edu.degree}</h4>
                                                            <p className="text-slate-500 text-sm">{edu.inst}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === "skills" && (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {founderData.skills.map((skill, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="p-4 rounded-xl bg-slate-50 hover:bg-primary/5 border border-slate-100 hover:border-primary/20 transition-all group cursor-default"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                                                            <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">{skill}</span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === "experience" && (
                                            <div className="space-y-8">
                                                {founderData.experience.map((exp, idx) => (
                                                    <div key={idx} className="bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 hover:shadow-lg transition-shadow">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <h4 className="text-xl font-serif text-slate-800">{exp.role}</h4>
                                                                <p className="text-primary font-medium text-sm">{exp.place}</p>
                                                            </div>
                                                            <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-500 shadow-sm">{exp.period}</span>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {exp.details.map((detail, dIdx) => (
                                                                <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                                                    {detail}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FounderSection;
