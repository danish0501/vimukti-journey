import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream relative z-50">
      <div className="zen-container pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Bio */}
          <div className="space-y-4 lg:col-span-2">
            {/* <div>
              <img src={logo} alt="Vimukti Yoga" className="h-20 w-auto object-contain" />
            </div> */}
            <p className="text-sm leading-relaxed opacity-80 max-w-sm">
              Dedicated to holistic healing through traditional yogic practices,
              naturopathy, and modern wellness science. Experience freedom from
              suffering and discover your path to complete well-being.
              <br /><br />
              ESTD 2024. A legacy of authentic yoga.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href="https://www.facebook.com/Vimuktiyoga/" icon={Facebook} label="Facebook" />
              <SocialLink href="https://in.linkedin.com/in/sachin-sughosha-yelve-441b7122a" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://www.youtube.com/@vimuktiyoganaturallife" icon={Youtube} label="Youtube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/contact" label="Book Consultation" />
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Our Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services" label="Personal Yoga Classes" />
              <FooterLink to="/services" label="Yoga Therapy" />
              <FooterLink to="/services" label="Naturopathy" />
              <FooterLink to="/services" label="Rope & Belt Therapy" />
              <FooterLink to="/services" label="Mindfulness Programs" />
              <FooterLink to="/services" label="Meditation Classes" />
              <FooterLink to="/services" label="Wellness Retreats" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6">Stay Connected</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-70 shrink-0" />
                <span className="text-sm opacity-80">
                  4th floor, Ashram kant darshan Darbar, plot no 315-316, Sarsole Gaon, Sector 6, Nerul, Navi Mumbai, Maharashtra 400706
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70 shrink-0" />
                <a href="tel:+917710021009" className="text-sm opacity-80 hover:text-white hover:underline transition-all">+91 7710021009</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70 shrink-0" />
                <a href="mailto:vimuktiyoga2015@gmail.com" className="text-sm opacity-80 hover:text-white hover:underline transition-all">vimuktiyoga2015@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Vimukti Yoga & Wellness Centre. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <Link to="/privacy" className="text-xs opacity-60 hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="text-xs opacity-60 hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
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
