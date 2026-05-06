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
    { text: t("hero.line1"), weight: 300, color: "text-brand-navy dark:text-white" },
    { text: t("hero.line2"), weight: 700, color: "text-brand-navy dark:text-white" },
    { text: t("hero.line3"), weight: 700, color: "text-brand-blue" },
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
      className="hero-section-trigger relative h-screen flex items-center justify-center bg-white dark:bg-[#0D1B2A] overflow-hidden transition-colors duration-500"
    >
      <SceneWrapper scene="home" />
      {/* PREMIUM CANVAS BACKGROUND */}
      <HeroBackground />

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-24 right-8 z-10 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-brand-navy/10 dark:border-white/10 bg-white/80 dark:bg-brand-navy/80 backdrop-blur-sm text-brand-navy dark:text-white font-semibold text-xs tracking-widest uppercase shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Kuwait
      </motion.div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto">
        <div className={cn("flex flex-col", isRTL ? "items-start text-right" : "items-center text-center")}>
          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-xs font-bold tracking-[0.3em] text-brand-blue uppercase"
          >
            {t("hero.label")}
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
              "text-lg md:text-xl text-[#475569] dark:text-white/60 mb-12 max-w-2xl font-medium leading-relaxed",
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
              className="px-10 py-5 border border-brand-navy/20 dark:border-white/20 text-brand-navy dark:text-white font-bold rounded-full hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-all text-center"
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
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-navy/40 dark:text-white/40 rotate-90 origin-center translate-y-[-20px]">
            {t("hero.scroll")}
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-t from-brand-blue to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
