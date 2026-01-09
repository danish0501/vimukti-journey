import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="zen-section bg-sage-light">
        <div className="zen-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-4 animate-fade-in-up">
              Contact Us
            </p>
            <h1 className="zen-heading-1 text-foreground mb-6 animate-fade-in-up animation-delay-100">
              We're Here to <span className="text-primary">Help</span>
            </h1>
            <p className="zen-body animate-fade-in-up animation-delay-200">
              Have questions about our services, programs, or retreats? 
              Reach out and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="zen-section">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h2 className="zen-heading-2 text-foreground mb-6">Get in Touch</h2>
              <p className="zen-body mb-8">
                Whether you have a question about our services, want to book a consultation, 
                or simply wish to learn more about Vimukti, we're here to help.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground text-sm">
                      123 Wellness Street, Serenity Road,<br />
                      Mumbai, Maharashtra 400001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm">
                      +91 98765 43210<br />
                      +91 22 2345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm">
                      info@vimuktiyoga.com<br />
                      consultations@vimuktiyoga.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sage-light rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Operating Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday: 6:00 AM - 8:00 PM<br />
                      Sunday: 7:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Interactive Map</p>
                  <p className="text-xs text-muted-foreground">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-card rounded-lg border border-border p-8">
                <h3 className="zen-heading-3 text-foreground mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
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
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" variant="zen" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="zen-section bg-primary">
        <div className="zen-container text-center">
          <h2 className="zen-heading-2 text-primary-foreground mb-4 animate-fade-in-up">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Ready to transform your life through yoga and holistic wellness? 
            Take the first step by scheduling a consultation.
          </p>
          <Link to="/consultation" className="animate-fade-in-up animation-delay-200 inline-block">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
