import { Baby, Smile, Users2, Sparkles } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Early Years",
      age: "3-5 Years",
      description: "Foundation building with play-based learning, developing social skills and curiosity",
      color: "bg-secondary",
      features: ["Creative Play", "Basic Literacy", "Social Skills"],
    },
    {
      icon: Smile,
      title: "Primary School",
      age: "6-10 Years",
      description: "Core academic subjects with emphasis on English proficiency and comprehensive development",
      color: "bg-primary",
      features: ["English Medium", "STEM Focus", "Sports & Arts"],
    },
    {
      icon: Users2,
      title: "Middle School",
      age: "11-14 Years",
      description: "Advanced curriculum preparing students for higher education and competitive exams",
      color: "bg-accent",
      features: ["Advanced Studies", "Computer Lab", "Career Guidance"],
    },
    {
      icon: Sparkles,
      title: "All-Round Development",
      age: "All Ages",
      description: "Holistic approach focusing on academic excellence, character building, and life skills",
      color: "bg-destructive",
      features: ["Value Education", "Extra Activities", "Community Service"],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Our Programs</span>
          </div>
          <h2 className="mb-4">We Meet Kids At Their Level</h2>
          <h2 className="mb-4">Regardless Of Their Age</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored educational programs designed to nurture every child's potential at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group hover-lift bg-card rounded-3xl p-8 shadow-lg border border-border relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative Background */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${program.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className={`text-sm font-semibold mb-4 ${program.color.replace('bg-', 'text-')}`}>
                    {program.age}
                  </p>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${program.color} rounded-full`}></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
