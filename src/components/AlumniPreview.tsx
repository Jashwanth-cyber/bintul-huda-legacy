import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const AlumniPreview = () => {
  const successStories = [
    {
      name: "Dr. Ayesha Rahman",
      year: "Class of 2008",
      achievement: "Medical Doctor at Apollo Hospital",
      story: "From the classrooms of Bintul-Huda to serving patients across Karnataka, my journey began here with dedicated teachers who believed in me.",
      image: "👨‍⚕️"
    },
    {
      name: "Mohammed Farhan",
      year: "Class of 2012",
      achievement: "Software Engineer at Tech Mahindra",
      story: "The foundation in English and computer education I received here opened doors to opportunities I never imagined possible.",
      image: "👨‍💻"
    },
    {
      name: "Fatima Khanum",
      year: "Class of 2015",
      achievement: "Entrepreneur & Business Owner",
      story: "Bintul-Huda taught me more than academics—it taught me confidence. Today, I run my own successful business in Bangalore.",
      image: "👩‍💼"
    }
  ];

  return (
    <section id="alumni" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Our Pride</span>
          </div>
          <h2 className="mb-4">Alumni Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our graduates are making their mark across the world, from medicine to technology to entrepreneurship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                {story.image}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{story.name}</h3>
              <p className="text-primary text-sm text-center mb-1">{story.achievement}</p>
              <p className="text-xs text-muted-foreground text-center mb-4">{story.year}</p>
              <p className="text-muted-foreground text-sm italic">"{story.story}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/alumni">
            <Button size="lg" className="group">
              View All Alumni Stories
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AlumniPreview;
