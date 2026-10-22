import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Calendar, Users, Clock, Wine } from 'lucide-react';
import { CartItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, onAddToCart }) => {
  const [selectedPlan, setSelectedPlan] = useState<'grand' | 'seasonal' | 'private'>('grand');
  const [guests, setGuests] = useState<number>(2);
  const [time, setTime] = useState<string>('7:30 PM');
  const [winePairing, setWinePairing] = useState<boolean>(true);
  const [added, setAdded] = useState(false);

  const experiences = [
    {
      id: 'grand',
      name: "Chef's 12-Course Grand Tasting",
      pricePerGuest: 195,
      desc: 'Our definitive sensory journey: Perigord winter truffle, A5 Miyazaki wagyu, sea scallop tart, and wild cacao.',
      spec: 'Approx. 2.5 – 3.0 Hours • Main Salon & Counter',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'seasonal',
      name: '7-Course Seasonal Terroir Menu',
      pricePerGuest: 135,
      desc: 'Line-caught Brittany turbot, saffron-infused black cod, heirloom farmstead roots, and smoked vanilla cream.',
      spec: 'Approx. 2.0 Hours • Dining Room',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'private',
      name: 'Private Dining Salon Experience',
      pricePerGuest: 280,
      desc: 'Acoustically shielded private salon with dedicated chef hearth service, rare vintage champagne, and bespoke courses.',
      spec: 'Dedicated Private Suite & Sommelier',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const currentExperience = experiences.find((e) => e.id === selectedPlan) || experiences[0];
  const winePrice = winePairing ? 95 * guests : 0;
  const basePrice = currentExperience.pricePerGuest * guests;
  const totalPrice = basePrice + winePrice;

  const handleAdd = () => {
    onAddToCart({
      id: `${currentExperience.id}-${Date.now()}`,
      name: `${currentExperience.name} (${guests} Guests)`,
      category: `Seating: ${time} • ${winePairing ? 'Grand Cru Pairing Included' : 'No Beverage Pairing'}`,
      price: totalPrice,
      quantity: 1,
      image: currentExperience.image,
      sealingSpec: `${guests} Guests • ${time} • Deposit Hold`,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-2xl rounded-3xl bg-black border border-white/[0.18] p-6 sm:p-10 shadow-2xl my-8 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/[0.1]">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-mono block mb-1">
                  VACOU TABLE RESERVATIONS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Book Your Dining Experience
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Experience Selection */}
            <div className="mt-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 block">
                1. Select Culinary Experience
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {experiences.map((exp) => {
                  const isSelected = selectedPlan === exp.id;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setSelectedPlan(exp.id as any)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-white/[0.04] text-white border-white/[0.1] hover:border-white/30'
                      }`}
                    >
                      <div className="font-display text-sm font-bold tracking-tight">
                        {exp.name}
                      </div>
                      <div className={`text-xs mt-1 font-mono ${isSelected ? 'text-black/70' : 'text-white/50'}`}>
                        ${exp.pricePerGuest} / guest
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Experience details preview */}
            <div className="mt-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center gap-4">
              <img
                src={currentExperience.image}
                alt={currentExperience.name}
                className="w-16 h-16 rounded-lg object-cover border border-white/[0.1] shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-white/50 font-medium">
                    {currentExperience.spec}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                    3 Michelin Stars
                  </span>
                </div>
                <p className="text-xs text-white/70 font-sans mt-1">
                  {currentExperience.desc}
                </p>
              </div>
            </div>

            {/* Step 2: Party Size & Seating Time */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Party size */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/60 flex items-center gap-1.5 mb-2">
                  <Users className="w-3.5 h-3.5" />
                  Party Size
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2.5 rounded-xl text-xs font-sans font-medium border text-center transition-all cursor-pointer ${
                        guests === num
                          ? 'bg-white text-black border-white font-semibold'
                          : 'bg-white/[0.04] text-white/70 border-white/[0.1] hover:text-white'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Time */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/60 flex items-center gap-1.5 mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  Sitting Time
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {['5:30 PM', '7:00 PM', '8:30 PM', '9:30 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2.5 px-1 rounded-xl text-[11px] font-sans border text-center transition-all cursor-pointer ${
                        time === t
                          ? 'bg-white text-black border-white font-semibold'
                          : 'bg-white/[0.04] text-white/70 border-white/[0.1] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Wine Pairing Toggle */}
            <div className="mt-5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.1] flex items-center justify-between cursor-pointer"
              onClick={() => setWinePairing(!winePairing)}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Wine className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-display font-semibold text-white">
                    Grand Cru &amp; Biodynamic Wine Pairing
                  </div>
                  <div className="text-[11px] text-white/50 font-sans">
                    Sommelier reserve pairing for all {guests} guests (+ $95 / guest)
                  </div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                winePairing ? 'bg-white border-white text-black' : 'border-white/30'
              }`}>
                {winePairing && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </div>

            {/* Guarantee note */}
            <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>Complimentary champagne welcome &amp; cellar tour included with each reservation.</span>
            </div>

            {/* Bottom action bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.1] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/50 font-mono block">Experience Total</span>
                <span className="font-display text-2xl font-bold text-white font-mono">
                  ${totalPrice}.00
                </span>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="cursor-pointer px-8 py-4 rounded-full bg-white text-black font-display font-semibold text-sm tracking-wide hover:bg-white/90 transition-all flex items-center gap-2 shadow-xl"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>Reservation Confirmed!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-black" />
                    <span>Confirm Table Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
