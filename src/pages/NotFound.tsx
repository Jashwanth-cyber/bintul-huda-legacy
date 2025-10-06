import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, BookOpen, Search, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom"; // For clean SPA navigation to home
import { useTheme } from "next-themes";
import confusedStudentImage from "@/assets/not-found.jpg"; // Add a school-themed image asset if available
import schoolLogo from "@/assets/school-logo.png"; // Adjust path to your school logo asset
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Existing effect for logging 404
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // New effect for scroll-based nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="relative bg-muted/30">
      {/* Integrated Minimal Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-lg py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* School Logo and Title */}
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
            
            {/* Dark Mode Toggle + Go to Home */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Adjusted for nav height */}
      <div className="pt-20 flex min-h-screen items-center justify-center relative overflow-hidden">
        {/* Decorative Elements - Matching About page style */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side - School-themed confused student */}
            <div className="relative animate-slide-in-left">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-[40px] blob-shape"></div>
                <div className="relative w-96 h-96 mx-auto">
                  <img
                    src={confusedStudentImage || "https://via.placeholder.com/384x384?text=Lost+Student"} // Fallback to placeholder if no asset
                    alt="Confused student looking for the page"
                    className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-card"
                  />
                </div>
                
                {/* Decorative School Icons */}
                <div className="absolute top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                
                <div className="absolute -bottom-6 left-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <Search className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-fade-in-up text-center lg:text-left" style={{ animationDelay: "0.3s" }}>
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
                <span className="text-secondary font-semibold text-sm">Page Not Found</span>
              </div>
              <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Oops! Lost in the Hallways?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
                It looks like this page took an unexpected detour during recess. 
                Don't worry—our school corridors can be tricky, but we'll get you back on track!
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                At Bintul-Huda Memorial English School, even getting "lost" is a learning experience. 
                Let's find your way back to the classroom.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="javascript:history.back()">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Go Back
                  </a>
                </Button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;