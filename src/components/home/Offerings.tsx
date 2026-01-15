import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import off1 from "@/assets/offering-1.jpg";
import off2 from "@/assets/offering-2.jpg";
import off3 from "@/assets/offering-3.jpg";

const offerings = [
    {
        icon: BookOpen,
        title: "Teacher Training",
        desc: "Become a certified yoga teacher with our globally recognized TTC programs.",
        link: "/training",
        color: "bg-orange-100 text-orange-600",
        image: off1,
    },
    {
        icon: Sun,
        title: "Regular Classes",
        desc: "Daily online and offline sessions for all levels to maintain health and vitality.",
        link: "/training",
        color: "bg-blue-100 text-blue-600",
        image: off2,
    },
    {
        icon: Heart,
        title: "Yoga Therapy",
        desc: "Specialized care for chronic ailments, mental health, and rehabilitation.",
        link: "/therapy",
        color: "bg-green-100 text-green-600",
        image: off3,
    },
];

const Offerings = () => {
    return (
        <section className="py-20 bg-sage-light/30 border-y border-white/50">
            <div className="zen-container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in-up">
                    <div className="max-w-2xl">
                        <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Our Offerings</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
                            Holistic Programs for <br /><span className="italic text-primary/80">Every Stage of Life</span>
                        </h2>
                    </div>
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="gap-2 bg-transparent border-primary/20 hover:bg-white hover:border-transparent shadow-sm">
                            View All Programs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((item, index) => (
                        <Card
                            key={item.title}
                            className="border-none shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group bg-white animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center ${item.color} shadow-lg`}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <CardHeader className="pb-4 pt-6 px-8">
                                <CardTitle className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-8 pb-8">
                                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                                    {item.desc}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="px-8 pb-8 pt-0">
                                <Link to={item.link} className="text-sm font-medium text-primary hover:text-primary/70 flex items-center gap-2 group/link border-b border-transparent hover:border-primary/30 pb-0.5 transition-all">
                                    Learn More <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offerings;
