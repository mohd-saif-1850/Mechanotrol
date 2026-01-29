"use client";

import {
  Wrench,
  Gauge,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  Replace,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Vehicle Diagnostics",
      desc:
        "Advanced AI-powered diagnostics that scan and analyze your vehicle’s health in real-time. Detect faults, identify performance drops, and prevent breakdowns before they happen.",
      icon: <Gauge className="w-12 h-12 text-[#FF6A00]" />,
    },
    {
      title: "Maintenance Requests",
      desc:
        "A smart request system where users can submit, track, and manage all maintenance needs. From oil changes to major repairs, everything stays organized and transparent.",
      icon: <Wrench className="w-12 h-12 text-[#FF6A00]" />,
    },
    {
      title: "Part Replacement",
      desc:
        "Order genuine mechanical and electronic components with real-time availability updates. Our system ensures fast sourcing and accurate tracking of replacement parts.",
      icon: <Replace className="w-12 h-12 text-[#FF6A00]" />,
    },
    {
      title: "Emergency Support",
      desc:
        "Instant access to urgent on-road support for breakdowns, accidents, or malfunctioning systems. Our team ensures rapid assistance when you need it the most.",
      icon: <AlertTriangle className="w-12 h-12 text-[#FF6A00]" />,
    },
    {
      title: "Performance Optimization",
      desc:
        "AI-based performance insights that help increase fuel efficiency, engine life, and operational smoothness. Monitor, improve, and maintain peak performance.",
      icon: <ShieldCheck className="w-12 h-12 text-[#FF6A00]" />,
    },
    {
      title: "Service History Tracking",
      desc:
        "A complete digital log of every past service, repair, and inspection. Stay updated with your maintenance cycles and ensure long-lasting reliability.",
      icon: <BookOpen className="w-12 h-12 text-[#FF6A00]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-orange-50 py-20 px-6">
      
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm uppercase tracking-[4px] font-semibold text-gray-500">
          Mechanotrol Tech
        </h2>

        <h1 className="mt-2 text-5xl font-extrabold bg-gradient-to-r from-[#FF3B30] via-[#FF6A00] to-[#FF8C00] text-transparent bg-clip-text">
          Our Services
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Experience a new era of smart mechanical and automotive servicing. Powered by AI, designed for precision, and built for performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {services.map((s, i) => (
          <div
            key={i}
            className="
              group
              bg-white/70 
              backdrop-blur-xl 
              border 
              border-white/50 
              shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              rounded-3xl 
              p-8 
              text-center 
              transition-all 
              duration-300 
              hover:shadow-[0_10px_40px_rgba(255,106,0,0.25)]
              hover:-translate-y-2
            "
          >
            <div className="flex justify-center">{s.icon}</div>

            <h3 className="mt-4 text-2xl font-bold bg-gradient-to-r from-[#FF3B30] to-[#FF6A00] text-transparent bg-clip-text">
              {s.title}
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 text-gray-500 text-sm tracking-wide">
        © {new Date().getFullYear()} Mechanotrol Tech - All Rights Reserved
      </div>
      
    </div>
  );
}
