import React from 'react';
import { Building2, GraduationCap, Award, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            About <span className="text-[#eab308]">BGI</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Bansal Group of Institutes (BGI), Madhya Pradesh, established under the Shriniwas Education Society, is one of Central India's leading educational groups with over 26 years of academic excellence.
          </p>
        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Building2, label: "Campuses", value: "3 Locations", color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: GraduationCap, label: "Institutions", value: "8 Institutes", color: "text-green-400", bg: "bg-green-400/10" },
            { icon: Award, label: "Excellence", value: "26+ Years", color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { icon: BookOpen, label: "Programs", value: "UG & PG", color: "text-purple-400", bg: "bg-purple-400/10" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0f172a] border border-white/5 p-6 rounded-2xl text-center shadow-lg">
              <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-xl md:text-2xl font-black mb-1 text-white tracking-tight">{stat.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Institutions List */}
        <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 border-b border-white/10 pb-4">
            BGI Institutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Bansal Institute of Science & Technology (BIST), Bhopal",
              "Bansal Institute of Research & Technology (BIRT), Bhopal",
              "Bansal Institute of Research, Technology & Science (BIRTS), Bhopal",
              "Bansal College of Pharmacy, Bhopal",
              "Bansal College of Nursing, Bhopal",
              "Bansal College of Engineering, Mandideep",
              "Sushila Devi Bansal College of Technology, Indore",
              "Sushila Devi Bansal College of Engineering, Indore"
            ].map((inst, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#eab308] mt-2 flex-shrink-0" />
                <p className="text-slate-300 font-medium">{inst}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 text-[#eab308]">
              Programs Offered
            </h3>
            <p className="text-slate-300 leading-relaxed">
              BGI offers UG and PG programs including B.Tech, M.Tech, BBA, MBA, MCA, B.Pharm, M.Pharm, GNM, and B.Sc across Engineering, Management, Pharmacy, and Nursing.
            </p>
          </div>
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 text-[#eab308]">
              Our Commitment
            </h3>
            <p className="text-slate-300 leading-relaxed">
              BGI is committed to quality education, innovation, and industry-oriented learning, with a strong focus on research, skill development, and entrepreneurship.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
