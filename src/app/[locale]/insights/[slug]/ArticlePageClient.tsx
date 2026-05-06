 "use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Tag, User, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import type { Insight } from "@/lib/insights";
import { getInsightLocale, getCategoryLabel } from "@/lib/insights";
import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, { pill: string; bar: string }> = {
  Cybersecurity: {
    pill: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    bar: "from-blue-600 via-blue-400",
  },
  Cloud: {
    pill: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    bar: "from-sky-500 via-sky-300",
  },
  AI: {
    pill: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    bar: "from-amber-500 via-amber-300",
  },
};

interface Props {
  article: Insight;
}

export default function ArticlePageClient({ article }: Props) {
  const { t, isRTL, language } = useLanguage();

  const locale = getInsightLocale(article, language);
  const categoryLabel = getCategoryLabel(article.category, language);

  const colors = categoryColors[article.category] ?? {
    pill: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
    bar: "from-brand-blue via-sky-400",
  };

  const formattedDate = formatDate(article.date, language);

  return (
    <div className={cn(isRTL ? "font-cairo" : "font-inter")} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-[120px] pb-24 bg-[#0B1221] overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.12)_0%,_transparent_55%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(200,150,62,0.08)_0%,_transparent_55%)]" />
        </div>

        <div className="container max-w-4xl mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-12",
              isRTL ? "flex-row-reverse" : ""
            )}
          >
            <Link
              href="/insights"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5"
            >
              {isRTL ? <ArrowRight size={12} /> : <ArrowLeft size={12} />}
              {t("insights_page.back")}
            </Link>
          </motion.div>

          {/* Category pill */}
          <motion.span
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] mb-8",
              colors.pill
            )}
          >
            <Tag size={9} />
            {categoryLabel}
          </motion.span>

          {/* Title — from locale */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-4xl md:text-6xl font-bold tracking-tighter text-white font-outfit leading-[1.05] mb-8",
              isRTL ? "text-right" : "text-left"
            )}
          >
            {locale.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={cn("flex items-center gap-6 flex-wrap", isRTL ? "flex-row-reverse" : "")}
          >
            <span className={cn("flex items-center gap-1.5 text-xs text-white/40 font-medium", isRTL ? "flex-row-reverse" : "")}>
              <User size={12} />
              {article.author}
            </span>
            <span className={cn("flex items-center gap-1.5 text-xs text-white/40 font-medium", isRTL ? "flex-row-reverse" : "")}>
              <Clock size={12} />
              {article.readTime} {t("insights_page.read_time")}
            </span>
            <span className="text-xs text-white/30 uppercase tracking-widest">
              {formattedDate}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────────────────────── */}
      <article className="py-24 bg-white dark:bg-[#0B1221] transition-colors duration-500">
        <div className="container max-w-4xl mx-auto px-6">
          {/* Accent bar — flips for RTL */}
          <div
            className={cn(
              "h-[3px] w-16 rounded-full bg-gradient-to-r mb-12",
              colors.bar,
              "to-transparent",
              isRTL ? "ml-auto" : "mr-auto"
            )}
          />

          {/* Intro blockquote — from locale */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className={cn(
              "text-xl md:text-2xl text-brand-muted dark:text-[#A1A1A6] font-light leading-relaxed mb-16",
              isRTL
                ? "border-r-4 border-brand-blue pr-6 text-right"
                : "border-l-4 border-brand-blue pl-6 text-left"
            )}
          >
            {locale.intro}
          </motion.p>

          {/* Sections — from locale */}
          <div className="flex flex-col gap-14">
            {locale.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(isRTL ? "text-right" : "text-left")}
              >
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-outfit text-brand-ink dark:text-[#F5F5F7] mb-5">
                  {section.heading}
                </h2>
                <p className="text-base md:text-lg text-brand-muted dark:text-[#A1A1A6] font-light leading-relaxed mb-6">
                  {section.body}
                </p>

                {/* Sub-sections */}
                {section.subSections && section.subSections.length > 0 && (
                  <div className="flex flex-col gap-6 mt-6">
                    {section.subSections.map((sub, j) => (
                      <div
                        key={j}
                        className={cn(
                          "p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0D1B2A] border border-brand-border dark:border-[#1E3150]",
                          isRTL ? "text-right" : "text-left"
                        )}
                      >
                        <h3 className="text-base font-bold text-brand-ink dark:text-[#F5F5F7] mb-2 font-outfit">
                          {sub.heading}
                        </h3>
                        <p className="text-sm text-brand-muted dark:text-[#8E8E93] font-light leading-relaxed">
                          {sub.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Conclusion — from locale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-12 border-t border-brand-border dark:border-[#1E3150]"
          >
            <p className={cn("text-lg text-brand-ink dark:text-[#F5F5F7] font-medium leading-relaxed", isRTL ? "text-right" : "text-left")}>
              {locale.conclusion}
            </p>
          </motion.div>
        </div>
      </article>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-ink dark:bg-[#0B1221] transition-colors duration-500">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "flex flex-col gap-6",
              isRTL ? "text-right items-end" : "text-left items-start"
            )}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-blue">
              {t("contact_page.kicker")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-outfit text-white leading-[1.05]">
              {t("services.detail.ctabanner")}
            </h2>
            <p className="text-base text-white/50 font-light leading-relaxed max-w-lg">
              {t("services.detail.ctasub")}
            </p>
            <div className={cn("flex flex-col sm:flex-row gap-4 mt-4", isRTL ? "sm:flex-row-reverse" : "")}>
              <Link
                href="/contact"
                className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-brand-blue/30 text-center text-sm uppercase tracking-wider"
              >
                {t("services.detail.btn1")}
              </Link>
              <Link
                href="/insights"
                className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center text-sm uppercase tracking-wider"
              >
                {t("insights_page.back")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
