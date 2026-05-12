"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase,
  Trophy, GraduationCap, Globe, Zap, Heart, MapPin,
  Target, Layers, Users
} from "lucide-react";
import SceneWrapper from "@/components/three/SceneWrapper";

export default function CareerPage() {
  const { t, isRTL } = useLanguage();

  const whyBullets = isRTL ? [
    "العمل على مشاريع عالية الأثر لأبرز المنظمات الاستراتيجية",
    "النمو جنباً إلى جنب مع فريق من المهندسين والاستشاريين ذوي الخبرة",
    "الوصول إلى التعلم المستمر ودعم الاعتماد المهني",
    "المساهمة في أجندة التحول الرقمي",
    "الاستمتاع بثقافة مبنية على النزاهة والتعاون والتميز",
    "تحمّل ملكية العمل ذي المعنى منذ اليوم الأول",
  ] : [
    "Work on high-impact projects for leading strategic organizations",
    "Grow alongside a team of experienced engineers and consultants",
    "Access continuous learning and professional certification support",
    "Contribute to the digital transformation agenda",
    "Enjoy a culture built on integrity, collaboration, and excellence",
    "Take ownership of meaningful work from day one",
  ];

  const _benefitCards = [
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
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="infinity" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 pb-24 pt-[140px] relative z-[10]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="section-kicker text-white mb-6 block">
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

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

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
                <p className="text-[17px] text-[#64748B] leading-relaxed max-w-2xl mt-4 mb-8">
                  At Masarat, you are not just filling a role — you are contributing to technology environments where reliability, security, and performance are non-negotiable. We work alongside institutions where the quality of delivery directly shapes how critical sectors operate, grow, and serve the people who depend on them.
                </p>
                <ul className="space-y-3 mt-2">
                  {whyBullets.map((bullet, i) => (
                    <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                      <span className="w-2 h-2 rounded-full bg-[#94A3B8] mt-[8px] flex-shrink-0" />
                      <span className="text-base text-brand-muted dark:text-white/60 font-light leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right — team photo */}
              <motion.div
                initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full rounded-2xl overflow-hidden"
                style={{ height: 480 }}
              >
                <img
                  src="/images/team.jpg"
                  alt="Masarat team"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            3. OUR BENEFITS
        ═══════════════════════════════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT — Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1" style={{ height: 520 }}>
                <img
                  src="/images/collaboration.jpg"
                  alt="Team collaboration at Masarat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-[#E2EAF8]">
                  <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#1A56DB] mb-2">Why join us</p>
                  <p className="text-[15px] font-semibold text-[#0D1B2A] leading-snug">Work on projects that shape the technology future.</p>
                </div>
              </div>

              {/* RIGHT — Key points */}
              <div className="order-1 lg:order-2">
                <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#1A56DB] mb-4 flex items-center gap-3">
                  <span className="w-7 h-[2px] bg-[#1A56DB] rounded-full" />
                  Perks &amp; Benefits
                </p>
                <h2 className="text-4xl font-bold text-[#0D1B2A] tracking-tight mb-4 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                  What we offer<br />
                  <span className="font-light text-[#64748B]">our team.</span>
                </h2>
                <p className="text-[16px] text-[#64748B] leading-relaxed mb-8">
                  At Masarat, we invest in our people the same way we invest in our clients — with commitment, quality, and long-term thinking.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Competitive Compensation", desc: "Market-aligned salaries with performance-based rewards that recognise real contribution and delivery." },
                    { title: "Learning & Development", desc: "Access to certifications, training programmes, and global technology partner learning platforms including Broadcom, Huawei, and Qlik." },
                    { title: "Global Technology Exposure", desc: "Work directly with world-class technology vendors and enterprise platforms used by leading regional institutions." },
                    { title: "Fast Career Progression", desc: "A growing company with expanding capabilities means real opportunities for advancement based on merit and impact." },
                    { title: "Collaborative Environment", desc: "A culture built on accountability, mutual respect, and delivering quality work — where your expertise is valued and your voice matters." },
                    { title: "Meaningful Institutional Impact", desc: "Your work directly contributes to the technology infrastructure of critical government, banking, and energy institutions." },
                  ].map((item, i) => (
                    <div key={i}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-xl border border-[#E2EAF8] hover:border-[#1A56DB]/30 hover:bg-[#F8FAFF] transition-all duration-200 group",
                        isRTL && "flex-row-reverse text-right"
                      )}>
                      <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1A56DB] group-hover:border-[#1A56DB] transition-all duration-200">
                        <span className="text-[11px] font-black text-[#1A56DB] group-hover:text-white transition-colors duration-200">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] font-bold text-[#0D1B2A] mb-1 tracking-tight">{item.title}</h3>
                        <p className="text-[16px] text-[#64748B] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-transparent to-[#0D1B2A]/20 pointer-events-none" />

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
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {t(`career_page.${pillar.key}t`)}
                    </h3>
                    <p className="text-[15px] text-white/60 leading-relaxed font-light">
                      {t(`career_page.${pillar.key}d`)}
                    </p>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

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
