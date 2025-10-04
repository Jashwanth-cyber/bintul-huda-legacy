import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Users, DollarSign, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import schoolLogo from "@/assets/school-logo.png"; // Assuming the same logo import

// Placeholder image imports - replace with actual image paths in your assets folder
import kindergartenImg from "@/assets/studying.jpg"; // e.g., image of young kids playing
import primaryImg from "@/assets/studying.jpg"; // e.g., classroom with primary students
import middleImg from "@/assets/studying.jpg"; // e.g., group study for middle school
import secondaryImg from "@/assets/studying.jpg"; // e.g., high school students in lab

export default function Navigation() {
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
    { name: "Alumni", href: "/alumni" },
    { name: "Fee Structure", href: "/fee-structure" },
  ];

  // Mobile-specific links
  const mobileLinks = [
    { name: "Home", href: "/", icon: Home },
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
      // For non-anchor links, use regular navigation
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
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
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

const FeeStructure = () => {
  const feeTiers = [
    {
      grades: "Kindergarten to Grade 2",
      amount: "14,000",
      description: "Annual tuition fee for foundational learning stages.",
      image: kindergartenImg,
    },
    {
      grades: "3rd Std to 5th Std",
      amount: "17,500",
      description: "Annual tuition fee for primary education.",
      image: primaryImg,
    },
    {
      grades: "6th Std to 8th Std",
      amount: "18,500",
      description: "Annual tuition fee for middle school curriculum.",
      image: middleImg,
    },
    {
      grades: "9th Std to 10th Std",
      amount: "19,500",
      description: "Annual tuition fee for secondary education (SSC preparation).",
      image: secondaryImg,
    },
  ];

  return (
    <div className="min-h-screen bg-background ">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 text-center">
        <div className="container mx-auto px-4 pt-20 md:px-6">
          <img
            src={schoolLogo}
            alt="Bintul-Huda Logo"
            className="mx-auto w-16 h-16 mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fee Structure
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and affordable fees to support quality education at Bintul-Huda Memorial English School.
            All fees are annual tuition in Indian Rupees (₹).
          </p>
         
        </div>
      </section>

      {/* Fee Tiers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md border border-border p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={tier.image}
                  alt={`${tier.grades} students`}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{tier.grades}</h3>
                <div className="text-3xl font-bold text-primary mb-3">₹{tier.amount}</div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Important Notes</h2>
          <ul className="max-w-2xl mx-auto space-y-2 text-left text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium min-w-[1rem]">•</span>
              Fees are inclusive of tuition, library, and basic lab access.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium min-w-[1rem]">•</span>
              Additional costs for uniforms, books, and extracurriculars may apply.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium min-w-[1rem]">•</span>
              Sibling discounts and scholarships available on request.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-medium min-w-[1rem]">•</span>
              For detailed breakdowns or queries, contact our admissions office.
            </li>
          </ul>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/admission">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

