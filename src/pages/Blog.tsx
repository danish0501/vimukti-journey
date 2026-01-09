import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    slug: "yoga-for-daily-life",
    title: "Integrating Yoga into Your Daily Life",
    excerpt: "Practical tips for incorporating yoga practice into a busy modern lifestyle without overwhelming yourself.",
    category: "Lifestyle",
    author: "Dr. Ananya Sharma",
    date: "January 5, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "breathing-techniques-beginners",
    title: "Essential Breathing Techniques for Beginners",
    excerpt: "Learn fundamental pranayama practices that can transform your energy, reduce stress, and improve focus.",
    category: "Pranayama",
    author: "Guru Ramesh Iyer",
    date: "January 2, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "stress-management-yoga",
    title: "Managing Stress Through Yoga: A Complete Guide",
    excerpt: "Understanding how yoga affects the nervous system and practical techniques for stress relief.",
    category: "Wellness",
    author: "Vikram Desai",
    date: "December 28, 2025",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "yoga-back-pain",
    title: "Yoga for Back Pain: Safe Practices and Precautions",
    excerpt: "Evidence-based approaches to using yoga for back pain management, including poses to try and avoid.",
    category: "Yoga Therapy",
    author: "Dr. Ananya Sharma",
    date: "December 20, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "meditation-myths",
    title: "Debunking Common Meditation Myths",
    excerpt: "Addressing misconceptions about meditation practice and what it really takes to develop a consistent practice.",
    category: "Meditation",
    author: "Vikram Desai",
    date: "December 15, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "ayurveda-seasonal-wellness",
    title: "Seasonal Wellness Through Ayurveda",
    excerpt: "How to adjust your diet, routine, and practices according to the seasons for optimal health.",
    category: "Ayurveda",
    author: "Priya Menon",
    date: "December 10, 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "morning-yoga-routine",
    title: "Creating a Morning Yoga Routine That Sticks",
    excerpt: "Step-by-step guide to building a sustainable morning practice that energizes your day.",
    category: "Practice",
    author: "Guru Ramesh Iyer",
    date: "December 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "yoga-anxiety-relief",
    title: "Yoga Practices for Anxiety Relief",
    excerpt: "Specific poses, breathing techniques, and meditation practices that help calm an anxious mind.",
    category: "Mental Health",
    author: "Dr. Ananya Sharma",
    date: "November 28, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "understanding-chakras",
    title: "Understanding the Chakra System",
    excerpt: "An introduction to the seven main chakras and their significance in yoga and wellness.",
    category: "Philosophy",
    author: "Guru Ramesh Iyer",
    date: "November 20, 2025",
    readTime: "12 min read",
    featured: false,
  },
];

const categories = ["All", "Lifestyle", "Pranayama", "Wellness", "Yoga Therapy", "Meditation", "Ayurveda", "Practice", "Mental Health", "Philosophy"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Knowledge & Insights
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              The Vimukti <span className="text-primary">Journal</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Explore articles on yoga, meditation, wellness, and conscious living 
              written by our expert practitioners and teachers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-background">
        <div className="zen-container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Featured"
            title="Latest Articles"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="zen-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/10] bg-sage-light rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary/30">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <span className="text-xs text-primary font-medium">{post.category}</span>
                <h3 className="font-serif font-medium text-xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <SectionHeader
            subtitle="Archive"
            title="More Articles"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="p-6 bg-background rounded-lg border border-border hover:shadow-soft transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-xs text-primary font-medium">{post.category}</span>
                <h3 className="font-serif font-medium text-lg text-foreground mt-2 mb-2 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="zen-section bg-primary">
        <div className="zen-container text-center">
          <h2 className="zen-heading-2 text-primary-foreground mb-4 animate-fade-in-up">
            Stay Updated on Wellness Wisdom
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Subscribe to our newsletter for weekly articles, practice tips, and exclusive insights 
            from our expert teachers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-200">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-4 rounded-md bg-primary-foreground text-foreground flex-grow"
            />
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
