import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream">
      <div className="zen-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Bio */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-medium">
                Vimukti <span className="text-sage-light">Yoga</span>
              </h3>
              <p className="text-xs tracking-widest uppercase opacity-70">
                Wellness Centre
              </p>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Dedicated to holistic healing through traditional yogic practices, 
              naturopathy, and modern wellness science. Experience freedom from 
              suffering and discover your path to complete well-being.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Yoga Therapy", path: "/therapy" },
                { name: "Training Programs", path: "/training" },
                { name: "Book Consultation", path: "/consultation" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-sage-light transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Core Services</h4>
            <ul className="space-y-3">
              {[
                "Hatha Yoga",
                "Therapeutic Yoga",
                "Naturopathy",
                "Meditation",
                "Pranayama",
                "Stress Management",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-70" />
                <span className="text-sm opacity-80">
                  123 Wellness Street, Serenity Road,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">info@vimuktiyoga.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Vimukti Yoga & Wellness Centre. All rights reserved.
            </p>
            <p className="text-xs opacity-60 text-center md:text-right max-w-xl">
              <strong>Medical Disclaimer:</strong> The information provided is for educational purposes only 
              and is not intended to replace professional medical advice. Please consult a healthcare 
              provider before starting any new wellness program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
