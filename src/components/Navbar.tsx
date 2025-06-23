import { Navbar1 } from "@/components/ui/navbar1";
import type { MenuItem } from "@/components/ui/navbar1";
import { Book, Sunset, Trees, Zap } from "lucide-react";

const Navbar = () => {
  const logo = {
    url: "#",
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=32&h=32&fit=crop&crop=center",
    alt: "SmartMart logo",
    title: "SmartMart",
  };

  const menu: MenuItem[] = [
    { title: "Home", url: "#" },
    {
      title: "Features",
      url: "#features",
      items: [
        {
          title: "AI Shopping",
          description: "Get personalized recommendations powered by AI",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Live Inventory",
          description: "Real-time access to Walmart's product catalog",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Smart Chat",
          description: "Chat with AI for seamless shopping assistance",
          icon: <Book className="size-5 shrink-0" />,
          url: "#features",
        },
        {
          title: "Quick Pickup",
          description: "In-store pickup and home delivery options",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#features",
        },
      ],
    },
    {
      title: "How it Works",
      url: "#how-it-works",
    },
    {
      title: "Pricing",
      url: "#pricing",
    },
    {
      title: "FAQ",
      url: "#faq",
    },
  ];

  const mobileExtraLinks = [
    { name: "Support", url: "#" },
    { name: "Contact", url: "#" },
    { name: "About", url: "#" },
    { name: "Blog", url: "#" },
  ];

  const auth = {
    login: { text: "Sign In", url: "/signin" },
    signup: { text: "Get Started", url: "/signup" },
  };

  return <Navbar1 logo={logo} menu={menu} mobileExtraLinks={mobileExtraLinks} auth={auth} />;
};

export default Navbar;
