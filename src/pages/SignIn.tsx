
import { AuthUI } from "@/components/ui/auth-ui";

const SignIn = () => {
  const smartMartImage = {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
    alt: "Smart shopping with technology"
  };

  const smartMartQuote = {
    text: "SmartMart's AI-powered recommendations have transformed how I shop. I save time, money, and never miss the best deals at Walmart.",
    author: "Maria Rodriguez, SmartMart User"
  };

  return <AuthUI image={smartMartImage} quote={smartMartQuote} />;
};

export default SignIn;