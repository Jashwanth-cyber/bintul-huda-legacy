import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Jaffer from "@/assets/Jaffer.jpg";

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
      story: "My years at this school have been a wonderful journey of learning and growth. The principal, teachers, and staff have always been supportive, approachable, and truly dedicated to the success of every student. Their constant encouragement not only strengthened my academics but also helped me build confidence and values that I will carry for life. I feel proud and grateful to have been part of such a caring and inspiring school community.",
      image: Jaffer
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
              <img
                src={story.image}
                alt="story"
                className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mb-4 mx-auto object-cover p-1"
              />
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
