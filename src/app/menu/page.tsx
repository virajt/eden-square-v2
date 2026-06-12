import React from 'react';

const MENU_ITEMS = [
  { id: 1, name: "Truffle Infused Risotto", price: "32.00", category: "Mains" },
  { id: 2, name: "Gold Leaf Wagyu Burger", price: "45.00", category: "Mains" },
  { id: 3, name: "Champagne Oysters", price: "28.00", category: "Starters" },
  { id: 4, name: "Saffron Crème Brûlée", price: "18.00", category: "Desserts" },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24">
      <h1 className="text-4xl font-bold gold-gradient mb-12 text-center">Curated Cuisine</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="border border-white/10 p-6 rounded-sm bg-white/5 hover:border-[#D4AF37] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold uppercase tracking-wider">{item.name}</h3>
              <span className="text-[#D4AF37] font-mono">${item.price}</span>
            </div>
            <p className="text-white/40 text-sm uppercase tracking-widest">{item.category}</p>
            <button className="mt-4 w-full py-2 border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
              Add to Selection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
