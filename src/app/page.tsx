import Image from "next/image";
import Link from "next/image"; // Fixing this to standard Next Link if needed, but for now using buttons for interactions
import { ShoppingCart, Coffee, Croissant, Carrot, Wine, ChevronRight, Menu as MenuIcon, User } from "lucide-react";

const CATEGORIES = [
  { name: "Coffee", badge: "coffee-badge", icon: Coffee, items: ["Small Batch Roast", "Cold Brew", "Artisan Latte"] },
  { name: "Bakery", badge: "bakery-badge", icon: Croissant, items: ["Sourdough", "Pain au Chocolat", "Lemon Tart"] },
  { name: "Grocery", badge: "grocery-badge", icon: Carrot, items: ["Organic Honey", "Cold Pressed Oil", "Local Cheeses"] },
  { name: "Drinks", badge: "grocery-badge", icon: Wine, items: ["Sparkling Botanical", "House Kombucha"] }
];

export default function Home() {
  const handleOrderRedirect = () => {
    window.location.href = '/menu';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F2] text-[#2D2926] selection:bg-[#4A5D4E]/20">
      {/* ─── NAVIGATION ─────────────────────────────────────── */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center bg-white/80 backdrop-blur-lg border-b border-[#E5E1D8] z-50">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '/'}>
           <div className="w-10 h-10 bg-[#4A5D4E] rounded-xl flex items-center justify-center text-white font-serif text-2xl italic group-hover:scale-105 transition-transform">E</div>
           <h1 className="text-2xl font-serif font-bold tracking-tight text-[#4A5D4E]">Eden Square</h1>
        </div>
        
        <div className="space-x-10 hidden md:flex text-[11px] uppercase font-bold tracking-[0.25em] text-[#4A5D4E]/60">
          <button onClick={() => window.location.href = '/menu'} className="hover:text-[#4A5D4E] transition-colors hover:translate-y-[-1px]">Selection</button>
          <button onClick={() => window.location.href = '/kitchen'} className="hover:text-[#4A5D4E] transition-colors hover:translate-y-[-1px]">Kitchen</button>
          <button onClick={() => window.location.href = '/admin'} className="hover:text-[#4A5D4E] transition-colors hover:translate-y-[-1px]">Nexus</button>
        </div>

        <div className="flex items-center gap-6">
           <button className="text-[#4A5D4E] hover:scale-110 transition-transform relative">
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#D98C45] text-white text-[8px] rounded-full flex items-center justify-center font-bold">0</span>
           </button>
           <button onClick={handleOrderRedirect} className="artisan-button text-[11px] py-3.5 px-10 uppercase tracking-widest font-bold shadow-lg shadow-[#4A5D4E]/10">Order Now</button>
        </div>
      </nav>

      <main className="flex-1 pt-40 px-6 max-w-7xl mx-auto w-full">
        {/* ─── HERO ────────────────────────────────────────── */}
        <section className="flex flex-col lg:flex-row items-center gap-20 mb-40">
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F2E3D5] rounded-full">
               <div className="w-2 h-2 rounded-full bg-[#A67C52] animate-pulse" />
               <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-[#A67C52]">Gourmet Engineering Active</span>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-serif leading-[0.9] nature-text italic font-medium">
              The Art of <br /> Urban Harvest.
            </h2>
            
            <p className="text-xl md:text-2xl text-[#2D2926]/70 max-w-xl font-light leading-relaxed">
              A premium digital architecture for high-end grocery, artisan hot foods, and neighborhood essentials. Fully interactive. Fully autonomous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
               <button onClick={handleOrderRedirect} className="artisan-button px-14 py-6 text-xl group">
                  Enter Storefront <ChevronRight className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="border-2 border-[#E5E1D8] bg-white text-[#4A5D4E] px-14 py-6 rounded-full text-[11px] uppercase font-bold tracking-widest hover:bg-[#F2E3D5] transition-all hover:border-[#4A5D4E]">Our Ethos</button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full h-[650px] bg-gradient-to-br from-[#F2E3D5] to-[#E5E1D8] rounded-[40px] overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center select-none">
                <div className="text-[200px] font-serif italic text-white/50 group-hover:scale-110 transition-transform duration-1000 ease-out">ES</div>
             </div>
             <div className="absolute top-12 right-12 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-spin-slow">
                <div className="text-[8px] text-[#4A5D4E] font-bold uppercase tracking-widest text-center leading-tight">Fresh<br/>Daily</div>
             </div>
             <div className="absolute bottom-12 left-12 p-10 bg-white/95 backdrop-blur-xl rounded-3xl border border-white max-w-xs shadow-2xl transition-transform hover:scale-105">
                <p className="italic font-serif text-xl text-[#4A5D4E] mb-4">"Every product is an interaction. Every meal is a protocol."</p>
                <div className="w-16 h-[2px] bg-[#D98C45] mb-6" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#A67C52]">Eden Square Manifesto</span>
             </div>
          </div>
        </section>

        {/* ─── CATEGORIES ──────────────────────────────────── */}
        <section className="space-y-16 mb-40">
           <div className="text-center space-y-4">
              <h3 className="text-4xl font-serif italic nature-text">Curated Collections</h3>
              <p className="text-xs uppercase tracking-[0.5em] text-[#2D2926]/40 font-bold font-sans">Precision Selected Components</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {CATEGORIES.map((cat, i) => (
                <div key={i} className="artisan-card p-12 flex flex-col items-center text-center group cursor-pointer" onClick={handleOrderRedirect}>
                   <div className="w-20 h-20 bg-[#FCF9F2] rounded-2xl flex items-center justify-center mb-8 border border-[#E5E1D8] group-hover:bg-[#4A5D4E] group-hover:text-white transition-all">
                      <cat.icon size={32} strokeWidth={1} />
                   </div>
                   <span className={`${cat.badge} mb-8`}>{cat.name}</span>
                   <ul className="space-y-4 mb-10">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-sm font-medium text-[#2D2926]/60 group-hover:text-[#2D2926] transition-colors">{item}</li>
                      ))}
                   </ul>
                   <div className="mt-auto flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.3em] text-[#4A5D4E] group-hover:gap-4 transition-all">
                      Explore Collection <ChevronRight size={14} />
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="p-24 bg-[#2D2926] text-white selection:bg-[#D98C45]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 border-b border-white/5 pb-20 mb-20">
           <div className="space-y-8">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white italic font-serif text-3xl">E</div>
              <p className="text-white/60 font-light leading-relaxed max-w-xs">
                 Redefining the neighborhood experience through the lens of gourmet engineering and autonomous service.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-12 lg:col-span-2">
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Protocols</h4>
                 <ul className="space-y-4 text-sm font-medium text-white/40">
                    <li><button className="hover:text-white transition-colors">Storefront API</button></li>
                    <li><button className="hover:text-white transition-colors">Kitchen Webhook</button></li>
                    <li><button className="hover:text-white transition-colors">Vault Security</button></li>
                 </ul>
              </div>
              <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20">Governance</h4>
                 <ul className="space-y-4 text-sm font-medium text-white/40">
                    <li><button className="hover:text-white transition-colors">Privacy Layer</button></li>
                    <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
                    <li><button className="hover:text-white transition-colors">Compliance</button></li>
                 </ul>
              </div>
           </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold italic">"Everything Else is Just Noise."</p>
           <span className="text-[10px] uppercase tracking-widest text-white/10">© 2026 Eden Square Autonomous Retail Architecture</span>
        </div>
      </footer>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
