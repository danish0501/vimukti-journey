import React from "react";
import { motion } from "framer-motion";

const diseases = [
    "Vertigo",
    "Alzheimer's Disease",
    "Ankylosing Spondylitis",
    "Anxiety",
    "Arthritis",
    "Asthma",
    "Back Pain",
    "Cervical Spondylosis",
    "Depression",
    "Diabetes",
    "Emotional Imbalance",
    "High Blood Pressure",
    "Hip Joint Pain",
    "Hormonal Imbalance",
    "Knee Pain",
    "Obesity",
    "Paralysis",
    "Parkinson's Disease",
    "PCOS",
    "Sciatica",
    "Shoulder Pain",
    "Slip Disc",
    "Stress",
    "Thyroid or Parathyroid",
    "Varicose Veins",
];

const DiseasesWeTreat = () => {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="zen-container px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-teal-900 mb-6 leading-tight">
                            Diseases We <span className="italic">Treat</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We provide specialized yoga therapy for a wide range of health conditions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {diseases.map((disease, index) => (
                        <motion.div
                            key={disease}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-center group cursor-default"
                        >
                            <span className="text-lg font-medium text-slate-700 group-hover:text-teal-700 transition-colors">
                                {disease}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiseasesWeTreat;
