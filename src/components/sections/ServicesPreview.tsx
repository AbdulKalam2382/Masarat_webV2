"use client";
import React from "react";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import AnimatedBentoCard, { CardType } from "@/components/ui/AnimatedBentoCard";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function SolutionsPreview() {
  const { t, isRTL } = useLanguage();

  const previewSolutions: {
    cardType: CardType;
    tag: string;
    title: string;
    href: string;
    bullets: string[];
  }[] = [
    {
      cardType: "enterprise",
      title: t("solutions.s1title"),
      href: "/solutions/digital-transformation",
      tag: isRTL ? "مؤسسات" : "Enterprise",
      bullets: isRTL
        ? [
            "منصات المؤسسات للحوكمة والأداء",
            "أتمتة العمليات ورقمنة سير العمل",
            "التكامل عبر أنظمة وظائف الأعمال",
            "نماذج تشغيل متصلة وقابلة للقياس والتوسع",
          ]
        : [
            "Enterprise platforms for governance and performance",
            "Process automation and workflow digitization",
            "Integration across business systems and functions",
            "Connected, measurable, and scalable operating models",
          ],
    },
    {
      cardType: "ai",
      title: t("solutions.s2title"),
      href: "/solutions/ai-data",
      tag: isRTL ? "ذكاء" : "Intelligence",
      bullets: isRTL
        ? [
            "استراتيجية الذكاء الاصطناعي وتقييم الجاهزية",
            "منصات البيانات وتكاملها",
            "التحليلات المتقدمة والرؤى التنبؤية",
            "حلول الذكاء الاصطناعي المخصصة والأتمتة",
          ]
        : [
            "AI strategy and readiness assessment",
            "Data platforms and integration",
            "Advanced analytics and predictive insights",
            "Custom AI solutions and automation",
          ],
    },
    {
      cardType: "cyber",
      title: t("solutions.s3title"),
      href: "/solutions/cybersecurity",
      tag: isRTL ? "أمن" : "Security",
      bullets: isRTL
        ? [
            "الأمن السيبراني لتقنية المعلومات والتقنيات التشغيلية",
            "حماية البنية التحتية والشبكات",
            "المخاطر والامتثال والمراقبة",
            "الأمن مدمج في جميع الحلول",
          ]
        : [
            "IT and OT cybersecurity",
            "Infrastructure and network protection",
            "Risk, compliance, and monitoring",
            "Security embedded across all solutions",
          ],
    },
    {
      cardType: "elv",
      title: t("solutions.s4title"),
      href: "/solutions/elv-smart-systems",
      tag: isRTL ? "بنية تحتية" : "Infrastructure",
      bullets: isRTL
        ? [
            "أنظمة ELV والأمن المتكاملة",
            "أنظمة الإطفاء وسلامة الحياة",
            "المباني الذكية وأنظمة إدارة المباني (BMS)",
            "بنية تحتية متصلة وآمنة",
          ]
        : [
            "ELV and integrated security systems",
            "Fire and life safety systems",
            "Smart buildings and BMS",
            "Connected and secure physical infrastructure",
          ],
    },
    {
      cardType: "datacenter",
      title: t("solutions.s5title"),
      href: "/solutions/mission-critical",
      tag: isRTL ? "حيوي" : "Critical",
      bullets: isRTL
        ? [
            "تصميم وبناء وترقية مراكز البيانات",
            "تسليم بنية تحتية متوافقة مع المستوى الثالث",
            "ترقية البيئات الحية بأقل قدر من التوقف",
            "استمرارية المشاريع طويلة الأمد",
          ]
        : [
            "Data center design, build and upgrade",
            "Tier III aligned infrastructure delivery",
            "Live upgrades with minimal downtime",
            "Long-term operational continuity",
          ],
    },
  ];

  return (
    <>
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-12 bg-white dark:bg-brand-navy overflow-hidden transition-colors duration-500"
    >
      {/* Decorative background number */}
      <div
        className={cn(
          "absolute -top-8 text-[180px] font-black text-brand-navy/[0.03] dark:text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block",
          isRTL ? "right-8" : "-left-4"
        )}
      >
        03
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={cn(
            "mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6",
            isRTL ? "md:flex-row-reverse" : ""
          )}
        >
          <div className={cn("max-w-2xl", isRTL ? "text-right" : "text-left")}>
            <span className={cn("section-kicker mb-6", isRTL ? "flex-row-reverse" : "")}>
              {t("solutions.kicker")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-outfit text-brand-navy dark:text-[#F5F5F7] leading-[1.1]">
              {t("solutions.title")}
            </h2>
          </div>
          <Link
            href="/solutions"
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-brand-navy dark:text-[#F5F5F7] hover:text-brand-blue transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-brand-blue transition-all">
              {t("solutions.link")}
            </span>
            <div className="w-10 h-10 rounded-full border border-brand-navy/10 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
              <ArrowRight
                className={cn(
                  "w-4 h-4 transition-transform",
                  isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
                )}
              />
            </div>
          </Link>
        </div>

        {/* Animated bento card grid — row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {previewSolutions.slice(0, 3).map((solution, i) => (
            <AnimatedBentoCard
              key={i}
              {...solution}
              isRTL={isRTL}
              className="w-full h-full min-h-[260px]"
              index={i}
            />
          ))}
        </div>

        {/* Animated bento card grid — row 2: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previewSolutions.slice(3).map((solution, i) => (
            <AnimatedBentoCard
              key={i + 3}
              {...solution}
              isRTL={isRTL}
              className="w-full h-full min-h-[260px]"
              index={i + 3}
            />
          ))}
        </div>
      </div>
    </motion.section>
    </>
  );
}
