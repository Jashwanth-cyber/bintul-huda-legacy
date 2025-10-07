import React from "react";
import { Button } from "@/components/ui/button";
// Placeholder image imports - replace with actual gallery images in your assets folder
import galleryImg1 from "@/assets/gallery-1.jpg"; // e.g., classroom activity
import galleryImg2 from "@/assets/gallery-2.jpg"; // e.g., sports day
import galleryImg3 from "@/assets/gallery-3.jpg"; // e.g., science lab
import galleryImg4 from "@/assets/gallery-4.jpg"; // e.g., cultural event
import galleryImg5 from "@/assets/gallery-5.jpg"; // e.g., library reading
import galleryImg6 from "@/assets/gallery-6.jpg"; // e.g., annual function
import galleryImg7 from "@/assets/gallery-7.jpg"; // e.g., teacher-student interaction
import galleryImg8 from "@/assets/gallery-8.jpg"; // e.g., field trip
import galleryImg9 from "@/assets/gallery-9.jpg"; // e.g., art class
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    { src: galleryImg1, alt: "Students engaged in classroom activity", caption: "Interactive Learning" },
    { src: galleryImg2, alt: "Sports day event", caption: "Cultural Celebrations" },
    { src: galleryImg3, alt: "Science lab experiment", caption: "Hands-on Science" },
    { src: galleryImg4, alt: "Cultural program performance", caption: "Cultural Activities" },
    { src: galleryImg5, alt: "Students reading in library", caption: "Physical Education" },
    { src: galleryImg6, alt: "Annual function stage", caption: "Sports Day" },
    { src: galleryImg7, alt: "Teacher guiding students", caption: "Mentorship Moments" },
    { src: galleryImg8, alt: "Field trip exploration", caption: "Educational Achievements" },
    { src: galleryImg9, alt: "Art class creativity", caption: "Creative Arts" },
  ];

  return (
    <>
      <Navigation />
      <section id="gallery" className="py-32 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden ">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Vibrant Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the joyful and enriching experiences at Bintul-Huda Memorial School. 
            Explore moments that define our community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-card border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="font-bold text-lg mb-1">{image.caption}</h3>
                <p className="text-sm opacity-90">Discover more</p>
              </div>
              
              {/* Floating Badge */}
              {/* <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" style={{ animationDelay: "0.2s" }}>
                View
              </div> */}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <p className="text-muted-foreground mb-6">Want to see more? Visit our campus or join our community.</p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
            Schedule a Visit
          </Button>
        </div>
      </div>

      {/* Custom CSS for animations - Add to your global styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
    <Footer />
    </>
  );
};

export default Gallery;