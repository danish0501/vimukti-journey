import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Award } from "lucide-react";

// --- Single Card Component ---
const ValueCard = ({ value, index }: { value: any, index: number }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="group relative h-full bg-white rounded-[2rem] p-8 overflow-hidden border border-sage-100 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* 1. Morphing Background Shape (Expands on Hover) */}
            <div
                className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br ${value.gradient} blur-2xl group-hover:scale-[3] group-hover:opacity-20 transition-transform duration-700 ease-in-out`}
            />

            {/* 2. Top Accent Line */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 bg-gradient-to-r ${value.gradient} transition-all duration-500 rounded-b-full`} />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* Icon Container with "Breathing" Ring */}
                <div className="relative mb-6">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-tr ${value.gradient} blur-md opacity-30`}
                    />
                    <div className="relative w-20 h-20 rounded-full bg-sage-50/50 flex items-center justify-center border border-white shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <value.icon className={`h-8 w-8 ${value.iconColor} transition-colors duration-300`} strokeWidth={1.5} />
                    </div>
                </div>

                <h3 className="font-serif font-medium text-foreground text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed font-light">
                    {value.description}
                </p>
            </div>
        </motion.div>
    );
};

const OurValues = () => {
    const values = [
        {
            icon: Heart,
            title: "Compassion",
            description: "Every interaction is infused with genuine care and understanding, creating a safe space for vulnerability.",
            gradient: "from-pink-400 to-rose-400",
            iconColor: "text-pink-500"
        },
        {
            icon: BookOpen,
            title: "Authenticity",
            description: "We honor traditional teachings while adapting them for modern life, ensuring our practice remains true to its roots.",
            gradient: "from-amber-400 to-orange-400",
            iconColor: "text-amber-600"
        },
        {
            icon: Users,
            title: "Community",
            description: "We foster a supportive environment where everyone belongs, growing together in wellness and spirit.",
            gradient: "from-emerald-400 to-teal-400",
            iconColor: "text-emerald-600"
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We continuously pursue the highest standards in all we do, from our facilities to our teaching methodology.",
            gradient: "from-blue-400 to-indigo-400",
            iconColor: "text-blue-600"
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-stone-50 relative overflow-hidden">
            {/* Background Texture - adds 'extraordinary' polish */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />

            {/* Subtle connecting line in background */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent hidden lg:block" />

            <div className="zen-container relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 block">Our Ethos</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-800 mb-6">What Guides Us</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto rounded-full" />
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {values.map((value, index) => (
                        <ValueCard key={value.title} value={value} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurValues;
