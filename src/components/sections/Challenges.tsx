"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Challenges() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-10 bg-[#F0F5FF] dark:bg-[#0B1221] border-b border-brand-border dark:border-[#1E3150] transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tighter mb-6 font-outfit text-brand-ink dark:text-[#F5F5F7]", isRTL ? "text-right" : "text-left")}>
          {t("about_page.challenges_title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          {[1, 2, 3].map((num) => (
            <motion.div 
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.1 }}
              className="p-8 rounded-2xl border border-[#E2EAF8] dark:border-[#1E3150] bg-white dark:bg-[#10192C] shadow-sm"
            >
              <h3 className={cn("text-2xl font-bold text-brand-ink dark:text-white mb-4", isRTL ? "text-right" : "text-left")}>
                {t(`about_page.challenge${num}_title`)}
              </h3>
              <p className={cn("text-lg text-brand-muted dark:text-[#A1A1A6] font-light leading-relaxed", isRTL ? "text-right" : "text-left")}>
                {t(`about_page.challenge${num}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl bg-[#1B3A6B] text-white shadow-xl shadow-brand-blue/10"
        >
          <p className={cn("text-2xl md:text-3xl font-light text-[#F5F5F7] leading-relaxed", isRTL ? "text-right" : "text-center")}>
            {t("about_page.challenges_callout")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
