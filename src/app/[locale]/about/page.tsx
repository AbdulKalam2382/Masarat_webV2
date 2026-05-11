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
        <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="about" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-[10]">
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

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* Executive Overview — 2 column with institutional imagery */}
        <section className="py-20 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", isRTL ? "lg:flex lg:flex-row-reverse" : "")}>
              <div className={cn(isRTL ? "text-right" : "text-left")}>
                <span className="section-kicker mb-6 block">{t("about_page.kicker")}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 font-outfit text-brand-navy dark:text-white">
                  {t("about.title")}
                </h2>
                <p className="text-lg text-brand-muted dark:text-white/50 font-light leading-relaxed whitespace-pre-line">
                  {t("about.body")}
                </p>
              </div>
              <div className="w-full rounded-2xl overflow-hidden" style={{ height: 380 }}>
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=90&w=800&auto=format&fit=crop"
                  alt="Kuwait city"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

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
