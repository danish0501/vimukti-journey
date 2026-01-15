import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar, Clock, MapPin, Users, ArrowRight, Sparkles, Leaf, Mountain } from "lucide-react";

const workshops = [
  {
    title: "Stress Relief Weekend",
    type: "Workshop",
    date: "January 25-26, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Vimukti Wellness Center",
    description: "A comprehensive two-day immersion in stress management techniques including yoga, pranayama, meditation, and lifestyle guidance.",
    spots: 20,
    price: "₹4,500",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Introduction to Meditation",
    type: "Workshop",
    date: "February 8, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Vimukti Wellness Center",
    description: "Learn the fundamentals of meditation practice, explore different techniques, and establish your personal meditation routine.",
    spots: 25,
    price: "₹2,000",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Pranayama Intensive",
    type: "Workshop",
    date: "February 15-16, 2026",
    time: "7:00 AM - 11:00 AM",
    location: "Vimukti Wellness Center",
    description: "Deep dive into advanced breathing practices. Learn classical pranayama techniques and their therapeutic applications.",
    spots: 15,
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop"
  },
  {
    title: "Yoga for Back Health",
    type: "Workshop",
    date: "February 22, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Vimukti Wellness Center",
    description: "Specialized workshop focusing on yoga practices for maintaining back health and managing back pain.",
    spots: 18,
    price: "₹2,500",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop"
  },
];

const retreats = [
  {
    title: "Spring Detox Retreat",
    type: "Retreat",
    date: "March 14-20, 2026",
    duration: "7 Days",
    location: "Himalayan Wellness Resort",
    description: "A week-long cleansing journey combining yoga, naturopathy, Ayurvedic treatments, and plant-based nutrition for complete renewal.",
    highlights: ["Daily yoga & meditation", "Naturopathy treatments", "Organic meals", "Nature walks", "Digital detox"],
    price: "₹65,000",
    included: "All-inclusive",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee802e12?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Silent Meditation Retreat",
    type: "Retreat",
    date: "April 4-10, 2026",
    duration: "7 Days",
    location: "Rishikesh Ashram",
    description: "A transformative silent retreat for experienced practitioners. Deepen your meditation practice in the sacred Himalayas.",
    highlights: ["Complete silence", "Multiple meditation sessions", "Satsang with masters", "Ganga aarti", "Spiritual teachings"],
    price: "₹45,000",
    included: "Accommodation & meals",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Wellness Weekend Escape",
    type: "Retreat",
    date: "Monthly (Various Dates)",
    duration: "3 Days",
    location: "Lonavala Retreat Center",
    description: "Perfect for busy professionals. A rejuvenating weekend of yoga, spa treatments, and peaceful surroundings.",
    highlights: ["Yoga sessions", "Spa treatments", "Healthy cuisine", "Nature trails", "Rest & relaxation"],
    price: "₹25,000",
    included: "All-inclusive",
    image: "https://images.unsplash.com/photo-1571896349842-68c47e9b109c?q=80&w=2940&auto=format&fit=crop"
  },
];

const Events = () => {
  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515024792973-230af794dccc?q=80&w=2835&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Workshops & Retreats</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Immersive <span className="text-primary italic">Wellness Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Join our specialized workshops and transformative retreats for deeper
              immersion into yoga, meditation, and holistic wellness practices.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <SectionHeader
            subtitle="Workshops"
            title="Upcoming Workshops"
            description="Single-day or weekend intensive programs focusing on specific aspects of wellness."
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.title}
                className="group flex flex-col bg-white rounded-3xl border border-sage-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full">
                      {workshop.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 text-white font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {workshop.date}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif font-medium text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">{workshop.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">{workshop.description}</p>

                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      {workshop.spots} spots available
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <span className="text-xl font-serif font-medium text-foreground">{workshop.price}</span>
                    <Link to="/consultation">
                      <Button size="sm" className="rounded-full px-6 transition-all hover:translate-x-1">
                        Register
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats */}
      <section className="py-20 md:py-32 bg-sage-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="zen-container relative z-10">
          <SectionHeader
            subtitle="Retreats"
            title="Transformative Retreats"
            description="Multi-day immersive experiences for deep rejuvenation and transformation."
            className="mb-16"
          />
          <div className="space-y-16">
            {retreats.map((retreat, index) => (
              <div
                key={retreat.title}
                className="group relative bg-white rounded-[2.5rem] p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-sage-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className={`lg:col-span-5 relative h-64 lg:h-[400px] rounded-[2rem] overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <img
                      src={retreat.image}
                      alt={retreat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-yellow-300" />
                        <span className="text-sm font-medium tracking-wider uppercase">{retreat.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <MapPin className="h-4 w-4" />
                        {retreat.location}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 px-4 md:px-0 pb-4 md:pb-0">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider bg-sage-100 text-sage-900 px-3 py-1 rounded-full">
                          {retreat.type}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {retreat.date}
                        </span>
                      </div>
                      <h3 className="font-serif font-medium text-3xl md:text-4xl text-foreground mb-4 group-hover:text-primary transition-colors">
                        {retreat.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                        {retreat.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-primary" /> Experience Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {retreat.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-sm bg-sage-50 text-sage-700 px-4 py-2 rounded-full border border-sage-100"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-dashed border-sage-200">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{retreat.included}</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-serif font-medium text-primary">{retreat.price}</span>
                          <span className="text-sm text-muted-foreground">/ person</span>
                        </div>
                      </div>
                      <Link to="/consultation">
                        <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                          Inquire & Book
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sage-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="zen-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 animate-fade-in-up">
            Want a Custom Event for Your Organization?
          </h2>
          <p className="text-lg text-sage-200 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100 font-light">
            We offer corporate wellness workshops and private group retreats.
            Contact us to design a program tailored to your team's needs.
          </p>
          <Link to="/contact" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button
              size="xl"
              className="bg-white text-sage-900 hover:bg-sage-100 border-none h-14 px-8 text-lg font-medium shadow-xl hover:scale-105 transition-all"
            >
              Contact for Corporate Events
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
