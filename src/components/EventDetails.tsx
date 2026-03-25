import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, CreditCard, Clock, CheckCircle2, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { cn } from '../lib/utils';

const timeline = [
  { date: "15 April 2026", event: "Registration Deadline", desc: "Last date to submit your team details and problem selection." },
  { date: "25 April 2026", event: "Idea Shortlisting", desc: "Announcement of teams selected for the grand finale." },
  { date: "13-14 May 2026", event: "Bhopal Finale", desc: "48-hour hackathon at BGI Bhopal Campus." },
  { date: "15-16 May 2026", event: "Indore Finale", desc: "48-hour hackathon at SDBC Indore Campus." }
];

const registrationSteps = [
  "Register on the official website",
  "Select venue and problem statement",
  "Fill in Team, SPOC, and Member details",
  "Pay registration fee"
];

export function EventDetails() {
  return (
    <SectionWrapper 
      id="timeline" 
      title="Event Roadmap" 
      subtitle="The journey from registration to the grand finale"
    >
      <div className="space-y-32">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-secondary via-brand-primary to-transparent opacity-20" />
              
              {timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 top-1 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center z-10 group-hover:bg-brand-secondary group-hover:border-brand-secondary transition-all duration-500 shadow-2xl group-hover:shadow-brand-secondary/20">
                    <Clock size={28} className="text-brand-secondary group-hover:text-white transition-colors" />
                  </div>
                  <div className="glass-premium p-10 rounded-[3rem] group-hover:bg-white/5 transition-all border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="text-brand-secondary font-black text-xs uppercase tracking-[0.3em] mb-4">{item.date}</div>
                    <h4 className="text-2xl font-black text-white mb-4 group-hover:text-brand-secondary transition-colors tracking-tight uppercase">{item.event}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium p-12 rounded-[3.5rem] border-white/5 bg-slate-900/50 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary shadow-2xl">
                  <ClipboardList size={32} />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Registration Process</h3>
              </div>
              <div className="space-y-8">
                {registrationSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-8 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-sm font-black text-slate-500 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                      {i + 1}
                    </div>
                    <span className="text-slate-400 font-bold text-lg group-hover:text-white transition-colors">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-premium p-12 rounded-[3.5rem] bg-brand-secondary relative overflow-hidden group shadow-2xl shadow-brand-secondary/20 border-white/10"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white shadow-2xl">
                    <CreditCard size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Registration Fee</h3>
                </div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-7xl font-black text-white tracking-tighter">₹1,000</span>
                  <span className="text-white/70 font-black uppercase tracking-[0.3em] text-xs">/ Team</span>
                </div>
                <p className="text-white/80 font-bold mb-12 text-xl leading-relaxed">Per problem statement (Team of 1–5 members)</p>
                
                <div className="space-y-6 pt-12 border-t border-white/20">
                  <div className="flex items-center gap-5 text-sm font-black text-white uppercase tracking-wide">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-2xl">
                      <CheckCircle2 size={16} />
                    </div>
                    Full refund if idea not shortlisted
                  </div>
                  <div className="flex items-center gap-5 text-sm font-black text-white uppercase tracking-wide">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shadow-2xl">
                      <CheckCircle2 size={16} />
                    </div>
                    Full refund if problem statement cancelled
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats / Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: <Clock size={32} />, label: "Duration", value: "48 Hours" },
            { icon: <Users size={32} />, label: "Participants", value: "500+ Expected" },
            { icon: <Trophy size={32} />, label: "Prizes", value: "₹2.5L+ Total" },
            { icon: <MapPin size={32} />, label: "Venues", value: "Bhopal & Indore" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-premium p-12 rounded-[3.5rem] text-center group hover:bg-white/5 transition-all border-white/5 shadow-2xl"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-brand-secondary mx-auto mb-10 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                {stat.icon}
              </div>
              <div className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em] mb-3">{stat.label}</div>
              <div className="text-3xl font-black text-white tracking-tighter uppercase">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
