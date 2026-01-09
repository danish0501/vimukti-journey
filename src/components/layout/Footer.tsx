import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream">
      <div className="zen-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Bio */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <h3 className="text-2xl font-serif font-medium">
                Vimukti <span className="text-sage-light">Yoga</span>
              </h3>
              <p className="text-xs tracking-widest uppercase opacity-70">
                & Wellness Centre
              </p>
            </div>
            <p className="text-sm leading-relaxed opacity-80 max-w-sm">
              Dedicated to holistic healing through traditional yogic practices,
              naturopathy, and modern wellness science. Experience freedom from
              suffering and discover your path to complete well-being.
              <br /><br />
              ESTD 2024. A legacy of authentic yoga.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink icon={Instagram} label="Instagram" />
              <SocialLink icon={Facebook} label="Facebook" />
              <SocialLink icon={Linkedin} label="LinkedIn" />
              <SocialLink icon={Youtube} label="Youtube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/about#legacy" label="Our Legacy" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/consultation" label="Book Consultation" />
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <FooterLink to="/training#ttc" label="Teacher Training" />
              <FooterLink to="/training#regular" label="Regular Classes" />
              <FooterLink to="/therapy" label="Yoga Therapy" />
              <FooterLink to="/events" label="Workshops" />
              <FooterLink to="/events#retreats" label="Retreats" />
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Stay Connected</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-70" />
                <span className="text-sm opacity-80">
                  123 Wellness Street, Serenity Road, Mumbai 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li>
            </ul>

            <div className="space-y-2">
              <p className="text-xs font-medium opacity-70 uppercase tracking-wider">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-sage-light w-full"
                />
                <button className="bg-sage-light text-foreground px-3 py-2 rounded-md font-medium text-xs hover:bg-sage transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Vimukti Yoga & Wellness Centre. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-xs opacity-60 hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="text-xs opacity-60 hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <a
    href="#"
    className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors group"
    aria-label={label}
  >
    <Icon className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
  </a>
);

const FooterLink = ({ to, label }: { to: string, label: string }) => (
  <li>
    <Link
      to={to}
      className="text-sm opacity-70 hover:opacity-100 hover:text-sage-light transition-all duration-200"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
