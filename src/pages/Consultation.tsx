import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/shared/SectionHeader";
import { Video, MapPin, Clock, CheckCircle, Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const consultationTypes = [
  {
    type: "online",
    icon: Video,
    title: "Online Consultation",
    description: "Connect with our experts from the comfort of your home through video consultation. Perfect for initial assessments and follow-ups.",
    benefits: ["Convenient scheduling", "No travel required", "Recorded sessions available", "Global accessibility"],
  },
  {
    type: "offline",
    icon: MapPin,
    title: "In-Person Consultation",
    description: "Visit our wellness center for a comprehensive in-person assessment. Ideal for detailed evaluations and hands-on guidance.",
    benefits: ["Hands-on assessment", "Full facility access", "Immediate practice guidance", "Personal connection"],
  },
];

const serviceOptions = [
  "General Wellness Consultation",
  "Yoga Therapy Assessment",
  "Naturopathy Consultation",
  "Meditation Guidance",
  "Training Program Inquiry",
  "Corporate Wellness",
  "Other",
];

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    consultationType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received",
      description: "We'll get back to you within 24 hours to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      consultationType: "",
      message: "",
    });
  };

  return (
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Book a Consultation</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              Begin Your <span className="text-primary italic">Wellness Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a consultation with our expert team to discuss your wellness goals
              and create a personalized plan tailored to your needs.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <SectionHeader
            subtitle="Choose Your Preference"
            title="How Would You Like to Connect?"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consultationTypes.map((type, index) => (
              <div
                key={type.type}
                className="group bg-white p-8 md:p-10 rounded-3xl border border-sage-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-medium text-2xl text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed font-light">{type.description}</p>
                <ul className="space-y-4">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="bg-sage-50 rounded-full p-1 group-hover:bg-primary/10 transition-colors">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 bg-sage-50 relative overflow-hidden">
        <div className="zen-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in-up space-y-10">
              <div className="space-y-4">
                <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Book Now</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight">
                  Request Your <span className="text-sage-600 italic">Consultation</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Fill out the form and our team will contact you within 24 hours
                  to confirm your consultation appointment.
                </p>
              </div>

              <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-sage-100">
                <div className="flex items-center gap-6 group hover:bg-sage-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-foreground mb-1">Consultation Duration</h4>
                    <p className="text-sm text-muted-foreground">45-60 minutes for initial assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group hover:bg-sage-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-foreground mb-1">Call Us Directly</h4>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group hover:bg-sage-50 p-4 rounded-xl transition-colors duration-300">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg text-foreground mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground">consultations@vimuktiyoga.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-sage-100 p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sage-50 rounded-bl-[100px] -mr-0 -mt-0 opacity-50 pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 ml-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 ml-1">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Service Interest *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 rounded-md border border-sage-100 bg-sage-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Consultation Type *
                    </label>
                    <div className="relative">
                      <select
                        id="consultationType"
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 rounded-md border border-sage-100 bg-sage-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      >
                        <option value="">Select preference</option>
                        <option value="online">Online (Video Call)</option>
                        <option value="offline">In-Person (At Center)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Tell Us About Your Goals
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific concerns or goals you'd like to discuss..."
                      rows={4}
                      className="bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    Request Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by our team regarding your consultation request.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
