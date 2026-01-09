import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background with Parallax effect */}
            <div
                className="absolute inset-0 bg-cover bg-center transform scale-105"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="zen-container relative z-10 text-center text-white max-w-4xl mx-auto">
                <div className="space-y-6 animate-fade-in-up">
                    <div className="inline-block border border-white/30 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/10 mb-4">
                        <span className="text-xs font-medium tracking-[0.2em] uppercase">Est. 2024</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-tight">
                        Vimukti Yoga <br />
                        <span className="italic text-sage-light">& Wellness Centre</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                        The world's premier destination for holistic healing, where ancient wisdom
                        meets modern science for your complete physical, mental, and spiritual well-being.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                        <Link to="/consultation">
                            <Button size="xl" className="bg-sage-light text-foreground hover:bg-sage w-full sm:w-auto min-w-[200px] text-lg h-14">
                                Start Your Journey
                            </Button>
                        </Link>
                        <Link to="/training">
                            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white/20 w-full sm:w-auto min-w-[200px] text-lg h-14">
                                Explore Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
