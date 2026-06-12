"use client";
import React from 'react';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const ArtisanButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  isLoading, 
  icon, 
  disabled, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-[#4A5D4E] text-white hover:bg-[#3d4d41] shadow-lg shadow-[#4A5D4E]/10",
    secondary: "bg-[#A67C52] text-white hover:bg-[#8e6b45]",
    outline: "border-2 border-[#E5E1D8] bg-white text-[#4A5D4E] hover:bg-[#F2E3D5] hover:border-[#4A5D4E]",
    ghost: "text-[#4A5D4E] hover:bg-[#4A5D4E]/5"
  };

  return (
    <button 
      disabled={isLoading || disabled}
      className={cn(
        "relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[11px] uppercase font-bold tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
        variants[variant],
        className
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
      <span className={cn(isLoading && "opacity-0")}>{children}</span>
    </button>
  );
};
