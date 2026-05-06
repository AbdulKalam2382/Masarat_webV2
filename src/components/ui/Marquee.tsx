"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({ items, direction = "left", className }: MarqueeProps) {
  return (
    <div className={cn(
      "relative overflow-hidden flex whitespace-nowrap py-4",
      "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#F8FAFC] before:to-transparent",
      "after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:right-0 after:bg-gradient-to-l after:from-[#F8FAFC] after:to-transparent",
      className
    )}>
      <motion.div
        animate={{
          x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="flex gap-6 pr-6"
      >
        {/* Two sets of items for seamless looping */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="px-10 py-4 bg-white/50 backdrop-blur-sm border border-[#E5E5EA] rounded-[22px] text-base font-bold text-[#1D1D1F] shadow-sm hover:border-blue-500/50 transition-colors"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
