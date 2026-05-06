"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({ from = 0, to, suffix = "", label, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const countRef = useRef(from);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const nextCount = Math.floor(from + easedProgress * (to - from));
      
      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, from, to]);

  return (
    <div ref={elementRef} className={cn("flex flex-col items-center justify-center p-8", className)}>
      <div className="flex items-baseline">
        <span className="text-[52px] font-bold tracking-[-2.5px] font-outfit text-brand-ink dark:text-[#F5F5F7]">
          {count}
        </span>
        <span className="text-[52px] font-bold tracking-[-2.5px] font-outfit text-brand-blue">
          {suffix}
        </span>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-muted dark:text-[#A1A1A6] mt-2">
        {label}
      </p>
    </div>
  );
}
