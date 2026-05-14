"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import HeroBackground from "@/components/ui/HeroBackground";
import SceneWrapper from "@/components/three/SceneWrapper";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const headlineLines = [
    { text: t("hero.line1"), weight: 300, color: "text-white" },
    { text: t("hero.line2"), weight: 700, color: "text-white" },
    { text: t("hero.line3"), weight: 700, color: "text-[#7DD3FC]" },
  ];

  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(heroRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Headline Word Reveal
      gsap.from('.hero-word', {
        yPercent: 100,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power4.out',
        delay: 0.3,
        onComplete: () => ScrollTrigger.refresh()
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      data-section-name="Hero"
      className="hero-section-trigger relative min-h-[100svh] flex items-center justify-center bg-[#0D1B2A] overflow-hidden py-24 sm:py-28"
    >
      {/* Institutional Skyline background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/kuwait-hero.jpg"
          alt="Institutional Skyline"
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.55) 100%)' }} />
      </div>

      <SceneWrapper scene="home" />
      {/* PREMIUM CANVAS BACKGROUND */}
      <HeroBackground />

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <div className={cn("flex flex-col", isRTL ? "items-start text-right" : "items-center text-center")}>
          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-[12px] font-medium tracking-wide text-white">
              {t("hero.label")}
            </span>
          </motion.div>

          {/* Headline with Per-Word ClipPath Reveal */}
          <div className="flex flex-col mb-10" ref={headlineRef}>
            {headlineLines.map((line, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex flex-wrap gap-x-4",
                  isRTL ? "justify-start" : "justify-center"
                )}
              >
                {line.text.split(" ").map((word, j) => (
                  <div key={j} className="overflow-hidden">
                    <h1
                      className={cn(
                        "hero-word block text-5xl sm:text-6xl md:text-[80px] tracking-tighter leading-[1.05] font-outfit",
                        line.color
                      )}
                      style={{ fontWeight: line.weight }}
                    >
                      {word}
                    </h1>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-lg md:text-xl text-white/70 mb-12 max-w-2xl font-medium leading-relaxed",
              !isRTL && "mx-auto"
            )}
          >
            {t("hero.sub")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/solutions"
              className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-brand-blue/30 text-center"
            >
              {t("hero.btn1")}
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center"
            >
              {t("hero.btn2")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator (Bottom-Right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className={cn(
            "absolute bottom-12 hidden md:flex flex-col items-center gap-6",
            isRTL ? "left-6" : "right-6"
          )}
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40 rotate-90 origin-center translate-y-[-20px]">
            {t("hero.scroll")}
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-t from-brand-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
