"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import SceneWrapper from "@/components/three/SceneWrapper";
import AnimatedBentoCard, { CardType } from "@/components/ui/AnimatedBentoCard";
import SolutionsPremium from "@/components/sections/SolutionsPremium";

export default function SolutionsPage() {
  const { t, isRTL } = useLanguage();

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
        <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="solutions" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-[10]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-white mb-6 block">
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

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* Full-width image banner */}
        <div className="relative w-full overflow-hidden" style={{ height: 220 }}>
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=90&w=1920&auto=format&fit=crop"
            alt="Solutions"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/65 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <p className="text-white font-bold text-2xl md:text-3xl tracking-tight max-w-md leading-snug">
                Integrated. Accountable. Delivered.
              </p>
            </div>
          </div>
        </div>

        {/* Explanation section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#1A56DB] mb-5 flex items-center gap-3">
                <span className="w-7 h-[2px] bg-[#1A56DB] rounded-full" />
                What We Do
              </p>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0D1B2A] tracking-tighter leading-tight mb-8" style={{ letterSpacing: "-0.04em" }}>
                Five integrated capabilities.<br />
                <span className="font-light text-[#64748B]">One accountable partner.</span>
              </h2>
              <p className="text-[19px] text-[#64748B] leading-relaxed mb-6">
                Masarat operates across five integrated business lines that together cover the full enterprise technology stack. Each capability is designed to work alongside the others — not in isolation — ensuring that your digital platforms, intelligent systems, security environment, physical infrastructure, and data center facilities all function as one coherent, high-performing environment.
              </p>
              <p className="text-[19px] text-[#64748B] leading-relaxed mb-6">
                Whether you are modernising your enterprise operations, deploying AI at scale, strengthening your security posture, building a smart facility, or delivering a new mission-critical data center — Masarat brings a single point of accountability across every phase of the engagement, from initial assessment through to long-term operations and support.
              </p>
              <p className="text-[19px] text-[#64748B] leading-relaxed">
                Through our strategic partnership with Hydrotek Engineering, we extend this accountability across both digital and physical infrastructure — eliminating the coordination gaps that typically arise when multiple vendors are involved in complex, integrated projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E2EAF8]">
              {[
                { number: "01", title: "Integrated by Design", body: "Our capabilities are built to work together. A cybersecurity engagement considers your infrastructure. An AI deployment considers your data environment. Everything connects." },
                { number: "02", title: "Delivered with Accountability", body: "One team. One contract. One point of accountability. From the first conversation to the final handover and beyond — Masarat owns the outcome." },
                { number: "03", title: "Institutional Expertise", body: "Our solutions are grounded in deep knowledge of the complex regulatory landscape, institutional culture, and the operational demands of its most critical sectors." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-[#E2EAF8] bg-[#F8FAFF] hover:border-[#1A56DB]/30 hover:bg-white transition-all duration-200">
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#1A56DB]/40 block mb-3">{item.number}</span>
                  <h3 className="text-[20px] font-bold text-[#0D1B2A] tracking-tight mb-3">{item.title}</h3>
                  <p className="text-[17px] text-[#64748B] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREMIUM SOLUTIONS CAPABILITIES */}
        <SolutionsPremium />

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-transparent to-[#0D1B2A]/20 pointer-events-none" />

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
