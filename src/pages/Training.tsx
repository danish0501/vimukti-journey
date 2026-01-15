import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Clock, Users, Award, BookOpen, ArrowRight, CheckCircle, GraduationCap, Calendar } from "lucide-react";

const programs = [
  {
    title: "Beginner Yoga Foundation",
    duration: "8 Weeks",
    level: "Beginner",
    format: "Group Classes",
    purpose: "A comprehensive introduction to yoga for those new to the practice. Learn foundational postures, breathing techniques, and meditation basics in a supportive environment.",
    outcomes: [
      "Master 30+ essential yoga postures with proper alignment",
      "Understand basic pranayama (breathing) techniques",
      "Develop a sustainable personal practice routine",
      "Learn relaxation and stress management tools",
    ],
    schedule: "3 sessions/week, 75 minutes each",
    color: "bg-sage-50",
    iconColor: "text-sage-600"
  },
  {
    title: "Advanced Yoga Practitioner",
    duration: "12 Weeks",
    level: "Advanced",
    format: "Small Group",
    purpose: "For experienced practitioners ready to deepen their practice. Explore advanced asanas, subtle body concepts, and the philosophical foundations of yoga.",
    outcomes: [
      "Advanced asana sequences and variations",
      "Deeper understanding of yoga philosophy",
      "Pranayama mastery and bandha techniques",
      "Preparation for teaching or personal mastery",
    ],
    schedule: "3 sessions/week, 90 minutes each",
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Therapeutic Yoga Certification",
    duration: "6 Months",
    level: "Professional",
    format: "Intensive Program",
    purpose: "A professional certification program for those wanting to use yoga therapeutically. Learn to work with clients facing health challenges under expert mentorship.",
    outcomes: [
      "Certified Yoga Therapist credential",
      "Competence in therapeutic assessment",
      "Ability to create personalized therapy plans",
      "Clinical internship experience",
    ],
    schedule: "Weekends + 2 weekday evenings",
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Meditation Teacher Training",
    duration: "4 Months",
    level: "Intermediate to Advanced",
    format: "Hybrid (Online + In-Person)",
    purpose: "Become a confident meditation guide. This program covers multiple meditation traditions, teaching methodology, and the science of contemplative practices.",
    outcomes: [
      "Certified Meditation Teacher credential",
      "Proficiency in multiple meditation techniques",
      "Skills to guide individuals and groups",
      "Understanding of meditation science",
    ],
    schedule: "Weekend intensives + online modules",
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
];

const Training = () => {
  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599901868618-eca80330dbee?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Academy of Yoga</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Deepen Your <span className="italic text-sage-600">Practice</span>, <br className="hidden md:block" />
              Expand Your <span className="text-primary">Path</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Whether you're beginning your yoga journey or seeking professional certification,
              our structured training programs offer comprehensive education in the yogic arts.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Curriculum"
            title="Training Programs"
            description="Expert-led courses designed to take your practice and teaching to the next level."
            className="mb-16"
          />
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-3xl border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${program.color.replace('bg-', 'bg-sage-300 ')} group-hover:w-full opacity-10 transition-all duration-700`} />

                <div className="relative p-8 md:p-12 grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {program.level}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full border border-secondary">
                          {program.format}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
                        {program.purpose}
                      </p>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 font-serif font-medium text-foreground text-lg mb-4">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        What You'll Achieve
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {program.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-3 text-sm text-muted-foreground group/item hover:text-foreground transition-colors">
                            <CheckCircle className="h-4 w-4 text-primary/60 mt-0.5 flex-shrink-0 group-hover/item:text-primary" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:border-l border-border/40 lg:pl-12 flex flex-col justify-center space-y-8">
                    <div className="space-y-6 bg-sage-50/50 p-6 rounded-2xl border border-sage-100/50">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl bg-white shadow-sm ${program.iconColor}`}>
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase opacity-70 font-semibold tracking-wider">Duration</p>
                          <p className="text-sm font-medium text-foreground">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl bg-white shadow-sm ${program.iconColor}`}>
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase opacity-70 font-semibold tracking-wider">Format</p>
                          <p className="text-sm font-medium text-foreground">{program.format}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl bg-white shadow-sm ${program.iconColor}`}>
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase opacity-70 font-semibold tracking-wider">Schedule</p>
                          <p className="text-sm font-medium text-foreground">{program.schedule}</p>
                        </div>
                      </div>
                    </div>

                    <Link to="/consultation" className="block">
                      <Button className="w-full h-12 text-base shadow-md group-hover:shadow-lg transition-all">
                        Inquire Now
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-20 md:py-32 bg-sage-50 relative overflow-hidden">
        <div className="zen-container relative z-10">
          <SectionHeader
            subtitle="Why Choose Vimukti"
            title="Excellence in Yoga Education"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Certified Programs", description: "All programs meet international standards and provide recognized certifications." },
              { icon: Users, title: "Expert Faculty", description: "Learn from master teachers with decades of practice and teaching experience." },
              { icon: BookOpen, title: "Comprehensive Curriculum", description: "Traditional teachings integrated with modern anatomy and science." },
              { icon: Clock, title: "Flexible Options", description: "Multiple formats available including weekends, intensives, and hybrid programs." },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif font-medium text-foreground text-xl mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sage-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599447421405-0c1a1143296f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="zen-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-sage-200 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100 font-light">
            Connect with our program advisors to find the perfect training path for your goals.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button
              size="xl"
              className="bg-white text-sage-900 hover:bg-sage-100 border-none h-14 px-8 text-lg font-medium"
            >
              Schedule a Program Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Training;
