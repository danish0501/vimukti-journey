import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Clock, Users, Award, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

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
  },
];

const Training = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Training Programs
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Deepen Your Practice, <span className="text-primary">Expand Your Path</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Whether you're beginning your yoga journey or seeking professional certification, 
              our structured training programs offer comprehensive education in the yogic arts.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="zen-section">
        <div className="zen-container">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                        {program.level}
                      </span>
                      <span className="text-xs bg-sage-light text-primary px-3 py-1 rounded-full">
                        {program.format}
                      </span>
                    </div>
                    <h2 className="zen-heading-3 text-foreground mb-4">{program.title}</h2>
                    <p className="text-muted-foreground mb-6">{program.purpose}</p>
                    
                    <h4 className="font-serif font-medium text-foreground mb-3">What You'll Achieve:</h4>
                    <ul className="space-y-2 mb-6">
                      {program.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-sage-light rounded-lg p-6 h-fit">
                    <h4 className="font-serif font-medium text-foreground mb-4">Program Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="text-sm font-medium text-foreground">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Format</p>
                          <p className="text-sm font-medium text-foreground">{program.format}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Schedule</p>
                          <p className="text-sm font-medium text-foreground">{program.schedule}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link to="/consultation">
                        <Button variant="zen" className="w-full">
                          Inquire About This Program
                          <ArrowRight className="h-4 w-4 ml-1" />
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

      {/* Why Train With Us */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <SectionHeader
            subtitle="Why Choose Vimukti"
            title="Excellence in Yoga Education"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Certified Programs", description: "All programs meet international standards and provide recognized certifications." },
              { icon: Users, title: "Expert Faculty", description: "Learn from master teachers with decades of practice and teaching experience." },
              { icon: BookOpen, title: "Comprehensive Curriculum", description: "Traditional teachings integrated with modern anatomy and science." },
              { icon: Clock, title: "Flexible Options", description: "Multiple formats available including weekends, intensives, and hybrid programs." },
            ].map((item, index) => (
              <div 
                key={item.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 bg-sage-light rounded-full w-fit mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
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
            Ready to Transform Your Practice?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Connect with our program advisors to find the perfect training path for your goals.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
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
