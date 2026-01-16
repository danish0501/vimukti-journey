import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            {/* Background with Slow Zoom Parallax effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[zoomIn_20s_ease-out_infinite_alternate]"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </div>

            <div className="zen-container relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-5 py-2 backdrop-blur-md bg-white/10 mb-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-default">
                        <span className="w-2 h-2 rounded-full bg-sage-light animate-pulse"></span>
                        <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase">Est. 2024 • Holistic Wellness</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] drop-shadow-lg">
                        <span className="block animate-fade-in-up" style={{ animationDelay: '100ms' }}>Vimukti Yoga</span>
                        <span className="block italic text-sage-light mt-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>& Wellness Centre</span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        The premier sanctuary for holistic healing, where ancient wisdom
                        meets modern science for your complete physical, mental, and spiritual well-being.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                        <Link to="/consultation" className="w-full sm:w-auto">
                            <Button size="xl" className="w-full bg-[#568F6E] text-sage-900 hover:text-sage-950 transition-all duration-300 text-lg h-14 shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Start Your Journey
                            </Button>
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto">
                            <Button variant="outline" size="xl" className="w-full bg-transparent text-white border-white hover:bg-[#568F6E] hover:border-[#568F6E] hover:text-white transition-all duration-300 text-lg h-14 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1">
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
