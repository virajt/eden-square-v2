import { ArtisanButton } from "@/components/ui/ArtisanButton";
import { ArtisanCard } from "@/components/ui/ArtisanCard";
import { 
  ShoppingCart, Coffee, Croissant, Carrot, Wine, 
  ChevronRight, ArrowRight, ShieldCheck, Zap, Globe 
} from "lucide-react";

const CATEGORIES = [
  { name: "Coffee", badge: "coffee-badge", icon: Coffee, items: ["Small Batch Roast", "Cold Brew", "Artisan Latte"] },
  { name: "Bakery", badge: "bakery-badge", icon: Croissant, items: ["Sourdough", "Pain au Chocolat", "Lemon Tart"] },
  { name: "Grocery", badge: "grocery-badge", icon: Carrot, items: ["Organic Honey", "Cold Pressed Oil", "Local Cheeses"] },
  { name: "Drinks", badge: "grocery-badge", icon: Wine, items: ["Sparkling Botanical", "House Kombucha"] }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F2] text-[#2D2926] selection:bg-[#4A5D4E]/20 overflow-x-hidden">
      {/* ─── NAVIGATION ─────────────────────────────────────── */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center bg-white/90 backdrop-blur-2xl border-b border-[#E5E1D8] z-[100] transition-all">
        <div className="flex items-center gap-4 group cursor-pointer">
           <div className="w-12 h-12 bg-[#4A5D4E] rounded-2xl flex items-center justify-center text-white font-serif text-3xl italic shadow-xl shadow-[#4A5D4E]/20 group-hover:rotate-[-5deg] transition-all">E</div>
           <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold tracking-tight text-[#4A5D4E] leading-none">Eden Square</h1>
              <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-[#A67C52] mt-1">Autonomous Retail</span>
           </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase font-bold tracking-[0.3em] text-[#4A5D4E]/50">
          {['Selection', 'Kitchen', 'Nexus', 'Ethos'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#4A5D4E] transition-all hover:translate-y-[-1px] relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D98C45] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
           <button className="text-[#4A5D4E] hover:scale-110 transition-transform relative group">
              <ShoppingCart size={24} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#D98C45] text-white text-[9px] rounded-full flex items-center justify-center font-black shadow-lg">0</span>
           </button>
           <ArtisanButton className="hidden sm:flex px-12 py-4">Order Now</ArtisanButton>
        </div>
      </nav>

      <main className="flex-1 pt-48 px-8 max-w-[1400px] mx-auto w-full">
        {/* ─── HERO ────────────────────────────────────────── */}
        <section className="flex flex-col lg:flex-row items-center gap-24 mb-48">
          <div className="flex-1 space-y-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#F2E3D5] rounded-full border border-[#E5E1D8]">
               <div className="w-2.5 h-2.5 rounded-full bg-[#A67C52] animate-pulse shadow-[0_0_10px_rgba(166,124,82,0.5)]" />
               <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A67C52]">System Status: Optimal</span>
            </div>
            
            <h2 className="text-8xl md:text-[140px] font-serif leading-[0.85] nature-text italic font-medium tracking-[-0.04em]">
              The Art of <br /> Urban Harvest.
            </h2>
            
            <p className="text-2xl md:text-3xl text-[#2D2926]/70 max-w-2xl font-light leading-relaxed">
              A world-class digital architecture for high-stakes hospitality. Precision-roasted coffee, artisan bakery, and curated organic essentials. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
               <ArtisanButton variant="primary" className="px-16 py-7 text-xl group h-20">
                  Enter Storefront <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </ArtisanButton>
               <ArtisanButton variant="outline" className="px-16 py-7 text-xl h-20">
                  Our Legacy
               </ArtisanButton>
            </div>
            
            <div className="pt-12 flex flex-wrap justify-center lg:justify-start gap-12 opacity-40">
               {[
                 { icon: ShieldCheck, text: "Secure Vault" },
                 { icon: Zap, text: "Instant Sync" },
                 { icon: Globe, text: "Global Node" }
               ].map((feat, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <feat.icon size={18} strokeWidth={1.5} />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{feat.text}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="flex-1 relative w-full h-[800px] rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(74,93,78,0.15)] group bg-[#F2E3D5]">
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[350px] font-serif italic text-white/40 group-hover:scale-105 transition-transform duration-1000 ease-out select-none">ES</div>
             </div>
             
             {/* Interaction Element */}
             <div className="absolute top-16 right-16 w-32 h-32 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-md animate-spin-slow cursor-help group/spin">
                <div className="text-[10px] text-[#4A5D4E] font-black uppercase tracking-[0.2em] text-center leading-tight group-hover/spin:scale-110 transition-transform">
                   Harvest<br/>Fresh<br/>2026
                </div>
             </div>

             <ArtisanCard className="absolute bottom-16 left-16 max-w-sm border-none bg-white/95 backdrop-blur-2xl shadow-2xl p-12 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <p className="italic font-serif text-2xl text-[#4A5D4E] mb-8 leading-tight">"We don't sell products; we orchestrate high-performance protocols for local living."</p>
                <div className="w-20 h-[3px] bg-[#D98C45] mb-8" />
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#4A5D4E]/10 flex items-center justify-center text-[#4A5D4E] font-bold italic">VT</div>
                   <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[#A67C52]">The Founder</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#2D2926]/40">Eden Square Manifesto</span>
                   </div>
                </div>
             </ArtisanCard>
          </div>
        </section>

        {/* ─── COLLECTIONS ─────────────────────────────────── */}
        <section className="space-y-24 mb-60">
           <div className="text-center space-y-6">
              <h3 className="text-6xl font-serif italic nature-text">The Artisan Collection</h3>
              <p className="text-[11px] uppercase tracking-[0.6em] text-[#2D2926]/30 font-black">Precision Engineering / Curated Nodes</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
              {CATEGORIES.map((cat, i) => (
                <ArtisanCard key={i} className="p-16 flex flex-col items-center text-center group/card cursor-pointer">
                   <div className="w-24 h-24 bg-[#FCF9F2] rounded-[32px] flex items-center justify-center mb-12 border border-[#E5E1D8] group-hover/card:bg-[#4A5D4E] group-hover/card:text-white group-hover/card:rotate-[-8deg] group-hover/card:scale-110 transition-all duration-500 shadow-lg shadow-[#4A5D4E]/5">
                      <cat.icon size={40} strokeWidth={1} />
                   </div>
                   <span className={`${cat.badge} mb-10 text-[10px] py-2 px-6 font-black`}>{cat.name}</span>
                   <ul className="space-y-6 mb-16">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-lg font-medium text-[#2D2926]/50 group-hover/card:text-[#2D2926] transition-colors">{item}</li>
                      ))}
                   </ul>
                   <div className="mt-auto flex items-center gap-3 text-[11px] uppercase font-black tracking-[0.4em] text-[#4A5D4E] group-hover/card:gap-6 transition-all">
                      Deploy <ChevronRight size={18} />
                   </div>
                </ArtisanCard>
              ))}
           </div>
        </section>
      </main>

      <footer className="p-32 bg-[#2D2926] text-white selection:bg-[#D98C45]/40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4A5D4E]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-[-1/2]" />
        
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-32 relative z-10 border-b border-white/5 pb-32 mb-32">
           <div className="lg:col-span-2 space-y-12">
              <div className="flex items-center gap-6">
                 <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white italic font-serif text-5xl shadow-2xl">E</div>
                 <div className="flex flex-col">
                    <h4 className="text-3xl font-serif italic text-white leading-none">Eden Square</h4>
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#D98C45] font-black mt-2">v2.0 / Project One Million</span>
                 </div>
              </div>
              <p className="text-2xl text-white/40 font-light leading-relaxed max-w-xl italic">
                 "Every interaction is a protocol. Every meal is an architecture. We have redesigned the neighborhood store as a high-performance system for the $1M/month scale."
              </p>
           </div>
           
           <div className="space-y-10">
              <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-white/20">Operational Nodes</h4>
              <ul className="space-y-6 text-base font-bold uppercase tracking-widest text-white/30">
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Storefront Node</button></li>
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Kitchen Swarm</button></li>
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Admin Nexus</button></li>
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">The Vault</button></li>
              </ul>
           </div>

           <div className="space-y-10">
              <h4 className="text-[11px] uppercase tracking-[0.6em] font-black text-white/20">Compliance</h4>
              <ul className="space-y-6 text-base font-bold uppercase tracking-widest text-white/30">
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Finance Layer</button></li>
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Privacy Node</button></li>
                 <li><button className="hover:text-[#D98C45] transition-all hover:translate-x-2">Terms of Service</button></li>
              </ul>
           </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
           <p className="text-[12px] uppercase tracking-[0.8em] text-white/10 font-black italic">"Everything Else is Just Noise."</p>
           <div className="flex items-center gap-8 text-[11px] uppercase font-black tracking-widest text-white/5">
              <span>LDN</span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <span>NYC</span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <span>AKL</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
