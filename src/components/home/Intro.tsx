import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import wellnessImg from "@/assets/intro-1.jpeg";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

// --- 3D Tilt Image Component ---
const TiltImage = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none" style={{ transform: "translateZ(20px)" }} />

            <motion.img
                src={wellnessImg}
                alt="Vimukti Yoga Center"
                className="w-full h-full object-cover"
                style={{ transform: "translateZ(0px) scale(1.05)" }}
            />

            {/* Floating Badge */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 z-20 flex items-center gap-3"
                style={{ transform: "translateZ(30px)" }}
            >
                <div className="bg-sage-100 p-2 rounded-full text-primary">
                    <Sparkles size={20} />
                </div>
                <div>
                    <p className="font-serif text-lg font-medium text-primary">Est. 2015</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">A Legacy of Healing</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Main Component ---
const Intro = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="py-12 md:py-20 bg-background overflow-hidden relative">
            {/* 1. Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-sage-100/40 rounded-full blur-[120px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply"
                />
            </div>

            <div className="zen-container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side - 3D Tilt Image */}
                    <div className="w-full lg:w-1/2 perspective-1000">
                        <TiltImage />
                    </div>

                    {/* Right Side - Staggered Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-10 text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                    >
                        <div>
                            <motion.div
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-6"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Legacy</span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl md:text-5xl lg:text-7xl font-serif font-medium text-foreground leading-[1.1]"
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            >
                                Pioneering <br />
                                <span className="relative inline-block text-primary italic">
                                    Holistic Wellness
                                    {/* Underline SVG Animation */}
                                    <motion.svg
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                                        className="absolute -bottom-2 left-0 w-full h-4 text-primary/30"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                                    </motion.svg>
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        >
                            For over a century (in spirit and lineage), we have remained committed to the cause of
                            spreading the authentic wisdom of Yoga. <span className="text-foreground font-medium">Vimukti Yoga & Wellness Centre</span> stands
                            as a beacon of health, hope, and harmony, transforming millions of lives through our
                            pioneering techniques, scientific research, and compassionate care.
                        </motion.p>

                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            <Link to="/about">
                                <Button
                                    size="xl"
                                    className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 group"
                                >
                                    Discover Our Story
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;