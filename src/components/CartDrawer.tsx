import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShieldCheck, CheckCircle2, Calendar, UtensilsCrossed } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        setCheckoutComplete(false);
        onClearCart();
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-black border-l border-white/[0.15] p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.1]">
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                  <span className="font-display text-xl font-bold text-white">
                    Dining Vault
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                    {items.length} {items.length === 1 ? 'Booking' : 'Bookings'}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {checkoutComplete ? (
                <div className="py-20 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Table Reserved
                  </h3>
                  <p className="text-sm text-white/60 font-sans max-w-xs leading-relaxed">
                    Reservation #VC-9428 confirmed. Our guest sommelier will contact you 24 hours prior to your sitting for customized cellar selections.
                  </p>
                </div>
              ) : items.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="text-base text-white/50 font-sans mb-4">
                    No table reservations in your dining vault.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-xs font-mono uppercase tracking-widest text-white underline underline-offset-4 cursor-pointer"
                  >
                    Explore tasting experiences
                  </button>
                </div>
              ) : (
                /* Item list */
                <div className="py-4 space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] flex gap-4 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover border border-white/[0.1]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm font-semibold text-white truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] font-mono text-white/50 mt-0.5 truncate">
                          {item.category}
                        </p>
                        <div className="font-mono text-xs font-medium text-white/90 mt-1">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-white/40 hover:text-white transition-colors p-1 cursor-pointer"
                          aria-label="Remove reservation"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-400/30 px-1.5 py-0.5 rounded">
                          Held
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom calculation & checkout */}
            {!checkoutComplete && items.length > 0 && (
              <div className="pt-6 border-t border-white/[0.1] space-y-4">
                <div className="space-y-2 text-xs font-sans text-white/70">
                  <div className="flex justify-between">
                    <span>Experience Total</span>
                    <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sommelier Cellar Welcome</span>
                    <span className="font-mono text-emerald-400">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between text-base font-display font-bold text-white pt-2 border-t border-white/[0.08]">
                    <span>Total Deposit Hold</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-[11px] text-white/60">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>Cancellable up to 48 hours prior to sitting</span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 rounded-full bg-white text-black font-display font-semibold text-sm tracking-wide hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isCheckingOut ? (
                    <span>Securing Table Sitting...</span>
                  ) : (
                    <>
                      <span>Complete Table Reservation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
