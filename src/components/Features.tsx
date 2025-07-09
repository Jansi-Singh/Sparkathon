
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const StatsSection= () => {
  const stats = [
    {
      icon: Users,
      number: "2M+",
      label: "Happy Customers",
      description: "Trust SmartMart AI for their shopping needs"
    },
    {
      icon: Clock,
      number: "70%",
      label: "Time Saved",
      description: "Average shopping time reduction with AI"
    },
    {
      icon: TrendingUp,
      number: "95%",

      label: "Accuracy Rate",
      description: "AI recommendation accuracy"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating",
      description: "Average user satisfaction score"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Millions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join millions of satisfied customers who have revolutionized their shopping experience with SmartMart AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {stat.number}
              </div>
              
              <div className="text-xl font-semibold text-purple-300 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
