import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const diningLinks = [
    { label: 'The 12-Course Grand Tasting', href: '#menu' },
    { label: 'Seasonal Terroir Flight', href: '#menu' },
    { label: 'Private Dining Salons', href: '#faq' },
    { label: 'The Sommelier Cellar', href: '#services' },
    { label: 'Chef Counter Seating', href: '#hero' },
  ];

  const philosophyLinks = [
    { label: 'Executive Chef Julian Vance', href: '#hero' },
    { label: 'Boutique Farmstead Partners', href: '#services' },
    { label: 'Hearth & Binchotan Craft', href: '#process' },
    { label: 'Press & Michelin Accolades', href: '#stats' },
    { label: 'Culinary Team Careers', href: '#footer' },
  ];

  const conciergeLinks = [
    { label: 'Table Reservations', href: '#hero' },
    { label: 'Dietary & Allergy Requests', href: '#faq' },
    { label: 'Private Event Bookings', href: '#faq' },
    { label: 'Dress Code & Valet Parking', href: '#faq' },
    { label: 'Gift Certificates & Experiences', href: '#menu' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Michelin Guide', href: 'https://guide.michelin.com' },
    { name: 'World\'s 50 Best', href: 'https://theworlds50best.com' },
  ];

  return (
    <footer id="footer" className="border-t border-white/[0.1] bg-black/60 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 pt-16 pb-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: VACOU logo + restaurant info */}
          <div className="space-y-4">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white block">
                VACOU
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                RESTAURANT &amp; TASTING SALON
              </span>
            </div>
            <p className="text-sm text-white/60 font-sans leading-relaxed max-w-xs">
              Modern haute cuisine crafted with fire, terroir, and seasonal precision. An indelible celebration of artisanal gastronomy.
            </p>
            <div className="pt-2 space-y-1.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Dinner: Tue – Sun 5:30 PM – 11:00 PM
              </span>
              <p className="text-[11px] text-white/50 font-mono">
                450 Madison Avenue, Manhattan, NY
              </p>
            </div>
          </div>

          {/* Column 2: Dining links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-4">
              Dining
            </h4>
            <ul className="space-y-3">
              {diningLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Philosophy links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-4">
              Philosophy
            </h4>
            <ul className="space-y-3">
              {philosophyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Concierge links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/50 font-mono mb-4">
              Concierge
            </h4>
            <ul className="space-y-3">
              {conciergeLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 font-mono">
            © 2026 VACOU Restaurant. Three Michelin Stars ★★★. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-xs text-white/70 hover:text-white font-sans transition-colors"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
