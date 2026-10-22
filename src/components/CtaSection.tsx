import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onOpenOrder: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenOrder }) => {
  return (
    <section className="px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl p-12 md:p-20 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] text-center relative overflow-hidden"
      >
        {/* Subtle decorative radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Label above */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1]">
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-sans">
              Gastronomic Excellence
            </span>
          </div>

          {/* Centered large headline */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/50 mb-8 leading-[1.05]">
            An unforgettable evening <span className="text-white">awaits</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 font-sans max-w-xl mx-auto mb-10 leading-relaxed">
            Immerse your senses in a transcendent gastronomic celebration. Join us at the Chef's Hearth or reserve an intimate salon.
          </p>

          {/* "Reserve a table" button with ArrowUpRight icon that rotates 45° on hover */}
          <button
            onClick={onOpenOrder}
            className="group cursor-pointer inline-flex items-center gap-3 px-9 py-5 rounded-full bg-white text-black font-display font-semibold text-base sm:text-lg tracking-wide hover:bg-white/90 shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            aria-label="Reserve a table"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
