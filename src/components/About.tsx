import { CheckCircle2 } from "lucide-react";
import studentImage from "@/assets/studying.jpg";

const About = () => {
  const highlights = [
    "State-recognized since 1995",
    "20 spacious classrooms",
    "Modern computer lab with 10 systems",
    "Two-acre beautiful campus",
    "16,200 sq ft built-up area",
    "On-campus book store",
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-secondary/20 rounded-[40px] blob-shape"></div>
              <div className="relative w-96 h-96 mx-auto">
                <img
                  src={studentImage}
                  alt="Student learning with confidence"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-card"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                <div className="text-center text-white">
                  <p className="text-3xl font-bold">1985</p>
                  <p className="text-xs">Founded</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 left-10 w-40 h-40 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center text-white">
                  <p className="text-3xl font-bold">18K+</p>
                  <p className="text-xs">Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary font-semibold text-sm">About Our School</span>
            </div>
            <h2 className="mb-6">Learn To Play, Converse With Confidence</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nestled just 50 miles northeast of Bangalore, in the vibrant Chikkaballapura district of Karnataka, 
              Alipur is home to nearly 18,000 residents. Here, Bintul-Huda Memorial English School proudly became 
              the first institution to offer English-medium education, opening doors to a brighter future 
              for countless children.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our mission from the very beginning has been simple yet powerful — to deliver quality education 
              to the minority community of this growing village and empower the next generation with knowledge 
              and confidence.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
