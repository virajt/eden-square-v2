import Image from "next/image";

const CATEGORIES = [
  { name: "Coffee", badge: "coffee-badge", items: ["Small Batch Roast", "Cold Brew", "Artisan Latte"] },
  { name: "Bakery", badge: "bakery-badge", items: ["Sourdough", "Pain au Chocolat", "Lemon Tart"] },
  { name: "Grocery", badge: "grocery-badge", items: ["Organic Honey", "Cold Pressed Oil", "Local Cheeses"] },
  { name: "Drinks", badge: "grocery-badge", items: ["Sparkling Botanical", "House Kombucha"] }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F2] text-[#2D2926] selection:bg-[#4A5D4E]/20">
      {/* ─── NAVIGATION ─────────────────────────────────────── */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-[#E5E1D8] z-50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-[#4A5D4E] rounded-lg flex items-center justify-center text-white font-serif text-xl italic">E</div>
           <h1 className="text-xl font-serif font-bold tracking-tight text-[#4A5D4E]">Eden Square</h1>
        </div>
        <div className="space-x-8 hidden md:flex text-[10px] uppercase font-bold tracking-[0.2em] text-[#4A5D4E]/60">
          <a href="/menu" className="hover:text-[#4A5D4E] transition-colors">Selection</a>
          <a href="/kitchen" className="hover:text-[#4A5D4E] transition-colors">Kitchen</a>
          <a href="/admin" className="hover:text-[#4A5D4E] transition-colors">Nexus</a>
        </div>
        <button className="artisan-button text-[10px] py-3 px-8 uppercase tracking-widest font-bold">Order Now</button>
      </nav>

      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full">
        {/* ─── HERO ────────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row items-center gap-16 mb-32">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#A67C52]">Gourmet Engineering</span>
            <h2 className="text-6xl md:text-8xl font-serif leading-none nature-text italic">
              The Art of <br /> Urban Harvest.
            </h2>
            <p className="text-lg md:text-xl text-[#2D2926]/70 max-w-xl font-light leading-relaxed">
              A private digital architecture for premium grocery, artisan hot foods, and curated neighborhood essentials. Freshly baked, roasted, and pressed every morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
               <button className="artisan-button px-12 py-5 text-lg">Enter Storefront</button>
               <button className="border border-[#E5E1D8] bg-white text-[#4A5D4E] px-12 py-5 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-[#F2E3D5] transition-colors">Our Ethos</button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full h-[600px] bg-[#F2E3D5] rounded-3xl overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[150px] font-serif italic text-white/40 group-hover:scale-110 transition-transform duration-700">ES</div>
             </div>
             <div className="absolute bottom-12 left-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E5E1D8] max-w-xs shadow-xl">
                <p className="italic font-serif text-[#4A5D4E] mb-2">"Every product is an interaction. Every meal is a protocol."</p>
                <div className="w-12 h-[1px] bg-[#4A5D4E] mb-4" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#A67C52]">Eden Square Manifesto</span>
             </div>
          </div>
        </section>

        {/* ─── CATEGORIES ──────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
           {CATEGORIES.map((cat, i) => (
             <div key={i} className="artisan-card p-10 flex flex-col items-center text-center">
                <span className={`${cat.badge} mb-6`}>{cat.name}</span>
                <ul className="space-y-3">
                   {cat.items.map((item, j) => (
                     <li key={j} className="text-sm font-medium text-[#2D2926]/60">{item}</li>
                   ))}
                </ul>
                <button className="mt-8 text-[10px] uppercase font-bold tracking-widest text-[#4A5D4E] hover:underline">Explore &rarr;</button>
             </div>
           ))}
        </section>
      </main>

      <footer className="p-16 bg-[#2D2926] text-white/40 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
           <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white italic font-serif">E</div>
           <p className="text-[10px] uppercase tracking-[0.5em]">Everything Else is Just Noise.</p>
           <div className="w-24 h-[1px] bg-white/10" />
           <span className="text-[9px] uppercase tracking-widest">© 2026 Eden Square Autonomous Retail Architecture</span>
        </div>
      </footer>
    </div>
  );
}
