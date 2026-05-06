"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneWrapper from "@/components/three/SceneWrapper";
import AnimatedBentoCard, { CardType } from "@/components/ui/AnimatedBentoCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();
  const pinnedSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia(pinnedSectionRef);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const isMobile = window.innerWidth < 768;
      const xOffset = isMobile ? 150 : 300;

      // Explicitly set willChange
      gsap.set(".solution-card", { willChange: "transform" });

      // Card entry animations (no backgroundColor override — cards have animated dark backgrounds)
      gsap.fromTo(
        ".solution-card",
        { x: xOffset, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: pinnedSectionRef.current,
            start: "top top",
            end: "+=600",
            pin: true,
            scrub: 0.3,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const solutions: { cardType: CardType; tag: string; title: string; slug: string; bullets: string[] }[] = [
    {
      cardType: "ai",
      tag: isRTL ? t("solutions.domain_intelligence_ar") : t("solutions.domain_intelligence_en"),
      title: t("solutions.s2title"),
      slug: "ai-data",
      bullets: isRTL ? [
        "استراتيجية الذكاء الاصطناعي وتقييم الجاهزية",
        "منصات البيانات والتحليلات المتقدمة",
        "حلول الذكاء الاصطناعي المخصصة والأتمتة",
      ] : [
        "AI strategy & readiness assessment",
        "Data platforms & advanced analytics",
        "Custom AI solutions & automation",
      ],
    },
    {
      cardType: "cyber",
      tag: isRTL ? t("solutions.domain_security_ar") : t("solutions.domain_security_en"),
      title: t("solutions.s3title"),
      slug: "cybersecurity",
      bullets: isRTL ? [
        "الأمن السيبراني لتقنية المعلومات والتقنيات التشغيلية",
        "حماية البنية التحتية والشبكات",
        "المخاطر والامتثال والمراقبة",
      ] : [
        "IT and OT cybersecurity",
        "Infrastructure & network protection",
        "Risk, compliance & monitoring",
      ],
    },
    {
      cardType: "elv",
      tag: isRTL ? t("solutions.domain_infrastructure_ar") : t("solutions.domain_infrastructure_en"),
      title: t("solutions.s4title"),
      slug: "elv-smart-systems",
      bullets: isRTL ? [
        "أنظمة ELV والأمن المتكاملة",
        "أنظمة الإطفاء وسلامة الحياة",
        "المباني الذكية وأنظمة إدارة المباني (BMS)",
      ] : [
        "ELV & integrated security systems",
        "Fire & life safety systems",
        "Smart buildings & BMS",
      ],
    },
    {
      cardType: "datacenter",
      tag: isRTL ? t("solutions.domain_critical_ar") : t("solutions.domain_critical_en"),
      title: t("solutions.s5title"),
      slug: "mission-critical",
      bullets: isRTL ? [
        "تصميم وبناء وترقية مراكز البيانات",
        "تسليم بنية تحتية متوافقة مع المستوى الثالث",
        "ترقية البيئات الحية بأقل قدر من التوقف",
      ] : [
        "Data center design, build & upgrade",
        "Tier III aligned infrastructure",
        "Live upgrades with minimal downtime",
      ],
    },
    {
      cardType: "enterprise",
      tag: isRTL ? t("solutions.domain_enterprise_ar") : t("solutions.domain_enterprise_en"),
      title: t("solutions.s1title"),
      slug: "digital-transformation",
      bullets: isRTL ? [
        "منصات المؤسسات للحوكمة",
        "أتمتة العمليات ورقمنة سير العمل",
        "تكامل الأنظمة عبر وظائف الأعمال",
      ] : [
        "Enterprise platforms for governance",
        "Process automation & workflow digitization",
        "System integration across business functions",
      ],
    },
  ];

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden bg-[#0D1B2A]">
          <SceneWrapper scene="solutions" />

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-brand-blue mb-6 block">
                {t("solutions.page_kicker")}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-white leading-[0.95]">
                {t("solutions.page_title")}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                {t("solutions.page_sub")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gradient transition: dark → light */}
        <div className="h-24 w-full bg-gradient-to-b from-[#0D1B2A] to-[#F8FAFF] pointer-events-none" />

        {/* SOLUTIONS GRID */}
        <section ref={pinnedSectionRef} className="animate-section relative py-32 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20">
              <span className={cn("section-kicker text-brand-blue mb-4 block", isRTL ? "flex-row-reverse" : "")}>
                {t("solutions.what_we_solve_kicker")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white font-outfit">
                {t("solutions.what_we_solve_title")}
              </h2>
              <p className="text-lg text-brand-muted mt-6 max-w-2xl leading-relaxed">
                {t("solutions.what_we_solve_desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution) => (
                <AnimatedBentoCard
                  key={solution.slug}
                  cardType={solution.cardType}
                  tag={solution.tag}
                  title={solution.title}
                  bullets={solution.bullets}
                  href={`/solutions/${solution.slug}`}
                  isRTL={isRTL}
                  className="min-h-[460px]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gradient transition: light → dark */}
        <div className="h-24 w-full bg-gradient-to-b from-[#F8FAFF] to-[#0D1B2A] pointer-events-none" />

        {/* CTA Section */}
        <section className="animate-section relative py-32 bg-brand-navy overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid opacity-20" />
          <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-outfit text-white mb-8">
              {t("solutions.cta_title")}
            </h2>
            <p className="text-xl text-white/50 mb-12 font-light">
              {t("solutions.cta_sub")}
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-brand-blue/40 hover:scale-105 transition-all"
            >
              {t("solutions.cta_btn1")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
