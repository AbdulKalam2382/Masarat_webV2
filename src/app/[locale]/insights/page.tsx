"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Shield, Cloud, Brain } from "lucide-react";
import { insights, getInsightLocale, getCategoryLabel } from "@/lib/insights";
import { formatDate } from "@/lib/formatDate";
import HeroBackground from "@/components/ui/HeroBackground";

export default function InsightsPage() {
  const { t, isRTL, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { id: "All", label: isRTL ? "الكل" : "All" },
    { id: "Cybersecurity", label: getCategoryLabel("Cybersecurity", language) },
    { id: "AI", label: getCategoryLabel("AI", language) },
    { id: "Cloud", label: getCategoryLabel("Cloud", language) },
  ];

  const filteredArticles = insights.filter((article) =>
    activeFilter === "All" || article.category === activeFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cybersecurity":
        return <Shield size={28} className="text-brand-blue" />;
      case "Cloud":
        return <Cloud size={28} className="text-brand-blue-soft" />;
      case "AI":
        return <Brain size={28} className="text-brand-blue-soft" />;
      default:
        return <BookOpen size={28} className="text-brand-blue" />;
    }
  };

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center pt-[100px] overflow-hidden bg-white dark:bg-brand-navy">
          
          {/* PREMIUM CANVAS BACKGROUND */}
          <HeroBackground />

          <div className="container max-w-7xl mx-auto px-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="section-kicker text-brand-blue mb-6 block">
                {t("insights_page.kicker")}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 font-outfit uppercase text-brand-navy dark:text-white leading-[0.95]">
                {t("insights_page.title")}
              </h1>
              <p className="text-xl md:text-2xl text-brand-muted dark:text-white/60 font-light max-w-2xl leading-relaxed">
                {t("insights_page.body")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="sticky top-[72px] md:top-[88px] z-40 bg-white/95 dark:bg-brand-navy/95 backdrop-blur-xl border-b border-brand-border dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className={cn("flex items-center gap-0 overflow-x-auto scrollbar-hide py-0", isRTL && "flex-row-reverse")}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em]",
                    "border-b-2 transition-all duration-300",
                    activeFilter === filter.id
                      ? "border-brand-blue text-brand-blue dark:text-brand-blue-soft dark:border-brand-blue-soft"
                      : "border-transparent text-brand-muted hover:text-brand-navy dark:hover:text-white"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <section className="relative py-24 bg-brand-surface dark:bg-brand-navy overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-40" />
          
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-32 bg-white dark:bg-white/5 rounded-[3rem] border border-brand-border dark:border-white/10 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-brand-surface dark:bg-white/5 border border-brand-border dark:border-white/10 flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={28} className="text-brand-muted" />
                </div>
                <p className="text-lg text-brand-muted font-medium">
                  {isRTL ? "لا توجد مقالات في هذه الفئة" : "No articles in this category yet"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, i) => {
                  const locale = getInsightLocale(article, language);
                  const categoryLabel = getCategoryLabel(article.category, language);
                  const categoryIcon = getCategoryIcon(article.category);
 
                  return (
                    <motion.article
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative flex flex-col bg-white dark:bg-white/5 rounded-[2rem] border border-brand-border dark:border-white/10 overflow-hidden hover:border-brand-blue/50 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500"
                    >
                      <div className="h-[3px] w-full bg-gradient-to-r from-brand-blue to-brand-blue-soft" />
                      
                      <div className="p-8 flex flex-col h-full">
                        <div className={cn("flex items-center justify-between mb-8", isRTL && "flex-row-reverse")}>
                          <span className="text-[10px] font-black tracking-[0.25em] uppercase text-brand-blue-soft">
                            {categoryLabel}
                          </span>
                          <span className="text-[11px] font-bold text-brand-muted dark:text-white/30 uppercase tracking-widest">
                            {article.readTime}
                          </span>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-brand-surface dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          {categoryIcon}
                        </div>

                        <Link href={`/insights/${article.slug}`} className="flex-1">
                          <h3 className="text-2xl font-bold tracking-tight text-brand-navy dark:text-white mb-4 leading-tight group-hover:text-brand-blue dark:group-hover:text-brand-blue-soft transition-colors">
                            {locale.title}
                          </h3>
                        </Link>

                        <p className="text-sm text-brand-muted dark:text-white/40 leading-relaxed line-clamp-3 mb-8 font-medium">
                          {locale.excerpt}
                        </p>

                        <div className={cn("flex items-center justify-between pt-6 border-t border-brand-border dark:border-white/10", isRTL && "flex-row-reverse")}>
                          <span className="text-[11px] font-bold text-brand-muted dark:text-white/30 uppercase tracking-widest">
                            {formatDate(article.date, language)}
                          </span>
                          <Link 
                            href={`/insights/${article.slug}`} 
                            className={cn("flex items-center gap-2 text-xs font-black text-brand-blue dark:text-brand-blue-soft uppercase tracking-widest group/btn", isRTL && "flex-row-reverse")}
                          >
                            {isRTL ? "اقرأ" : "Read"}
                            <ArrowRight size={14} className={cn("group-hover/btn:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover/btn:-translate-x-1")} />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
