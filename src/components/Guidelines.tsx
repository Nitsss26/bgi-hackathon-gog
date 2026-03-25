import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  CreditCard, 
  RefreshCcw, 
  Rocket, 
  Lightbulb,
  Trophy,
  Home,
  Coffee,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const guidelineSections = [
  {
    title: "Team Formation",
    icon: <Users className="text-brand-secondary" />,
    items: [
      "Each team must have 1–5 members.",
      "A team can include students from different branches or years.",
      "One member must be designated as the Team Leader (SPOC).",
      "Inter-college teams are allowed and encouraged."
    ]
  },
  {
    title: "Eligibility Criteria",
    icon: <CheckCircle2 className="text-brand-secondary" />,
    items: [
      "Open to all undergraduate and postgraduate students.",
      "Participants must have a valid college ID card.",
      "Basic knowledge of coding and problem-solving is required.",
      "Open to all engineering and non-engineering streams."
    ]
  },
  {
    title: "Documents Required",
    icon: <FileText className="text-brand-secondary" />,
    items: [
      "College ID Card (Mandatory for all members).",
      "Aadhar Card or any Government ID.",
      "Idea Proposal (in the specified format).",
      "NOC from the Head of Department/Institution."
    ]
  },
  {
    title: "Important Notes",
    icon: <AlertCircle className="text-brand-secondary" />,
    items: [
      "Plagiarism will lead to immediate disqualification.",
      "The decision of the jury will be final and binding.",
      "Teams must bring their own laptops and hardware.",
      "Internet connectivity will be provided at the venue."
    ]
  }
];

const processSections = [
  {
    title: "Registration & Fee",
    icon: <CreditCard />,
    content: "Registration fee is ₹1,000 per problem statement. This covers a team of up to 5 members. Payment must be made online during the registration process.",
    highlight: "₹1,000 / Team"
  },
  {
    title: "Refund Policy",
    icon: <RefreshCcw />,
    content: "Full refund will be initiated if the team's idea is not shortlisted for the finale, or if the selected problem statement is cancelled by the organizers.",
    highlight: "100% Refundable"
  },
  {
    title: "Idea Submission",
    icon: <Lightbulb />,
    content: "Teams must submit a detailed PPT/PDF explaining their solution, tech stack, and impact. Shortlisting will be based on innovation and feasibility.",
    highlight: "PPT/PDF Format"
  },
  {
    title: "Hackathon Format",
    icon: <Rocket />,
    content: "A 48-hour non-stop development marathon. Teams will build a functional prototype of their proposed solution under mentor guidance.",
    highlight: "48 Hours Non-stop"
  }
];

const facilitySections = [
  {
    title: "Accommodation",
    icon: <Home />,
    desc: "Separate staying arrangements for boys and girls within the campus premises."
  },
  {
    title: "Food & Refreshments",
    icon: <Coffee />,
    desc: "Nutritious meals, snacks, and midnight coffee to keep the innovation flowing."
  },
  {
    title: "Mentorship",
    icon: <Trophy />,
    desc: "Guidance from industry experts and academic veterans throughout the event."
  }
];

export function Guidelines() {
  return (
    <div className="space-y-0">
      <SectionWrapper 
        id="guidelines" 
        title="Event Guidelines" 
        subtitle="Everything you need to know before you start"
      >
        <div className="grid md:grid-cols-2 gap-10">
          {guidelineSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-premium p-12 rounded-[3.5rem] hover:bg-white/5 transition-all group border-white/5 shadow-2xl"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-white transition-all shadow-2xl">
                  {React.cloneElement(section.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{section.title}</h3>
              </div>
              <ul className="space-y-6">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 text-slate-500 group-hover:text-slate-400 transition-colors">
                    <div className="mt-2 w-2 h-2 rounded-full bg-brand-secondary shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper 
        id="process" 
        title="The Process" 
        subtitle="From registration to the grand finale"
        className="bg-slate-900/30"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {processSections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-premium p-10 rounded-[3rem] relative overflow-hidden group border-white/5 shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {React.cloneElement(item.icon as React.ReactElement, { size: 100 })}
              </div>
              <div className="relative z-10">
                <div className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                  {item.highlight}
                </div>
                <h4 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper 
        id="facilities" 
        title="On-Campus Facilities" 
        subtitle="We take care of you while you innovate"
      >
        <div className="grid md:grid-cols-3 gap-10">
          {facilitySections.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-12 rounded-[3.5rem] glass-premium hover:bg-white/5 transition-all border-white/5 shadow-2xl group"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-primary/20 flex items-center justify-center text-brand-primary mx-auto mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-2xl">
                {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
              </div>
              <h4 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
