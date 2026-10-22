import React, { useState } from 'react';
import { UtensilsCrossed, Menu, X, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenOrder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Tasting Menus', href: '#menu' },
    { name: 'The Kitchen', href: '#services' },
    { name: 'Craft & Fire', href: '#process' },
    { name: 'Reviews & Accolades', href: '#stats' },
    { name: 'Private Dining & Inquiries', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white hover:opacity-85 transition-opacity"
        >
          VACOU
        </a>

        {/* Center Nav Links - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-wide text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Table Reservation & Tasting Drawer */}
        <div className="flex items-center space-x-3.5">
          <button
            onClick={onOpenOrder}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-display font-medium text-xs tracking-wider uppercase hover:bg-white/90 transition-all cursor-pointer shadow-lg"
          >
            <CalendarCheck className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>Book Table</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Tasting Reservations Vault"
            className="relative p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white transition-all duration-200 flex items-center justify-center group cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 transition-transform group-hover:scale-105" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black font-sans">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.1] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-sans text-white/80 hover:text-white tracking-wide py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 rounded-full bg-white text-black font-display font-semibold text-xs tracking-wider uppercase text-center"
            >
              Book Table Reservation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
