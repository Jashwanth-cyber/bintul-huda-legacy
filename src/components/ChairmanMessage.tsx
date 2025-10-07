import { Quote } from "lucide-react";
import chairmanImage from "@/assets/chairman.png";

const ChairmanMessage = () => {
  return (
    <section id="chairman" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Leadership</span>
            </div>
            <h2 className="mb-4">Message from the Chairman</h2>
          </div>

          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Chairman Photo */}
              <div className="lg:col-span-1 relative">
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={chairmanImage}
                    alt="Chairman of Bintul-Huda Memorial English School"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r"></div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 p-8 lg:p-12 relative">
                <Quote className="w-16 h-16 text-primary/20 absolute top-4 right-4" />
                
                <div className="relative z-10">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Binhal Huda is a vision that has remained unwavering over the years. Despite inherent 
                    challenges, we have continued to nurture the intent and vitality to empower young minds 
                    through the finest quality of education.
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We are honored to be recognized as one of the oldest and most respected educational 
                    institutions in the region. Each year, we take pride in celebrating the achievements 
                    of our students in academics, sports, and the arts.
                  </p>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    The dedication and commitment of our staff to upholding the highest standards of 
                    education have been instrumental in shaping Binhal Huda into a center of excellence, 
                    known for its holistic approach to learning.
                  </p>

                  <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                    <p className="text-base text-foreground italic">
                      "We extend our heartfelt gratitude to all our donors and well-wishers who have 
                      been an integral part of the Binhal Huda journey. Your support continues to 
                      inspire us to reach greater heights."
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="font-bold text-xl text-foreground">Mir Ali Reza</p>
                    <p className="text-muted-foreground">Chairman, Board of Trustees</p>
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

export default ChairmanMessage;
