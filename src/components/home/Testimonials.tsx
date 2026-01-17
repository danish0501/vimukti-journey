import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
    {
        quote: "The Yoga Institute style of teaching at Vimukti is authentic and pure. It's not just physical exercise; it's a complete lifestyle change.",
        author: "Priya Sharma",
        role: "TTC Student",
        rating: 5,
        color: "bg-rose-100 text-rose-600",
    },
    {
        quote: "I came here for stress management, but I found a new way of living. The simple techniques are life-changing.",
        author: "Rahul Verma",
        role: "Corporate Professional",
        rating: 5,
        color: "bg-blue-100 text-blue-600",
    },
    {
        quote: "The personalized attention during therapy sessions helped me recover from my back pain completely.",
        author: "Anita Desai",
        role: "Therapy Patient",
        rating: 5,
        color: "bg-amber-100 text-amber-600",
    },
    {
        quote: "Vimukti's approach to mindfulness is grounded and practical. It has helped me find balance in my chaotic work life.",
        author: "Suresh Menon",
        role: "Entrepreneur",
        rating: 5,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        quote: "A sanctuary of peace in the middle of the city. The instructors are knowledgeable and deeply compassionate.",
        author: "Meera Iyer",
        role: "Yoga Practitioner",
        rating: 5,
        color: "bg-purple-100 text-purple-600",
    },
];

// --- Glow Card Component ---
const TestimonialCard = ({ item }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative h-full w-[280px] sm:w-[350px] md:w-[400px] flex-shrink-0 rounded-[2rem] border border-white/40 bg-white/40 p-8 shadow-sm backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
        >
            {/* Mouse Follow Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.8),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10 flex h-full flex-col">
                {/* Header: Quote Icon & Stars */}
                <div className="mb-6 flex items-start justify-between">
                    <div className="relative">
                        <div className="absolute -top-2 -left-2 h-8 w-8 bg-sage-100 rounded-full opacity-50 blur-lg" />
                        <Quote className="relative h-8 w-8 text-primary/40 rotate-180" />
                    </div>
                    <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                </div>

                {/* Quote Content */}
                <p className="flex-1 text-lg font-light italic leading-relaxed text-slate-700 mb-8">
                    "{item.quote}"
                </p>

                {/* Footer: Author Info */}
                <div className="mt-auto flex items-center gap-4 border-t border-slate-200/60 pt-6">
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.color} text-lg font-bold font-serif shadow-sm`}
                    >
                        {item.author[0]}
                    </motion.div>
                    <div>
                        <h4 className="font-serif text-lg font-medium text-slate-900">{item.author}</h4>
                        <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary/80">
                            {item.role} <Sparkles size={10} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Section ---
const Testimonials = () => {
    return (
        <section className="relative overflow-hidden py-12 md:py-20 bg-stone-50">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sage-200/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10">
                <div className="zen-container mb-16 px-6">
                    <SectionHeader
                        subtitle="Success Stories"
                        title="Voices of Transformation"
                        description="Hear from our students and participants who have experienced the life-changing power of authentic yoga."
                        className="text-center"
                    />
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Fade Gradients on Edges */}
                    <div className="absolute left-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-stone-50 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-stone-50 to-transparent pointer-events-none" />

                    {/* Infinite Moving Row */}
                    <div className="flex w-max">
                        <motion.div
                            className="flex gap-8 px-4"
                            animate={{ x: "-50%" }}
                            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                        >
                            {/* Duplicate the array to create seamless loop */}
                            {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                                <TestimonialCard key={`${item.author}-${index}`} item={item} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;