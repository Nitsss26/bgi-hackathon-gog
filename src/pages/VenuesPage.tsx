import React from 'react';
import { MapPin, Train, Plane, Bus, Wifi, Battery, Coffee, Home, Car, Building2 } from 'lucide-react';

export function VenuesPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Event <span className="text-[#eab308]">Venues</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The hackathon will be hosted simultaneously across two premier BGI campuses in Central India.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Bhopal Venue */}
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Bhopal</h2>
                <div className="inline-block px-3 py-1 bg-[#eab308]/20 text-[#eab308] text-xs font-bold uppercase tracking-wider rounded-full">
                  13–14 May 2026
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <MapPin size={28} />
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Location</h3>
                <p className="text-white font-medium">Bansal Group of Institutes (BGI), Bhopal</p>
                <p className="text-slate-400 text-sm">Kokta, Anand Nagar, Raisen Road, Bhopal – 462021 (M.P.)</p>
              </div>

              <div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Connectivity</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Train size={16} className="text-slate-500" />
                    <span>12–15 km from Bhopal Railway Station</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Train size={16} className="text-slate-500" />
                    <span>10–12 km from Habibganj (Rani Kamlapati) Station</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Plane size={16} className="text-slate-500" />
                    <span>20 km from Raja Bhoj Airport</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Bus size={16} className="text-slate-500" />
                    <span>8–10 km from ISBT Bhopal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Indore Venue */}
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[60px] rounded-full" />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Indore</h2>
                <div className="inline-block px-3 py-1 bg-[#eab308]/20 text-[#eab308] text-xs font-bold uppercase tracking-wider rounded-full">
                  15–16 May 2026
                </div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                <MapPin size={28} />
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Location</h3>
                <p className="text-white font-medium">Sushila Devi Bansal College (SDBC)</p>
                <p className="text-slate-400 text-sm">Umaria, A.B. Road, Near Rau, Indore – 453331 (M.P.)</p>
              </div>

              <div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">Connectivity</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Train size={16} className="text-slate-500" />
                    <span>15–18 km from Indore Railway Station</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Plane size={16} className="text-slate-500" />
                    <span>12–15 km from Devi Ahilya Bai Holkar Airport</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Bus size={16} className="text-slate-500" />
                    <span>10–12 km from Sarwate / Gangwal Bus Stand</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-300">
                    <Car size={16} className="text-slate-500" />
                    <span>Located directly on A.B. Road near Rau</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Facilities & Accommodation */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Coffee className="text-[#eab308]" /> Facilities Provided
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#020617] p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <Wifi className="text-blue-400" size={24} />
                <span className="text-sm text-slate-300 font-medium">High-Speed Wi-Fi</span>
              </div>
              <div className="bg-[#020617] p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <Battery className="text-green-400" size={24} />
                <span className="text-sm text-slate-300 font-medium">Power Backup</span>
              </div>
              <div className="bg-[#020617] p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2 col-span-2">
                <Building2 className="text-purple-400" size={24} />
                <span className="text-sm text-slate-300 font-medium">Dedicated Working Area</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <Home className="text-[#eab308]" /> Accommodation & Travel
            </h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                The organizing team will assist with accommodation guidance for outstation participants.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl text-orange-200">
                <strong>Important:</strong> Participants must arrange and bear their own travel and stay expenses. The registration fee does not cover travel or accommodation.
              </div>
              <p>
                Both venues are well connected via public and private transport (Cabs, Autos, Buses) making local commute easy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
