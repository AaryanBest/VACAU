import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Award, Wine } from 'lucide-react';

interface MarqueeFeatureProps {
  onOpenOrder: () => void;
}

export const MarqueeFeature: React.FC<MarqueeFeatureProps> = ({ onOpenOrder }) => {
  const checklist = [
    { title: 'Dawn Forage & Catch', desc: 'Direct from wild coastal divers & biodynamic farms', checked: true },
    { title: 'Wood-Fire Hearth ✓', desc: 'Ember-roasted over rare white binchotan charcoal', checked: true, highlight: true },
    { title: 'Rare Vintage Cellar', desc: 'Over 1,200 biodynamic and grand cru bottles', checked: true },
    { title: 'Private Dining Salons', desc: 'Acoustically isolated salons for intimate banquets', checked: true },
  ];

  return (
    <section id="menu" className="relative px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      {/* Absolute-positioned circular "Awards" badge */}
      <motion.div
        initial={{ rotate: -20, opacity: 0, scale: 0.8 }}
        whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-12 right-6 md:right-16 z-20 w-28 h-28 md:w-32 md:h-32 rounded-full bg-white text-black p-2 flex flex-col items-center justify-center text-center shadow-2xl hover:scale-105 transition-transform cursor-default"
      >
        <Award className="w-5 h-5 mb-1 stroke-[2.2]" />
        <span className="font-display text-[10px] md:text-xs font-black uppercase tracking-wider leading-tight">
          Gastronomy
        </span>
        <span className="font-display text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-black/70">
          Awards 2026
        </span>
        <span className="text-[8px] font-mono tracking-tighter text-black/60 mt-0.5">
          ★★★ THREE STARS
        </span>
      </motion.div>

      {/* Section Tag */}
      <div className="mb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans">
          Curated Tasting Experience
        </span>
      </div>

      {/* Large bold headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/40">
          Artisanal / Modern / <span className="text-white">Gastronomy</span>
        </h2>
      </motion.div>

      {/* Main Grid: Stat Card + Feature Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
        {/* Stat Card: Grand 12-Course Omakase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-white/60 text-xs font-mono uppercase tracking-widest mb-6">
              <Wine className="w-4 h-4 text-white" />
              <span>THE GRAND TASTING FLIGHT</span>
            </div>
            <div className="font-display text-6xl md:text-7xl font-bold text-white tracking-tight">
              12
              <span className="text-2xl text-white/50 font-normal"> Courses</span>
            </div>
            <div className="font-sans text-lg font-medium text-white/90 mt-2">
              Culinary precision &amp; wine journey
            </div>
            <p className="mt-4 text-sm text-white/60 font-sans leading-relaxed">
              An immersive 2.5-hour narrative moving seamlessly from coastal sea-scallop ceviche and saffron-lacquered black cod to charcoal-seared A5 Miyazaki wagyu and smoked single-origin chocolate.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.1]">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest px-5 py-3 rounded-full border border-white/20 bg-white/[0.05] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>Explore Menu Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Feature checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
        >
          <div>
            <div className="text-xs font-mono uppercase text-white/50 tracking-widest mb-6">
              RESTAURANT HIGHLIGHTS &amp; PILLARS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-xl border transition-all duration-200 ${
                    item.highlight
                      ? 'bg-white/[0.08] border-white/30 text-white shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.1] text-white/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-lg text-white">
                      {item.title}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.1] flex items-center justify-between text-xs text-white/50 font-mono">
            <span>SEATING: CHEF'S COUNTER &amp; SALONS</span>
            <span>CELLAR: 1,200+ CURATED LABELS</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA Row: "Reserve your tasting experience & receive a complimentary sommelier champagne welcome" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={onOpenOrder}
        className="cursor-pointer group rounded-2xl p-6 sm:p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] hover:border-white/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Seasonal Reservations Open
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Reserve your tasting experience &amp; receive a private sommelier champagne welcome
          </h3>
          <p className="text-xs text-white/60 font-sans">
            Advance bookings recommended for evening sittings and private dining suites.
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenOrder();
          }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black group-hover:scale-110 transition-transform duration-300 shrink-0"
          aria-label="Reserve tasting"
        >
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.div>
    </section>
  );
};
