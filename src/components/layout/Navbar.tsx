import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-border">
      <nav className="zen-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img src={logo} alt="Vimukti Yoga" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink asChild>
                      <Link to={item.path} className={cn(navigationMenuTriggerStyle(), "text-base")}>
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-4">
            <Link to="/contact">
              <Button variant="zen" size="lg" className="shadow-md hover:shadow-lg transition-all">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 top-20 bg-background z-40 lg:hidden overflow-y-auto transition-all duration-300 ease-in-out border-t border-border",
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          )}
        >
          <div className="p-6 space-y-6 container max-w-md mx-auto">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 font-medium text-xl border-b border-border/50 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-6">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="zen" size="lg" className="w-full text-lg h-12">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
