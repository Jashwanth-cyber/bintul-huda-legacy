import { BookOpen, Users, Award, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "First English-medium institution in Alipur, offering comprehensive curriculum",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Highly qualified staff dedicated to personalized student support",
      color: "bg-secondary",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Alumni thriving as engineers, doctors, and successful professionals",
      color: "bg-accent",
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Empowering minority community with accessible quality education",
      color: "bg-destructive",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group hover-lift bg-card rounded-2xl p-8 shadow-lg border border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
