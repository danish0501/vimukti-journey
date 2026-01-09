import { Leaf, Award, Users } from "lucide-react";

const Intro = () => {
    return (
        <section className="py-20 bg-background">
            <div className="zen-container">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                        Welcome to the World's First <span className="text-primary italic">Holistic Healing Hub</span>
                    </h2>

                    <div className="w-24 h-1 bg-sage-light mx-auto rounded-full" />

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        For over a century (in spirit and lineage), we have remained committed to the cause of
                        spreading the authentic wisdom of Yoga to the world. <span className="text-foreground font-medium">Vimukti Yoga & Wellness Centre</span> stands
                        as a beacon of health, hope, and harmony, transforming millions of lives through our
                        pioneering techniques, scientific research, and compassionate care.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 pt-12">
                        <Stat icon={Users} value="100+" label="Certified Teachers" />
                        <Stat icon={Award} value="50+" label="Global Awards" />
                        <Stat icon={Leaf} value="1000+" label="Lives Transformed" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Stat = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
    <div className="p-6 rounded-2xl bg-sage-light/10 border border-sage-light/20 hover:bg-sage-light/20 transition-colors">
        <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
        <div className="text-3xl font-serif font-medium text-foreground mb-1">{value}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
);

export default Intro;
