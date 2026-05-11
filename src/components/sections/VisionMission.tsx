'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'
import { Target, Eye, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useRef } from 'react'

export default function VisionMission() {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} data-section-name={isRTL ? "الرؤية" : "Vision"} className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)" }}
    >
      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute" style={{ top: "-20%", left: "-10%", width: "60%", height: "140%", background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)", transform: "rotate(-15deg)" }} />
        <div className="absolute" style={{ top: "-30%", right: "-5%", width: "50%", height: "130%", background: "linear-gradient(225deg, rgba(26,86,219,0.12) 0%, transparent 60%)", transform: "rotate(10deg)" }} />
      </div>

      {/* Background Decorative Element - Institutional Growth Pattern (Vector-like) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",
          isRTL ? "md:flex-row-reverse" : ""
        )}>
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 overflow-hidden hover:shadow-2xl hover:shadow-white/5 transition-all duration-500">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Eye size={32} />
                </div>

                <div className="space-y-4">
                  <span className="text-[14px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase">
                    {t('home.vision_eyebrow')}
                  </span>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold text-white leading-tight",
                    isRTL ? "font-cairo" : "font-outfit"
                  )}>
                    {t('home.vision_text')}
                  </h3>
                </div>

                <div className="mt-auto pt-8">
                  <Link href="/about#vision" className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold text-[#93C5FD] hover:gap-3 transition-all",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t('home.learn_more')}
                    <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-brand-blue-soft/5 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 overflow-hidden hover:shadow-2xl hover:shadow-white/5 transition-all duration-500">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Target size={32} />
                </div>

                <div className="space-y-4">
                  <span className="text-[14px] font-bold tracking-[0.2em] text-[#93C5FD] uppercase">
                    {t('home.mission_eyebrow')}
                  </span>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold text-white leading-tight",
                    isRTL ? "font-cairo" : "font-outfit"
                  )}>
                    {t('home.mission_text')}
                  </h3>
                </div>

                <div className="mt-auto pt-8">
                  <Link href="/about#mission" className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold text-[#93C5FD] hover:gap-3 transition-all",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t('home.learn_more')}
                    <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
