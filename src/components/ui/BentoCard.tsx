"use client";
import React from "react";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";


interface BentoCardProps {
  tag: string;
  title: string;
  description: string;
  number: string;
  className?: string;
  variant?: "blue" | "offwhite" | "gold" | "dark" | "outline";
  href?: string;
  icon?: React.ReactNode;
  bullets?: string[];
}

const variants = {
  blue: "bg-[#2563EB] text-white",
  offwhite: "bg-[#EEF3FB] dark:bg-[#10192C] border-[#E2EAF8] dark:border-[#1E3150] border text-[#1B3A6B] dark:text-white",
  gold: "bg-[#FDF6EC] dark:bg-[#1A56DB]/10 text-[#1A56DB]",
  dark: "bg-[#1B3A6B] dark:bg-[#0F1C2E] text-white",
  outline: "bg-white dark:bg-[#0B1221] border-[0.5px] border-[#E2EAF8] dark:border-[#1E3150] text-[#1B3A6B] dark:text-white",
};

export default function BentoCard({ tag, title, description, number, className, variant = "offwhite", href, icon, bullets }: BentoCardProps) {
  const CardContent = (
      <motion.div
        whileHover={{ y: -10 }}
        className={cn(
          "service-card relative p-10 rounded-[40px] h-full overflow-hidden flex flex-col justify-between group transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(15,28,46,0.1)]",
          variants[variant],
          !href && className
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-10">
            <span className={cn(
              "text-[10px] uppercase tracking-[0.4em] font-bold px-5 py-2 rounded-full border border-current/20 backdrop-blur-sm",
            )}>
              {tag}
            </span>
            <div className="flex gap-4">
              {icon && (
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-current/[0.08] group-hover:bg-current/[0.12] transition-all duration-500 backdrop-blur-md border border-current/[0.05]">
                  <div className="scale-125 group-hover:scale-[1.35] transition-transform duration-700 ease-out">
                    {React.cloneElement(icon as React.ReactElement, { strokeWidth: 1.5 })}
                  </div>
                </div>
              )}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-current/10 group-hover:bg-current transition-all duration-500 -translate-y-2 group-hover:translate-y-0 overflow-hidden relative">
                <ArrowUpRight 
                  size={22} 
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 relative z-10 group-hover:text-background" 
                />
              </div>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-outfit max-w-[95%] leading-[1.05]">
            {title}
          </h3>
          <p className="text-base md:text-lg opacity-60 max-w-[90%] leading-relaxed font-light font-inter">
            {description}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-4 space-y-2">
              {bullets.map((bullet, i) => (
                <li 
                  key={i}
                  className="flex items-start gap-2 text-[12px] leading-relaxed"
                  style={{ 
                    color: variant === 'blue' 
                      ? 'rgba(255,255,255,0.7)'
                      : variant === 'dark'
                      ? 'rgba(255,255,255,0.55)'
                      : variant === 'gold'
                      ? 'rgba(120,80,0,0.75)'
                      : '#6B6B6B'
                  }}
                >
                  <span 
                    className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0"
                    style={{
                      background: variant === 'blue' 
                        ? 'rgba(255,255,255,0.5)'
                        : variant === 'dark'
                        ? 'rgba(255,255,255,0.4)'
                        : variant === 'gold'
                        ? '#1A56DB'
                        : '#2563EB'
                    }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-12 flex justify-between items-end relative z-10">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="text-sm font-bold tracking-widest uppercase opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100">
              Explore Solution
            </span>
            <div className="w-6 h-[1px] bg-current opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-200" />
          </div>
          <span className="text-[140px] font-black opacity-[0.03] select-none absolute bottom-[-50px] right-[-20px] pointer-events-none group-hover:opacity-[0.08] group-hover:-translate-y-4 transition-all duration-1000 font-outfit">
            {number}
          </span>
        </div>
      </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("block w-full h-full", className)}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
