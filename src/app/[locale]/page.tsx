"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import PowerQuote from "@/components/sections/PowerQuote";
import WhoWeAre from "@/components/sections/WhoWeAre";
import VisionMission from "@/components/sections/VisionMission";
import SolutionsPreview from "@/components/sections/ServicesPreview";
import SectorsWeServe from "@/components/sections/SectorsWeServe";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { insights, getInsightLocale, getCategoryLabel } from "@/lib/insights";

const categoryColors: Record<string, string> = {
  Cybersecurity: "text-blue-500 bg-blue-500/10",
  Cloud: "text-sky-400 bg-sky-400/10",
  AI: "text-amber-400 bg-amber-400/10",
};

// Show only the first 3 articles on the homepage
const previewArticles = insights.slice(0, 3);

export default function Home() {
  const { t, isRTL, language } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Marquee Strip */}
        <MarqueeStrip />

        {/* 3. Power Quote (New) */}
        <PowerQuote />

        {/* 4. Who We Are */}
        <WhoWeAre />

        {/* 5. Vision & Mission (New) */}
        <VisionMission />

        {/* 6. Solutions Preview (renamed ServicesPreview) */}
        <SolutionsPreview />

        {/* 7. Sectors We Serve */}
        <SectorsWeServe />

        {/* 8. Insights Preview — 3 articles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="animate-section relative py-32 bg-white border-t border-brand-border dark:border-[#1E3150] transition-colors duration-500 overflow-hidden"
        >
          {/* Decorative Background Number */}
          <div className={cn("absolute -top-8 text-[180px] font-black text-brand-navy/[0.03] dark:text-white/[0.03] leading-none select-none pointer-events-none hidden lg:block", isRTL ? "right-8" : "-left-4")}>
            04
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className={cn("mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8", isRTL ? "md:flex-row-reverse" : "")}>
              <div className={cn(isRTL ? "text-right" : "text-left")}>
                <span className={cn("section-kicker mb-4", isRTL ? "flex-row-reverse" : "")}>
                  {t("insights_page.kicker")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-outfit text-brand-navy dark:text-[#F5F5F7]">
                  {t("insights_page.home_title")}
                </h2>
              </div>
              <Link
                href="/insights"
                className={cn(
                  "group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-navy dark:text-[#F5F5F7] hover:text-brand-blue transition-all duration-300 shrink-0",
                  isRTL ? "flex-row-reverse" : ""
                )}
              >
                <span className="border-b border-transparent group-hover:border-brand-blue transition-all">
                  {t("insights_page.home_link")}
                </span>
                <div className="w-10 h-10 rounded-full border border-brand-navy/10 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isRTL
                        ? "group-hover:-translate-x-1 rotate-180"
                        : "group-hover:translate-x-1"
                    )}
                  />
                </div>
              </Link>
            </div>

            {/* Article cards */}
            <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", isRTL ? "text-right" : "text-left")}>
              {previewArticles.map((article, i) => {
                const locale = getInsightLocale(article, language);
                const categoryLabel = getCategoryLabel(article.category, language);

                return (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex flex-col bg-brand-surface dark:bg-brand-navy/40 border border-brand-border dark:border-white/10 rounded-3xl overflow-hidden hover:border-brand-blue/40 dark:hover:border-brand-blue/40 transition-all duration-500 hover:shadow-xl hover:shadow-brand-blue/5"
                  >
                    <div className="p-8 flex flex-col gap-5 flex-1">
                      {/* Category + read time */}
                      <div className={cn("flex items-center gap-3", isRTL ? "flex-row-reverse" : "")}>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                            categoryColors[article.category] ?? "text-brand-blue bg-brand-blue/10"
                          )}
                        >
                          <Tag size={9} />
                          {categoryLabel}
                        </span>
                        <span className={cn("flex items-center gap-1 text-[10px] text-brand-muted dark:text-white/40 font-medium uppercase tracking-widest", isRTL ? "flex-row-reverse" : "")}>
                          <Clock size={9} />
                          {article.readTime} {t("insights_page.read_time")}
                        </span>
                      </div>

                      {/* Title — bilingual */}
                      <Link href={`/insights/${article.slug}`}>
                        <h3 className="text-[17px] font-bold tracking-tight text-brand-navy dark:text-white hover:text-brand-blue transition-colors duration-200 cursor-pointer leading-snug">
                          {locale.title}
                        </h3>
                      </Link>

                      {/* Excerpt — bilingual */}
                      <p className="text-sm text-brand-muted dark:text-white/50 font-light leading-relaxed flex-1">
                        {locale.excerpt}
                      </p>

                      {/* Read link */}
                      <Link
                        href={`/insights/${article.slug}`}
                        className={cn(
                          "mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-blue hover:gap-3 transition-all duration-300",
                          isRTL ? "flex-row-reverse" : ""
                        )}
                      >
                        {t("insights_page.read_article")}
                        <ArrowRight size={12} className={cn(isRTL ? "rotate-180" : "")} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Gradient transition: light → dark */}
        <div className="h-24 w-full bg-gradient-to-b from-[#F8FAFF] to-[#0D1B2A] pointer-events-none" />

        {/* 9. Contact CTA Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="animate-section relative py-32 transition-colors duration-500 overflow-hidden bg-brand-navy"
        >
          {/* Cyan Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[800px] rounded-full bg-brand-blue/10 blur-[120px]" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <div
              className={cn(
                "flex flex-col md:flex-row items-center justify-between gap-12",
                isRTL ? "md:flex-row-reverse text-right" : ""
              )}
            >
              <div className="flex flex-col gap-4 max-w-xl">
                <span className={cn("section-kicker text-brand-blue-soft", isRTL ? "flex-row-reverse" : "")}>
                  {t("contact_page.kicker")}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-outfit text-white leading-[1.05]">
                  {t("home.cta_title")}
                </h2>
                <p className="text-lg text-white/50 font-light leading-relaxed">
                  {t("home.cta_sub")}
                </p>
              </div>

              <div className={cn("flex flex-col sm:flex-row gap-4 shrink-0", isRTL ? "sm:flex-row-reverse" : "")}>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-white text-brand-navy font-bold rounded-full hover:bg-brand-surface transition-all hover:scale-105 shadow-xl shadow-white/10 text-center text-sm uppercase tracking-wider"
                >
                  {t("nav.cta")}
                </Link>
                <Link
                  href="/solutions"
                  className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center text-sm uppercase tracking-wider"
                >
                  {t("home.cta_btn2")}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
