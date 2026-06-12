"use client";

import { useState } from "react";

const STATS = [
  { label: 'Platform Revenue', val: '$8,240.50', color: 'text-[#4A5D4E]' },
  { label: 'Artisan Partners', val: '12', color: 'text-[#2D2926]' },
  { label: 'Inventory Health', val: '94%', color: 'text-[#A67C52]' },
  { label: 'System Uptime', val: '100%', color: 'text-emerald-600' }
];

const RECENT_ACTIVITY = [
  { id: 1, type: 'Inventory', msg: 'Sourdough replenishment protocol initiated', time: '12m ago' },
  { id: 2, type: 'Order', msg: 'New large-scale grocery dispatch #402', time: '45m ago' },
  { id: 3, type: 'System', msg: 'Kitchen SFX protocol optimized', time: '2h ago' },
];

export default function AdminNexus() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#2D2926] flex font-sans selection:bg-[#4A5D4E]/20">
      {/* ─── SIDEBAR ─────────────────────────────────────── */}
      <aside className="w-80 border-r border-[#E5E1D8] flex flex-col p-8 gap-12 bg-white/60 backdrop-blur-xl">
        <div className="flex flex-col gap-2">
           <div className="text-3xl font-serif italic tracking-tighter flex items-center gap-3">
             <div className="w-10 h-10 bg-[#4A5D4E] rounded-lg flex items-center justify-center text-white not-italic text-sm">N</div>
             Eden <span className="text-[#4A5D4E]">Nexus</span>
           </div>
           <div className="text-[9px] uppercase tracking-[0.4em] text-[#4A5D4E]/40 font-bold">Artisan OS v5.2</div>
        </div>

        <nav className="flex flex-col gap-2">
          {['Dashboard', 'Inventory', 'Kitchen Sync', 'Analytics', 'The Vault'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex items-center gap-4 px-8 py-5 transition-all text-[10px] uppercase tracking-[0.3em] font-bold rounded-xl ${
                activeTab === tab.toLowerCase() ? 'bg-[#4A5D4E] text-white' : 'text-[#4A5D4E]/40 hover:bg-[#4A5D4E]/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#E5E1D8] flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 flex items-center justify-center text-[#4A5D4E] font-serif italic text-sm">VT</div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest">Master Admin</span>
              <span className="text-[8px] uppercase text-[#4A5D4E]/60 tracking-widest font-mono">Full Access</span>
           </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────────────── */}
      <main className="flex-1 p-20 overflow-y-auto">
        <header className="flex justify-between items-start mb-24">
          <div>
             <span className="text-[#A67C52] text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">System Path / {activeTab}</span>
             <h1 className="text-8xl font-serif italic tracking-tighter leading-none nature-text uppercase">{activeTab}</h1>
          </div>
          <button className="artisan-button text-[10px] px-12 py-5 shadow-2xl shadow-[#4A5D4E]/10 uppercase tracking-widest font-bold">+ New Entry</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {STATS.map((stat, i) => (
             <div key={i} className="bg-white border border-[#E5E1D8] p-10 rounded-2xl relative overflow-hidden group">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#4A5D4E]/40 mb-6 font-bold">{stat.label}</div>
                <div className={`text-5xl font-serif italic tracking-tighter ${stat.color}`}>{stat.val}</div>
             </div>
           ))}
        </div>

        <div className="bg-white border border-[#E5E1D8] p-16 rounded-3xl shadow-sm">
           <h3 className="text-2xl font-serif italic mb-12 text-[#4A5D4E] border-b border-[#E5E1D8] pb-8">Real-time <span className="text-[#A67C52]">Activity Swarm</span></h3>
           <div className="space-y-6">
              {RECENT_ACTIVITY.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-6 border-b border-[#E5E1D8] last:border-0 group cursor-pointer">
                   <div className="flex items-center gap-8">
                      <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#A67C52] w-24">{item.type}</span>
                      <span className="text-lg font-medium text-[#2D2926] group-hover:text-[#4A5D4E] transition-colors">{item.msg}</span>
                   </div>
                   <span className="text-[10px] font-mono text-[#2D2926]/20 font-bold">{item.time}</span>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
}
