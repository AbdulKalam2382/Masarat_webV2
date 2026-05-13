"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SceneWrapper from "@/components/three/SceneWrapper";

export default function ContactPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center pt-[100px] pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="contact" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-[10] pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-white mb-4 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-white/60 rounded-full flex-shrink-0" />
                {t("contact_page.kicker")}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-outfit text-white leading-[0.95]">
                {t("contact_page.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
                {t("contact_page.body")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* CONTACT FORM SECTION */}
        <section className="relative py-8 bg-white overflow-hidden">
          <div className={cn(
            "absolute text-[200px] font-black text-brand-blue/[0.015] leading-none select-none pointer-events-none tracking-tighter",
            isRTL ? "left-0 bottom-0" : "right-0 bottom-0"
          )}>
            M
          </div>
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
