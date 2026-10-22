import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Flame, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const courseChips = ['C-01 Caviar Tart', 'C-02 Saffron Cod', 'C-03 A5 Wagyu', 'C-04 Smoked Truffle'];

  return (
    <section id="services" className="px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      {/* Centered headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans block mb-3">
          Our Culinary Philosophy
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white/40">
          The Dining <span className="text-white">Experience</span>
        </h2>
      </motion.div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white mb-6">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
              VACOU is an Epicenter of Haute Gastronomy
            </h3>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              We marry ancestral wood-fire hearth roasting with avant-garde sous-vide vacuum precision. Every ingredient is treated as sacred terroir, extracting pure aromatic resonance and unforgettable textures.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <a
              href="#process"
              className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-white hover:text-white/80 transition-colors"
            >
              <span>Explore Kitchen Methodology</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Center Column: Two stacked glassmorphism cards */}
        <div className="flex flex-col gap-6">
          {/* Stacked Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-1">
                  TERROIR EXCELLENCE
                </span>
                <h4 className="font-display text-xl font-bold text-white tracking-tight">
                  Certified Artisanal Ingredients
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
            <p className="mt-3 text-xs text-white/60 font-sans leading-relaxed">
              Kobe-certified A5 Miyazaki wagyu, Brittany line-caught turbot, Perigord winter black truffles, and dawn-harvested biodynamic botanical herbs.
            </p>
          </motion.div>

          {/* Stacked Card 2: Signature Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex-1 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-white/60" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                  CHEF'S TASTING SELECTION
                </span>
              </div>
              <h4 className="font-display text-xl font-bold text-white tracking-tight">
                Signature Tasting Flights
              </h4>
            </div>

            <div className="mt-4">
              <div className="text-[11px] text-white/50 font-sans mb-2">
                Featured autumn/winter courses:
              </div>
              <div className="flex flex-wrap gap-2">
                {courseChips.map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/20 text-white tracking-wider hover:bg-white hover:text-black transition-colors cursor-default"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Culinary Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">
              LEGACY &amp; PEDIGREE
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Michelin Lineage
            </h3>
            <div className="mt-4 inline-block font-display text-5xl font-bold text-white tracking-tight">
              15<span className="text-2xl text-white/50 font-normal"> yrs</span>
            </div>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              Fifteen years refining the pinnacle of modern gastronomy. Helmed by Chef Julian Vance, trained across three-star kitchens in Paris, Kyoto, and New York.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/40 font-mono">
            <span>MICHELIN GUIDE 2026</span>
            <span>THREE STARS ★★★</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
