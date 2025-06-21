const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              SmartMart
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Revolutionizing shopping with AI-powered recommendations and real-time inventory connections.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                <span className="text-sm font-bold text-white">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold text-white">in</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SmartMart. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Powered by:</span>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-blue-400 font-medium">Walmart API</span>
                <span className="text-purple-400 font-medium">OpenAI</span>
                <span className="text-green-400 font-medium">Real-time Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
