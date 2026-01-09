import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/shared/SectionHeader";
import { Video, MapPin, Clock, CheckCircle, Phone, Mail } from "lucide-react";
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Book a Consultation
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              Begin Your <span className="text-primary">Wellness Journey</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Schedule a consultation with our expert team to discuss your wellness goals 
              and create a personalized plan tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="zen-section">
        <div className="zen-container">
          <SectionHeader
            subtitle="Choose Your Preference"
            title="How Would You Like to Connect?"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultationTypes.map((type, index) => (
              <div 
                key={type.type}
                className="zen-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-sage-light rounded-lg w-fit mb-4">
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="zen-heading-3 text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
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
      <section className="zen-section bg-card">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-3">
                Book Now
              </p>
              <h2 className="zen-heading-2 text-foreground mb-6">
                Request Your Consultation
              </h2>
              <p className="zen-body mb-8">
                Fill out the form and our team will contact you within 24 hours 
                to confirm your consultation appointment.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Consultation Duration</h4>
                    <p className="text-sm text-muted-foreground">45-60 minutes for initial assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Call Us Directly</h4>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email Us</h4>
                    <p className="text-sm text-muted-foreground">consultations@vimuktiyoga.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <form onSubmit={handleSubmit} className="bg-background rounded-lg border border-border p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium text-foreground mb-2">
                      Consultation Type *
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select preference</option>
                      <option value="online">Online (Video Call)</option>
                      <option value="offline">In-Person (At Center)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell Us About Your Goals
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific concerns or goals you'd like to discuss..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="zen" size="lg" className="w-full">
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
