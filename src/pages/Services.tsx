import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Heart,
  Leaf,
  Brain,
  Sparkles,
  Mountain,
  Video,
  Flower2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Personal Yoga Classes",
    subtitle: "Online & Offline",
    description: "Experience the benefits of personalized yoga sessions tailored to your body type and flexibility levels. Available both online and offline.",
    benefits: ["One-on-one attention", "Customized sequences", "Flexible scheduling", "Progress tracking"],
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Heart,
    title: "Yoga Therapy",
    subtitle: "Personalized Healing",
    description: "Specialized therapeutic yoga sessions designed to address specific health concerns and promote recovery through targeted asanas and breathing.",
    benefits: ["Injury rehabilitation", "Pain management", "Chronic condition support", "Holistic healing"],
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Leaf,
    title: "Naturopathy",
    subtitle: "Lifestyle Disease Management",
    description: "Holistic naturopathy treatments targeting diverse lifestyle diseases and chronic health issues by restoring the body's natural balance.",
    benefits: ["Natural detoxification", "Dietary guidance", "Immunity boosting", "Sustainable wellness"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: ShieldCheck, // Changed to something implying support/alignment
    title: "Rope & Belt Therapy",
    subtitle: "Joint Pain & Alignment",
    description: "Specialized Iyengar-inspired rope and belt therapy focused on correcting body alignment and alleviating chronic joint pains.",
    benefits: ["Spine alignment", "Joint pain relief", "Deep stretching", "Postural correction"],
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Brain,
    title: "Mindfulness Programs",
    subtitle: "Stress Management",
    description: "Evidence-based mindfulness programs designed to reduce stress, enhance focus, and promote emotional regulation in daily life.",
    benefits: ["Stress reduction", "Better focus", "Emotional balance", "Anxiety management"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Flower2,
    title: "Meditation Classes",
    subtitle: "Classes & Retreats",
    description: "Guided meditation sessions and immersive retreats to help you find inner silence, clarity, and spiritual connection.",
    benefits: ["Mental clarity", "Inner peace", "Self-discovery", "Deep relaxation"],
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Mountain,
    title: "Wellness Retreats",
    subtitle: "Health & Rejuvenation",
    description: "Transformative health and wellness retreats in serene locations, combining yoga, nature, and holistic living for total rejuvenation.",
    benefits: ["Digital detox", "Nature immersion", "Holistic reset", "Community connection"],
    color: "bg-indigo-50 text-indigo-600",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-sage-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205566-3d4555809d27?q=80&w=2835&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="zen-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-sage-200 text-sage-800 text-sm font-medium animate-fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>Explore Our Offerings</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-sage-900 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
              Holistic Path to <br />
              <span className="text-primary italic">Well-being</span>
            </h1>

            <p className="text-lg md:text-xl text-sage-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Discover a comprehensive range of traditional and modern therapies designed to harmonize your mind, body, and spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 relative">
        <div className="zen-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card hover:bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl border border-border/50 hover:border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{service.subtitle}</div>
                    <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="pt-6 border-t border-border/50">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-sage-700">
                          <CheckCircle2 className="w-4 h-4 text-primary/70" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="ghost" className="group/btn p-0 hover:bg-transparent hover:text-primary">
                        Book Session
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1599901868618-eca80330dbee?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-fixed center" />
        <div className="zen-container relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 animate-fade-in-up">
            Begin Your Journey Today
          </h2>
          <p className="text-sage-200 max-w-2xl mx-auto text-lg mb-8 animate-fade-in-up animation-delay-100">
            Whether you're seeking relief from chronic pain, looking to de-stress, or wanting to deepen your yoga practice, we're here to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link to="/contact">
              <Button size="xl" className="bg-white text-sage-900 hover:bg-sage-100 border-none min-w-[200px]">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white/10 min-w-[200px]">
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
