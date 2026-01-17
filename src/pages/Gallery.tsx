import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { X, ZoomIn, Instagram } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

import img1 from "@/assets/gallery-01.jpg";
import img2 from "@/assets/gallery-02.jpg";
import img3 from "@/assets/gallery-03.jpg";
import img4 from "@/assets/gallery-04.jpg";
import img5 from "@/assets/gallery-05.jpg";
import img6 from "@/assets/gallery-06.jpg";
import img7 from "@/assets/gallery-07.jpg";
import img8 from "@/assets/gallery-08.jpg";
import img9 from "@/assets/gallery-09.jpg";
import img10 from "@/assets/gallery-10.jpg";
import img11 from "@/assets/gallery-11.jpg";
import img12 from "@/assets/gallery-12.jpg";
import img13 from "@/assets/gallery-13.jpg";
import img14 from "@/assets/gallery-14.jpg";
import img15 from "@/assets/gallery-15.jpg";
import img16 from "@/assets/gallery-16.jpg";
import img17 from "@/assets/gallery-17.jpg";
import img18 from "@/assets/gallery-18.jpg";
import img19 from "@/assets/gallery-19.jpg";
import img20 from "@/assets/gallery-20.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import heroNew from "@/assets/hero-new.jpg";
import intro1 from "@/assets/intro-1.jpeg";
import offering1 from "@/assets/offering-1.jpg";
import offering2 from "@/assets/offering-2.jpg";
import offering3 from "@/assets/offering-3.jpg";
import wellness1 from "@/assets/wellness-1.jpg";
import wellness2 from "@/assets/wellness-2.jpg";
import wellness3 from "@/assets/wellness-3.jpg";

const galleryImages = [
    { id: 1, src: img1, title: "Morning Flow", category: "Yoga", size: "tall" },
    { id: 2, src: img2, title: "Studio Ambience", category: "Space", size: "wide" },
    { id: 3, src: img3, title: "Deep Meditation", category: "Mindfulness", size: "square" },
    { id: 4, src: img4, title: "Therapy Session", category: "Healing", size: "square" },
    { id: 5, src: img5, title: "Advanced Asana", category: "Yoga", size: "big" },
    { id: 6, src: img6, title: "Green Sanctuary", category: "Outdoors", size: "tall" },
    { id: 7, src: img7, title: "Community Circle", category: "Events", size: "wide" },
    { id: 8, src: img8, title: "Sound Healing", category: "Workshop", size: "square" },
    { id: 9, src: img9, title: "Teacher Training", category: "Education", size: "wide" },
    { id: 10, src: img10, title: "Sunset Practice", category: "Outdoors", size: "tall" },
    { id: 11, src: img11, title: "Alignment Focus", category: "Yoga", size: "square" },
    { id: 12, src: img12, title: "Wellness Retreat", category: "Travel", size: "big" },
    { id: 13, src: img13, title: "Pranayama", category: "Breathwork", size: "square" },
    { id: 14, src: img14, title: "Mindful Walk", category: "Nature", size: "wide" },
    { id: 15, src: img15, title: "Inner Peace", category: "Lifestyle", size: "square" },
    { id: 16, src: img16, title: "Group Yoga", category: "Community", size: "tall" },
    { id: 17, src: img17, title: "Holistic Health", category: "Therapy", size: "square" },
    { id: 18, src: img18, title: "Wellness Workshop", category: "Events", size: "wide" },
    { id: 19, src: img19, title: "Nature Connection", category: "Outdoors", size: "square" },
    { id: 20, src: img20, title: "Meditation Circle", category: "Mindfulness", size: "big" },
    { id: 21, src: blog1, title: "Healthy Living", category: "Blog", size: "tall" },
    { id: 22, src: blog2, title: "Mindful Eating", category: "Blog", size: "square" },
    { id: 23, src: blog3, title: "Daily Practice", category: "Blog", size: "wide" },
    { id: 24, src: heroNew, title: "Welcome Home", category: "Studio", size: "big" },
    { id: 25, src: intro1, title: "Introductory Session", category: "Classes", size: "square" },
    { id: 26, src: offering1, title: "Private Sessions", category: "Offerings", size: "wide" },
    { id: 27, src: offering2, title: "Therapeutic Yoga", category: "Offerings", size: "square" },
    { id: 28, src: offering3, title: "Naturopathy", category: "Offerings", size: "tall" },
    { id: 29, src: wellness1, title: "Wellness Journey", category: "Lifestyle", size: "big" },
    { id: 30, src: wellness2, title: "Holistic Care", category: "Therapy", size: "square" },
    { id: 31, src: wellness3, title: "Balance & Harmony", category: "Wellness", size: "wide" },
];

const getSizeClasses = (size) => {
    switch (size) {
        case "wide": return "md:col-span-2 md:row-span-1";
        case "tall": return "md:col-span-1 md:row-span-2";
        case "big": return "md:col-span-2 md:row-span-2";
        default: return "md:col-span-1 md:row-span-1";
    }
};

// --- 3D Tilt Card Component ---
const GalleryCard = ({ image, onClick, index }) => {
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

    // Dynamic shine
    const sheenGradient = useMotionTemplate`radial-gradient(
        500px circle at ${mouseX}px ${mouseY}px,
        rgba(255, 255, 255, 0.2),
        transparent 80%
    )`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`relative group w-full h-full min-h-[300px] rounded-3xl cursor-pointer ${getSizeClasses(image.size)}`}
            onClick={onClick}
            style={{ perspective: 800 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full h-full relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100"
            >
                {/* Sheen Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"
                    style={{ background: sheenGradient }}
                />

                {/* Image */}
                <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 z-20">
                    <div style={{ transform: "translateZ(20px)" }}>
                        <p className="text-primary-foreground/80 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {image.category}
                        </p>
                        <div className="flex items-center justify-between">
                            <h3 className="text-white font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {image.title}
                            </h3>
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 hover:bg-white hover:text-black">
                                <ZoomIn size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Main Component ---
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="bg-white py-12 md:py-20 relative overflow-hidden">
            {/* Subtle Organic Background Blob */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-60" />

            <div className="zen-container relative z-10 px-6">

                {/* Header */}
                <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <SectionHeader
                        subtitle="Visual Journey"
                        title="Moments of Mindfulness"
                        description="Explore the essence of our center. From the serenity of our studios to the energy of our community events."
                        className="text-center"
                    />
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {galleryImages.map((image, index) => (
                        <GalleryCard
                            key={image.id}
                            image={image}
                            index={index}
                            onClick={() => setSelectedImage(image.src)}
                        />
                    ))}
                </div>
            </div>

            {/* Cinematic Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button className="absolute top-8 right-8 z-50 p-3 rounded-full bg-black/5 hover:bg-black/10 text-black transition-all hover:rotate-90">
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-7xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Gallery View"
                                className="w-full h-full object-contain bg-black/5"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;