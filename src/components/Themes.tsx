import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Brain, Car, Sprout, Smartphone, Shield, Cpu, Building2, Stethoscope, Rocket, Lightbulb, ChevronDown } from 'lucide-react';
import { VENUES } from '../constants';
import { cn } from '../lib/utils';
import { SectionWrapper } from './SectionWrapper';

const iconMap: { [key: string]: React.ReactNode } = {
  Brain: <Brain size={24} />,
  Car: <Car size={24} />,
  Sprout: <Sprout size={24} />,
  Smartphone: <Smartphone size={24} />,
  Shield: <Shield size={24} />,
  Cpu: <Cpu size={24} />,
  Building2: <Building2 size={24} />,
  Stethoscope: <Stethoscope size={24} />,
};

export function Themes() {
  const [activeVenue, setActiveVenue] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <SectionWrapper 
      id="themes" 
      title="Innovation Tracks" 
      subtitle="Choose your challenge and build the future"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
        <div className="flex flex-col gap-8">
          <p className="text-slate-400 max-w-xl text-xl md:text-2xl leading-relaxed font-medium">
            Select your venue to explore specific problem statements and challenges.
          </p>
          <div className="glass-premium p-2 rounded-full flex gap-2 self-start border-white/5 shadow-2xl">
            {VENUES.map((venue, idx) => (
              <button
                key={venue.city}
                onClick={() => {
                  setActiveVenue(idx);
                  setSelectedTheme(null);
                }}
                className={cn(
                  "px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl",
                  activeVenue === idx ? "bg-brand-secondary text-white shadow-brand-secondary/20" : "text-slate-500 hover:text-white hover:bg-white/5"
                )}
              >
                {venue.city}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {VENUES[activeVenue].themes.map((theme, idx) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "glass-premium rounded-[3.5rem] p-12 hover:bg-white/5 transition-all duration-500 group cursor-pointer relative overflow-hidden border-white/5 shadow-2xl",
              selectedTheme === theme.id ? "ring-4 ring-brand-secondary/50 bg-white/10" : ""
            )}
            onClick={() => setSelectedTheme(selectedTheme === theme.id ? null : theme.id)}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lightbulb size={100} />
            </div>
            
            <div className="relative z-10">
              <div className={cn(
                "w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all shadow-2xl",
                selectedTheme === theme.id ? "bg-brand-secondary text-white" : "bg-white/5 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white"
              )}>
                {iconMap[theme.icon] || <Rocket size={40} />}
              </div>
              <h3 className="text-3xl font-black mb-8 leading-none tracking-tighter uppercase text-white group-hover:text-brand-secondary transition-colors">{theme.name}</h3>
              
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em]">
                  {theme.problems.length} Problem Statements
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  selectedTheme === theme.id ? "bg-brand-secondary text-white rotate-180" : "bg-white/5 text-white"
                )}>
                  <ChevronDown size={20} />
                </div>
              </div>

              <AnimatePresence>
                {selectedTheme === theme.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-10 space-y-6 overflow-hidden"
                  >
                    {theme.problems.map((prob, i) => (
                      <div key={prob.id} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all shadow-2xl group/item">
                        <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em] mb-4">0{i + 1} | {prob.id}</div>
                        <div className="text-xl font-black mb-4 leading-tight text-white tracking-tight uppercase group-hover/item:text-brand-secondary transition-colors">{prob.title}</div>
                        <p className="text-sm text-slate-500 leading-relaxed group-hover/item:text-slate-400 transition-colors">{prob.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
