"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function QualityCompliance() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-[#0B1221] border-b border-brand-border dark:border-[#1E3150] transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tighter mb-6 font-outfit text-brand-ink dark:text-white", isRTL ? "text-right" : "text-left")}>
          {t("about_page.quality_title")}
        </h2>
        <p className={cn("text-lg md:text-xl text-brand-muted dark:text-[#A1A1A6] font-light mb-16", isRTL ? "text-right" : "text-left")}>
          {t("about_page.quality_body")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((num) => (
            <motion.div 
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className={cn(
                "p-8 rounded-2xl bg-[#F8FAFC] dark:bg-[#10192C] border-[#E2EAF8] dark:border-[#1E3150] border shadow-sm",
                isRTL ? "border-r-4 border-r-[#2563EB]" : "border-l-4 border-l-[#2563EB]"
              )}
            >
              <h3 className={cn("text-lg font-bold text-brand-ink dark:text-white", isRTL ? "text-right" : "text-left")}>
                {t(`about_page.quality_iso${num}`)}
              </h3>
            </motion.div>
          ))}
        </div>

        <p className={cn("text-lg text-brand-muted dark:text-[#A1A1A6] font-medium", isRTL ? "text-right" : "text-center")}>
          {t("about_page.quality_footer")}
        </p>
      </div>
    </section>
  );
}
