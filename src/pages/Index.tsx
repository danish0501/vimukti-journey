import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/shared/ServiceCard";
import heroImage from "@/assets/hero-yoga.jpg";
import {
  Heart,
  Leaf,
  Sun,
  Brain,
  Sparkles,
  Flame,
  Wind,
  Activity,
  Moon,
  CheckCircle,
  Award,
  Users,
  Clock,
  Shield,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Hatha Yoga",
    description: "Classical yoga practice focusing on physical postures and breathing techniques for strength and flexibility.",
  },
  {
    icon: Heart,
    title: "Yoga Therapy",
    description: "Personalized therapeutic yoga sessions designed to address specific health conditions and promote healing.",
  },
  {
    icon: Leaf,
    title: "Naturopathy",
    description: "Natural healing methods combining diet, lifestyle changes, and holistic treatments for complete wellness.",
  },
  {
    icon: Brain,
    title: "Meditation",
    description: "Guided meditation practices to calm the mind, reduce stress, and cultivate inner peace and clarity.",
  },
  {
    icon: Sparkles,
    title: "Energy Healing",
    description: "Chakra balancing and pranic healing techniques to restore energy flow and vitality throughout the body.",
  },
  {
    icon: Flame,
    title: "Power Yoga",
    description: "Dynamic, fitness-based yoga for those seeking a more vigorous practice with strength and endurance benefits.",
  },
  {
    icon: Moon,
    title: "Mindfulness",
    description: "Present-moment awareness techniques to enhance focus, reduce anxiety, and improve overall mental well-being.",
  },
  {
    icon: Activity,
    title: "Stress Management",
    description: "Comprehensive programs combining yoga, breathing, and relaxation techniques to manage daily stress.",
  },
  {
    icon: Wind,
    title: "Pranayama",
    description: "Ancient breathing practices to purify the body, calm the nervous system, and expand vital energy.",
  },
];

const values = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our instructors are certified with decades of combined experience in traditional and therapeutic yoga.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every session is tailored to your unique needs, body type, and wellness goals.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We offer morning, evening, and weekend sessions to fit your busy lifestyle.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "A nurturing, judgment-free space where everyone can explore their wellness journey.",
  },
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "We address mind, body, and soul together for complete and lasting transformation.",
  },
];

const testimonials = [
  {
    quote: "After years of chronic back pain, the therapeutic yoga sessions at Vimukti gave me my life back. The personalized approach made all the difference.",
    author: "Priya Sharma",
    role: "Back Pain Recovery",
  },
  {
    quote: "The meditation and stress management program helped me find mental clarity I never thought possible. I'm calmer, more focused, and happier.",
    author: "Rajesh Kumar",
    role: "Mental Wellness Journey",
  },
  {
    quote: "As someone dealing with anxiety, the mindfulness techniques I learned here have been transformative. The instructors truly understand healing.",
    author: "Anita Desai",
    role: "Anxiety Management",
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="zen-container relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Welcome to Vimukti
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Holistic Yoga, Therapy & Wellness for{" "}
              <span className="text-primary">Mind, Body & Soul</span>
            </h1>
            <p className="zen-body mb-8 animate-fade-in-up animation-delay-200">
              Experience the transformative power of traditional yogic practices 
              combined with modern wellness science. Begin your journey to complete 
              well-being at Vimukti Yoga & Wellness Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/consultation">
                <Button variant="zen" size="xl">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="zen-outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-3">
                Our Philosophy
              </p>
              <h2 className="zen-heading-2 text-foreground mb-6">
                The Essence of Vimukti
              </h2>
              <p className="zen-body mb-4">
                "Vimukti" means liberation or freedom in Sanskrit — freedom from suffering, 
                from limitations, and from the patterns that hold us back from living our 
                fullest lives.
              </p>
              <p className="zen-body mb-6">
                Our approach combines the timeless wisdom of traditional yogic practices 
                with evidence-based wellness science. We believe that true health encompasses 
                the physical, mental, and spiritual dimensions of being, and our programs 
                are designed to nurture all three.
              </p>
              <Link to="/about">
                <Button variant="zen-ghost" size="lg">
                  Learn Our Story →
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="bg-sage-light rounded-2xl p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-foreground mb-1">Traditional Roots</h4>
                      <p className="text-sm text-muted-foreground">Grounded in ancient yogic wisdom and Ayurvedic principles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-foreground mb-1">Modern Science</h4>
                      <p className="text-sm text-muted-foreground">Validated by contemporary research and therapeutic practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-foreground mb-1">Personalized Care</h4>
                      <p className="text-sm text-muted-foreground">Every journey is unique; every program is tailored to you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Wellness Offerings"
            description="From classical yoga to therapeutic treatments, we offer a complete range of services to support your journey to optimal health."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Your Wellness, Our Commitment"
            description="At Vimukti, we go beyond teaching yoga. We create personalized wellness experiences that transform lives."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Testimonials"
            title="Healing Stories from Our Community"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-serif font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="zen-section bg-primary">
        <div className="zen-container text-center">
          <h2 className="zen-heading-2 text-primary-foreground mb-4 animate-fade-in-up">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Take the first step towards a healthier, more balanced life. 
            Schedule a consultation with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Link to="/consultation">
              <Button 
                variant="outline" 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="ghost" 
                size="xl"
                className="text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/30"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
