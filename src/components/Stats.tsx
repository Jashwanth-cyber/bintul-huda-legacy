import { useEffect, useState, useRef } from "react";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Award,
      value: 38,
      suffix: "+",
      label: "Years of Excellence",
      color: "text-primary",
    },
    {
      icon: Users,
      value: 6500,
      suffix: "+",
      label: "Students Enrolled",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      value: 100,
      suffix: "+",
      label: "Expert Teachers",
      color: "text-accent",
    },
    {
      icon: GraduationCap,
      value: 6561,
      suffix: "+",
      label: "Successful Graduates",
      color: "text-destructive",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary to-secondary/80 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">The Best School For Your Kid</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Celebrating decades of educational excellence and student success in Alipur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-4xl font-bold mb-2">
                  {isVisible ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-white/90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
