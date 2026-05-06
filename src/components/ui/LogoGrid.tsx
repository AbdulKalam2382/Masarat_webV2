"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoItem {
  id: string;
  name: string;
  src?: string;
  isText?: boolean;
  textColor?: string;
}

interface LogoGridProps {
  items: LogoItem[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function LogoTile({ item }: { item: LogoItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -3,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "group relative h-[100px] p-6 bg-white dark:bg-[#0D1B2A] border-r-[0.5px] border-b-[0.5px] border-brand-border dark:border-[#1E3150] flex items-center justify-center transition-all duration-300",
        "hover:bg-[#F0F6FF] dark:hover:bg-[#122040] hover:border-brand-blue hover:shadow-xl hover:shadow-brand-blue/10"
      )}
    >
      {/* Selection background logic */}
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.01] transition-colors duration-300" />
      
      {item.isText || hasError ? (
        <span 
          className="text-[14px] font-bold tracking-tighter transition-all duration-300 uppercase text-center relative z-10 px-2"
          style={{ color: item.isText ? (item.textColor || "#0066CC") : undefined }}
        >
          {item.name}
        </span>
      ) : item.src ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={item.src}
            alt={item.name}
            onError={() => setHasError(true)}
            referrerPolicy="no-referrer"
            className="max-h-[48px] max-w-[75%] object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 relative z-10"
            loading="lazy"
          />
        </div>
      ) : (
        <span className="text-sm font-bold text-brand-ink uppercase opacity-40">
          {item.name}
        </span>
      )}
    </motion.div>
  );
}

export default function LogoGrid({ items, className }: LogoGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-0 border-l-[0.5px] border-t-[0.5px] border-brand-border",
        className
      )}
    >
      {items.map((item) => (
        <LogoTile key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
