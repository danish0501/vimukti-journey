import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Salad, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import w1 from "@/assets/wellness-1.jpg";
import w2 from "@/assets/wellness-2.jpg";
import w3 from "@/assets/wellness-3.jpg";

const Wellness = () => {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-sage-light/10 to-transparent -skew-x-12 transform translate-x-20 z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-light/5 rounded-full blur-3xl" />

            <div className="zen-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <span className="text-sm font-medium text-primary uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full">Wellness Initiatives</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mt-6 mb-6">
                        More Than Just <span className="italic text-sage-600 relative inline-block">
                            Asanas
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        We believe in a holistic approach to health. Our wellness initiatives extend beyond the yoga mat
                        to encompass nutrition, mental health, and sustainable living.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <WellnessCard
                            icon={Salad}
                            title="Sattvic Diet"
                            desc="Learn the art of eating for vitality and peace with our nutrition workshops and cooking classes."
                            link="/therapy#diet"
                            image={w1}
                        />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <WellnessCard
                            icon={Sparkles}
                            title="Mindfulness"
                            desc="Cultivate present-moment awareness to reduce stress and enhance mental clarity."
                            link="/therapy#stress"
                            image={w2}
                        />
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <WellnessCard
                            icon={Leaf}
                            title="Sustainable Living"
                            desc="Connect with nature and adopt eco-friendly practices for a harmonious life."
                            link="/events"
                            image={w3}
                        />
                    </div>
                </div>

                <div className="mt-16 text-center animate-fade-in-up animation-delay-500">
                    <Link to="/therapy">
                        <Button variant="zen" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            Explore Wellness Programs
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const WellnessCard = ({ icon: Icon, title, desc, link, image }: { icon: any, title: string, desc: string, link: string, image: string }) => (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-white transition-all duration-500 hover:shadow-xl group text-center hover:-translate-y-2 overflow-hidden">
        <div className="h-48 overflow-hidden relative mb-6">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                <Icon className="h-8 w-8" />
            </div>
        </div>

        <div className="px-8 pb-8 pt-6">
            <h3 className="text-xl font-serif font-medium mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {desc}
            </p>
            <Link to={link} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group/link">
                Learn More <ArrowRight className="ml-1 h-3 w-3 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    </div>
);

export default Wellness;
