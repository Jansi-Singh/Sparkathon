import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "SmartMart changed how I shop! The AI knows exactly what my family needs, and I can chat to check if items are in stock before driving to the store.",
    name: "Sarah Johnson",
    designation: "Busy Mom",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The personalized recommendations are spot-on. I discovered products I didn't even know I needed. The pickup process is seamless!",
    name: "Mike Chen",
    designation: "Tech Professional",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Love how I can budget better with real-time pricing and availability. The chatbot helps me find the best deals within my budget range.",
    name: "Emily Rodriguez",
    designation: "College Student",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "SmartMart's AI recommendations have revolutionized my shopping experience. I save hours every week!",
    name: "David Thompson",
    designation: "Business Owner",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The real-time inventory feature is a game-changer. No more wasted trips to the store!",
    name: "Lisa Park",
    designation: "Working Mother",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "I can't believe how accurate the AI is at predicting what I need. It's like having a personal shopping assistant!",
    name: "James Wilson",
    designation: "Retiree",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Clients = () => {
  return (
    <section className="w-full py-24 bg-gray-900">
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          What Our 
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}Smart Shoppers
          </span>
          {" "}Say
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Join thousands of satisfied customers who've revolutionized their shopping experience
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

      <div className="mt-16 text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-400 bg-gray-800/30 rounded-2xl px-8 py-4 border border-gray-700/50">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-400 mr-2">50K+</span>
            <span>Active Users</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-400 mr-2">4.9★</span>
            <span>Average Rating</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-400 mr-2">98%</span>
            <span>Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
