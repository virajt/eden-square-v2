"use client";

import { useState, useEffect } from "react";

export default function AdminNexus() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-black text-white flex font-sans selection:bg-gold/30">
      {/* ─── SIDEBAR ─────────────────────────────────────── */}
      <aside className="w-80 border-r border-white/10 flex flex-col p-8 gap-12 bg-black/80 backdrop-blur-xl">
        <div className="flex flex-col gap-2">
           <div className="text-3xl font-bold italic tracking-tighter uppercase flex items-center gap-3">
             <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center text-black not-italic text-sm">N</div>
             Nexus <span className="text-gold">Admin</span>
           </div>
           <div className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Project Phoenix / OS v5.0</div>
        </div>

        <nav className="flex flex-col gap-2">
          {['Overview', 'Inventory', 'Protocols', 'Intelligence', 'The Vault'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex items-center gap-4 px-6 py-5 transition-all text-[10px] uppercase tracking-[0.3em] font-bold border ${
                activeTab === tab.toLowerCase() ? 'bg-gold text-black border-gold' : 'text-white/30 border-white/5 hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-bold text-sm italic">VT</div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest">Master Admin</span>
              <span className="text-[8px] uppercase text-gold/40 tracking-widest font-mono">Full Protocol Access</span>
           </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ────────────────────────────────── */}
      <main className="flex-1 p-20 overflow-y-auto">
        <header className="flex justify-between items-start mb-24">
          <div>
             <span className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">System Path / {activeTab}</span>
             <h1 className="text-8xl font-serif italic uppercase tracking-tighter leading-none gold-gradient">{activeTab}</h1>
          </div>
          <button className="gold-button text-[10px] px-12 py-5 shadow-2xl shadow-gold/10 uppercase tracking-widest font-bold">+ Initialize Protocol</button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {[
             { label: 'Platform Status', val: 'ACTIVE', color: 'text-emerald-500' },
             { label: 'Sync Latency', val: '14ms', color: 'text-white' },
             { label: 'Revenue (24h)', val: '$4,250.00', color: 'text-gold' },
             { label: 'System Health', val: '99.9%', color: 'text-emerald-500' }
           ].map((stat, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-10 relative overflow-hidden group">
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">{stat.label}</div>
                <div className={`text-4xl font-serif italic tracking-tighter ${stat.color}`}>{stat.val}</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
             </div>
           ))}
        </div>

        <div className="bg-white/[0.02] border border-white/10 p-12">
           <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
              <h3 className="text-2xl font-serif italic uppercase tracking-tight">Active <span className="text-gold">Ledger</span></h3>
              <span className="text-[9px] uppercase tracking-[0.5em] text-white/20">Awaiting Transaction Flow</span>
           </div>
           <div className="h-64 flex flex-col items-center justify-center opacity-10">
              <div className="w-1 h-12 bg-white mb-6" />
              <div className="text-[10px] uppercase tracking-[0.5em]">No active transactions found</div>
           </div>
        </div>
      </main>
    </div>
  );
}
