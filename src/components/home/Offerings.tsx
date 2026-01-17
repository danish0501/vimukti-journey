import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sun, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import serv1 from "@/assets/wellness-1.jpg";
import serv2 from "@/assets/wellness-2.jpg";
import serv3 from "@/assets/wellness-3.jpg";

// --- Data ---
const services = [
    {
        icon: UserCheck,
        title: "Personal Yoga",
        desc: "Customized one-on-one sessions tailored to your specific health goals and physical capabilities.",
        link: "/services/personal",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        image: serv1,
    },
    {
        icon: Heart,
        title: "Yoga Therapy",
        desc: "Therapeutic interventions for managing chronic ailments and promoting holistic healing.",
        link: "/services/therapy",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        image: serv2,
    },
    {
        icon: Sun,
        title: "Naturopathy",
        desc: "Natural healing treatments using the five elements of nature to restore body balance.",
        link: "/services/naturopathy",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        image: serv3,
    },
];

// --- 3D Card Component ---
const ServiceCard = ({ item, index }) => {
    const ref = useRef(null);

    // Motion Values for Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for tilt
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

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Dynamic sheen gradient based on mouse position
    const sheenGradient = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.2),
    transparent 80%
  )`;

    return (
        <motion.div
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative h-full rounded-[2rem] bg-white border border-white/60 shadow-xl shadow-sage-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500"
        >
            {/* Sheen Effect */}
            <motion.div
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50"
                style={{ background: sheenGradient }}
            />

            <div style={{ transform: "translateZ(20px)" }} className="h-full flex flex-col overflow-hidden rounded-[2rem]">

                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Floating Icon Badge */}
                    <div
                        className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <item.icon className={`h-7 w-7 ${item.color}`} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow bg-white relative">
                    {/* Decorative background blob in card */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${item.bgColor} rounded-bl-[4rem] opacity-30 pointer-events-none transition-transform duration-700 group-hover:scale-150`} />

                    <h3 className="text-2xl font-serif text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300 transform translate-z-10">
                        {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                        {item.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Section ---
const Offerings = () => {
    return (
        <section className="py-12 md:py-20 bg-stone-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }} />

            {/* Soft Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 via-sage-100/30 to-white/0 pointer-events-none" />

            <div className="zen-container relative z-10 px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Expertise</span>
                        </div>

                        <h2 className="text-3xl md:text-6xl font-serif text-slate-900 leading-[1.1]">
                            Holistic Services for <br />
                            <span className="italic text-primary relative inline-block">
                                Complete Well-being
                                {/* Subtle SVG Underline */}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/services">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full border-slate-300 text-slate-700 hover:border-primary hover:text-primary hover:bg-white text-base shadow-sm transition-all duration-300"
                            >
                                View All Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* 3D Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
                    {services.map((item, index) => (
                        <div key={item.title} className="h-full">
                            <ServiceCard item={item} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;