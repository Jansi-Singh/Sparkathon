
import { AuthUI } from "@/components/ui/auth-ui";

const SignUp = () => {
  const smartMartImage = {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
    alt: "Smart technology and shopping innovation"
  };

  const smartMartQuote = {
    text: "Join thousands of smart shoppers who are saving money and time with SmartMart's AI-powered shopping assistant.",
    author: "Alex Chen, Early SmartMart Adopter"
  };

  return <AuthUI image={smartMartImage} quote={smartMartQuote} initialMode="signup" />;
};

export default SignUp;