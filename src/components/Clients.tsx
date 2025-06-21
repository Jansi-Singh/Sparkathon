
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const Clients = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <StaggerTestimonials />

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-400 bg-gray-800/30 rounded-2xl px-8 py-4 border border-gray-700/50">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-400 mr-2">50K+</span>
              <span>Active Users</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-400 mr-2">4.9★</span>
              <span>Average Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-400 mr-2">98%</span>
              <span>Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
