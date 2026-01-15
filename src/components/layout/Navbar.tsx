import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    subItems: [
      { name: "Overview", path: "/about", desc: "Know us better" },
      { name: "Our Legacy", path: "/about#legacy", desc: "100 years of heritage" },
      { name: "Values", path: "/about#values", desc: "Our core principles" },
      { name: "Affiliations", path: "/about#affiliations", desc: "Global recognition" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    subItems: [
      { name: "Personal Yoga", path: "/services", desc: "Online & Offline Classes" },
      { name: "Yoga Therapy", path: "/services", desc: "Personalized Healing" },
      { name: "Naturopathy", path: "/services", desc: "Lifestyle Disease Management" },
      { name: "Rope & Belt Therapy", path: "/services", desc: "Joint Pain & Alignment" },
      { name: "Mindfulness", path: "/services", desc: "Stress Management" },
      { name: "Retreats", path: "/services", desc: "Meditation & Wellness" },
    ],
  },
  {
    name: "Courses",
    path: "/training",
    subItems: [
      { name: "Teacher Training (TTC)", path: "/training#ttc", desc: "Become a certified teacher" },
      { name: "Regular Classes", path: "/training#regular", desc: "Daily yoga sessions" },
      { name: "Workshops", path: "/events", desc: "Specialized learning" },
      { name: "Retreats", path: "/events#retreats", desc: "Immersive experiences" },
    ],
  },
  {
    name: "Wellness",
    path: "/therapy",
    subItems: [
      { name: "Yoga Therapy", path: "/therapy", desc: "Healing specialized conditions" },
      { name: "Consultation", path: "/consultation", desc: "Personalized guidance" },
      { name: "Naturopathy", path: "/therapy#naturopathy", desc: "Natural healing methods" },
      { name: "Diet & Nutrition", path: "/therapy#diet", desc: "Sattvic living" },
    ],
  },
  {
    name: "Resources",
    path: "/blog",
    align: "right",
    subItems: [
      { name: "Blog", path: "/blog", desc: "Latest wellness articles" },
      { name: "Publications", path: "/blog#publications", desc: "Books and research" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    align: "right",
    subItems: [
      { name: "Contact Us", path: "/contact", desc: "Get in touch" },
      { name: "Locations", path: "/contact#locations", desc: "Find us near you" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm border-b border-border">
      <nav className="zen-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-medium text-foreground tracking-tight leading-none">
                Vimukti <span className="text-primary">Yoga</span>
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
                & Wellness Centre
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Mega Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-sage-light/20 text-base font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className={item.align === "right" ? "right-0 left-auto origin-top-right" : ""}>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card">
                            {item.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.name}
                                title={subItem.name}
                                href={subItem.path}
                              >
                                {subItem.desc}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link to={item.path} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block ml-4">
            <Link to="/consultation">
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
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item) => (
                <AccordionItem key={item.name} value={item.name} className="border-b-border/50">
                  {item.subItems ? (
                    <>
                      <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary">
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col space-y-2 pl-4 py-2 bg-muted/20 rounded-lg mt-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                to={subItem.path}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <span className="font-medium text-foreground block">{subItem.name}</span>
                                <span className="text-xs opacity-70">{subItem.desc}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
                    >
                      {item.name}
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>

            <div className="pt-6">
              <Link to="/consultation" onClick={() => setIsOpen(false)}>
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

// Helper component for mega menu items
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref as any}
          to={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
