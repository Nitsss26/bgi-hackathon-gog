import React from 'react';
import { MapPin, Cpu, Car, Leaf, Smartphone, Shield, Bot, Building, HeartPulse } from 'lucide-react';

const themesData = [
  {
    venue: "Bhopal (13–14 May 2026)",
    location: "Bansal Group of Institutes (BGI), Bhopal",
    themes: [
      {
        title: "AI, Data Science & Intelligent Automation",
        icon: Cpu,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        problems: [
          "AI-Powered Predictive Maintenance for Industrial IoT Systems.",
          "Intelligent Document Processing and Information Extraction for Legal/Medical Records."
        ]
      },
      {
        title: "Smart Mobility, EVs & Logistics",
        icon: Car,
        color: "text-green-400",
        bg: "bg-green-400/10",
        problems: [
          "Smart Fleet Management and Real-time Route Optimization System.",
          "EV Battery Health Monitoring and Predictive Degradation Analysis."
        ]
      },
      {
        title: "Agriculture, FoodTech & Rural Innovation",
        icon: Leaf,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        problems: [
          "IoT-based Precision Irrigation and Soil Health Monitoring Platform.",
          "Supply Chain Traceability for Agricultural Produce using Blockchain."
        ]
      },
      {
        title: "Mobile & Next-Gen App Innovation",
        icon: Smartphone,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        problems: [
          "Gamified Financial Literacy App for Rural and Semi-urban Populations.",
          "AI-driven Personal Health Assistant App for Elderly Care Management."
        ]
      }
    ]
  },
  {
    venue: "Indore (15–16 May 2026)",
    location: "Sushila Devi Bansal College (SDBC), Indore",
    themes: [
      {
        title: "Cybersecurity, Blockchain & Digital Trust",
        icon: Shield,
        color: "text-red-400",
        bg: "bg-red-400/10",
        problems: [
          "Decentralized Identity Verification System for Secure Access.",
          "AI-based Phishing Detection and Prevention Browser Extension."
        ]
      },
      {
        title: "Robotics, Drones & Industry 5.0",
        icon: Bot,
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        problems: [
          "Autonomous Drone Navigation for Warehouse Inventory Management.",
          "Collaborative Robot (Cobot) Interface for Safe Assembly Line Operations."
        ]
      },
      {
        title: "Smart Cities, Urban Innovation & Disaster Mgmt",
        icon: Building,
        color: "text-teal-400",
        bg: "bg-teal-400/10",
        problems: [
          "Real-time Urban Flood Prediction and Early Warning Alert System.",
          "Smart Waste Management and Collection Route Optimization."
        ]
      },
      {
        title: "HealthTech, BioTech & Digital Healthcare",
        icon: HeartPulse,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        problems: [
          "Telemedicine Platform with Integrated AI Pre-Diagnostics.",
          "Wearable Device Data Aggregation for Chronic Disease Management."
        ]
      }
    ]
  }
];

export function ThemesPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Themes & <span className="text-[#eab308]">Problem Statements</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Each venue features 4 unique themes with 8 problem statements (2 per theme). Participants must select one problem statement at the time of registration.
          </p>
        </div>

        {/* Venues & Themes */}
        <div className="space-y-16">
          {themesData.map((venueData, vIndex) => (
            <div key={vIndex} className="bg-[#0f172a] border border-white/5 rounded-3xl p-6 md:p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-full bg-[#eab308]/20 flex items-center justify-center text-[#eab308]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">{venueData.venue}</h2>
                  <p className="text-slate-400 text-sm font-medium">{venueData.location}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {venueData.themes.map((theme, tIndex) => (
                  <div key={tIndex} className="bg-[#020617] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
                    <div className="w-full flex items-center justify-between p-6 text-left border-b border-white/5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${theme.bg} flex items-center justify-center ${theme.color} flex-shrink-0`}>
                          <theme.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">{theme.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white/[0.02] flex-grow">
                      <h4 className="text-[#eab308] text-xs font-bold uppercase tracking-wider mb-4">Problem Statements</h4>
                      <ul className="space-y-4">
                        {theme.problems.map((problem, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">
                              {pIndex + 1}
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Rules */}
        <div className="mt-12 bg-blue-900/20 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-blue-400 font-bold uppercase tracking-wider mb-2 text-sm">Important Note</h3>
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
            <li>Teams may participate in both locations, but only one problem statement per location.</li>
            <li>Any member can be part of only one team at a particular location.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
