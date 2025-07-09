
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="bg-gray-900">
        <Hero />
      </div>
      <div className="bg-gray-950">
        <Features />
      </div>
      <div className="bg-gray-900">
        <Clients />
      </div>
      <CTA />
      <div className="bg-gray-950">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
  const Index = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <CTASection />
      </div>
    );
  };
};

export default Index;


;