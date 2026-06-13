"use client";

import React, { useState } from 'react';
import { ArtisanButton } from "@/components/ui/ArtisanButton";
import { ArtisanCard } from "@/components/ui/ArtisanCard";
import { ShoppingCart, ArrowLeft, Plus, ShieldCheck, Tag } from "lucide-react";

const MENU_ITEMS = [
  { id: 1, sku: "ES-GRO-001", name: "Truffle Infused Risotto", price: "32.00", category: "Grocery", desc: "Aged carnaroli rice with black winter truffle and parmesan reggiano." },
  { id: 2, sku: "ES-COF-001", name: "Small Batch Dark Roast", price: "45.00", category: "Coffee", desc: "Organic Ethiopian beans, roasted in-house every 48 hours." },
  { id: 3, sku: "ES-BAK-001", name: "Artisan Sourdough", price: "12.00", category: "Bakery", desc: "48-hour fermentation, wild yeast starter, New Zealand sea salt." },
  { id: 4, sku: "ES-DRK-001", name: "House Kombucha", price: "18.00", category: "Drinks", desc: "Fermented with organic green tea and seasonal botanicals." },
];

export default function MenuPage() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#2D2926] p-8 pt-32 font-sans selection:bg-[#4A5D4E]/20">
      <nav className="fixed top-0 w-full left-0 p-8 flex justify-between items-center bg-white/90 backdrop-blur-2xl border-b border-[#E5E1D8] z-[100]">
        <ArtisanButton variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => window.location.href = '/'}>Back</ArtisanButton>
        <h1 className="text-3xl font-serif italic nature-text">The Artisan Collection</h1>
        <div className="relative">
           <ShoppingCart size={24} className="text-[#4A5D4E]" />
           <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#D98C45] text-white text-[9px] rounded-full flex items-center justify-center font-black shadow-lg">{cartCount}</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {MENU_ITEMS.map((item) => (
          <ArtisanCard key={item.id} className="p-12 flex flex-col gap-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <Tag size={120} />
            </div>
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                   <span className="text-[10px] uppercase font-black tracking-[0.4em] text-[#A67C52]">{item.category}</span>
                   <span className="text-[8px] font-mono text-[#2D2926]/40">SKU: {item.sku}</span>
                </div>
                <h3 className="text-3xl font-serif italic text-[#4A5D4E] leading-tight">{item.name}</h3>
              </div>
              <span className="text-3xl font-serif italic text-[#4A5D4E] tracking-tighter">${item.price}</span>
            </div>
            
            <p className="text-lg text-[#2D2926]/60 font-light leading-relaxed max-w-md">{item.desc}</p>
            
            <div className="mt-4 flex items-center justify-between">
               <div className="flex items-center gap-2 text-[#4A5D4E]/60">
                  <ShieldCheck size={16} className="text-[#D98C45]" />
                  <span className="text-[9px] uppercase font-black tracking-widest">Authenticated Artisan Node</span>
               </div>
               <ArtisanButton 
                variant="primary" 
                icon={<Plus size={14} />}
                onClick={() => setCartCount(prev => prev + 1)}
                className="px-10"
               >
                 Reserve Item
               </ArtisanButton>
            </div>
          </ArtisanCard>
        ))}
      </div>
      
      <footer className="mt-32 pt-12 border-t border-[#E5E1D8] text-center opacity-30">
         <p className="text-[10px] uppercase tracking-[0.8em] font-black italic">Eden Square / Protocol Collection 2026</p>
      </footer>
    </div>
  );
}
