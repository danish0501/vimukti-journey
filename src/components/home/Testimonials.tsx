import { Quote, Star } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
    {
        quote: "The Yoga Institute style of teaching at Vimukti is authentic and pure. It's not just physical exercise; it's a complete lifestyle change.",
        author: "Priya Sharma",
        role: "TTC Student",
        rating: 5,
    },
    {
        quote: "I came here for stress management, but I found a new way of living. The simple techniques are life-changing.",
        author: "Rahul Verma",
        role: "Corporate Professional",
        rating: 5,
    },
    {
        quote: "The personalized attention during therapy sessions helped me recover from my back pain completely.",
        author: "Anita Desai",
        role: "Therapy Patient",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-sage-light/20">
            <div className="zen-container">
                <SectionHeader
                    subtitle="Success Stories"
                    title="Voices of Transformation"
                    description="Hear from our students and participants who have experienced the life-changing power of authentic yoga."
                />

                <div className="grid md:grid-cols-3 gap-8 pt-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <Quote className="h-8 w-8 text-primary/20 mb-4" />
                            <p className="text-foreground/80 leading-relaxed mb-6 italic min-h-[80px]">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-border/50 pt-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-serif text-primary font-bold">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-serif font-medium text-foreground">{item.author}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
