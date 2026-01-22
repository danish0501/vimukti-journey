import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import storyImg from "@/assets/offering-2.jpg";

const OurStory = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the image section
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Stagger variants for text
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <section ref={ref} className="relative py-10 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-sage-50/50 rounded-full blur-[100px] opacity-60" />
                <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="zen-container relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        <div>
                            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                                <span className="h-[1px] w-12 bg-primary/60"></span>
                                <span className="text-sm font-semibold text-primary tracking-[0.2em] uppercase">
                                    Our Origin
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl lg:text-7xl font-serif font-medium text-foreground leading-[1.1]"
                            >
                                A Journey of <br />
                                <span className="italic text-primary relative inline-block">
                                    Healing
                                    <motion.svg
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="absolute -bottom-2 left-0 w-full h-3 text-primary/30 -z-10"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </motion.svg>
                                </span>
                            </motion.h2>
                        </div>

                        <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
                            <motion.p variants={itemVariants} className="pl-6 border-l-2 border-primary/20">
                                <span className="text-foreground font-normal text-xl float-left mr-1 mt-[-6px]">S</span>
                                achin Yelve <span className="text-foreground font-medium">( Dh. Sughosh)</span>,
                                is one of the most widely known and respected yoga teachers in India. He is practicing
                                Yoga three decade and teaching Yoga for over two decades. Sachin has been trained in the
                                Hatha Yogi Nikam Guruji , Yoga acharya Sadashiv Nimbalakar ’s Yog Vidya Niketan, and in
                                Swami Vivekanand yoga Anusandhan Bengaluru. He has a post graduate degree in Yoga therapy.
                                He has extensive experience teaching individual and group classes for private and corporate
                                clients in India.
                            </motion.p>

                            <motion.p variants={itemVariants}>
                                Through his experience he has acquired remarkable ability to assess his student’s capacities
                                and limitations. Sachin’s wisdom, his expertise and on-going study of Yoga and philosophy are
                                a core component of his unique approach. His teaching style is based on understanding of yoga
                                philosophy as a scientific approach to self-development and self-transformation. His style
                                reflects on his deep understanding of human anatomy and his ability as a yoga teacher to tailor
                                the practice sequence to meet his student’s needs. Sachin believes that positive attitude is
                                essential for practice, to overcome limitations and resistance, and integrate mind, body and
                                breath. He empowers his students to discover their hidden strengths and educates them on the
                                underlying philosophy of yoga practice. He inspires his students to incorporate the principles
                                of yoga in their everyday lives.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        style={{ y, opacity }}
                        className="relative lg:h-[800px] flex items-center justify-center"
                    >
                        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4]">
                            {/* Decorative Elements around image */}
                            <motion.div
                                className="absolute -top-12 -left-12 w-32 h-32 border border-primary/20 rounded-full z-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.div
                                className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage-100/50 rounded-full blur-3xl -z-10"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            {/* Main Image Container with 3D-like hover effect */}
                            <motion.div
                                className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-gray-100"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20 pointer-events-none" />
                                <img
                                    src={storyImg}
                                    alt="Yoga Practice at Vimukti"
                                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-[200px]"
                                >
                                    <p className="font-serif text-3xl text-primary mb-1">10+</p>
                                    <p className="text-xs uppercase tracking-wider text-gray-600 font-medium">Years of Experience</p>
                                </motion.div>
                            </motion.div>

                            {/* Organic Shape behind */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl -z-10"
                                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;
