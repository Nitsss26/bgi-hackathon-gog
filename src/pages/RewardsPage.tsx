import React from 'react';
import { Trophy, Medal, Award, Briefcase, Rocket, Star, Lightbulb, Users } from 'lucide-react';

export function RewardsPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Prizes & <span className="text-[#eab308]">Rewards</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Compete for a massive prize pool and incredible career opportunities. Rewards are distributed per problem statement.
          </p>
        </div>

        {/* Main Prize Pool */}
        <div className="bg-[#0f172a] border border-[#eab308]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(234,179,8,0.1)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#eab308]/10 blur-[100px] rounded-full" />
          
          <div className="text-center relative z-10 mb-12">
            <h2 className="text-[#eab308] font-bold tracking-[0.3em] uppercase text-sm mb-2">Total Prize Pool</h2>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">₹6,00,000</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border border-yellow-400/30 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform">
              <Trophy size={48} className="text-yellow-400 mx-auto mb-4" />
              <div className="text-yellow-400 font-black text-xl uppercase tracking-wider mb-2">1st Prize</div>
              <div className="text-4xl font-black text-white mb-2">₹25,000</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Per Problem Statement</div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-400/20 to-slate-600/5 border border-slate-400/30 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform">
              <Medal size={48} className="text-slate-300 mx-auto mb-4" />
              <div className="text-slate-300 font-black text-xl uppercase tracking-wider mb-2">2nd Prize</div>
              <div className="text-4xl font-black text-white mb-2">₹12,000</div>
              <div className="text-slate-400 text-xs uppercase tracking-widest">Per Problem Statement</div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
            Additional Benefits of Participation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Certificates", desc: "Excellence certificates for winners, participation certificates for all.", color: "text-blue-400", bg: "bg-blue-400/10" },
              { icon: Briefcase, title: "Internships", desc: "Internship & placement opportunities for top-performing teams.", color: "text-green-400", bg: "bg-green-400/10" },
              { icon: Rocket, title: "Incubation", desc: "Startup & incubation support for promising ideas.", color: "text-purple-400", bg: "bg-purple-400/10" },
              { icon: Lightbulb, title: "Product Dev", desc: "Support to convert best ideas into workable prototypes.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { icon: Users, title: "Networking", desc: "Industry exposure and networking with experts and professionals.", color: "text-pink-400", bg: "bg-pink-400/10" },
              { icon: Star, title: "LoR", desc: "Letter of Recommendation (LoR) for outstanding participants.", color: "text-orange-400", bg: "bg-orange-400/10" }
            ].map((benefit, i) => (
              <div key={i} className="bg-[#0f172a] border border-white/5 p-6 rounded-2xl shadow-lg hover:bg-white/5 transition-colors">
                <div className={`w-12 h-12 rounded-xl ${benefit.bg} flex items-center justify-center mb-4 ${benefit.color}`}>
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
