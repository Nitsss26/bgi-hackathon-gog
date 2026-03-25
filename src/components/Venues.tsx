import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Train, Plane, Bus } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const venues = [
  {
    city: "Bhopal",
    date: "13–14 May 2026",
    name: "Bansal Group of Institutes (BGI)",
    address: "Kokta, Anand Nagar, Raisen Road, Bhopal – 462021 (M.P.)",
    connectivity: [
      { icon: Train, label: "Railway", desc: "10 km from Bhopal Junction / Rani Kamalapati Station" },
      { icon: Plane, label: "Airport", desc: "20 km from Raja Bhoj Airport" },
      { icon: Bus, label: "Bus", desc: "Well-connected via local transport & ISBT" }
    ],
    color: "var(--color-brand-primary)"
  },
  {
    city: "Indore",
    date: "15–16 May 2026",
    name: "Sushila Devi Bansal College (SDBC)",
    address: "Umaria, A.B. Road, Near Rau, Indore – 453331 (M.P.)",
    connectivity: [
      { icon: Train, label: "Railway", desc: "15 km from Indore Junction" },
      { icon: Plane, label: "Airport", desc: "22 km from Devi Ahilya Bai Holkar Airport" },
      { icon: Bus, label: "Bus", desc: "Accessible via BRTS & Sarwate Bus Stand" }
    ],
    color: "var(--color-brand-secondary)"
  }
];

export function Venues() {
  return (
    <SectionWrapper 
      id="venues" 
      title="Event Locations" 
      subtitle="Join us at our state-of-the-art campuses"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {venues.map((venue, i) => (
          <motion.div
            key={venue.city}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-premium p-12 rounded-[3rem] bg-slate-900/50 border-white/5 flex flex-col group hover:bg-slate-900 transition-colors"
          >
            <div className="flex items-start justify-between mb-10">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform"
                style={{ backgroundColor: venue.color }}
              >
                <MapPin size={32} />
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Schedule</div>
                <div className="flex items-center gap-3 text-2xl font-black text-white tracking-tighter">
                  <Calendar size={20} className="text-brand-secondary" />
                  {venue.date}
                </div>
              </div>
            </div>

            <h3 className="text-5xl font-black mb-4 text-white tracking-tighter group-hover:text-brand-secondary transition-colors">{venue.city}</h3>
            <div className="text-xl font-bold text-brand-secondary mb-6">{venue.name}</div>
            <p className="text-slate-400 mb-12 flex-grow text-lg leading-relaxed">{venue.address}</p>

            <div className="space-y-8 border-t border-white/5 pt-10">
              <h4 className="font-black text-white uppercase text-xs tracking-[0.3em]">Connectivity</h4>
              <div className="grid gap-6">
                {venue.connectivity.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group/item">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:bg-brand-secondary group-hover/item:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-slate-300 font-semibold">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
