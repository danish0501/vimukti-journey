import React from "react";
import { motion } from "framer-motion";
import { Boxes, HeartPulse, Brain, CheckCircle2 } from "lucide-react";

const approachItems = [
    {
        icon: Boxes,
        title: "Props",
        description: "Props are items that assist new practitioners in maintaining yoga posture. These props make Yoga much more effective.",
        color: "text-teal-600",
        bgColor: "bg-teal-50",
    },
    {
        icon: HeartPulse,
        title: "Therapeutic Yoga",
        description: "In modern times, Therapeutic Yoga proves highly beneficial. It improves flexibility and develops a good mind-muscle connection.",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
    },
    {
        icon: Brain,
        title: "Hatha Yoga",
        description: "Hatha Yoga Approach helps in the mobility of the Joints. Hatha Yoga has benefits for your brain as well as your body. For the brain, it increases your focus and concentration. It even improves your metabolism and energy level.",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
    },
];

const Approach = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50/50 rounded-bl-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 rounded-tr-full blur-3xl pointer-events-none -z-10" />

            <div className="zen-container px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-teal-900 mb-6 leading-tight">
                            Yoga in Nerul - <span className="italic">Our Effective Approach</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            To get the full benefit of Yoga, an effective approach with proper guidance is required.
                            For clearer understanding and posture balance, our Yoga Center in Jaipur uses props.
                            Our Approach includes:
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {approachItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 group"
                        >
                            <div className={`w-16 h-16 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-slate-800 mb-4 group-hover:text-teal-700 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 p-8 bg-teal-900 text-white rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-teal-900/20"
                >
                    <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-serif mb-2">Integrated Learning</h4>
                        <p className="text-teal-50/80">
                            In our Yoga Classes in Nerul, students are taught Hatha Yoga along with Therapeutic Yoga for a truly holistic transformation.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20">
                            <CheckCircle2 size={16} />
                            <span>Personalized Care</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20">
                            <CheckCircle2 size={16} />
                            <span>Expert Guidance</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;
