import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle2, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CourseEnquiryPopupProps {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
}

const CourseEnquiryPopup = ({ isOpen, onClose, courseName }: CourseEnquiryPopupProps) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        toast({ title: "Enquiry Sent!", description: "We'll get back to you shortly." });
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-[2rem] border-0">
                <div className="bg-white p-6 md:p-8 relative">
                    {/* Header Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] pointer-events-none" />

                    <DialogHeader className="mb-6 relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg"><Sparkles className="w-5 h-5 text-primary" /></div>
                            <DialogTitle className="font-serif text-2xl text-slate-900">Enquire Now</DialogTitle>
                        </div>
                        <p className="text-slate-500 text-sm">Tell us more about your interest in <span className="font-medium text-primary">{courseName}</span>.</p>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="space-y-2">
                            <Input
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-0 rounded-xl px-4"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-0 rounded-xl px-4"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-0 rounded-xl px-4"
                            />
                        </div>
                        <div className="space-y-2">
                            <Textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-0 rounded-xl resize-none p-4"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting || isSuccess}
                            className={`w-full h-12 text-base rounded-xl transition-all duration-300 ${isSuccess ? "bg-emerald-500 hover:bg-emerald-600" : "bg-primary hover:bg-primary/90"}`}
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitting ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </motion.div>
                                ) : isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className="flex items-center gap-2 font-bold"
                                    >
                                        <CheckCircle2 className="w-5 h-5" /> Sent!
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="default"
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                        className="flex items-center gap-2"
                                    >
                                        Submit Enquiry <Send className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CourseEnquiryPopup;
