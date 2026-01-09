import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
    {
        title: "5 Asanas for Better Sleep",
        excerpt: "Discover specific postures that calm the nervous system and prepare the body for deep, restorative rest.",
        date: "Jan 1, 2024",
        author: "Dr. Sharma",
        category: "Yoga Practice",
        image: "bg-blue-100", // Placeholder class
    },
    {
        title: "Understanding Sattvic Diet",
        excerpt: "Learn how the food you eat affects your mind and emotions, and how to choose high-vibrational foods.",
        date: "Dec 28, 2023",
        author: "Nutrition Team",
        category: "Nutrition",
        image: "bg-green-100", // Placeholder class
    },
    {
        title: "Managing Stress in City Life",
        excerpt: "Simple breathing techniques you can practice anywhere to instantly reduce anxiety and stress.",
        date: "Dec 15, 2023",
        author: "Senior Therapist",
        category: "Mental Health",
        image: "bg-orange-100", // Placeholder class
    },
];

const BlogFeed = () => {
    return (
        <section className="py-20 bg-background border-t border-border/30">
            <div className="zen-container">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Journal</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mt-2">Latest Insights</h2>
                    </div>
                    <Link to="/blog" className="hidden md:block">
                        <Button variant="ghost" className="text-primary hover:text-primary/80">
                            Read All Articles <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article key={index} className="group cursor-pointer">
                            <div className={`aspect-video rounded-xl overflow-hidden mb-4 ${post.image} relative`}>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                                    {post.category}
                                </div>
                                {/* Image placeholder would go here */}
                                <div className="w-full h-full bg-muted transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2">
                                    <span className="text-sm font-medium text-primary underline decoration-transparent underline-offset-4 group-hover:decoration-primary transition-all">
                                        Read Article
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/blog">
                        <Button variant="outline" className="w-full">
                            Read All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogFeed;
