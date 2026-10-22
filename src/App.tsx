/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BottomCards } from './components/BottomCards';
import { MarqueeFeature } from './components/MarqueeFeature';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { BackgroundVideo } from './components/BackgroundVideo';
import { CartItem } from './types';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  // Initial luxury sample dining reservation in the vault
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'res-1',
      name: "Chef's 12-Course Grand Tasting (2 Guests)",
      category: 'Seating: 7:30 PM • Grand Cru Wine Pairing Included',
      price: 580,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80',
      sealingSpec: '2 Guests • 7:30 PM • Main Dining Salon',
    },
  ]);

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === newItem.name);
      if (existing) {
        return prev.map((i) =>
          i.name === newItem.name ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background: Fixed full-screen looping video behind all content with brightness-[0.9] and instant file upload/URL switcher */}
      <BackgroundVideo />

      {/* All page content sits in a relative z-10 wrapper above the video */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Section 1: Navbar */}
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Section 2: Hero */}
          <Hero onOpenOrder={() => setIsOrderOpen(true)} />

          {/* Section 3: Bottom Cards (2-column grid) */}
          <BottomCards />

          {/* Section 4: Marquee/Feature Section */}
          <MarqueeFeature onOpenOrder={() => setIsOrderOpen(true)} />

          {/* Section 5: Services Section */}
          <ServicesSection />

          {/* Section 6: Process Section */}
          <ProcessSection />

          {/* Section 7: Stats Section */}
          <StatsSection />

          {/* Section 8: FAQ Section */}
          <FaqSection />

          {/* Section 9: CTA Section */}
          <CtaSection onOpenOrder={() => setIsOrderOpen(true)} />
        </main>

        {/* Section 10: Footer */}
        <Footer />
      </div>

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Order Configurator Modal */}
      <OrderModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
