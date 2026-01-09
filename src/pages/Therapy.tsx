import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, CheckCircle, Activity, Brain, Heart, Leaf } from "lucide-react";

const conditions = [
  {
    icon: Activity,
    title: "Chronic Pain Management",
    description: "Specialized yoga protocols for managing back pain, joint pain, arthritis, and other chronic pain conditions through gentle movements and targeted therapy.",
    conditions: ["Lower back pain", "Neck and shoulder pain", "Knee and joint issues", "Arthritis", "Fibromyalgia"],
  },
  {
    icon: Brain,
    title: "Mental Health & Anxiety",
    description: "Therapeutic approaches combining yoga, pranayama, and meditation to address anxiety, depression, and stress-related mental health challenges.",
    conditions: ["Anxiety disorders", "Depression", "PTSD", "Panic attacks", "Chronic stress"],
  },
  {
    icon: Heart,
    title: "Lifestyle Disorders",
    description: "Comprehensive programs for managing conditions arising from modern lifestyle including hypertension, diabetes, and metabolic disorders.",
    conditions: ["Hypertension", "Type 2 diabetes", "Obesity", "High cholesterol", "Metabolic syndrome"],
  },
  {
    icon: Leaf,
    title: "Hormonal Imbalances",
    description: "Specialized practices for women's health including PCOS, menstrual disorders, menopause management, and thyroid imbalances.",
    conditions: ["PCOS/PCOD", "Menstrual disorders", "Menopause symptoms", "Thyroid imbalances", "Fertility issues"],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "A comprehensive evaluation of your health history, current condition, lifestyle, and wellness goals. Our therapists take time to understand your unique situation.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "Based on your assessment, we create a customized therapeutic yoga plan that addresses your specific needs, limitations, and objectives.",
  },
  {
    step: "03",
    title: "Guided Healing",
    description: "One-on-one or small group sessions where you learn and practice therapeutic techniques under expert supervision, with ongoing adjustments as you progress.",
  },
  {
    step: "04",
    title: "Home Practice & Support",
    description: "A take-home practice routine designed for your schedule, with regular check-ins and modifications to ensure continued progress.",
  },
];

const Therapy = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Yoga Therapy
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Healing Through <span className="text-primary">Therapeutic Yoga</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Our therapeutic yoga programs are designed by certified yoga therapists to 
              address specific health conditions. Experience personalized healing that 
              works with your body, not against it.
            </p>
          </div>
        </div>
      </section>

      {/* What is Yoga Therapy */}
      <section className="zen-section">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-3">
                Understanding
              </p>
              <h2 className="zen-heading-2 text-foreground mb-6">
                What is Yoga Therapy?
              </h2>
              <p className="zen-body mb-4">
                Yoga Therapy is the application of yogic practices and teachings to 
                address specific physical, mental, or emotional conditions. Unlike 
                general yoga classes, therapy sessions are individualized based on 
                thorough assessment and ongoing evaluation.
              </p>
              <p className="zen-body mb-4">
                Our certified yoga therapists work with medical professionals to 
                create complementary treatment plans that enhance your overall 
                healing journey. We focus on empowering you with tools and 
                practices you can use for lifelong wellness.
              </p>
              <p className="zen-body">
                Research has shown yoga therapy to be effective for chronic pain, 
                anxiety, depression, cardiovascular conditions, and many lifestyle 
                disorders when practiced consistently under proper guidance.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in-up animation-delay-200">
              <h3 className="font-serif font-medium text-xl text-foreground mb-6">
                Yoga Therapy vs. Regular Yoga
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">Personalized:</span> Tailored to your specific condition and needs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">Therapeutic Focus:</span> Designed to address health conditions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">Medical Integration:</span> Works alongside conventional treatment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">Progress Tracking:</span> Regular assessment and plan adjustments
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">Certified Therapists:</span> Led by trained yoga therapy professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <SectionHeader
            subtitle="Specializations"
            title="Conditions We Address"
            description="Our yoga therapy programs are designed to help with a wide range of physical and mental health conditions."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div 
                key={condition.title}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <condition.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-medium text-xl text-foreground">
                    {condition.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {condition.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {condition.conditions.map((item) => (
                    <span 
                      key={item}
                      className="text-xs bg-sage-light text-primary px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Process"
            title="Your Healing Journey"
            description="We follow a structured approach to ensure you receive the most effective therapeutic care."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-serif font-medium">{step.step}</span>
                </div>
                <h3 className="font-serif font-medium text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zen-section bg-primary">
        <div className="zen-container text-center">
          <h2 className="zen-heading-2 text-primary-foreground mb-4 animate-fade-in-up">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Book a consultation with our yoga therapists to discuss your condition and 
            explore how therapeutic yoga can support your healing.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
            >
              Book a Therapy Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Therapy;
