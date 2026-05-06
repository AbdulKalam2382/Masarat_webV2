"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase, Users,

  
  Trophy, GraduationCap, Globe, Zap, Heart, MapPin,
  Target, Layers
} from "lucide-react";
import { Link } from "@/i18n/routing";
import SceneWrapper from "@/components/three/SceneWrapper";

export default function CareerPage() {
  const { t, isRTL } = useLanguage();

  const valueCards = [
    { icon: Layers,       key: "v1" },
    { icon: Zap,          key: "v2" },
    { icon: Users,        key: "v3" },
  ];

  const benefitCards = [
    { icon: Trophy,        key: "b1" },
    { icon: GraduationCap, key: "b2" },
    { icon: Globe,         key: "b3" },
    { icon: Zap,           key: "b4" },
    { icon: Heart,         key: "b5" },
    { icon: MapPin,        key: "b6" },
  ];

  const culturePillars = [
    { icon: Target,   key: "p1" },
    { icon: Layers,   key: "p2" },
    { icon: Users,    key: "p3" },
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>

        {/* ═══════════════════════════════════════
            1. HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B2A]">
          <SceneWrapper scene="contact" />

          <div className="container max-w-7xl mx-auto px-6 pb-24 pt-[140px] relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="section-kicker text-brand-blue mb-6 block">
                {t("career_page.kicker")}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-outfit text-white leading-[0.95] uppercase">
                {t("career_page.hero_title")}
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-xl leading-relaxed mb-10">
                {t("career_page.hero_sub")}
              </p>
              <button
                onClick={() => document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "inline-flex items-center gap-3 px-9 py-4 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-blue-soft transition-all shadow-xl shadow-brand-blue/25",
                  isRTL && "flex-row-reverse"
                )}
              >
                {t("career_page.hero_cta")}
                <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Gradient transition: dark → light */}
        <div className="h-24 w-full bg-gradient-to-b from-[#0D1B2A] to-[#F8FAFF] pointer-events-none" />

        {/* ═══════════════════════════════════════
            2. WHY WORK AT MASARAT
        ═══════════════════════════════════════ */}
        <section className="animate-section relative py-32 bg-white dark:bg-brand-navy overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-40 dark:opacity-20" />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",
              isRTL && "lg:flex-row-reverse"
            )}>
              {/* Left — statement */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={cn("flex flex-col gap-8", isRTL && "items-end")}
              >
                <span className="section-kicker text-brand-blue">
                  {t("career_page.why_title")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white leading-[1.1]">
                  {t("career_page.why_title")}
                </h2>
                <p className="text-lg text-brand-muted dark:text-white/55 leading-relaxed font-light max-w-md">
                  {t("career_page.why_statement")}
                </p>
                <Link href="/about">
                  <span className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold text-brand-blue uppercase tracking-widest hover:gap-3 transition-all group",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t("home.learn_more")}
                    <ArrowRight size={14} className={cn(isRTL ? "rotate-180" : "")} />
                  </span>
                </Link>
              </motion.div>

              {/* Right — 3 value cards */}
              <div className="flex flex-col gap-6">
                {valueCards.map((card, i) => (
                  <motion.div
                    key={card.key}
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={cn(
                      "flex items-start gap-5 p-7 rounded-2xl bg-brand-surface dark:bg-white/5 border border-brand-border dark:border-white/10 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-md shadow-brand-blue/20">
                      <card.icon size={20} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-brand-navy dark:text-white tracking-tight">
                        {t(`career_page.${card.key}t`)}
                      </h3>
                      <p className="text-sm text-brand-muted dark:text-white/45 leading-relaxed font-medium">
                        {t(`career_page.${card.key}d`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. OUR BENEFITS
        ═══════════════════════════════════════ */}
        <section className="animate-section relative py-32 bg-brand-surface dark:bg-white/[0.02] overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <span className="section-kicker text-brand-blue mb-4 block">
                {t("career_page.benefits_title")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white">
                {t("career_page.benefits_title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitCards.map((card, i) => (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={cn(
                    "flex flex-col gap-4 p-8 bg-white dark:bg-white/5 rounded-2xl border border-brand-border dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
                    isRTL && "items-end text-right"
                  )}
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy dark:text-white">
                    {t(`career_page.${card.key}t`)}
                  </h3>
                  <p className="text-sm text-brand-muted dark:text-white/40 leading-relaxed">
                    {t(`career_page.${card.key}d`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gradient transition: light → dark */}
        <div className="h-24 w-full bg-gradient-to-b from-[#F8FAFF] to-[#0D1B2A] pointer-events-none" />

        {/* ═══════════════════════════════════════
            4. OUR WORK CULTURE
        ═══════════════════════════════════════ */}
        <section className="animate-section relative py-32 bg-brand-navy overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
             <div className="text-center mb-20">
                <span className="section-kicker text-brand-blue-soft mb-6 justify-center">
                  {t("career_page.culture_title")}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-outfit tracking-tight leading-tight">
                  &ldquo;{t("career_page.culture_quote")}&rdquo;
                </h2>
             </div>

              <div className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl mx-auto",
                isRTL && "text-right"
              )}>
                {culturePillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-4 p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                  >
                    <div className="w-11 h-11 rounded-full bg-brand-blue-soft/20 text-brand-blue-soft flex items-center justify-center">
                      <pillar.icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {t(`career_page.${pillar.key}t`)}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed font-light">
                      {t(`career_page.${pillar.key}d`)}
                    </p>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>

        {/* Gradient transition: dark → light */}
        <div className="h-24 w-full bg-gradient-to-b from-[#0D1B2A] to-[#F8FAFF] pointer-events-none" />

        {/* ═══════════════════════════════════════
            5. OPEN POSITIONS
        ═══════════════════════════════════════ */}
        <section id="positions" className="animate-section relative py-32 bg-white dark:bg-brand-navy overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
          
          <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
            <span className="section-kicker text-brand-blue justify-center mb-6">
              {t("career_page.positions_title")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-brand-navy dark:text-white mb-16">
              {t("career_page.positions_title")}
            </h2>

            <div className="bg-brand-surface dark:bg-white/5 backdrop-blur-xl border border-brand-border dark:border-white/10 rounded-[2.5rem] p-12 md:p-20">
              <div className="w-18 h-18 mx-auto mb-8">
                <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto">
                  <Briefcase size={36} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-5 font-outfit">
                {t("career_page.no_positions_title")}
              </h3>
              <p className="text-base text-brand-muted dark:text-white/50 mb-12 font-light leading-relaxed max-w-md mx-auto">
                {t("career_page.no_positions_desc")}
              </p>
              <div className="flex flex-col items-center gap-4">
                <a
                  href={`mailto:${t("career_page.email")}`}
                  className="px-10 py-4 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-blue-soft transition-all shadow-xl shadow-brand-blue/20"
                >
                  {t("career_page.send_cv")}
                </a>
                <span className="text-brand-blue/70 text-sm font-medium tracking-wide">
                  {t("career_page.email")}
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
