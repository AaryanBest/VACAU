import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is the tasting menu format and average dining duration at VACOU?',
      answer:
        'We offer our signature 12-Course Grand Tasting Experience as well as a 7-Course Seasonal Terroir Menu. A typical sitting spans approximately 2.5 hours at the Main Dining Salon and up to 3 hours at the Chef’s Counter, choreographed with unhurried grace to honor each course’s sensory subtleties.',
    },
    {
      id: 'faq-2',
      question: 'How far in advance can table reservations be booked?',
      answer:
        'Reservations open on the 1st of every month at 10:00 AM EST for the subsequent calendar month. For parties of 1 to 6 guests, reservations require a credit card hold. Private dining suite reservations can be booked up to 90 days in advance through our guest concierge.',
    },
    {
      id: 'faq-3',
      question: 'Can VACOU accommodate severe allergies or dietary preferences?',
      answer:
        'With 48 hours advance notice, our culinary brigade can masterfully tailor our tasting journeys for pescatarian, vegetarian, gluten-free, or specific allergen requirements without compromising the artistry or thematic coherence of the menu.',
    },
    {
      id: 'faq-4',
      question: 'Do you offer private dining rooms or exclusive restaurant buyouts?',
      answer:
        'Yes. VACOU features two acoustically shielded Private Dining Salons hosting 8 to 22 guests, complete with private sommelier service and bespoke menus. Full buyouts of our dining room and Chef’s Hearth are available upon application.',
    },
    {
      id: 'faq-5',
      question: 'What beverage pairings are curated for each menu?',
      answer:
        'Head Sommelier curates two distinct alcoholic pairings: The Terroir Selection (small-batch biodynamic vintages) and The Grand Cru Prestige (rare museum releases and grower champagnes). We also take immense pride in our House Botanical Infusion pairing, utilizing wild herbs, fermented teas, and clarified fruit elixirs.',
    },
  ];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-6 sm:px-8 md:px-16 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left 1/3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-sans block mb-3">
            Guest Concierge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Common questions
          </h2>
          <p className="text-sm text-white/60 font-sans leading-relaxed mb-6">
            Everything you need to know about our seating cadence, wine pairings, dietary adjustments, and private culinary salon reservations.
          </p>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.12] backdrop-blur-xl">
            <span className="text-xs font-mono text-white/50 uppercase tracking-wider block mb-1">
              Private Dining &amp; Events
            </span>
            <p className="text-xs text-white/70 font-sans mb-3">
              Direct inquiries for private salons or tailored celebratory banquets.
            </p>
            <a
              href="mailto:reservations@vacou-restaurant.com"
              className="text-xs font-mono text-white hover:underline underline-offset-4"
            >
              concierge@vacou-dining.com →
            </a>
          </div>
        </motion.div>

        {/* Right 2/3: Accordion items */}
        <div className="lg:col-span-8 flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border-b border-white/[0.1]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-6 flex items-center justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] group-hover:bg-white/[0.12] group-hover:border-white/30 flex items-center justify-center shrink-0 text-white transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm sm:text-base text-white/60 font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
