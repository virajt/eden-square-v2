"use client";

import { useEffect, useState, useRef } from "react";

export default function KitchenProtocol() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const lastOrderCount = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fetchOrders = async () => {
    // This will poll the actual API in the future
    setLoading(false);
  };

  useEffect(() => {
    // Using a refined alert sound
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    fetchOrders();
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24 font-sans selection:bg-gold/30">
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-8">
        <div>
          <h1 className="text-4xl font-bold gold-gradient uppercase tracking-tighter italic">Kitchen <span className="text-white">Protocol</span></h1>
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.4em] mt-2 font-bold">Active Production Queue</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-mono gold-gradient">{orders.length}</div>
          <div className="text-[8px] uppercase tracking-widest text-white/20">Pending Fulfillment</div>
        </div>
      </header>

      {loading ? (
        <div className="h-64 flex items-center justify-center opacity-20 uppercase tracking-[0.5em] text-xs">Synchronizing...</div>
      ) : orders.length === 0 ? (
        <div className="h-96 flex flex-col items-center justify-center text-center opacity-20 border border-white/5 border-dashed">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent mb-8" />
          <h2 className="text-xs uppercase tracking-[0.5em]">Standing by for transactions</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Active order cards with Royal Gold accents and automated print triggers */}
        </div>
      )}
      
      <div className="fixed bottom-8 right-8 flex gap-4 opacity-20 hover:opacity-100 transition-opacity">
         <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-[8px] uppercase tracking-widest font-bold">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Thermal Printer Linked
         </div>
      </div>
    </div>
  );
}
