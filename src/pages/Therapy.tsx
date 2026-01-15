import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, CheckCircle, Activity, Brain, Heart, Leaf, Stethoscope, Sparkles } from "lucide-react";

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
    icon: Stethoscope
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "Based on your assessment, we create a customized therapeutic yoga plan that addresses your specific needs, limitations, and objectives.",
    icon: Activity
  },
  {
    step: "03",
    title: "Guided Healing",
    description: "One-on-one or small group sessions where you learn and practice therapeutic techniques under expert supervision, with ongoing adjustments as you progress.",
    icon: Sparkles
  },
  {
    step: "04",
    title: "Home Practice & Support",
    description: "A take-home practice routine designed for your schedule, with regular check-ins and modifications to ensure continued progress.",
    icon: CheckCircle
  },
];

const Therapy = () => {
  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599447421405-0c1a1143296f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Yoga Therapy</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Healing Through <span className="text-primary italic">Therapeutic Yoga</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Our therapeutic yoga programs are designed by certified yoga therapists to
              address specific health conditions. Experience personalized healing that
              works with your body, not against it.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link to="/consultation">
                <Button className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Start Healing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Yoga Therapy */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-fade-in-up space-y-6">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Understanding</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
                  What is Yoga <span className="text-sage-600 italic">Therapy?</span>
                </h2>
              </div>


              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Yoga Therapy is the application of yogic practices and teachings to
                  address specific physical, mental, or emotional conditions. Unlike
                  general yoga classes, therapy sessions are individualized based on
                  thorough assessment and ongoing evaluation.
                </p>
                <p>
                  Our certified yoga therapists work with medical professionals to
                  create complementary treatment plans that enhance your overall
                  healing journey. We focus on empowering you with tools and
                  practices you can use for lifelong wellness.
                </p>
                <div className="p-6 bg-sage-50 rounded-2xl border-l-4 border-primary">
                  <p className="font-medium text-foreground italic">
                    "Research has shown yoga therapy to be effective for chronic pain,
                    anxiety, depression, cardiovascular conditions, and many lifestyle
                    disorders when practiced consistently under proper guidance."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-sage-100 border border-sage-100 animate-fade-in-up animation-delay-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage-50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 pointer-events-none" />
              <h3 className="font-serif font-medium text-2xl text-foreground mb-8 relative z-10">
                Yoga Therapy vs. Regular Yoga
              </h3>
              <div className="space-y-6 relative z-10">
                {[
                  { title: "Personalized", desc: "Tailored to your specific condition and needs" },
                  { title: "Therapeutic Focus", desc: "Designed to address health conditions" },
                  { title: "Medical Integration", desc: "Works alongside conventional treatment" },
                  { title: "Progress Tracking", desc: "Regular assessment and plan adjustments" },
                  { title: "Certified Therapists", desc: "Led by trained yoga therapy professionals" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-sage-50 transition-colors duration-300">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-lg">{item.title}</p>
                      <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="zen-container relative z-10">
          <SectionHeader
            subtitle="Specializations"
            title="Conditions We Address"
            description="Our yoga therapy programs are designed to help with a wide range of physical and mental health conditions."
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <div
                key={condition.title}
                className="group bg-white rounded-3xl p-8 border border-sage-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <condition.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-xl text-foreground mb-2">
                      {condition.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>

                <div className="pl-20">
                  <div className="flex flex-wrap gap-2">
                    {condition.conditions.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium bg-sage-50 text-sage-700 px-3 py-1.5 rounded-lg border border-sage-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Process"
            title="Your Healing Journey"
            description="We follow a structured approach to ensure you receive the most effective therapeutic care."
            className="mb-20"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sage-200 to-transparent z-0" />

            {process.map((step, index) => (
              <div
                key={step.step}
                className="relative z-10 text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-white border-4 border-sage-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-500 relative">
                  <step.icon className="h-8 w-8 text-sage-400 group-hover:text-primary transition-colors duration-500" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                    {step.step}
                  </div>
                </div>

                <h3 className="font-serif font-medium text-xl text-foreground mb-3 px-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29575?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="zen-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary-foreground mb-6 animate-fade-in-up">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100 font-light">
            Book a consultation with our yoga therapists to discuss your condition and
            explore how therapeutic yoga can support your healing.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 border-none h-14 px-8 text-lg font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
