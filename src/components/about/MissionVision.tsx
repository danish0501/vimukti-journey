import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Star, Leaf, Sun } from "lucide-react";

// --- 3D Tilt Card Component ---
const TiltCard = ({ item, index }: { item: any, index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Create a dynamic spotlight gradient that follows the mouse
    const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.4),
      transparent 80%
    )
  `;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="group relative border border-white/20 bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 overflow-hidden hover:shadow-2xl transition-shadow duration-500"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Mouse Spotlight Effect (Shine) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background }}
            />

            {/* 2. Animated Blob Background */}
            <div
                className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 transition-all duration-700 group-hover:scale-150 group-hover:opacity-30 ${item.bgClass}`}
            />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-500 ease-out">
                    <item.icon
                        className={`w-8 h-8 ${item.textClass} transition-colors duration-300`}
                        strokeWidth={1.5}
                    />
                </div>

                {/* Title with decorative line */}
                <div className="mb-4">
                    <h3 className="text-3xl font-serif text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                    </h3>
                    <div className={`h-1 w-12 rounded-full ${item.bgClass} opacity-60 group-hover:w-full transition-all duration-700 ease-in-out`} />
                </div>

                {/* Description */}
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                    {item.desc}
                </p>

                {/* Bottom Number/Index (Decorative) */}
                <div className="mt-auto pt-8 flex justify-end">
                    <span className="text-6xl font-serif font-bold text-slate-100 group-hover:text-slate-200/80 transition-colors duration-500 select-none">
                        0{index + 1}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const MissionVision = () => {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden bg-slate-50">
            {/* Background Texture/Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            {/* Soft gradient orb in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="zen-container relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Core Values</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-900">The Heart of Vimukti</h2>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {[
                        {
                            icon: Star,
                            title: "Our Mission",
                            desc: "To empower individuals to achieve diverse health goals through integrated yoga therapy, naturopathy, and mindfulness coaching, tailored to modern lifestyles.",
                            bgClass: "bg-blue-400",
                            textClass: "text-blue-500",
                        },
                        {
                            icon: Leaf,
                            title: "Our Vision",
                            desc: "To be a beacon of holistic health, fostering a community where ancient wisdom meets modern well-being for a disease-free, stress-free life.",
                            bgClass: "bg-emerald-500",
                            textClass: "text-emerald-600",
                        },
                        {
                            icon: Sun,
                            title: "Our Philosophy",
                            desc: "We believe in the innate intelligence of the body. By aligning with nature's rhythms and practicing conscious living, true healing naturally unfolds.",
                            bgClass: "bg-amber-400",
                            textClass: "text-amber-500",
                        },
                    ].map((item, idx) => (
                        <TiltCard key={idx} item={item} index={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
