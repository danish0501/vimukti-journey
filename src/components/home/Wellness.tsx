import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Salad, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wellness = () => {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sage-light/10 -skew-x-12 transform translate-x-20 z-0" />

            <div className="zen-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">Wellness Initiatives</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mt-4 mb-6">
                        More Than Just <span className="italic text-sage-light">Asanas</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We believe in a holistic approach to health. Our wellness initiatives extend beyond the yoga mat
                        to encompass nutrition, mental health, and sustainable living.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <WellnessCard
                        icon={Salad}
                        title="Sattvic Diet"
                        desc="Learn the art of eating for vitality and peace with our nutrition workshops and cooking classes."
                        link="/therapy#diet"
                    />
                    <WellnessCard
                        icon={Sparkles}
                        title="Mindfulness"
                        desc="Cultivate present-moment awareness to reduce stress and enhance mental clarity."
                        link="/therapy#stress"
                    />
                    <WellnessCard
                        icon={Leaf}
                        title="Sustainable Living"
                        desc="Connect with nature and adopt eco-friendly practices for a harmonious life."
                        link="/events"
                    />
                </div>

                <div className="mt-16 text-center">
                    <Link to="/therapy">
                        <Button variant="zen" size="lg">
                            Explore Wellness Programs
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const WellnessCard = ({ icon: Icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) => (
    <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group text-center">
        <div className="w-16 h-16 mx-auto bg-sage-light/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
            {desc}
        </p>
        <Link to={link} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
            Learn More <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
    </div>
);

export default Wellness;
