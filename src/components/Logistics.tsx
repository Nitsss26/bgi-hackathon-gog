import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Wifi, Shield, HelpCircle, Hotel, MapPin } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const facilities = [
  { icon: Wifi, title: "High-Speed Internet", desc: "Dedicated Wi-Fi for all participants throughout the event." },
  { icon: Coffee, title: "Food & Refreshments", desc: "Meals and refreshments provided during the 48-hour hackathon." },
  { icon: Shield, title: "24/7 Security", desc: "Round-the-clock security and medical assistance at the venue." },
  { icon: HelpCircle, title: "Mentorship", desc: "Access to technical mentors and industry experts for guidance." }
];

export function Logistics() {
  return (
    <SectionWrapper 
      id="logistics" 
      title="Support & Facilities" 
      subtitle="We ensure a comfortable and productive environment"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-premium p-12 rounded-[3rem] border-white/5 bg-white/5"
        >
          <div className="flex items-center gap-5 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              <Coffee size={28} />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tighter">On-Site Facilities</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {facilities.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accommodation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-premium p-12 rounded-[3rem] relative overflow-hidden flex flex-col justify-center border-white/5 bg-slate-900/50"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-10 shadow-2xl">
              <Hotel size={32} />
            </div>
            <h3 className="text-4xl font-black mb-8 text-white tracking-tighter">Accommodation</h3>
            <p className="text-slate-400 text-xl leading-relaxed mb-10">
              The organizing team will assist with accommodation guidance. However, participants must arrange and bear their own travel and stay expenses.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Nearby hotel recommendations available on request.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
