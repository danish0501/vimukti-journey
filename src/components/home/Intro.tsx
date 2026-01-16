import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import wellnessImg from "@/assets/wellness-1.jpg";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="zen-container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side - Image */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] w-full">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                            <motion.img
                                src={wellnessImg}
                                alt="Vimukti Yoga Center"
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7 }}
                            />
                        </div>
                        {/* Decorative element - Abstract Circle */}
                        <motion.div
                            className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 rounded-full border-2 border-primary/20"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute -z-10 -top-8 -right-8 w-40 h-40 rounded-full bg-sage-light/20 blur-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        />
                    </motion.div>

                    {/* Right Side - Information */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-8 text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground leading-tight"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            Pioneering <span className="text-primary italic">Holistic Wellness</span>
                        </motion.h2>

                        <motion.div
                            className="w-24 h-1.5 bg-gradient-to-r from-sage-light to-transparent rounded-full"
                            variants={{
                                hidden: { scaleX: 0, originX: 0 },
                                visible: { scaleX: 1, originX: 0, transition: { duration: 0.6 } }
                            }}
                        />

                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            For over a century (in spirit and lineage), we have remained committed to the cause of
                            spreading the authentic wisdom of Yoga to the world. <span className="text-foreground font-medium">Vimukti Yoga & Wellness Centre</span> stands
                            as a beacon of health, hope, and harmony, transforming millions of lives through our
                            pioneering techniques, scientific research, and compassionate care.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link to="/about">
                                <Button variant="zen" size="lg" className="rounded-full px-8 group transition-transform duration-300 hover:translate-x-2">
                                    Know More
                                    <motion.span
                                        className="inline-block ml-2"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                                    </motion.span>
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
