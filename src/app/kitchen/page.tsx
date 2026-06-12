"use client";

import { useEffect, useState, useRef } from "react";

const SAMPLE_ORDERS = [
  { id: 101, name: "Arjun", type: "Dine-in", items: ["Small Batch Roast", "Pain au Chocolat"], time: "2m ago", status: "preparing" },
  { id: 102, name: "Sarah", type: "Takeaway", items: ["House Kombucha", "Lemon Tart", "Local Cheeses"], time: "5m ago", status: "pending" },
];

export default function KitchenProtocol() {
  const [orders, setOrders] = useState(SAMPLE_ORDERS);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#2D2926] p-8 pt-24 font-sans selection:bg-[#4A5D4E]/20">
      <header className="mb-12 flex justify-between items-end border-b border-[#E5E1D8] pb-8">
        <div>
          <h1 className="text-5xl font-serif italic nature-text leading-none mb-2">Kitchen Protocol</h1>
          <p className="text-[10px] text-[#A67C52] uppercase tracking-[0.4em] font-bold">Live Production Swarm</p>
        </div>
        <div className="text-right">
          <div className="text-6xl font-serif italic text-[#4A5D4E]">{orders.length}</div>
          <div className="text-[8px] uppercase tracking-widest text-[#2D2926]/40 font-bold">Orders Awaiting Fulfillment</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {orders.map(order => (
          <div key={order.id} className="bg-white border border-[#E5E1D8] rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className={`h-1.5 w-full ${order.status === 'preparing' ? 'bg-[#D98C45]' : 'bg-[#4A5D4E]'}`} />
            
            <div className="p-6 border-b border-[#E5E1D8] bg-[#F2E3D5]/20 flex justify-between items-center">
               <div>
                  <div className="text-[10px] font-mono text-[#A67C52] mb-1 font-bold">ORDER #{order.id}</div>
                  <div className="text-[9px] uppercase tracking-widest text-[#2D2926]/40 font-bold">{order.time}</div>
               </div>
               <span className="text-[10px] uppercase font-bold tracking-widest text-[#4A5D4E]">{order.type}</span>
            </div>

            <div className="p-8 flex-1">
               <ul className="space-y-4">
                  {order.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                       <span className="w-6 h-6 rounded-full border border-[#E5E1D8] flex items-center justify-center text-[10px] font-mono text-[#4A5D4E] bg-[#FCF9F2]">1</span>
                       <span className="text-sm font-bold uppercase tracking-tight text-[#2D2926]">{item}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-6 bg-[#FCF9F2]/50 border-t border-[#E5E1D8] flex flex-col gap-4">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#2D2926]/40">{order.name}</span>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[8px] uppercase font-bold tracking-widest text-emerald-600">Paid</span>
                  </div>
               </div>
               <button className="w-full py-4 bg-[#4A5D4E] text-white text-[10px] uppercase font-bold tracking-widest rounded-lg hover:bg-[#3d4d41] transition-all">
                  {order.status === 'preparing' ? 'Mark as Ready' : 'Start Preparation'}
               </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8 flex items-center gap-4 bg-white border border-[#E5E1D8] px-6 py-3 rounded-full shadow-lg">
         <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
         <span className="text-[9px] uppercase font-bold tracking-widest text-[#4A5D4E]">Thermal Printer Active</span>
      </div>
    </div>
  );
}
