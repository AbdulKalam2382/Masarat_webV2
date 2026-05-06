"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

interface ServiceDetailTemplateProps {
  name: string;
  category: string;
  description: string;
  deliverables: string[];
  steps: {
    title: string;
    description: string;
  }[];
  differentiators: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

export default function ServiceDetailTemplate({
  name,
  category,
  description,
  deliverables,
  steps,
  differentiators,
  children
}: ServiceDetailTemplateProps) {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo" : "font-inter")}>
      <Navbar />
      <div className="bg-white dark:bg-[#0B1221] transition-colors duration-500">
        
        {/* SECTION 1: Hero */}
        <section className="relative pt-[120px] pb-32 bg-[#1B3A6B] overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(200,150,62,0.1)_0%,_transparent_50%)]" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-12", isRTL && "flex-row-reverse")}
            >
              <Link href="/solutions" className="hover:text-blue-500 transition-colors">{t("nav.solutions")}</Link>
              {isRTL ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
              <span className="text-white/80">{name}</span>
            </motion.div>

            <div className={cn("max-w-4xl", isRTL ? "text-right mr-0 ml-auto" : "text-left")}>
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
              >
                {category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 font-outfit leading-[0.95]"
              >
                {name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl leading-relaxed"
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn("flex flex-wrap gap-4", isRTL && "justify-end")}
              >
                <Link 
                  href="/contact" 
                  className="bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
                >
                  {isRTL ? "احصل على استشارة مجانية" : "Get a Free Consultation"}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Overview / Deliverables */}
        <section className="py-32 bg-white dark:bg-[#0B1221]">
          <div className="container max-w-7xl mx-auto px-6">
            <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-16", isRTL && "rtl")}>
              <div className={cn("lg:col-span-4", isRTL ? "text-right" : "text-left")}>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 mb-4 block">
                  {isRTL ? "التنفيذ" : "Deployment"}
                </span>
                <h2 className="text-4xl font-bold tracking-tighter font-outfit text-brand-ink dark:text-white">
                  {isRTL ? "ماذا نقدم." : "What we deliver."}
                </h2>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "flex items-start gap-4 p-6 rounded-2xl bg-[#EEF3FB] dark:bg-[#10192C] border border-[#E2EAF8] dark:border-[#1E3150] hover:border-blue-500/50 transition-all group",
                      isRTL ? "flex-row-reverse text-right" : "flex-row"
                    )}
                  >
                    <div className="p-2 bg-blue-600/10 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg font-medium text-brand-ink dark:text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: How We Do It (Process) */}
        <section className="py-32 bg-[#F0F5FF] dark:bg-[#0F172A] border-y border-brand-border dark:border-[#1E3150]">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 mb-4 block">
                {isRTL ? "المنهجية" : "The Process"}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-outfit text-brand-ink dark:text-white">
                {isRTL ? "كيف نقوم بذلك." : "How we do it."}
              </h2>
            </div>
            
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative", isRTL && "flex-row-reverse")}>
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-blue-600/20 z-0" />
              
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-[#10192C] border-2 border-blue-600 flex items-center justify-center text-2xl font-black text-blue-600 mb-8 shadow-xl shadow-blue-600/10">
                    {isRTL ? `٠${i + 1}` : `0${i + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-brand-ink dark:text-white mb-4">{step.title}</h3>
                  <p className="text-sm text-brand-muted dark:text-white/50 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Why Masarat */}
        <section className="py-32 bg-white dark:bg-[#0B1221]">
          <div className="container max-w-7xl mx-auto px-6">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", isRTL && "rtl")}>
              <div className={isRTL ? "text-right" : "text-left"}>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600 mb-4 block">
                  {isRTL ? "الميزة" : "The Advantage"}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-outfit text-brand-ink dark:text-white mb-8 leading-[0.95]">
                  {isRTL ? `لماذا تختارنا لـ ${name}.` : `Why choose us for ${name}.`}
                </h2>
                <p className={cn("text-lg text-brand-muted dark:text-white/60 font-light max-w-md leading-relaxed mb-12", isRTL && "mr-0 ml-auto")}>
                  {isRTL 
                    ? "نمزج بين المعرفة المؤسسية المحلية العميقة وخبرة دمج التكنولوجيا العالمية لتقديم نتائج سيادية."
                    : "We blend deep local institutional knowledge with global technology integration expertise to deliver sovereign results."}
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {differentiators.map((diff, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={cn(
                        "flex items-center gap-6 p-6 rounded-2xl border border-[#E2EAF8] dark:border-[#1E3150] hover:bg-[#F8FAFC] dark:hover:bg-[#0D1B2A] transition-all",
                        isRTL ? "flex-row-reverse text-right" : "flex-row"
                      )}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                        {diff.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-ink dark:text-white">{diff.title}</h4>
                        <p className="text-sm text-brand-muted dark:text-white/50">{diff.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] bg-[#F8FAFC] dark:bg-[#10192C] overflow-hidden border border-[#E2EAF8] dark:border-[#1E3150] relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)]" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 w-[70%] h-[60%]"
                  >
                    <Image
                      src="/images/Masarat Logo.png"
                      alt="Masarat Technologies"
                      fill
                      sizes="500px"
                      className="object-contain mix-blend-multiply dark:mix-blend-normal"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {children && (
          <div className="bg-white dark:bg-[#0B1221]">
            {children}
          </div>
        )}

        {/* SECTION 5: CTA Banner */}
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="bg-[#1B3A6B] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-blue-600/10 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-outfit mb-8">
                  {isRTL ? <>هل أنت مستعد لتطوير <br className="hidden md:block" />بنيتك التحتية؟</> : <>Ready to transform <br className="hidden md:block" />your infrastructure?</>}
                </h2>
                <div className={cn("flex flex-wrap justify-center gap-4", isRTL && "flex-row-reverse")}>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105"
                  >
                    {isRTL ? "ابدأ مشروعاً" : "Start a Project"}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all"
                  >
                    {t("nav.contact")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}


