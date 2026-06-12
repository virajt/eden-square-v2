"use client";
import React from 'react';
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const ArtisanCard = ({ 
  children, 
  className, 
  hoverable = true,
  padding = 'md'
}: CardProps) => {
  const paddings = {
    none: "",
    sm: "p-6",
    md: "p-10",
    lg: "p-16"
  };

  return (
    <div className={cn(
      "bg-white border border-[#E5E1D8] rounded-[24px] overflow-hidden transition-all duration-300",
      hoverable && "hover:translate-y-[-8px] hover:border-[#4A5D4E]/30 hover:shadow-2xl hover:shadow-[#4A5D4E]/5",
      paddings[padding],
      className
    )}>
      {children}
    </div>
  );
};
