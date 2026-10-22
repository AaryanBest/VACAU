import React from 'react';
import { motion } from 'framer-motion';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '3 ★',
      label: 'Michelin Guide Stars',
      subtext: 'Highest gastronomic honor recognized globally',
    },
    {
      value: '45d',
      label: 'Dry-aging duration',
      subtext: 'In-house Himalayan pink salt aging chambers',
    },
    {
      value: '1.2K+',
      label: 'Rare vintage labels',
      subtext: 'Curated biodynamic & grand cru sommelier reserve',
    },
    {
      value: '100%',
      label: 'Terroir traceability',
      subtext: 'Direct partnership with single-origin growers & divers',
    },
  ];

  return (
    <section id="stats" className="px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      {/* Subtle section label */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans block mb-2">
          Accolades &amp; Standards
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Numbers backing our culinary craft
        </h3>
      </div>

      {/* Grid showing 3 Stars, 45d, 1.2K+, 100% */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-2xl p-8 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] flex flex-col justify-between"
          >
            <div>
              <div className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4">
                {stat.value}
              </div>
              <div className="font-sans font-medium text-base text-white/90">
                {stat.label}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <p className="text-xs text-white/50 font-sans">
                {stat.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
