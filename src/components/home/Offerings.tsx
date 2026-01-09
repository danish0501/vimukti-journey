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

const offerings = [
    {
        icon: BookOpen,
        title: "Teacher Training",
        desc: "Become a certified yoga teacher with our globally recognized TTC programs.",
        link: "/training",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: Sun,
        title: "Regular Classes",
        desc: "Daily online and offline sessions for all levels to maintain health and vitality.",
        link: "/training",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Heart,
        title: "Yoga Therapy",
        desc: "Specialized care for chronic ailments, mental health, and rehabilitation.",
        link: "/therapy",
        color: "bg-green-100 text-green-600",
    },
];

const Offerings = () => {
    return (
        <section className="py-20 bg-sage-light/30">
            <div className="zen-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-medium text-primary uppercase tracking-widest mb-2 block">Our Offerings</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                            Holistic Programs for <br /><span className="italic">Every Stage of Life</span>
                        </h2>
                    </div>
                    <Link to="/services">
                        <Button variant="outline" className="gap-2">
                            View All Programs <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {offerings.map((item) => (
                        <Card key={item.title} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                            <CardHeader className="pb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl font-serif">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">
                                    {item.desc}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Link to={item.link} className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-2 group/link">
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
