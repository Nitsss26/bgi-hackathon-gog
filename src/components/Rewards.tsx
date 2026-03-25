import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Star, CheckCircle2, Gift, Medal, Zap, Users, Rocket } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const benefits = [
  {
    title: "Winner Certificates",
    desc: "Prestigious certificates for top-performing teams in each category."
  },
  {
    title: "Participation Certificates",
    desc: "Digital certificates for all participants who complete the hackathon."
  },
  {
    title: "Expert Mentorship",
    desc: "Direct guidance from industry veterans and technical experts."
  },
  {
    title: "Networking",
    desc: "Connect with like-minded innovators and potential employers."
  },
  {
    title: "Internship Opportunities",
    desc: "Top performers may be considered for internships at BGI partner companies."
  },
  {
    title: "Incubation Support",
    desc: "Promising ideas may receive support for further development and startup launch."
  }
];

export function Rewards() {
  return (
    <SectionWrapper 
      id="rewards" 
      title="Prizes & Recognition" 
      subtitle="Rewarding the most innovative minds"
    >
      <div className="space-y-32">
        {/* Main Prizes */}
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { 
              rank: "Winner", 
              prize: "₹25,000", 
              icon: <Trophy className="text-brand-secondary" size={48} />, 
              color: "brand-secondary",
              desc: "Cash prize for the top-performing team across all problem statements at each venue."
            },
            { 
              rank: "Runner Up", 
              prize: "₹15,000", 
              icon: <Medal className="text-slate-400" size={48} />, 
              color: "slate-400",
              desc: "Recognition for the second-best solution demonstrating exceptional technical skill."
            },
            { 
              rank: "Special Mention", 
              prize: "₹10,000", 
              icon: <Star className="text-brand-accent" size={48} />, 
              color: "brand-accent",
              desc: "Awarded to the team with the most innovative and out-of-the-box idea."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-premium p-12 rounded-[4rem] text-center group hover:bg-white/5 transition-all border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform shadow-2xl">
                {item.icon}
              </div>
              
              <div className="text-brand-secondary font-black text-xs uppercase tracking-[0.4em] mb-4">{item.rank}</div>
              <div className="text-5xl font-black text-white mb-6 tracking-tighter uppercase">{item.prize}</div>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-16 rounded-[4rem] border-white/5 bg-slate-900/50 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-3xl font-black text-white mb-12 tracking-tighter uppercase flex items-center gap-5">
              <Zap className="text-brand-primary" size={40} />
              Participant Benefits
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-secondary mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-black text-white text-xl mb-2 uppercase tracking-tight">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium p-16 rounded-[4rem] border-white/5 bg-brand-secondary/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-secondary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-3xl font-black text-white mb-12 tracking-tighter uppercase flex items-center gap-5">
              <Trophy className="text-brand-secondary" size={40} />
              Special Categories
            </h3>
            
            <div className="space-y-8">
              {[
                { title: "Best All-Girls Team", prize: "₹5,000", desc: "Encouraging women in technology and innovation." },
                { title: "Most Creative Solution", prize: "₹5,000", desc: "For the most out-of-the-box thinking." },
                { title: "Best Social Impact", prize: "₹5,000", desc: "For solutions addressing critical social issues." }
              ].map((special, i) => (
                <div key={i} className="flex items-center justify-between p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-all group shadow-2xl">
                  <div>
                    <h4 className="font-black text-white text-xl mb-2 uppercase tracking-tight group-hover:text-brand-secondary transition-colors">{special.title}</h4>
                    <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">{special.desc}</p>
                  </div>
                  <div className="text-3xl font-black text-brand-secondary uppercase tracking-tighter">{special.prize}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
