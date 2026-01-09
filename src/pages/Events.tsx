import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

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
  },
];

const Events = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Workshops & Retreats
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Immersive <span className="text-primary">Wellness Experiences</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Join our specialized workshops and transformative retreats for deeper 
              immersion into yoga, meditation, and holistic wellness practices.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Workshops"
            title="Upcoming Workshops"
            description="Single-day or weekend intensive programs focusing on specific aspects of wellness."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div 
                key={workshop.title}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {workshop.type}
                </span>
                <h3 className="zen-heading-3 text-foreground mt-4 mb-3">{workshop.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {workshop.spots} spots available
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-serif font-medium text-primary">{workshop.price}</span>
                  <Link to="/consultation">
                    <Button variant="zen" size="sm">
                      Register
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <SectionHeader
            subtitle="Retreats"
            title="Transformative Retreats"
            description="Multi-day immersive experiences for deep rejuvenation and transformation."
          />
          <div className="space-y-8">
            {retreats.map((retreat, index) => (
              <div 
                key={retreat.title}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                        {retreat.type}
                      </span>
                      <span className="text-xs bg-sage-light text-primary px-3 py-1 rounded-full">
                        {retreat.duration}
                      </span>
                    </div>
                    <h3 className="zen-heading-3 text-foreground mb-3">{retreat.title}</h3>
                    <p className="text-muted-foreground mb-4">{retreat.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {retreat.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {retreat.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {retreat.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-sage-light rounded-lg p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{retreat.included}</p>
                      <p className="text-2xl font-serif font-medium text-primary">{retreat.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Link to="/consultation" className="mt-6">
                      <Button variant="zen" className="w-full">
                        Inquire & Book
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zen-section bg-primary">
        <div className="zen-container text-center">
          <h2 className="zen-heading-2 text-primary-foreground mb-4 animate-fade-in-up">
            Want a Custom Event for Your Organization?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            We offer corporate wellness workshops and private group retreats. 
            Contact us to design a program tailored to your team's needs.
          </p>
          <Link to="/contact" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
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
