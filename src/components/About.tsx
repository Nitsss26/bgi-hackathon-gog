import React from 'react';
import { motion } from 'motion/react';
import { Award, Building2, GraduationCap, Users, ShieldCheck, Zap } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const bgiInstitutions = [
  "Bansal Institute of Science & Technology (BIST), Bhopal",
  "Bansal Institute of Research & Technology (BIRT), Bhopal",
  "Bansal Institute of Research, Technology & Science (BIRTS), Bhopal",
  "Bansal College of Pharmacy, Bhopal",
  "Bansal College of Nursing, Bhopal",
  "Bansal College of Engineering, Mandideep",
  "Sushila Devi Bansal College of Technology, Indore",
  "Sushila Devi Bansal College of Engineering, Indore"
];

export function About() {
  return (
    <SectionWrapper 
      id="about" 
      title="Legacy of Excellence" 
      subtitle="Innovating for a Developed India"
    >
      <div className="space-y-32">
        {/* Hackathon Overview */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-10">
              <p className="text-2xl text-slate-300 leading-relaxed font-medium">
                BGI Hackathon 2026 is a national-level innovation event aimed at fostering technology-driven solutions to real-world challenges, aligned with India’s vision of becoming a developed nation by 2047.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="glass-premium p-10 rounded-[2.5rem] group hover:bg-white/5 transition-colors border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-2xl">
                    <Award size={32} />
                  </div>
                  <h4 className="font-black text-2xl mb-4 text-white tracking-tight uppercase">National Level</h4>
                  <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors">A prestigious platform for students across India to showcase their talent and compete at the highest level.</p>
                </div>
                <div className="glass-premium p-10 rounded-[2.5rem] group hover:bg-white/5 transition-colors border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors shadow-2xl">
                    <Users size={32} />
                  </div>
                  <h4 className="font-black text-2xl mb-4 text-white tracking-tight uppercase">Collaboration</h4>
                  <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors">Promoting industry-academia engagement and fostering a culture of teamwork and innovation.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-premium p-12 rounded-[3.5rem] border-white/5 bg-slate-900/50 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-4xl font-black mb-10 flex items-center gap-5 text-white tracking-tighter uppercase">
                <Building2 className="text-brand-secondary" size={40} />
                About BGI
              </h3>
              <p className="text-slate-300 mb-10 text-xl leading-relaxed font-medium">
                Bansal Group of Institutes (BGI), Madhya Pradesh, established under the Shriniwas Education Society, is one of Central India’s leading educational groups with over 26 years of academic excellence.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-xl mb-2 uppercase tracking-tight">Academic Excellence</h4>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">Offers comprehensive UG and PG programs across Engineering, Management, Pharmacy, and Nursing with a focus on holistic development.</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-xl mb-2 uppercase tracking-tight">Wide Presence</h4>
                    <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">State-of-the-art campuses strategically located in Bhopal, Mandideep, and Indore, providing world-class infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Institutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-premium p-16 rounded-[4rem] bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-black mb-4 text-white tracking-tighter uppercase">BGI Institutions</h3>
                <div className="w-20 h-1.5 bg-brand-secondary mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bgiInstitutions.map((inst, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/5 transition-all text-sm font-bold text-slate-300 flex items-center justify-center text-center leading-relaxed shadow-2xl group"
                  >
                    <span className="group-hover:text-white transition-colors">{inst}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
