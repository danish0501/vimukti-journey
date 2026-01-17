import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Send, Loader2, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// --- Components ---

// 1. Clean Contact Info Card
const ContactCard = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
    className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group"
  >
    <div className="p-4 bg-slate-50 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="font-serif font-medium text-lg text-slate-800 mb-1">{title}</h4>
      <div className="text-slate-500 text-sm leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </motion.div>
);

// 2. Custom Animated Input Field
const AnimatedInput = ({ label, id, ...props }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused || hasValue
          ? "-top-2.5 text-xs bg-white px-2 text-primary font-bold tracking-wide uppercase"
          : "top-4 text-slate-400"
          }`}
      >
        {label}
      </label>
      <Input
        id={id}
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="h-14 bg-white border-slate-200 focus:border-primary focus:ring-0 rounded-xl transition-all duration-300 px-4 pt-1 shadow-sm focus:shadow-md"
      />
      <div className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full transition-all duration-500 origin-center ${focused ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`} />
    </div>
  );
};

// 3. Premium Custom Dropdown
const AnimatedDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${isOpen || value
          ? "-top-2.5 text-xs bg-white px-2 text-primary font-bold tracking-wide uppercase"
          : "top-4 text-slate-400"
          }`}
      >
        {label}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-14 px-4 bg-white border text-left rounded-xl flex items-center justify-between transition-all duration-300 shadow-sm ${isOpen ? "border-primary ring-1 ring-primary shadow-md" : "border-slate-200 hover:border-slate-300"}`}
      >
        <span className={value ? "text-slate-900" : "text-transparent"}>{value || "Select"}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-xl shadow-xl z-50 overflow-hidden py-2"
          >
            {options.map((option, idx) => (
              <motion.button
                key={option}
                type="button"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-slate-50 flex items-center justify-between group ${value === option ? "bg-slate-50 text-primary font-medium" : "text-slate-600"}`}
              >
                {option}
                {value === option && <CheckCircle2 className="w-4 h-4 text-primary" />}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---
const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    consultationType: "",
    message: "",
  });

  const serviceOptions = [
    "Personal Yoga Training",
    "Yoga Therapy",
    "Naturopathy Consultation",
    "Rope & Belt Therapy",
    "Mindfulness Programs",
    "Meditation Classes",
    "Wellness Retreats",
    "Other"
  ];

  const typeOptions = [
    "Online (Video Call)",
    "In-Person (At Center)",
    "Flexible / Hybrid"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for custom dropdowns
  const handleDropdownChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast({ title: "Request Sent!", description: "We'll be in touch within 24 hours." });
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", service: "", consultationType: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* 2. Hero Section (Clean White) */}
      <section className="relative z-10 pt-12 pb-16 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white rounded-full px-5 py-2 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Open for Consultations</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 leading-tight">
            Let's Start a <br />
            <span className="italic text-primary relative inline-block">
              Conversation
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -bottom-2 left-0 w-full h-4 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </motion.svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're looking to book a retreat, start therapy, or just say hello—we're here to listen and guide you.
          </p>
        </motion.div>
      </section>

      {/* 3. Main Content Grid */}
      <section className="relative z-10 pb-24 px-6">
        <div className="zen-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid gap-4">
                <ContactCard
                  delay={0.2} icon={MapPin} title="Our Sanctuary"
                  content="4th floor, Ashram kant darshan Darbar, plot no 315-316, Sarsole Gaon, Sector 6, Nerul, Navi Mumbai, Maharashtra 400706"
                />
                <ContactCard
                  delay={0.3} icon={Phone} title="Talk to Us"
                  content="<a href='tel:+917710021009' class='hover:text-primary transition-colors'>+91 7710021009</a>"
                />
                <ContactCard
                  delay={0.4} icon={Mail} title="Write to Us"
                  content="<a href='mailto:vimuktiyoga2015@gmail.com' class='hover:text-primary transition-colors'>vimuktiyoga2015@gmail.com</a><br />Response in 24 hrs"
                />
              </div>

              <motion.a
                href="https://www.google.com/maps/dir//4th+floor,+Ashram+kant+darshan+Darbar,+plot+no+315-316,+Sarsole+Gaon,+Sector+6,+Nerul,+Navi+Mumbai,+Maharashtra+400706/@19.027027,73.0925163,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c30d8684ee45:0x6a1ae50221a6fe0b!2m2!1d73.0100869!2d19.0421332?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative h-64 w-full rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 group cursor-pointer block"
              >
                <div className="absolute inset-0 bg-slate-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Map_of_Mumbai_City_district.png')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping absolute inset-0" />
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <MapPin className="text-primary w-8 h-8" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl text-center shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-2">
                    Open Google Maps <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </motion.a>
            </div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">

                {/* Subtle Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg"><Sparkles className="w-5 h-5 text-primary" /></div>
                    <h2 className="font-serif text-2xl md:text-3xl text-slate-900">Request Consultation</h2>
                  </div>
                  <p className="text-slate-500 mb-6 md:mb-10 font-light ml-1 md:ml-12 text-sm md:text-base">Fill out the details below and we will tailor the session for you.</p>

                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      <AnimatedInput
                        id="name" name="name" label="Full Name"
                        value={formData.name} onChange={handleChange} required
                      />
                      <AnimatedInput
                        id="phone" name="phone" type="tel" label="Phone Number"
                        value={formData.phone} onChange={handleChange} required
                      />
                    </div>

                    <AnimatedInput
                      id="email" name="email" type="email" label="Email Address"
                      value={formData.email} onChange={handleChange} required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      <AnimatedDropdown
                        label="Interested Service"
                        options={serviceOptions}
                        value={formData.service}
                        onChange={(val) => handleDropdownChange('service', val)}
                      />

                      <AnimatedDropdown
                        label="Preferred Mode"
                        options={typeOptions}
                        value={formData.consultationType}
                        onChange={(val) => handleDropdownChange('consultationType', val)}
                      />
                    </div>

                    <div className="relative group">
                      <label className="absolute left-4 top-4 text-[10px] md:text-xs font-bold uppercase tracking-wide text-primary bg-white px-2 z-10 transition-all">
                        Your Goals / Message
                      </label>
                      <Textarea
                        id="message" name="message"
                        value={formData.message} onChange={handleChange}
                        rows={5}
                        className="bg-white border-slate-200 focus:border-primary focus:ring-0 rounded-2xl resize-none p-5 mt-2 shadow-sm focus:shadow-md transition-all placeholder:text-transparent text-sm md:text-base"
                      />
                    </div>

                    {/* Morphing Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      className={`w-full h-12 md:h-14 text-base md:text-lg rounded-2xl transition-all duration-500 overflow-hidden relative shadow-lg hover:shadow-xl hover:-translate-y-1 ${isSuccess ? "bg-emerald-500 hover:bg-emerald-600" : "bg-primary hover:bg-primary/90"}`}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                          </motion.div>
                        ) : isSuccess ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-2 font-bold"
                          >
                            <CheckCircle2 className="w-6 h-6" /> Request Sent!
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            className="flex items-center gap-2"
                          >
                            Send Request <Send className="w-5 h-5 ml-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>

                    <p className="text-[10px] md:text-xs text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      We respect your privacy.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;