import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

// Importing images directly
import img1 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.22 PM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.23 PM (1).jpeg";
import img3 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.23 PM.jpeg";
import img4 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.24 PM.jpeg";
import img5 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.25 PM.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.26 PM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.26 PM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.42 PM (1).jpeg";
import img9 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.42 PM (2).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.42 PM.jpeg";
import img11 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.43 PM (1).jpeg";
import img12 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.43 PM (2).jpeg";
import img13 from "@/assets/WhatsApp Image 2026-01-13 at 1.51.43 PM.jpeg";
import img14 from "@/assets/WhatsApp Image 2026-01-13 at 2.15.41 PM (1).jpeg";
import img15 from "@/assets/WhatsApp Image 2026-01-13 at 2.15.41 PM.jpeg";

const galleryImages = [
    { src: img1, title: "Morning Yoga Session", category: "Classes" },
    { src: img2, title: "Our Serene Studio", category: "Facilities" },
    { src: img3, title: "Group Meditation", category: "Retreats" },
    { src: img4, title: "Holistic Healing", category: "Therapy" },
    { src: img5, title: "Yoga Asanas", category: "Classes" },
    { src: img6, title: "Peaceful Environment", category: "Facilities" },
    { src: img7, title: "Practicing Mindfulness", category: "Retreats" },
    { src: img8, title: "Student Workshop", category: "Events" },
    { src: img9, title: "Advanced Techniques", category: "Training" },
    { src: img10, title: "Connecting with Nature", category: "Outdoors" },
    { src: img11, title: "Therapeutic Care", category: "Therapy" },
    { src: img12, title: "Community Gathering", category: "Events" },
    { src: img13, title: "Focused Practice", category: "Classes" },
    { src: img14, title: "Guiding Light", category: "Philosophy" },
    { src: img15, title: "Wellness Journey", category: "Lifestyle" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="zen-container">
                <SectionHeader
                    subtitle="Our Gallery"
                    title="Moments of Mindfulness"
                    description="A visual journey through our center, events, and the transformative experiences of our community."
                />

                <motion.div
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pt-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative group break-inside-avoid rounded-2xl overflow-hidden shadow-md cursor-pointer bg-muted"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-80" />
                                    <h3 className="text-white font-serif text-lg font-medium">{image.title}</h3>
                                    <p className="text-white/80 text-xs uppercase tracking-wider mt-1">{image.category}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white/80 hover:text-white hover:scale-110 transition-all p-2 rounded-full bg-white/10"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Gallery Preview"
                                className="w-full h-full object-contain max-h-[85vh] rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
