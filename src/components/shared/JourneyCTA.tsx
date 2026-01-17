import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Magnetic Button Component ---
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    to?: string;
    variant?: "primary" | "outline";
}

const MagneticButton = ({ children, className = "", onClick, to, variant = "primary" }: MagneticButtonProps) => {
    const ref = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for magnetic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center (magnetic pull strength)
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const Component = to ? Link : motion.button;

    return (
        <motion.div style={{ x: mouseX, y: mouseY }}>
            <Component
                to={to || ""}
                ref={ref}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className={`relative overflow-hidden group flex items-center justify-center gap-2 px-8 py-5 rounded-full text-lg font-medium transition-all duration-300 ${className}`}
            >
                {/* Shine Effect for Primary Button */}
                {variant === "primary" && (
                    <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
                )}

                {/* Hover Background Fill */}
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isHovered ? { scale: 1.5, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 rounded-full z-0 ${variant === "outline" ? "bg-primary" : "bg-white/20"}`}
                />

                <span className={`relative z-10 flex items-center gap-2 ${variant === "outline" ? "group-hover:text-white transition-colors duration-300" : ""}`}>
                    {children}
                </span>
            </Component>
        </motion.div>
    );
};

// --- Main CTA Section ---
const JourneyCTA = () => {
    return (
        <section className="relative py-12 md:py-20 overflow-hidden bg-sage-50 flex items-center justify-center min-h-[500px] md:min-h-[600px]">

            {/* 1. Background Grain Texture (Tactile Feel) */}
            <div className="absolute inset-0 opacity-[0.4] z-0 pointer-events-none"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/noise-lines.png')" }}
            />

            {/* 2. Pulsing Ripple Background */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                {[1, 2, 3].map((circle, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ width: "0%", height: "0%", opacity: 0.8 }}
                        animate={{
                            width: ["0%", "150%"],
                            height: ["0%", "150%"],
                            opacity: [0.8, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: idx * 2.5,
                            ease: "linear"
                        }}
                        className="absolute rounded-full border border-primary/10"
                    />
                ))}
                {/* Central Glow */}
                <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-sage-200 to-amber-100 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="zen-container relative z-10 text-center px-4">

                {/* Floating Icon */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="p-4 bg-white rounded-full shadow-lg border border-sage-100">
                        <Sparkles className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-serif font-medium text-slate-800 mb-6 tracking-tight"
                >
                    Ready to Begin <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sage-600">
                        Your Journey?
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Your path to holistic wellness starts with a single step. Connect with us to discover programs tailored to your body, mind, and spirit.
                </motion.p>

                {/* Magnetic Buttons Container */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <MagneticButton
                        to="/contact"
                        variant="primary"
                        className="bg-primary text-white shadow-xl shadow-primary/30 min-w-[220px]"
                    >
                        Schedule Consultation <ArrowRight className="w-5 h-5" />
                    </MagneticButton>
                </motion.div>

            </div>
        </section>
    );
};

export default JourneyCTA;
