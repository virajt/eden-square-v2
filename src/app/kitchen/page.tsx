"use client";

import { useEffect, useState, useRef } from "react";
import { 
  Activity, ShoppingBag, Clock, ChevronRight, AlertCircle, 
  CheckCircle2, Printer, Play, Pause, RefreshCw 
} from "lucide-react";
import { cn } from "@/lib/utils";

const SAMPLE_ORDERS = [
  { id: 101, name: "Arjun", type: "Dine-in", items: ["Small Batch Roast", "Pain au Chocolat"], time: "2m ago", status: "preparing", total: "24.50" },
  { id: 102, name: "Sarah", type: "Takeaway", items: ["House Kombucha", "Lemon Tart", "Local Cheeses"], time: "5m ago", status: "pending", total: "42.00" },
];

export default function KitchenProtocol() {
  const [orders, setOrders] = useState(SAMPLE_ORDERS);
  const [isAutoPrint, setIsAutoPrint] = useState(true);
  const [lastSync, setLastSync] = useState(new Date().toLocaleTimeString());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    const interval = setInterval(() => {
      setLastSync(new Date().toLocaleTimeString());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = (id: number, status: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    if (status === 'ready' && isAutoPrint) {
        window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#2D2926] p-10 pt-32 font-sans selection:bg-[#4A5D4E]/20">
      <header className="mb-16 flex justify-between items-end border-b border-[#E5E1D8] pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#4A5D4E] text-white rounded-full w-fit">
            <Activity size={14} className="animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Swarm Intelligence Active</span>
          </div>
          <h1 className="text-6xl font-serif italic nature-text leading-none">Kitchen Protocol</h1>
        </div>
        
        <div className="flex gap-12 text-right">
           <div className="space-y-1">
              <div className="text-5xl font-serif italic text-[#4A5D4E]">{orders.length}</div>
              <div className="text-[8px] uppercase tracking-widest text-[#2D2926]/40 font-bold">Queue Volume</div>
           </div>
           <div className="space-y-1">
              <div className="text-5xl font-serif italic text-[#A67C52]">12m</div>
              <div className="text-[8px] uppercase tracking-widest text-[#2D2926]/40 font-bold">Avg Fulfillment</div>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {orders.map(order => (
          <div key={order.id} className="bg-white border border-[#E5E1D8] rounded-[24px] overflow-hidden shadow-xl shadow-[#4A5D4E]/5 flex flex-col transition-all hover:border-[#4A5D4E]/30">
            <div className={cn(
                "h-2 w-full",
                order.status === 'preparing' ? 'bg-[#D98C45]' : 'bg-[#4A5D4E]'
            )} />
            
            <div className="p-8 border-b border-[#E5E1D8] bg-[#F2E3D5]/20 flex justify-between items-center">
               <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#A67C52] font-bold tracking-tight">OS_PROTOCOL_#{order.id}</div>
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#2D2926]/40 font-bold">
                     <Clock size={10} /> {order.time}
                  </div>
               </div>
               <div className="px-3 py-1 border border-[#4A5D4E]/20 rounded-full text-[9px] uppercase font-bold tracking-widest text-[#4A5D4E]">
                  {order.type}
               </div>
            </div>

            <div className="p-10 flex-1 space-y-8">
               <ul className="space-y-5">
                  {order.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-5 group">
                       <div className="w-8 h-8 rounded-xl border border-[#E5E1D8] flex items-center justify-center text-[11px] font-mono text-[#4A5D4E] bg-[#FCF9F2] group-hover:bg-[#4A5D4E] group-hover:text-white transition-colors">1</div>
                       <span className="text-base font-bold uppercase tracking-tight text-[#2D2926]">{item}</span>
                    </li>
                  ))}
               </ul>
               <div className="pt-6 border-t border-[#E5E1D8] flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#2D2926]/30">Subject: {order.name}</span>
                  <span className="text-lg font-serif italic text-[#4A5D4E]">${order.total}</span>
               </div>
            </div>

            <div className="p-8 bg-[#FCF9F2]/50 border-t border-[#E5E1D8] grid grid-cols-2 gap-4">
               <button 
                onClick={() => updateStatus(order.id, order.status === 'pending' ? 'preparing' : 'ready')}
                className={cn(
                    "col-span-2 py-5 rounded-2xl text-[11px] uppercase font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-3",
                    order.status === 'preparing' ? 'bg-[#D98C45] text-white' : 'bg-[#4A5D4E] text-white hover:bg-[#3d4d41]'
                )}
               >
                  {order.status === 'preparing' ? <CheckCircle2 size={16} /> : <Play size={16} />}
                  {order.status === 'preparing' ? 'Finalize Protocol' : 'Initialize Prep'}
               </button>
               <button className="py-4 border border-[#E5E1D8] rounded-xl text-[9px] uppercase font-bold tracking-widest text-[#2D2926]/40 hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Printer size={12} /> Reprint
               </button>
               <button className="py-4 border border-[#E5E1D8] rounded-xl text-[9px] uppercase font-bold tracking-widest text-red-400/60 hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                  <AlertCircle size={12} /> Flag
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* ─── SYSTEM STATUS BAR ─────────────────────────────── */}
      <div className="fixed bottom-10 left-10 right-10 flex justify-between items-center bg-white/90 backdrop-blur-xl border border-[#E5E1D8] p-6 rounded-[30px] shadow-2xl shadow-[#4A5D4E]/10 z-40">
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#4A5D4E]">Thermal Gateway: Online</span>
            </div>
            <div className="h-4 w-[1px] bg-[#E5E1D8]" />
            <div className="flex items-center gap-3 text-[#2D2926]/40">
               <RefreshCw size={12} className="animate-spin-slow" />
               <span className="text-[9px] uppercase font-bold tracking-widest">Last Sync: {lastSync}</span>
            </div>
         </div>
         
         <div className="flex items-center gap-6">
            <label className="flex items-center gap-3 cursor-pointer group">
               <span className="text-[9px] uppercase font-bold tracking-widest text-[#2D2926]/40 group-hover:text-[#4A5D4E] transition-colors">Auto-Print Protocol</span>
               <button 
                onClick={() => setIsAutoPrint(!isAutoPrint)}
                className={cn(
                    "w-12 h-6 rounded-full relative transition-all",
                    isAutoPrint ? "bg-[#4A5D4E]" : "bg-[#E5E1D8]"
                )}
               >
                  <div className={cn(
                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                    isAutoPrint ? "left-7" : "left-1"
                  )} />
               </button>
            </label>
            <button className="p-3 hover:bg-[#F2E3D5] rounded-full transition-colors">
               <RefreshCw size={18} className="text-[#4A5D4E]" />
            </button>
         </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @media print {
            .no-print { display: none; }
            body { background: white; }
        }
      `}</style>
    </div>
  );
}
