import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl1nkLCpAH4iEQwrFnV1DxGgWe8jJsxvQiQ&s" 
                alt="BGI Logo" 
                className="h-12 w-auto object-contain rounded-md bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-black text-2xl tracking-tighter">BGI HACKATHON</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-brand-secondary uppercase">Vision 2026</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-6">
              A national-level innovation event aimed at fostering technology-driven solutions to real-world challenges, aligned with India’s vision of becoming a developed nation by 2047.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-brand-secondary transition-all group border border-white/5"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-6 text-slate-500">Quick Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {['About', 'Venues', 'Themes', 'Guidelines', 'Rewards', 'Timeline', 'Register', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Register' ? '/register' : `/#${link.toLowerCase()}`} 
                    className="text-slate-400 hover:text-brand-secondary transition-colors font-bold text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary/20 group-hover:bg-brand-secondary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-6 text-slate-500">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary transition-colors">
                  <MapPin size={18} />
                </div>
                <p className="text-sm leading-relaxed font-medium">
                  Bansal Group of Institutes (BGI)<br />
                  Kokta, Anand Nagar, Raisen Road,<br />
                  Bhopal – 462021 (M.P.)
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@bgihackathon.com" className="text-sm font-bold hover:text-brand-secondary transition-colors">
                  info@bgihackathon.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary/20 group-hover:text-brand-secondary transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold">+91 755 252 9057</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © 2026 <span className="text-white font-bold">Bansal Group of Institutes</span>. All rights reserved.
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
              Privacy Policy <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
              Terms of Service <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
