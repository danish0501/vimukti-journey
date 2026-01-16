import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
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
    <div className="overflow-hidden bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative items-center justify-center pt-32 pb-20 md:pb-32 bg-sage-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599447421405-0c1a1143296f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
        <div className="zen-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-sage-200 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground tracking-tight leading-tight">
              We're Here to <span className="text-primary italic">Help</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              Have questions about our services, programs, or retreats?
              Reach out and our team will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="zen-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Contact Information */}
            <div className="animate-fade-in-up space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">Let's Start a Conversation</h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Whether you have a question about our services, want to book a consultation,
                  or simply wish to learn more about Vimukti, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Visit Us", content: "123 Wellness Street, Serenity Road,<br />Mumbai, Maharashtra 400001, India" },
                  { icon: Phone, title: "Call Us", content: "+91 98765 43210<br />+91 22 2345 6789" },
                  { icon: Mail, title: "Email Us", content: "info@vimuktiyoga.com<br />consultations@vimuktiyoga.com" },
                  { icon: Clock, title: "Operating Hours", content: "Monday - Saturday: 6:00 AM - 8:00 PM<br />Sunday: 7:00 AM - 12:00 PM" }
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start gap-6 p-6 rounded-2xl border border-sage-100 bg-sage-50/30 hover:bg-sage-50 transition-colors duration-300">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-medium text-lg text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-md border border-sage-100">
                <div className="absolute inset-0 bg-sage-200 flex items-center justify-center bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/72.8777,19.0760,12,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Vimukti Wellness Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-[2.5rem] shadow-xl shadow-sage-900/5 border border-sage-100 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none" />

                <h3 className="font-serif font-medium text-2xl text-foreground mb-2 relative z-10">Send Us a Message</h3>
                <p className="text-muted-foreground text-sm mb-8 relative z-10">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 ml-1">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 ml-1">
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
                        className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      className="h-12 bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 ml-1">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                      className="bg-sage-50/50 border-sage-100 focus:ring-primary focus:border-primary resize-none p-4"
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full h-14 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sage-50 relative overflow-hidden">
        <div className="zen-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-6 animate-fade-in-up">
            Ready to Prioritize Your Wellness?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-100 font-light">
            Take the first step towards a healthier, balanced life. Schedule your personalized consultation with our experts today.
          </p>
          <div className="flex justify-center animate-fade-in-up animation-delay-200">
            <Link to="/consultation">
              <Button
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px] h-14 text-lg shadow-lg hover:shadow-primary/25 rounded-full px-8"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
