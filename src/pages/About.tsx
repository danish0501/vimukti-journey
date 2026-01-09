import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, BookOpen, Heart, Users, Leaf, Star } from "lucide-react";

const instructors = [
  {
    name: "Dr. Ananya Sharma",
    role: "Founder & Lead Yoga Therapist",
    experience: "25+ years",
    specialization: "Therapeutic Yoga, Pranayama",
    bio: "A pioneer in yoga therapy with certifications from The Yoga Institute, Mumbai, and advanced training in Ayurveda. Dr. Sharma has helped thousands find relief from chronic conditions.",
  },
  {
    name: "Guru Ramesh Iyer",
    role: "Senior Hatha Yoga Instructor",
    experience: "20+ years",
    specialization: "Classical Hatha, Meditation",
    bio: "Trained in the Sivananda tradition, Guru Ramesh brings authentic classical yoga teachings with a focus on spiritual growth and self-realization.",
  },
  {
    name: "Priya Menon",
    role: "Naturopathy Consultant",
    experience: "15+ years",
    specialization: "Naturopathy, Diet Therapy",
    bio: "A certified naturopath with expertise in holistic nutrition and lifestyle medicine. Priya integrates traditional healing with modern wellness practices.",
  },
  {
    name: "Vikram Desai",
    role: "Meditation & Mindfulness Coach",
    experience: "12+ years",
    specialization: "Vipassana, Mindfulness-Based Stress Reduction",
    bio: "Having practiced meditation across various traditions, Vikram specializes in making ancient techniques accessible and practical for modern life.",
  },
];

const milestones = [
  { year: "2005", event: "Vimukti founded with a vision of holistic healing" },
  { year: "2010", event: "Expanded to include Naturopathy and Ayurveda services" },
  { year: "2015", event: "Launched therapeutic yoga programs for chronic conditions" },
  { year: "2018", event: "Introduced online consultations and virtual classes" },
  { year: "2022", event: "Opened state-of-the-art wellness retreat center" },
  { year: "2024", event: "Celebrated helping over 50,000 individuals on their wellness journey" },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              About Us
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Rooted in Tradition, <span className="text-primary">Guided by Wisdom</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              For nearly two decades, Vimukti Yoga & Wellness Centre has been a sanctuary 
              for those seeking authentic healing through the ancient sciences of yoga, 
              meditation, and naturopathy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="zen-section">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="zen-heading-2 text-foreground mb-6">
                A Journey of Healing
              </h2>
              <p className="zen-body mb-4">
                Vimukti was born from a simple yet profound realization: true wellness 
                cannot be compartmentalized. The body, mind, and spirit are intricately 
                connected, and healing one requires nurturing all.
              </p>
              <p className="zen-body mb-4">
                Founded by Dr. Ananya Sharma after her own transformative healing journey, 
                Vimukti began as a small studio with a handful of dedicated students. 
                Today, it has grown into a comprehensive wellness center, yet our core 
                philosophy remains unchanged.
              </p>
              <p className="zen-body">
                We honor the ancient traditions of yoga as passed down through the great 
                masters, while embracing modern scientific understanding of how these 
                practices benefit the human system. This synthesis allows us to offer 
                programs that are both authentic and effective.
              </p>
            </div>
            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <span className="text-primary font-serif font-medium text-lg min-w-[60px]">
                    {milestone.year}
                  </span>
                  <span className="text-muted-foreground">{milestone.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="zen-section bg-card">
        <div className="zen-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="zen-card animate-fade-in-up">
              <div className="p-3 bg-sage-light rounded-lg w-fit mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="zen-heading-3 text-foreground mb-4">Our Mission</h3>
              <p className="zen-body">
                To make the transformative power of yoga and holistic wellness accessible 
                to everyone, providing personalized programs that address the unique needs 
                of each individual on their path to complete well-being.
              </p>
            </div>
            <div className="zen-card animate-fade-in-up animation-delay-100">
              <div className="p-3 bg-sage-light rounded-lg w-fit mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="zen-heading-3 text-foreground mb-4">Our Vision</h3>
              <p className="zen-body">
                To be a leading center of excellence in integrative wellness, merging 
                traditional wisdom with modern science to create lasting health 
                transformations and inspire a global community of conscious living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Values"
            title="What Guides Us"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Compassion", description: "Every interaction is infused with genuine care and understanding." },
              { icon: BookOpen, title: "Authenticity", description: "We honor traditional teachings while adapting them for modern life." },
              { icon: Users, title: "Community", description: "We foster a supportive environment where everyone belongs." },
              { icon: Award, title: "Excellence", description: "We continuously pursue the highest standards in all we do." },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 bg-sage-light rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-medium text-foreground text-lg mb-2">
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

      {/* Our Team */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Team"
            title="Meet Our Expert Instructors"
            description="Our team of certified professionals brings decades of combined experience in yoga, therapy, and holistic wellness."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <div 
                key={instructor.name}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-serif text-primary">
                      {instructor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-xl text-foreground mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">{instructor.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Experience:</span> {instructor.experience} | 
                      <span className="font-medium"> Specialization:</span> {instructor.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground">{instructor.bio}</p>
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
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Connect with our team and discover how Vimukti can support your wellness goals.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
