import { motion } from "framer-motion";
import heroBg from "@/assets/hero-new.jpg";

import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";
import FounderSection from "@/components/about/FounderSection";
import JourneyCTA from "@/components/shared/JourneyCTA";

const About = () => {
  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center py-12 md:py-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Rooted in <span className="text-primary">Tradition</span> <br className="hidden md:block" />
              Guided by <span className="italic text-sage-600">Wisdom</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Since 2015, Vimukti Yoga & Wellness Centre has been a sanctuary
              for those seeking authentic healing through the ancient sciences of yoga,
              meditation, and naturopathy.
            </p>
          </div>
        </div>
      </section>

      <OurStory />
      <MissionVision />
      <OurValues />
      <FounderSection />
      <JourneyCTA />
    </div>
  );
};

export default About;
