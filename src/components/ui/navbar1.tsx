
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=32&h=32&fit=crop&crop=center",
    alt: "SmartMart logo",
    title: "SmartMart",
  },
  menu = [
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
  ],
  mobileExtraLinks = [
    { name: "Support", url: "#" },
    { name: "Contact", url: "#" },
    { name: "About", url: "#" },
    { name: "Blog", url: "#" },
  ],
  auth = {
    login: { text: "Sign In", url: "#" },
    signup: { text: "Get Started", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {logo.title}
              </h1>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {logo.title}
              </h1>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-gray-400 hover:text-white border-gray-600 hover:bg-gray-800">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-gray-900 border-gray-800">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {logo.title}
                      </h1>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t border-gray-800 py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-gray-300">
        <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent hover:bg-gray-800">{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-gray-300">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0 border-gray-800">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline text-gray-300 hover:text-white">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-gray-800 hover:text-white"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold text-white">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-gray-300">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-gray-300 hover:text-white">
      {item.title}
    </a>
  );
};

export { Navbar1 };
