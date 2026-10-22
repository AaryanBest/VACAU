import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Flame, Utensils } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Forage',
      icon: Compass,
      desc: 'Boutique biodynamic orchards and dawn coastal divers hand-select pristine sea and earth harvest.',
      spec: 'Direct farmgate < 6 hrs',
    },
    {
      num: '02',
      title: 'Curation',
      icon: Sparkles,
      desc: 'In-house dry-aging chambers with pink Himalayan rock salt and cryo-vacuum aromatic extraction.',
      spec: 'Up to 45 days salt cure',
    },
    {
      num: '03',
      title: 'Fire & Hearth',
      icon: Flame,
      desc: 'Japanese binchotan white charcoal hearth roasting paired with exact thermal sous-vide precision.',
      spec: 'Dual-zone ember roasting',
    },
    {
      num: '04',
      title: 'Indulge',
      icon: Utensils,
      desc: 'Artisanal tableside plating with rare botanical aromas, velvety reductions, and grand cru pairings.',
      spec: '12-Course sensory narrative',
    },
  ];

  return (
    <section id="process" className="px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans block mb-2">
          Methodology &amp; Discipline
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white/50">
          The Culinary Journey
        </h2>
        <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-1">
          From terroir to your palate
        </h3>
      </motion.div>

      {/* 4-column grid of step cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30"
            >
              {/* Top border line scales in from left on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

              <div>
                {/* Step header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm font-bold text-white tracking-widest">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-white/[0.1] transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Step title */}
                <h4 className="font-display text-2xl font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h4>

                {/* Step description */}
                <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom spec pill */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40 tracking-wider">
                  {step.spec}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
