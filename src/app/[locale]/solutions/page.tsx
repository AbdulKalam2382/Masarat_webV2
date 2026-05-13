"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SceneWrapper from "@/components/three/SceneWrapper";
import SolutionsPreview from "@/components/sections/ServicesPreview";

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[65vh] flex items-center pt-[100px] pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="solutions" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-[10] pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-white mb-6 block">
                {t("solutions.page_kicker")}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-outfit uppercase text-white leading-[0.95]">
                {t("solutions.page_title")}
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
                {t("solutions.page_sub")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* Bento cards */}
        <SolutionsPreview />

        {/* CTA */}
        <section className="py-16 text-center bg-white border-t border-[#E2EAF8]">
          <a
            href="/en/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A56DB] text-white text-[15px] font-bold hover:bg-[#0D4BC4] transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
