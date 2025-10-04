import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import schoolLogo from "@/assets/school-logo.png"; // Replace with your actual logo image path

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
   
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Alumni", href: "/alumni" },
    { name: "Fee Structure", href: "/fee-structure" },
  ];

  // Mobile-specific links
  const mobileLinks = [
    { name: "Alumni", href: "/alumni", icon: Users },
    { name: "Fee Structure", href: "/fee-structure", icon: DollarSign },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    // Only apply smooth scroll to anchor links (starting with #)
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsMobileMenuOpen(false);
    } else {
      // For non-anchor links (like /alumni), use regular navigation
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={schoolLogo}
                alt="Bintul-Huda Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Bintul-Huda</span>
              <span className="text-xs text-muted-foreground">Memorial English School</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link to="/admission">
              <Button className="bg-primary hover:bg-primary/90">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-1 bg-card shadow-lg rounded-lg border-b border-border px-3">
            {mobileLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center space-x-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium px-4 py-3 rounded-lg"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <Link to="/admission">
              <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
                Apply Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;