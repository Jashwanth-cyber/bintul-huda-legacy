import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">📚 Since 1985</span>
            </div>
            <h1 className="mb-6 leading-tight">
             Every Child holds <span className="text-primary">Potential</span> we help them shine.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Founded in 1985, Bintul-Huda Memorial School has been a beacon of hope and opportunity, 
              delivering quality education to empower the next generation with knowledge and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg group">
                Get Admission
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <h3 className="text-3xl font-bold text-primary">38+</h3>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">6,500+</h3>
                <p className="text-sm text-muted-foreground">Students Enrolled</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-sm text-muted-foreground">Qualified Teachers</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-full h-full bg-primary/20 rounded-[40px] blob-shape"></div>
              <img
                src={heroImage}
                alt="Happy students learning together"
                className="relative rounded-[40px] shadow-2xl w-full h-auto object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">State Recognized</p>
                    <p className="text-sm text-muted-foreground">Since 1995</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
