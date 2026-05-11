"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SolutionsPremium() {
  const { t, isRTL } = useLanguage();

  const capabilities = [
    {
      title: t("solutions.capability1.title"),
      paragraph: t("solutions.capability1.p"),
      points: t("solutions.capability1.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/infrastructure.jpg",
    },
    {
      title: t("solutions.capability2.title"),
      paragraph: t("solutions.capability2.p"),
      points: t("solutions.capability2.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/Cybersecurity.avif",
    },
    {
      title: t("solutions.capability3.title"),
      paragraph: t("solutions.capability3.p"),
      points: t("solutions.capability3.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/AI, Data.webp",
    },
    {
      title: t("solutions.capability4.title"),
      paragraph: t("solutions.capability4.p"),
      points: t("solutions.capability4.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/Automation.webp",
    },
    {
      title: t("solutions.capability5.title"),
      paragraph: t("solutions.capability5.p"),
      points: t("solutions.capability5.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/critical-systems.jpg",
    },
    {
      title: t("solutions.capability6.title"),
      paragraph: t("solutions.capability6.p"),
      points: t("solutions.capability6.points", { returnObjects: true }) as string[],
      image: "/images/Solutions/managed-services.webp",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-[#0D1B2A] overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-32 text-center max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.4em] uppercase text-blue-600 mb-6"
          >
            {t("solutions.kicker")}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "text-4xl md:text-6xl font-bold tracking-tighter text-[#0D1B2A] dark:text-white leading-tight",
              isRTL ? "font-cairo" : "font-outfit"
            )}
          >
            {isRTL ? "حلول مؤسسية." : "Institutional Solutions."} <br />
            <span className="font-light text-[#64748B] dark:text-white/50 italic">{isRTL ? "تسليم استراتيجي." : "Strategic Delivery."}</span>
          </motion.h2>
        </div>

        {/* Capabilities List */}
        <div className="space-y-40">
          {capabilities.map((cap, i) => (
            <div 
              key={i} 
              id={`capability${i + 1}`}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 lg:gap-24 scroll-mt-24",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? (isRTL ? 30 : -30) : (isRTL ? -30 : 30) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn("flex-1", isRTL ? "text-right" : "text-left")}
              >
                <div className={cn("flex items-center gap-4 mb-6", isRTL && "flex-row-reverse")}>
                  <span className="text-[11px] font-black tracking-[0.25em] uppercase text-blue-600/40">
                    {isRTL ? `القدرة 0${i + 1}` : `Capability 0${i + 1}`}
                  </span>
                  <div className="h-[1px] flex-1 bg-blue-600/10" />
                </div>

                <h3 className={cn(
                  "text-3xl md:text-4xl font-bold text-[#0D1B2A] dark:text-white tracking-tight mb-8 leading-tight",
                  isRTL ? "font-cairo" : "font-outfit"
                )}>
                  {cap.title}
                </h3>

                <p className={cn(
                  "text-[18px] text-[#64748B] dark:text-white/60 leading-relaxed font-light mb-10 whitespace-pre-line",
                  isRTL ? "font-cairo" : "font-inter"
                )}>
                  {cap.paragraph}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {cap.points.map((point, idx) => (
                    <div key={idx} className={cn("flex items-start gap-3 group", isRTL && "flex-row-reverse")}>
                      <CheckCircle2 className={cn("w-5 h-5 text-blue-600/40 group-hover:text-blue-600 transition-colors mt-0.5 flex-shrink-0", isRTL && "ml-3")} />
                      <span className={cn(
                        "text-[15px] font-semibold text-[#0D1B2A]/80 dark:text-white/70 group-hover:text-[#0D1B2A] dark:group-hover:text-white transition-colors",
                        isRTL ? "font-cairo" : "font-inter"
                      )}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group shadow-2xl">
                  <img 
                    src={cap.image} 
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2A]/40 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
