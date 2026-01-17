import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@/assets/gallery-19.jpg";
import img2 from "@/assets/blog-1.jpg";
import img3 from "@/assets/gallery-03.jpg";
import img4 from "@/assets/gallery-04.jpg";
import img6 from "@/assets/gallery-12.jpg";

const galleryImages = [
    { id: 1, src: img1, title: "Morning Flow", category: "Yoga" },
    { id: 2, src: img2, title: "Studio Ambience", category: "Space" },
    { id: 3, src: img3, title: "Deep Meditation", category: "Mindfulness" },
    { id: 4, src: img4, title: "Therapy Session", category: "Healing" },
    { id: 5, src: img6, title: "Green Sanctuary", category: "Outdoors" },
];

const HomeGallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-12 md:py-20 bg-white relative overflow-hidden">
            <div className="zen-container px-6">

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
                            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Visual Journey</span>
                        </div>

                        <p className="text-slate-700 text-2xl italic text-primary">A glimpse into the daily moments of peace, <br/>practice, and community at our center.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/gallery">
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full border-slate-300 text-slate-700 hover:border-primary hover:text-primary hover:bg-white text-base shadow-sm transition-all duration-300"
                            >
                                View Full Gallery
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 h-[600px] md:h-[500px]">
                    {/* Large Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 relative group rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <img src={img1} alt="Yoga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1">Yoga</p>
                            <h3 className="font-serif text-2xl">Morning Flow</h3>
                        </div>
                    </motion.div>

                    {/* Smaller Images */}
                    {galleryImages.slice(1).map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group rounded-2xl overflow-hidden cursor-pointer ${index === 0 || index === 3 ? "col-span-1 lg:col-span-2" : "col-span-1"}`}
                        >
                            <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Button (Visible only on small screens) */}
                <div className="mt-10 text-center md:hidden">
                    <Link to="/gallery">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 shadow-md">
                            View All Moments
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default HomeGallery;
