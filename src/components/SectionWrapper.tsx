import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  accentColor?: string;
  pattern?: 'grid' | 'dots' | 'none';
  isDark?: boolean;
}

export function SectionWrapper({ 
  children, 
  id, 
  title,
  subtitle,
  className = "", 
  accentColor = "rgba(234, 179, 8, 0.05)", 
  pattern = 'grid',
  isDark = true // Default to dark for premium look
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative py-32 overflow-hidden transition-all duration-700 bg-slate-950",
        className
      )}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Radial Gradients for Depth */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-primary/15 blur-[150px] rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full translate-y-1/2" />

        {/* Embers Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="ember-particle animate-ember"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                background: i % 2 === 0 ? 'var(--color-brand-secondary)' : 'var(--color-brand-accent)',
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-24">
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <span className="text-brand-secondary font-black text-xs uppercase tracking-[0.5em]">
                  {title}
                </span>
              </motion.div>
            )}
            {subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]"
              >
                {subtitle.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-gradient italic" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h2>
            )}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1.5 bg-brand-secondary mx-auto mt-10 rounded-full"
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
