"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Landmark, Banknote, Flame, Building2 } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectorsWeServe() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isMobile = window.innerWidth < 768;
      const intensity = isMobile ? 0.5 : 1;

      gsap.set(bgRef.current, { willChange: 'transform' });
      gsap.to(bgRef.current, {
        yPercent: 35 * intensity, // Increased parallax
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5 // Lower scrub for tighter follow
        }
      });
    });

    return () => mm.revert();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const sectors = [
    {
      icon: Landmark,
      title: t("sectors.s1t"),
      desc: t("sectors.s1d"),
    },
    {
      icon: Banknote,
      title: t("sectors.s2t"),
      desc: t("sectors.s2d"),
    },
    {
      icon: Flame,
      title: t("sectors.s3t"),
      desc: t("sectors.s3d"),
    },
    {
      icon: Building2,
      title: t("sectors.s4t"),
      desc: t("sectors.s4d"),
    },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      data-section-name={t("sectors.kicker")}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-[80px] bg-[#F0F5FF] dark:bg-[#0D1B2A] overflow-hidden transition-colors duration-500"
    >
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-[-20%] z-0 pointer-events-none will-change-transform opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Tech Pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F5FF]/90 to-[#F0F5FF]/50 dark:from-[#0D1B2A]/90 dark:to-[#0D1B2A]/50" />
      </div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("flex flex-col lg:flex-row items-center gap-16 lg:gap-24", isRTL ? "lg:flex-row-reverse" : "")}>
          
          {/* Left Content */}
          <div className={cn("flex-1", isRTL ? "text-right" : "text-left")}>
            <span className={cn("section-kicker mb-6 text-brand-blue", isRTL ? "flex-row-reverse" : "")}>
              {t("sectors.kicker")}
            </span>
            <h2 className="text-4xl md:text-[40px] font-bold tracking-tight text-[#1B3A6B] dark:text-white leading-tight mb-6 font-outfit">
              {t("sectors.title")}
            </h2>
            <p className="text-lg text-[#64748B] dark:text-[#A1A1A6] font-light leading-relaxed max-w-lg">
              {t("sectors.desc")}
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectors.map((sector, i) => {
                const Icon = sector.icon;
                return (
                  <div key={i} className="group p-6 
                    rounded-2xl border 
                    border-[#E2EAF8] dark:border-[#1E3150]
                    bg-white dark:bg-[#10192C]
                    hover:border-[#2563EB]/30 dark:hover:border-blue-500/50
                    hover:bg-[#EEF4FF] dark:hover:bg-[#0D1B2A]
                    transition-all duration-300
                    cursor-default shadow-sm">
                    
                    <div className="w-10 h-10 
                      rounded-xl mb-4
                      bg-[#F0F5FF] dark:bg-blue-600/10
                      border border-[#E2EAF8] dark:border-[#1E3150]
                      flex items-center justify-center
                      group-hover:bg-[#2563EB]/10
                      group-hover:border-[#2563EB]/20
                      transition-all duration-300">
                      <Icon 
                        size={18} 
                        className="text-[#2563EB]" 
                      />
                    </div>
                    
                    <h3 className="text-[#1B3A6B] dark:text-white 
                      font-semibold text-[14px] 
                      tracking-tight mb-2">
                      {sector.title}
                    </h3>
                    
                    <p className="text-[#64748B] dark:text-[#8E8E93] 
                      text-[12px] leading-relaxed">
                      {sector.desc}
                    </p>
                    
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}
