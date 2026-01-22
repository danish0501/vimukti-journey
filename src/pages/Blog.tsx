import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar, Clock, ArrowRight, User, Sparkles, Search, Tag, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import JourneyCTA from "@/components/shared/JourneyCTA";

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
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2940&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1588286840104-4bd511add618?q=80&w=1856&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2072&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=2940&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1531956531700-cd29bfd2b07f?q=80&w=2787&auto=format&fit=crop"
  },
];

const categories = ["All", "Lifestyle", "Pranayama", "Wellness", "Yoga Therapy", "Meditation", "Ayurveda", "Practice", "Mental Health", "Philosophy"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  const visibleRegularPosts = regularPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop"; // Fallback image
  };

  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-12 pb-20 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Knowledge & Insights</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              The Vimukti <span className="text-primary italic">Journal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Explore articles on yoga, meditation, wellness, and conscious living
              written by our expert practitioners and teachers.
            </p>

            <div className="flex justify-center pt-6">
              <div className="relative w-full max-w-md">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-white border-sage-200 focus:border-primary focus:ring-primary shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border bg-white sticky top-0 z-20 shadow-sm backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/60">
        <div className="zen-container">
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar mask-linear-fade">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(6); 
                }}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-sage-50 text-sage-700 hover:bg-sage-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="zen-container">
          <SectionHeader
            subtitle="Featured"
            title="Latest Articles"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-3xl border border-sage-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif font-medium text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed font-light">{post.excerpt}</p>

                  <div className="mt-auto pt-6 border-t border-dashed border-sage-200">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center text-primary">
                          <User className="h-3 w-3" />
                        </div>
                        {post.author}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1 bg-sage-50 px-2 py-1 rounded-full">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-sage-200/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="zen-container relative z-10">
          <SectionHeader
            subtitle="Archive"
            title="More Articles"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleRegularPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group p-2 bg-white rounded-2xl border border-sage-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up flex gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center py-1 pr-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">{post.category}</span>
                  <h3 className="font-serif font-medium text-base text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground mt-auto">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date.split(",")[0]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 border-sage-300 hover:bg-sage-100 text-foreground">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <JourneyCTA />

    </div>
  );
};

export default Blog;
