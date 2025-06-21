
import React from "react";
import { useId } from "react";
import { Brain, MessageCircle, MapPin, Truck } from "lucide-react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturesSectionWithCardGradient() {
  const features: FeatureCard[] = [
    {
      title: "AI-Powered Recommendations",
      description: "Get personalized product suggestions based on your preferences, shopping history, and quiz responses.",
      icon: <Brain className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Smart Shopping Assistant", 
      description: "Chat with our AI bot to check availability, compare options, and manage your cart effortlessly.",
      icon: <MessageCircle className="h-6 w-6 text-purple-400" />
    },
    {
      title: "Real-Time Inventory",
      description: "See exactly what's available at your local Walmart stores and warehouses in real-time.",
      icon: <MapPin className="h-6 w-6 text-green-400" />
    },
    {
      title: "Flexible Pickup & Delivery",
      description: "Choose convenient store pickup or home delivery options that fit your schedule.",
      icon: <Truck className="h-6 w-6 text-orange-400" />
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Revolutionary Shopping Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of retail with our cutting-edge technology designed to make your Walmart shopping effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:scale-105"
            >
              <Grid size={20} />
              <div className="relative z-20 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white relative z-20 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm font-normal relative z-20 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-4">
            <span className="text-sm text-gray-400">Powered by:</span>
            <div className="flex items-center space-x-6">
              <span className="text-blue-400 font-semibold">Walmart API</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span className="text-purple-400 font-semibold">AI Technology</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span className="text-green-400 font-semibold">Real-time Data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-blue-500/10 to-purple-500/10 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-white/10 fill-white/5"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
