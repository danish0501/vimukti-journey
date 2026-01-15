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
        <section className="py-24 bg-sage-50/50">
            <div className="zen-container">
                <div className="animate-fade-in-up">
                    <SectionHeader
                        subtitle="Success Stories"
                        title="Voices of Transformation"
                        description="Hear from our students and participants who have experienced the life-changing power of authentic yoga."
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8 pt-12">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/10 animate-fade-in-up flex flex-col h-full"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <div className="flex-1">
                                <Quote className="h-10 w-10 text-sage-200 mb-4" />
                                <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-light italic">
                                    "{item.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center font-serif text-xl text-sage-700 font-bold shrink-0">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-serif font-medium text-foreground text-lg">{item.author}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.role}</p>
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
