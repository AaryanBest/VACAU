import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-16">
      {/* Top row with Chef & Tagline on Left, Reserve Button on Right */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-sans">
              Chef Julian Vance — Executive Chef &amp; Founder
            </p>
          </div>
          <h2 className="text-sm font-semibold tracking-widest uppercase text-white/95 max-w-[240px] leading-relaxed font-sans">
            Modern gastronomy crafted with fire, terroir &amp; seasonal precision
          </h2>
        </motion.div>

        {/* Right Side: Reserve Table Button */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center"
        >
          <button
            onClick={onOpenOrder}
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-display font-medium text-base tracking-wide hover:bg-white/90 transition-all shadow-2xl hover:scale-[1.02]"
            aria-label="Reserve a table"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Reserve Table</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Massive Editorial Headline */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-8 mb-6 overflow-hidden"
      >
        <h1 className="font-display text-[clamp(2.75rem,11vw,9.5rem)] font-bold uppercase tracking-tight text-white leading-none select-none">
          Haute Dining
        </h1>
      </motion.div>
    </section>
  );
};
