import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, UserCheck, Heart, Sun, Slice, Activity, Sparkles, Plane, CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// --- Service Data Configuration ---
const allServices = [
  {
    id: "personal-yoga",
    icon: UserCheck,
    title: "Personal Yoga Classes",
    subtitle: "Online & Offline",
    description: "Tailored one-on-one sessions customized to your body type, health goals, and schedule, available both in-person and virtually.",
    gradient: "from-orange-400 to-amber-400",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: "yoga-therapy",
    icon: Heart,
    title: "Yoga Therapy Classes",
    subtitle: "Therapeutic Intervention",
    description: "Specialized sessions focusing on healing specific ailments through therapeutic yoga techniques, delivered online or offline.",
    gradient: "from-rose-400 to-pink-400",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
  },
  {
    id: "naturopathy",
    icon: Sun,
    title: "Naturopathy for Chronic Issues",
    subtitle: "Lifestyle Disease Management",
    description: "Holistic treatments using natural elements to address root causes of chronic health issues and lifestyle diseases.",
    gradient: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "rope-therapy",
    icon: Slice,
    title: "Rope & Belt Therapy",
    subtitle: "Joint Pain & Alignment",
    description: "Unique Iyengar-inspired therapy using props for deep stretching, improving posture, and relieving joint pain.",
    gradient: "from-emerald-400 to-teal-400",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    id: "mindfulness",
    icon: Activity,
    title: "Mindfulness Stress Management",
    subtitle: "Corporate & Individual Programs",
    description: "Practical programs designed to reduce stress, enhance clarity, and build emotional resilience in daily life.",
    gradient: "from-violet-400 to-purple-400",
    bgColor: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    id: "meditation",
    icon: Sparkles,
    title: "Meditation Classes & Retreats",
    subtitle: "Inner Peace Journey",
    description: "Guided sessions and immersive retreats to cultivate deep states of relaxation, focus, and inner stillness.",
    gradient: "from-indigo-400 to-blue-400",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    id: "wellness-retreats",
    icon: Plane,
    title: "Health & Wellness Retreats",
    subtitle: "Rejuvenating Getaways",
    description: "Holistic getaways combining yoga, nature, healthy food, and therapies for complete rejuvenation.",
    gradient: "from-teal-400 to-green-400",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
  },
];

// --- Single Interactive Service Item ---
const ServiceItem = ({ service, index, isActive, setActive }) => {
  return (
    <motion.div
      layout
      onMouseEnter={() => setActive(service.id)}
      onMouseLeave={() => setActive(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-4 md:p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${isActive ? `${service.bgColor} shadow-lg scale-[1.02]` : "hover:bg-slate-50 hover:shadow-sm"
        }`}
    >
      {/* Animated Connecting Line */}
      {index < allServices.length - 1 && (
        <div className="absolute left-12 top-20 h-full w-px bg-slate-200 group-hover:bg-primary/30 transition-colors duration-500 z-0 pointer-events-none">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            className={`w-full bg-gradient-to-b ${service.gradient} opacity-50`}
          />
        </div>
      )}

      <div className="relative z-10 flex items-start gap-6">
        {/* Icon Container */}
        <div className={`relative w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
          {/* Animated Gradient Ring on Hover */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.gradient} blur-md opacity-40`}
              />
            )}
          </AnimatePresence>
          <div className={`relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center border-2 ${isActive ? 'border-transparent' : 'border-slate-100 group-hover:border-primary/20'}`}>
            {/* Gradient border trick */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 ${isActive ? 'opacity-100' : 'group-hover:opacity-20'} transition-opacity duration-500 -z-10 blur-[1px]`} />
            <service.icon className={`w-6 h-6 ${isActive ? service.textColor : 'text-slate-500 group-hover:text-primary'} transition-colors duration-300`} />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 pt-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h3 className={`text-xl font-serif font-medium ${isActive ? 'text-slate-800' : 'text-slate-700'} transition-colors`}>
              {service.title}
            </h3>
            <span className={`text-xs font-semibold tracking-wider uppercase ${isActive ? service.textColor : 'text-slate-400'} transition-colors`}>
              {service.subtitle}
            </span>
          </div>

          <motion.p
            layout
            className={`text-slate-600 leading-relaxed font-light ${isActive ? 'line-clamp-none' : 'line-clamp-2 md:line-clamp-none'} transition-all`}
          >
            {service.description}
          </motion.p>

          {/* Expandable Details */}
          <motion.div
            initial={false}
            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center text-sm font-medium">
              <CheckCircle2 className={`w-4 h-4 mr-2 ${service.textColor}`} />
              <span className={service.textColor}>Available Now. Book your session today.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const ServicesCard = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="py-20 relative bg-stone-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }} />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0], x: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="zen-container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Complete Offerings
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-tight"
            >
              Your Pathway to <span className="italic text-primary">Holistic Health</span>
            </motion.h2>
          </div>

          {/* Single Extraordinary Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] md:rounded-[3rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl overflow-hidden p-4 md:p-12"
          >
            {/* Decorative Shimmer on Card Edge */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50 rounded-[3rem]" />

            <div className="space-y-2">
              {allServices.map((service, index) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  index={index}
                  isActive={activeId === service.id}
                  setActive={setActiveId}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-serif text-2xl text-slate-800 mb-2">Ready to start your journey?</h4>
                <p className="text-slate-600 font-light">Book a consultation to find the right path for you.</p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-base group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;