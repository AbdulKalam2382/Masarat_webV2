"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoWeAre() {
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
        yPercent: 50 * intensity, // Increased parallax
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

  return (
    <motion.section 
      ref={sectionRef}
      data-section-name={t("about.kicker")}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative py-24 bg-white dark:bg-[#0D1B2A] border-y border-brand-border dark:border-[#1E3150] overflow-hidden transition-colors duration-500"
    >
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-[-20%] z-0 pointer-events-none will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Network Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/90 to-[#0D1B2A]/50" />
      </div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("flex flex-col lg:flex-row gap-16 lg:gap-24 items-center", isRTL ? "lg:flex-row-reverse" : "")}>
          
          {/* Left Column */}
          <div className="flex-1 relative w-full">
            <div className={cn("absolute -top-16 text-[180px] font-black text-[#2563EB]/[0.04] leading-none select-none pointer-events-none hidden lg:block", isRTL ? "-right-8" : "-left-8")}>
              01
            </div>
            
            <div className={cn("relative z-10", isRTL ? "text-right" : "text-left")}>
              <span className={cn("section-kicker mb-8", isRTL ? "flex-row-reverse" : "")}>
                {t("about.kicker")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-8 font-outfit text-brand-ink dark:text-white">
                {t("about.title")}
              </h2>
              <p className="text-lg md:text-xl text-[#6B6B6B] dark:text-[#A1A1A6] font-light leading-relaxed max-w-xl whitespace-pre-line">
                {t("about.body")}
              </p>
            </div>
          </div>

          {/* Right Column (Metrics) */}
          <div className="flex-1 w-full max-w-md">
            <div className="flex flex-col gap-4">
              <div className="p-8 rounded-2xl border border-[#E2EAF8] dark:border-[#1E3150] bg-[#EEF3FB] dark:bg-[#10192C] hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold tracking-tight text-[#2563EB] mb-2 font-outfit">
                  {t("about.metrics.m1t")}
                </div>
                <div className="text-sm font-medium text-[#6B6B6B] dark:text-[#8E8E93] uppercase tracking-widest">
                  {t("about.metrics.m1d")}
                </div>
              </div>
              
              <div className="p-8 rounded-2xl bg-[#2563EB] text-white shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 font-outfit">
                  {t("about.metrics.m2t")}
                </div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-widest">
                  {t("about.metrics.m2d")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
