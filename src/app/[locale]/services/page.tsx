"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t, isRTL } = useLanguage();

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")} dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <div className="bg-white dark:bg-[#0B1221] transition-colors duration-500">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative pt-[120px] pb-24 bg-[#1B3A6B] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_40%,_rgba(37,99,235,0.12)_0%,_transparent_55%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_85%_70%,_rgba(200,150,62,0.07)_0%,_transparent_55%)]" />
          </div>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.08, 0.05]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#2563EB] blur-[120px]"
            />
          </div>

          <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="container max-w-7xl mx-auto px-6 relative z-10"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
            >
              {t("services.kicker")}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white font-outfit leading-[0.95] mb-6 max-w-5xl"
            >
              {t("services.page_title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/50 font-light max-w-2xl leading-relaxed"
            >
              {t("services.page_sub")}
            </motion.p>
          </motion.div>
        </section>

        {/* ── Bento Grid ────────────────────────────────────────────────── */}
        <Services />

        <section className="relative h-[320px] overflow-hidden my-0">
          <img
            src="/images/ai.jpg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            alt="Enterprise technology infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/80 via-[#1B3A6B]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-16 container max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2563EB] mb-3">
                {isRTL ? 'نهجنا' : 'Our Approach'}
              </p>
              <h3 className="text-3xl font-bold text-white tracking-tight max-w-lg leading-tight">
                {isRTL 
                  ? 'مساءلة واحدة. تسليم متكامل.'
                  : 'Single accountability. Integrated delivery.'}
              </h3>
            </motion.div>
          </div>
        </section>

        <Process />

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <section className="py-32 bg-[#1B3A6B]">
          <div className="container max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn("flex flex-col gap-8 max-w-3xl", isRTL ? "items-end text-right" : "items-start text-left")}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-blue">
                {t("contact_page.kicker")}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-outfit text-white leading-[0.95]">
                {t("services.cta_title")}
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                {t("services.cta_sub")}
              </p>
              <div className={cn("flex flex-col sm:flex-row gap-4 mt-2", isRTL ? "sm:flex-row-reverse" : "")}>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-brand-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-brand-blue/30 text-center text-sm uppercase tracking-wider"
                >
                  {t("services.cta_btn1")}
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-center text-sm uppercase tracking-wider"
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
