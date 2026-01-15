import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, BookOpen, Heart, Users, Leaf, Star, ArrowRight, Quote } from "lucide-react";

const instructors = [
  {
    name: "Sachin Yelve",
    role: "Founder & Lead Yoga Consultan",
    experience: "9+ years",
    specialization: "Yoga Therapy, Naturopathy, Mindfulness",
    bio: "Founder of Vimukti Yoga with an M.Sc. in Yoga from SVYASA University. Sachin combines traditional Hatha Yoga with Naturopathy and Mindfulness to offer a truly holistic healing experience.",
    image: "bg-sage-100",
  },
  {
    name: "Guru Ramesh Iyer",
    role: "Senior Hatha Yoga Instructor",
    experience: "20+ years",
    specialization: "Classical Hatha, Meditation",
    bio: "Trained in the Sivananda tradition, Guru Ramesh brings authentic classical yoga teachings with a focus on spiritual growth and self-realization.",
    image: "bg-amber-100",
  },
  {
    name: "Priya Menon",
    role: "Naturopathy Consultant",
    experience: "15+ years",
    specialization: "Naturopathy, Diet Therapy",
    bio: "A certified naturopath with expertise in holistic nutrition and lifestyle medicine. Priya integrates traditional healing with modern wellness practices.",
    image: "bg-green-100",
  },
  {
    name: "Vikram Desai",
    role: "Meditation & Mindfulness Coach",
    experience: "12+ years",
    specialization: "Vipassana, Mindfulness-Based Stress Reduction",
    bio: "Having practiced meditation across various traditions, Vikram specializes in making ancient techniques accessible and practical for modern life.",
    image: "bg-blue-100",
  },
];

const milestones = [
  { year: "2015", event: "Vimukti Yoga founded by Sachin Yelve" },
  { year: "2016", event: "Expanded to include Naturopathy and Ayurveda services" },
  { year: "2018", event: "Launched therapeutic yoga programs for chronic conditions" },
  { year: "2020", event: "Introduced online consultations and virtual classes" },
  { year: "2022", event: "Opened state-of-the-art wellness retreat center" },
  { year: "2024", event: "Celebrated helping over 10,000 individuals on their wellness journey" },
];

const About = () => {
  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Rooted in <span className="text-primary">Tradition</span>, <br className="hidden md:block" />
              Guided by <span className="italic text-sage-600">Wisdom</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Since 2015, Vimukti Yoga & Wellness Centre has been a sanctuary
              for those seeking authentic healing through the ancient sciences of yoga,
              meditation, and naturopathy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-fade-in-up space-y-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Our Story</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-6 leading-tight">
                  A Journey of <span className="italic text-sage-light">Healing</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
                <p>
                  Vimukti was born from a simple yet profound realization: true wellness
                  cannot be compartmentalized. The body, mind, and spirit are intricately
                  connected, and healing one requires nurturing all.
                </p>
                <p>
                  Founded by <span className="text-foreground font-medium">Sachin Yelve</span>, an expert in Yoga, Naturopathy, and Mindfulness,
                  Vimukti began as a dedicated space for holistic well-being in Navi Mumbai.
                  With a Master's degree in Yoga and deep roots in traditional practices, Sachin established
                  Vimukti to offer a path to freedom from physical ailments and mental stress.
                </p>
                <p>
                  We honor the ancient traditions of Hatha Yoga and the therapeutic power of Naturopathy,
                  while embracing modern scientific understanding to offer programs
                  that are both authentic and effective.
                </p>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-sage-100 hidden md:block" />
              <div className="space-y-8 relative">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="group flex gap-6 md:gap-8 items-start relative"
                  >
                    <div className="hidden md:block absolute left-8 top-3 w-3 h-3 bg-white border-2 border-sage-300 rounded-full transform -translate-x-1.5 group-hover:scale-125 group-hover:border-primary transition-all duration-300 z-10" />

                    <div className="w-16 md:w-24 shrink-0 text-right md:text-left">
                      <span className="text-2xl md:text-3xl font-serif font-medium text-sage-300 group-hover:text-primary transition-colors duration-300">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-1 pt-1.5 pb-8 border-b border-border/40 group-last:border-0 group-hover:pl-2 transition-all duration-300">
                      <span className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                        {milestone.event}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent" />
        <div className="zen-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                icon: Star,
                title: "Our Mission",
                desc: "To empower individuals to achieve diverse health goals through integrated yoga therapy, naturopathy, and mindfulness coaching, tailored to modern lifestyles.",
                delay: 0
              },
              {
                icon: Leaf,
                title: "Our Vision",
                desc: "To be a beacon of holistic health, fostering a community where ancient wisdom meets modern well-being for a disease-free, stress-free life.",
                delay: 200
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-8 md:p-12 rounded-3xl border border-sage-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-sage-50 flex items-center justify-center mb-8 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-6">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">What Guides Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-30" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Compassion", description: "Every interaction is infused with genuine care and understanding." },
              { icon: BookOpen, title: "Authenticity", description: "We honor traditional teachings while adapting them for modern life." },
              { icon: Users, title: "Community", description: "We foster a supportive environment where everyone belongs." },
              { icon: Award, title: "Excellence", description: "We continuously pursue the highest standards in all we do." },
            ].map((value, index) => (
              <div
                key={value.title}
                className="group text-center p-8 rounded-2xl hover:bg-sage-50/50 transition-colors duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-sage-100 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-medium text-foreground text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-background border-t border-border/30">
        <div className="zen-container">
          <SectionHeader
            subtitle="Our Team"
            title="Meet Our Expert Instructors"
            description="Our team of certified professionals brings decades of combined experience in yoga, therapy, and holistic wellness."
          />
          <div className="grid md:grid-cols-2 gap-8 pt-12">
            {instructors.map((instructor, index) => (
              <div
                key={instructor.name}
                className="group bg-white rounded-3xl p-6 md:p-8 border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className={`w-28 h-28 ${instructor.image} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500`}>
                    <span className="text-3xl font-serif text-foreground/40 font-bold">
                      {instructor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif font-medium text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {instructor.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{instructor.role}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 bg-sage-50 text-sage-700 rounded-md font-medium">{instructor.experience}</span>
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md font-medium">{instructor.specialization}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-light">"{instructor.bio}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-sage-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599901868618-eca80330dbee?q=80&w=2800&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
        <div className="zen-container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 animate-fade-in-up">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-sage-200 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100 font-light">
            Connect with our team and discover how Vimukti can support your wellness goals with our personalized holistic programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <Link to="/consultation">
              <Button
                size="xl"
                className="bg-white text-sage-900 hover:bg-sage-100 border-none min-w-[200px] h-14"
              >
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="xl"
                className="bg-transparent text-white border-white hover:bg-white/10 min-w-[200px] h-14"
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

export default About;
