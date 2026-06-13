"use client";

import React, { useState } from 'react';
import { ArtisanButton } from "@/components/ui/ArtisanButton";
import { ArtisanCard } from "@/components/ui/ArtisanCard";
import { ArrowLeft, ShieldCheck, CreditCard, Lock, Zap, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF9F2] text-[#2D2926] p-8 pt-32 font-sans selection:bg-[#4A5D4E]/20">
      <nav className="fixed top-0 w-full left-0 p-8 flex justify-between items-center bg-white/90 backdrop-blur-2xl border-b border-[#E5E1D8] z-[100]">
        <ArtisanButton variant="ghost" icon={<ArrowLeft size={16} />} onClick={() => window.location.href = '/menu'}>Back to Selection</ArtisanButton>
        <h1 className="text-3xl font-serif italic nature-text uppercase tracking-tighter">Finalize Protocol</h1>
        <div className="flex items-center gap-2 text-[#4A5D4E]/40">
           <Lock size={14} />
           <span className="text-[10px] uppercase font-black tracking-widest">Secure Tunnel</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* --- CHECKOUT FORM --- */}
        <div className="lg:col-span-2 space-y-12">
           <section className="space-y-8">
              <h3 className="text-2xl font-serif italic text-[#4A5D4E] flex items-center gap-4">
                 <span className="w-8 h-8 rounded-full border border-[#4A5D4E] flex items-center justify-center text-sm not-italic font-mono">01</span>
                 Identification Node
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="FULL NAME" className="bg-white border border-[#E5E1D8] p-5 rounded-xl text-[10px] uppercase font-bold tracking-widest focus:border-[#4A5D4E] outline-none transition-all" />
                 <input type="email" placeholder="ADMIN_EMAIL_PROTOCOL" className="bg-white border border-[#E5E1D8] p-5 rounded-xl text-[10px] uppercase font-bold tracking-widest focus:border-[#4A5D4E] outline-none transition-all" />
              </div>
           </section>

           <section className="space-y-8">
              <h3 className="text-2xl font-serif italic text-[#4A5D4E] flex items-center gap-4">
                 <span className="w-8 h-8 rounded-full border border-[#4A5D4E] flex items-center justify-center text-sm not-italic font-mono">02</span>
                 Payment Authorization
              </h3>
              <ArtisanCard className="p-8 space-y-6 border-dashed bg-[#4A5D4E]/5 border-[#4A5D4E]/20">
                 <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E5E1D8]">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-[#4A5D4E]/10 rounded-lg flex items-center justify-center text-[#4A5D4E]">
                          <CreditCard size={20} />
                       </div>
                       <span className="text-[10px] uppercase font-black tracking-widest">Stripe Protocol Active</span>
                    </div>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                 </div>
                 <p className="text-[9px] text-[#2D2926]/40 leading-relaxed italic uppercase tracking-widest">
                    Encryption 256-bit active. Financial audit logging enabled for this transaction.
                 </p>
              </ArtisanCard>
           </section>

           <ArtisanButton 
            className="w-full py-8 text-xl group" 
            isLoading={isProcessing}
            onClick={() => setIsProcessing(true)}
           >
              Initialize Transaction Swarm <Zap className="group-hover:scale-125 transition-transform" />
           </ArtisanButton>
        </div>

        {/* --- ORDER SUMMARY --- */}
        <div className="space-y-8">
           <ArtisanCard className="p-10 bg-white shadow-2xl shadow-[#4A5D4E]/5">
              <h4 className="text-[10px] uppercase font-black tracking-[0.5em] text-[#A67C52] mb-8">Selection Ledger</h4>
              <div className="space-y-6 mb-10">
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-bold uppercase tracking-tight">Truffle Risotto</span>
                    <span className="text-sm font-mono text-[#4A5D4E] font-bold">$32.00</span>
                 </div>
                 <div className="w-full h-px bg-[#E5E1D8]" />
                 <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-serif italic">Total Protocol Cost</span>
                    <span className="text-2xl font-serif italic text-[#4A5D4E]">$32.00</span>
                 </div>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-emerald-600">
                    <ShieldCheck size={14} />
                    <span className="text-[8px] uppercase font-black tracking-widest">Artisan Authenticity Guaranteed</span>
                 </div>
                 <div className="flex items-center gap-3 text-[#A67C52]">
                    <Zap size={14} />
                    <span className="text-[8px] uppercase font-black tracking-widest">Instant Sync to Kitchen Protocol</span>
                 </div>
              </div>
           </ArtisanCard>
        </div>
      </div>
    </div>
  );
}
