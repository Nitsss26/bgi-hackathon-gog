import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, FileText, CheckCircle2, AlertTriangle, Scale, Gavel } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const rules = [
  "Original & Innovative submissions only.",
  "Free from plagiarism and copyright infringement.",
  "Adhere to event rules & regulations at all times.",
  "Ethical conduct & professional behavior is mandatory.",
  "Follow instructions of the organizing committee and mentors."
];

const terms = [
  "Registration fee is refundable only if idea is not shortlisted.",
  "Decisions of judges and organizers are final and binding.",
  "Organizers reserve the right to modify rules or schedule.",
  "Participation implies acceptance of all guidelines and terms."
];

const judgingCriteria = [
  { title: "Innovation", desc: "Uniqueness and creativity of the solution proposed." },
  { title: "Technicality", desc: "Complexity and quality of the technical implementation." },
  { title: "Impact", desc: "Potential real-world benefit, scalability, and sustainability." },
  { title: "Presentation", desc: "Clarity, effectiveness, and confidence of the pitch." }
];

export function Legal() {
  return (
    <SectionWrapper 
      id="legal" 
      title="Compliance & Standards" 
      subtitle="Ensuring a fair and ethical environment"
    >
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-premium p-10 rounded-[3rem] border-white/5 bg-white/5"
        >
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Code of Conduct</h3>
          </div>
          <ul className="space-y-6">
            {rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed group">
                <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-slate-200 transition-colors">{rule}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-premium p-10 rounded-[3rem] border-white/5 bg-white/5"
        >
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Terms & Conditions</h3>
          </div>
          <ul className="space-y-6">
            {terms.map((term, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-400 text-sm leading-relaxed group">
                <div className="w-6 h-6 rounded-lg bg-brand-primary/20 flex items-center justify-center text-[10px] font-black text-brand-primary shrink-0 mt-0.5 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <span className="group-hover:text-slate-200 transition-colors">{term}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Judging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-premium p-10 rounded-[3rem] border-white/5 bg-white/5"
        >
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Scale size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Judging Criteria</h3>
          </div>
          <div className="space-y-8">
            {judgingCriteria.map((item, i) => (
              <div key={i} className="group">
                <div className="text-sm font-black text-white mb-2 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">{item.title}</div>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 rounded-3xl bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-bold flex gap-6 items-center max-w-4xl mx-auto shadow-2xl shadow-brand-secondary/5"
      >
        <div className="w-12 h-12 rounded-2xl bg-brand-secondary/20 flex items-center justify-center shrink-0">
          <Gavel size={24} />
        </div>
        <p className="leading-relaxed">
          <span className="uppercase tracking-widest text-[10px] block mb-1 opacity-60">Final Authority</span>
          In case of any dispute or misconduct, the decision of the organizing committee will be final and binding. Immediate disqualification will be enforced for any violation of the code of conduct.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
