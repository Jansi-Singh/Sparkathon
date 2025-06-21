
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <BackgroundBeams className="opacity-50" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Start Your Smart Shopping Journey
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shopping Experience?
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of smart shoppers who save time and money with AI-powered recommendations and real-time inventory access.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-4 h-auto font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:border-gray-500 text-lg px-8 py-4 h-auto font-medium transition-all duration-200"
          >
            Schedule Demo
          </Button>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>✓ No credit card required • ✓ Setup in 2 minutes • ✓ Works with existing Walmart account</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
