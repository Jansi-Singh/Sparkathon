
import { HeroSection } from "@/components/ui/hero-section-dark";

const Hero = () => {
  return (
    <HeroSection
      title="AI-Powered Shopping Experience"
      subtitle={{
        regular: "Shop Smarter with ",
        gradient: "SmartMart AI",
      }}
      description="Connect with Walmart's live inventory, get personalized recommendations, and chat with AI for seamless shopping. Pick up in-store or get home delivery."
      ctaText="Start Shopping Now"
      ctaHref="#"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1248&h=765&fit=crop&crop=center",
        dark: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1248&h=765&fit=crop&crop=center",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.3,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  );
};

export default Hero;
