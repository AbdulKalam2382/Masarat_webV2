"use client";

import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={sectionRef}
      data-section-name={t("about.kicker")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-10 bg-white dark:bg-[#0D1B2A] overflow-hidden transition-colors duration-500"
    >
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn("flex flex-col lg:flex-row gap-8 lg:gap-12 items-center", isRTL ? "lg:flex-row-reverse" : "")}>

          {/* Left Column */}
          <div className="flex-1 relative w-full">
            <div className={cn("absolute -top-16 text-[180px] font-black text-[#2563EB]/[0.04] leading-none select-none pointer-events-none hidden lg:block", isRTL ? "-right-8" : "-left-8")}>
              01
            </div>
            <div className={cn("relative z-10", isRTL ? "text-right" : "text-left")}>
              <span className={cn("section-kicker mb-8", isRTL ? "flex-row-reverse" : "")}>
                {t("about.kicker")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-8 font-outfit text-brand-ink dark:text-white">
                {t("about.title")}
              </h2>
              <p className="text-lg md:text-xl text-[#6B6B6B] dark:text-[#A1A1A6] font-light leading-relaxed max-w-xl whitespace-pre-line">
                {t("about.body")}
              </p>
            </div>
          </div>

          {/* Right Column — Enterprise office image */}
          <div className="flex-1 w-full max-w-md">
            <div className="w-full rounded-2xl overflow-hidden" style={{ height: 400 }}>
              <img
                src="/images/office.jpg"
                alt="Modern enterprise office"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
