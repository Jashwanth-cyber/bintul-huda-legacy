import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import ChairmanMessage from "@/components/ChairmanMessage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Programs />
      <ChairmanMessage />
      <Footer />
    </div>
  );
};

export default Index;
