"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Process from "@/components/sections/Process";
import Testimonial from "@/components/sections/Testimonial";
import Challenges from "@/components/sections/Challenges";
import QualityCompliance from "@/components/sections/QualityCompliance";
import AboutVisionMission from "@/components/sections/AboutVisionMission";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SceneWrapper from "@/components/three/SceneWrapper";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-[#0D1B2A]">
          <SceneWrapper scene="about" />

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-kicker text-brand-blue mb-6 block">
                {t("about_page.kicker")}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-white leading-[0.95]">
                {t("about_page.title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl leading-relaxed whitespace-pre-line">
                {t("about_page.body")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gradient transition: dark → light */}
        <div className="h-24 w-full bg-gradient-to-b from-[#0D1B2A] to-[#F8FAFF] pointer-events-none" />

        {/* LIGHT SECTION - Diagonal Lines + Ghost M */}
        <section className="animate-section relative py-32 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          <div className={cn(
            "absolute text-[200px] font-black text-brand-blue/[0.025] leading-none select-none pointer-events-none tracking-tighter",
            isRTL ? "left-0 bottom-0" : "right-0 bottom-0"
          )}>
            M
          </div>
          
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Challenges />
          </div>
        </section>

        {/* WHITE SECTION - Top border + Noise */}
        <section className="animate-section relative py-32 bg-white border-t border-brand-blue/10 bg-noise overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <QualityCompliance />
          </div>
        </section>
        
        {/* VISION & MISSION */}
        <AboutVisionMission />

        {/* LIGHT SECTION - Process */}
        <section className="animate-section relative py-32 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Process />
          </div>
        </section>

        {/* WHITE SECTION - Testimonial */}
        <section className="animate-section relative py-32 bg-white border-t border-brand-blue/10 bg-noise overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Testimonial />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
