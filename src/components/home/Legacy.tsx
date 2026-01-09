import legacyImage from "@/assets/hero-yoga.jpg"; // Using hero image as placeholder if no specific legacy image

const Legacy = () => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="zen-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-sage-light/30 rounded-full z-0" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0" />
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100">
                            {/* Placeholder for Founder Image */}
                            <img
                                src={legacyImage}
                                alt="Founder"
                                className="w-full h-full object-cover opacity-90 sepia-[.2]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                                <h3 className="text-2xl font-serif">Shri Yogendra Ji</h3>
                                <p className="text-sm opacity-90">Founder (1897 - 1989)</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Legacy</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
                            Carrying Forward the Torch of <span className="italic text-sage-light">Authentic Yoga</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Founded with the mission to bring yoga from the forest hermitages to the householders,
                            Vimukti Yoga follows the classical lineage of traditional Hatha Yoga.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Guided by the vision of our founders, we continue to simplify ancient wisdom for modern living,
                            making it accessible, scientific, and relevant for today's world.
                        </p>

                        <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border mt-8">
                            <div>
                                <h4 className="text-3xl font-serif text-primary">100+</h4>
                                <p className="text-sm text-muted-foreground mt-1">Years of Lineage</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-primary">50k+</h4>
                                <p className="text-sm text-muted-foreground mt-1">Teachers Trained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legacy;
