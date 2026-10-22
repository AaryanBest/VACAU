import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Award } from 'lucide-react';

export const BottomCards: React.FC = () => {
  // 3 curated guest & critic portraits
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80',
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card: Accolades & Guest Base */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between min-h-[220px]"
        >
          <div className="flex items-center justify-between gap-4">
            {/* 3 Overlapping Avatars */}
            <div className="flex -space-x-3 items-center">
              {avatars.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Dining critic ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>

            {/* Accolade badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-sans tracking-wide text-white/90">
              <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>3 Michelin Stars ★★★</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.08]">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white">
                35K+
              </span>
              <span className="text-sm text-white/60 font-sans max-w-[200px] leading-tight">
                Guests welcomed to our tasting salons &amp; chef counter
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Gastronomy & Seasonal Menu */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between min-h-[220px]"
        >
          <div>
            <div className="flex items-start justify-between">
              <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-white">
                Fire, smoke &amp; culinary craft
              </h3>
              <span className="font-mono text-sm tracking-wider text-white/50 border border-white/[0.15] px-2.5 py-1 rounded-md bg-white/[0.02]">
                (100%) Single-origin forage
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60 font-sans leading-relaxed max-w-md">
              Ancestral Japanese binchotan charcoal hearths harmonize with vacuum-compressed aromatics, coaxing unprecedented depth from pristine seasonal provisions.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-white hover:text-white/80 transition-colors"
            >
              <span>Explore Seasonal Tasting Menu</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-xs font-mono uppercase text-white/40 tracking-widest flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-white/60" />
              WORLD'S 50 BEST 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
