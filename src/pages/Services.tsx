import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import {
  Sun,
  Heart,
  Leaf,
  Brain,
  Sparkles,
  Flame,
  Moon,
  Activity,
  Wind,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const allServices = [
  {
    icon: Sun,
    title: "Hatha Yoga",
    description: "The foundation of all yoga practices, Hatha Yoga focuses on physical postures (asanas) and breathing techniques (pranayama) to prepare the body for deeper spiritual practices.",
    whoIsItFor: ["Beginners starting their yoga journey", "Those seeking improved flexibility and strength", "Anyone wanting a balanced, traditional approach", "People looking to reduce stress and tension"],
    benefits: ["Enhanced physical strength and flexibility", "Improved posture and body awareness", "Reduced stress and mental clarity", "Better breathing capacity", "Foundation for advanced practices"],
  },
  {
    icon: Heart,
    title: "Yoga Therapy",
    description: "A personalized therapeutic approach using yoga techniques to address specific health conditions, chronic pain, and lifestyle disorders under expert guidance.",
    whoIsItFor: ["Those with chronic health conditions", "People recovering from injuries", "Individuals with back pain or joint issues", "Those managing lifestyle disorders"],
    benefits: ["Targeted healing for specific conditions", "Personalized treatment plans", "Drug-free pain management", "Improved quality of life", "Long-term health maintenance"],
  },
  {
    icon: Leaf,
    title: "Naturopathy",
    description: "A holistic healing system that uses natural methods including diet therapy, hydrotherapy, and lifestyle modifications to promote the body's inherent self-healing abilities.",
    whoIsItFor: ["Those preferring natural healing methods", "People with digestive issues", "Individuals seeking detoxification", "Anyone wanting preventive healthcare"],
    benefits: ["Natural, drug-free healing", "Improved digestive health", "Body detoxification", "Enhanced immunity", "Sustainable lifestyle changes"],
  },
  {
    icon: Brain,
    title: "Meditation",
    description: "Guided meditation practices from various traditions including Vipassana, Yoga Nidra, and mindfulness meditation to cultivate inner peace and mental clarity.",
    whoIsItFor: ["Those dealing with stress and anxiety", "People seeking mental clarity", "Anyone wanting deeper self-awareness", "Individuals looking for spiritual growth"],
    benefits: ["Reduced anxiety and stress", "Improved concentration and focus", "Better emotional regulation", "Enhanced self-awareness", "Deeper sense of peace"],
  },
  {
    icon: Sparkles,
    title: "Energy Healing",
    description: "Techniques including chakra balancing, pranic healing, and Reiki to restore the flow of vital energy through the body and promote holistic healing.",
    whoIsItFor: ["Those feeling energetically depleted", "People experiencing unexplained fatigue", "Individuals interested in subtle body work", "Anyone seeking emotional release"],
    benefits: ["Restored energy and vitality", "Emotional healing and balance", "Chakra alignment", "Reduced energy blockages", "Enhanced overall well-being"],
  },
  {
    icon: Flame,
    title: "Power Yoga",
    description: "A dynamic, fitness-based approach to yoga that builds strength, endurance, and flexibility through flowing sequences and challenging postures.",
    whoIsItFor: ["Fitness enthusiasts seeking variety", "Those wanting a vigorous workout", "People looking to build strength", "Athletes seeking flexibility"],
    benefits: ["Increased strength and endurance", "Improved cardiovascular health", "Enhanced flexibility", "Calorie burning and weight management", "Mental focus and discipline"],
  },
  {
    icon: Moon,
    title: "Mindfulness",
    description: "Practical techniques for cultivating present-moment awareness in daily life, reducing automatic reactions, and developing a more conscious way of being.",
    whoIsItFor: ["Those overwhelmed by daily life", "People with anxiety or depression", "Anyone wanting to be more present", "Individuals seeking work-life balance"],
    benefits: ["Reduced reactivity to stress", "Improved emotional intelligence", "Better decision-making", "Enhanced relationships", "Greater life satisfaction"],
  },
  {
    icon: Activity,
    title: "Stress Management",
    description: "Comprehensive programs combining yoga, breathing techniques, relaxation practices, and lifestyle guidance to effectively manage and reduce stress.",
    whoIsItFor: ["Working professionals with high stress", "Students facing exam pressure", "Anyone experiencing burnout", "Those with stress-related health issues"],
    benefits: ["Effective stress reduction tools", "Improved sleep quality", "Lower blood pressure", "Better work-life balance", "Enhanced productivity"],
  },
  {
    icon: Wind,
    title: "Pranayama",
    description: "Ancient yogic breathing practices that purify the energy channels, calm the nervous system, and expand vital life force (prana) throughout the body.",
    whoIsItFor: ["Those with respiratory issues", "People seeking energy enhancement", "Anyone wanting deeper meditation", "Individuals with anxiety"],
    benefits: ["Improved lung capacity", "Calmer nervous system", "Enhanced mental clarity", "Better oxygen utilization", "Preparation for meditation"],
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Our Services
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Comprehensive <span className="text-primary">Wellness Offerings</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              From classical yoga practices to therapeutic treatments, we offer a complete 
              range of services designed to support every aspect of your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="zen-section">
        <div className="zen-container">
          <div className="space-y-16">
            {allServices.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-sage-light rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="zen-heading-3 text-foreground">{service.title}</h2>
                  </div>
                  <p className="zen-body mb-6">{service.description}</p>
                  <Link to="/consultation">
                    <Button variant="zen" size="lg">
                      Book This Service
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className={`space-y-6 animate-fade-in-up animation-delay-200 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-serif font-medium text-foreground mb-4">Who Is It For?</h4>
                    <ul className="space-y-2">
                      {service.whoIsItFor.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-sage-light rounded-lg p-6">
                    <h4 className="font-serif font-medium text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Schedule a free consultation with our wellness experts to discuss your needs 
            and create a personalized wellness plan.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
