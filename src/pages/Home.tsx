import React from 'react';
import { Hero } from '../components/Hero';
import { motion } from 'motion/react';
import { Trophy, MapPin, Calendar, Users, ArrowRight, Lightbulb, Target, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <Hero />
      
      {/* Quick Stats / Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: "Total Prize Pool", value: "₹6,00,000", color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { icon: MapPin, label: "Venues", value: "Bhopal & Indore", color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: Target, label: "Themes", value: "8 Tracks", color: "text-green-400", bg: "bg-green-400/10" },
            { icon: Clock, label: "Duration", value: "48 Hours", color: "text-purple-400", bg: "bg-purple-400/10" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f172a] border border-white/5 p-6 rounded-2xl text-center shadow-lg hover:border-white/10 transition-colors"
            >
              <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-2xl md:text-3xl font-black mb-1 text-white tracking-tight">{stat.value}</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              BGI Hackathon <span className="text-[#eab308]">2026</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              A national-level innovation event aimed at fostering technology-driven solutions to real-world challenges, aligned with India's vision of becoming a developed nation by 2047. The event promotes innovation, collaboration, and industry-academia engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/themes" className="px-8 py-3 bg-[#eab308] text-[#0f172a] font-bold rounded uppercase tracking-wider hover:bg-[#ca9a04] transition-colors flex items-center gap-2">
                Explore Themes <ArrowRight size={18} />
              </Link>
              <Link to="/guidelines" className="px-8 py-3 bg-white/5 text-white border border-white/10 font-bold rounded uppercase tracking-wider hover:bg-white/10 transition-colors">
                Read Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">Event Timeline</h2>
          <p className="text-slate-400">Mark your calendars for these important dates</p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />
          
          <div className="space-y-8">
            {[
              { date: "27 March 2026", title: "Problem Statement Release", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-400/20" },
              { date: "27 Mar – 25 Apr 2026", title: "Registration & Idea Submission", icon: Users, color: "text-blue-400", bg: "bg-blue-400/20" },
              { date: "6, 13, 20 April 2026", title: "Q&A / Webinars", icon: Zap, color: "text-purple-400", bg: "bg-purple-400/20" },
              { date: "26 – 30 April 2026", title: "Screening Process", icon: Target, color: "text-orange-400", bg: "bg-orange-400/20" },
              { date: "30 April 2026", title: "Result Declaration", icon: Trophy, color: "text-green-400", bg: "bg-green-400/20" },
              { date: "13–14 May 2026", title: "Hackathon (Bhopal Venue)", icon: MapPin, color: "text-rose-400", bg: "bg-rose-400/20" },
              { date: "15–16 May 2026", title: "Hackathon (Indore Venue)", icon: MapPin, color: "text-teal-400", bg: "bg-teal-400/20" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-[#0f172a] border-4 border-[#020617] flex items-center justify-center z-10">
                  <div className={`w-full h-full rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                    <item.icon size={16} />
                  </div>
                </div>
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-[#0f172a] p-4 md:p-6 rounded-2xl border border-white/5 shadow-lg hover:border-white/10 transition-colors inline-block w-full xl:w-auto">
                    <div className={`flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="text-[#eab308] font-bold text-sm whitespace-nowrap">{item.date}</span>
                      <span className="hidden xl:inline text-white/30">•</span>
                      <span className="text-white font-bold text-base md:text-lg whitespace-nowrap">{item.title}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
