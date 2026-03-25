import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Themes', href: '/themes' },
  { name: 'Guidelines', href: '/guidelines' },
  { name: 'Venues', href: '/venues' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Legal', href: '/legal' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Solid Navbar to prevent overlap */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0f172a] border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQl1nkLCpAH4iEQwrFnV1DxGgWe8jJsxvQiQ&s" 
              alt="BGI Logo" 
              className="h-12 w-auto object-contain rounded-md bg-white p-0.5"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col justify-center">
              <div className="text-white font-bold text-lg leading-none tracking-wide uppercase">BGI HACKATHON</div>
              <div className="text-[#eab308] text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Vision 2026</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#eab308]",
                    location.pathname === link.href ? "text-[#eab308]" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link to="/register" className="px-6 py-2.5 bg-[#eab308] text-[#0f172a] font-bold text-sm uppercase tracking-wider hover:bg-[#ca9a04] transition-colors rounded shadow-md">
              Register Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0f172a] flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-xl font-bold uppercase tracking-widest",
                  location.pathname === link.href ? "text-[#eab308]" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-3 mt-4 bg-[#eab308] text-[#0f172a] font-bold text-lg uppercase tracking-wider rounded text-center">
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
