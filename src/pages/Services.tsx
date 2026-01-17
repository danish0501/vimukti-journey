import { Sparkles } from "lucide-react";
import ServicesCard from "@/components/services/ServicesCard";
import JourneyCTA from "@/components/shared/JourneyCTA";
import heroBg from "@/assets/hero-yoga.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 bg-sage-50 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="zen-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-sage-200 text-sage-800 text-sm font-medium animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Explore Our Offerings</span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-medium text-sage-900 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
              Holistic Path to <br />
              <span className="text-primary italic">Well-being</span>
            </h1>

            <p className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Discover a comprehensive range of traditional and modern therapies designed to harmonize your mind, body, and spirit.
            </p>
          </div>
        </div>
      </section>

      <ServicesCard />
      <JourneyCTA />

    </div>
  );
};

export default Services;
