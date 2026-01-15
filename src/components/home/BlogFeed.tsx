import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
    {
        title: "5 Asanas for Better Sleep",
        excerpt: "Discover specific postures that calm the nervous system and prepare the body for deep, restorative rest.",
        date: "Jan 1, 2024",
        author: "Dr. Sharma",
        category: "Yoga Practice",
        image: blog1,
    },
    {
        title: "Understanding Sattvic Diet",
        excerpt: "Learn how the food you eat affects your mind and emotions, and how to choose high-vibrational foods.",
        date: "Dec 28, 2023",
        author: "Nutrition Team",
        category: "Nutrition",
        image: blog2,
    },
    {
        title: "Managing Stress in City Life",
        excerpt: "Simple breathing techniques you can practice anywhere to instantly reduce anxiety and stress.",
        date: "Dec 15, 2023",
        author: "Senior Therapist",
        category: "Mental Health",
        image: blog3,
    },
];

const BlogFeed = () => {
    return (
        <section className="py-24 bg-background border-t border-border/30">
            <div className="zen-container">
                <div className="flex justify-between items-end mb-12 animate-fade-in-up">
                    <div className="max-w-xl">
                        <span className="text-sm font-medium text-primary uppercase tracking-widest bg-sage-50 px-3 py-1 rounded-full">Our Journal</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium mt-4">Latest Insights & Wisdom</h2>
                    </div>
                    <Link to="/blog" className="hidden md:block">
                        <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-sage-50 text-base">
                            Read All Articles <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-foreground z-10 shadow-sm border border-black/5">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {post.date}
                                    </div>
                                    <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                                    <div className="flex items-center gap-1.5">
                                        <User className="h-3.5 w-3.5" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-medium group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2">
                                    <span className="text-sm font-medium text-primary flex items-center gap-2 group/btn">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden animate-fade-in-up animation-delay-500">
                    <Link to="/blog">
                        <Button variant="outline" size="lg" className="w-full">
                            Read All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogFeed;
