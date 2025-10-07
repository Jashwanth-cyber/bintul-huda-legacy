import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft, Briefcase, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Mannan from "@/assets/Mannan.jpg";
import Jaffer from "@/assets/Jaffer.jpg";
import Hasnath from "@/assets/Hasnath.jpg";
import Zaffer from "@/assets/Zaffer.jpg";
export default function Alumni() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allAlumni = [
    {
     name: "Syed Mannan Raza",
      year: "1997-1998 batch",
      achievement: "Bachelor of Engineering ",
      story: "The campus itself was vast and lively, with enough space for us to engage in different sports such as cricket, badminton, and kho-kho. Beyond academics, my teachers encouraged me to learn Hindi, even though it was not part of our curriculum at that time. That encouragement stayed with me, and today it has become a valuable skill that allows me to teach my own children.",
      image: Mannan,
      category: "Engineering"
    },
      
    {
      name: "Mohammed Jaffer",
      year: "2011-12 batch",
      achievement: "Bachelor of Engineering",
      story: "My years at this school have been a wonderful journey of learning and growth. The principal, teachers, and staff have always been supportive, approachable, and truly dedicated to the success of every student. Their constant encouragement not only strengthened my academics but also helped me build confidence and values that I will carry for life. I feel proud and grateful to have been part of such a caring and inspiring school community.",
      image: Jaffer,
      category: "Technology"
    },
    {
       name: "Hasnath Ahmed Syeda",
      year: "1997-98 first batch",
      achievement: "Enterpreneur & Business Owner",
      story: "My school days remain some of the most memorable and formative years of my life. One of the things that stood out most was the dedication and cooperation of my teachers. They were always encouraging, approachable, and supportive, creating an environment where learning felt natural and enjoyable.",
      image: Hasnath,
      category: "Business"
    },
    {
       name: "Syed Zaffer Ahmed",
      year: "2012-13 batch",
      achievement: "Bachelor of Pharmacy",
      story: "Bintul huda not only given me the education but taught me value of time, value of respect, value of competition, growth etc. A school which shaped me",
      image: Zaffer,
      category: "Business"
    },
   
  ];

  const stats = [
    { icon: GraduationCap, value: "2000+", label: "Alumni Worldwide" },
    { icon: Briefcase, value: "85%", label: "Employment Rate" },
    { icon: Award, value: "50+", label: "Awards & Recognition" },
    { icon: Heart, value: "30+", label: "Alumni Contributors" }
  ];

  // Pagination logic
  const totalPages = Math.ceil(allAlumni.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAlumni = allAlumni.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-40 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Since 1985</span>
            </div>
            <h1 className="mb-6">Our Alumni Success Stories</h1>
            <p className="text-lg text-muted-foreground">
              For nearly four decades, Bintul-Huda Memorial School has been shaping futures.
              Our alumni stand as proud testimonies to the quality education and values we impart.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentAlumni.map((alumni, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={alumni.image}
                  alt="story"
                  className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mb-4 mx-auto object-cover"
                />
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-2">{alumni.name}</h3>
                  <p className="text-primary font-semibold mb-1">{alumni.achievement}</p>
                  <p className="text-sm text-muted-foreground">{alumni.year}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-secondary/20 rounded-full text-xs font-medium text-secondary-foreground">
                    {alumni.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  "{alumni.story}"
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => handlePageChange(i + 1)}
                    isActive={currentPage === i + 1}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="mb-6">Are You an Alumni?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear your story! Share your journey and inspire current students.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Share Your Story
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};


