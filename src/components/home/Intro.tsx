import { Leaf, Award, Users } from "lucide-react";

const Intro = () => {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="zen-container">
                <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground animate-fade-in-up">
                        Welcome to the World's First <br className="hidden md:block" />
                        <span className="text-primary italic">Holistic Healing Hub</span>
                    </h2>

                    <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-sage-light to-transparent mx-auto rounded-full animate-fade-in-up animation-delay-100" />

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        For over a century (in spirit and lineage), we have remained committed to the cause of
                        spreading the authentic wisdom of Yoga to the world. <span className="text-foreground font-medium">Vimukti Yoga & Wellness Centre</span> stands
                        as a beacon of health, hope, and harmony, transforming millions of lives through our
                        pioneering techniques, scientific research, and compassionate care.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 pt-8 md:pt-16">
                        <Stat icon={Users} value="100+" label="Certified Teachers" delay={300} />
                        <Stat icon={Award} value="50+" label="Global Awards" delay={400} />
                        <Stat icon={Leaf} value="1000+" label="Lives Transformed" delay={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ icon: Icon, value, label, delay }: { icon: any, value: string, label: string, delay: number }) => (
    <div
        className="group p-8 rounded-2xl bg-sage-light/10 border border-sage-light/20 hover:bg-sage-light/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="text-4xl font-serif font-medium text-foreground mb-2">{value}</div>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
);

export default Intro;
