'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'
import { Target, Eye, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function VisionMission() {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia(sectionRef)

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const isMobile = window.innerWidth < 768
      const intensity = isMobile ? 0.5 : 1

      gsap.set(bgRef.current, { willChange: 'transform' });
      gsap.to(bgRef.current, {
        yPercent: 50 * intensity, // Increased parallax
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5 // Lower scrub for tighter follow
        }
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={sectionRef} data-section-name={isRTL ? "الرؤية" : "Vision"} className="relative py-32 overflow-hidden bg-brand-surface dark:bg-[#0D1B2A]/50">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-[-20%] z-0 pointer-events-none will-change-transform opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Tech background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Fixed Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-surface/80 dark:bg-[#0D1B2A]/80 pointer-events-none" />

      {/* Background Decorative Element - Kuwait Skyline Silhouette (Vector-like) */}
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
            <div className="relative h-full bg-white dark:bg-white/5 backdrop-blur-xl border border-brand-border dark:border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-soft/10 flex items-center justify-center text-brand-blue-soft group-hover:scale-110 transition-transform duration-500">
                  <Eye size={32} />
                </div>
                
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-[0.3em] text-brand-blue-soft uppercase">
                    {t('home.vision_eyebrow')}
                  </span>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold text-brand-navy dark:text-white leading-tight",
                    isRTL ? "font-cairo" : "font-outfit"
                  )}>
                    {t('home.vision_text')}
                  </h3>
                </div>

                <div className="mt-auto pt-8">
                  <Link href="/about#vision" className={cn(
                    "inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t('home.learn_more')}
                    <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>
              </div>
              
              {/* Decorative Number */}
              <div className={cn(
                "absolute -bottom-10 -right-4 text-[160px] font-black text-brand-navy/[0.02] dark:text-white/[0.02] leading-none pointer-events-none select-none",
                isRTL && "-left-4 right-auto"
              )}>
                01
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
            <div className="relative h-full bg-brand-navy dark:bg-white/5 backdrop-blur-xl border border-white/5 dark:border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl transition-all duration-500">
              <div className="flex flex-col gap-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-blue-soft group-hover:scale-110 transition-transform duration-500">
                  <Target size={32} />
                </div>
                
                <div className="space-y-4">
                  <span className="text-xs font-black tracking-[0.3em] text-brand-blue-soft uppercase">
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
                    "inline-flex items-center gap-2 text-sm font-bold text-brand-blue-soft hover:gap-3 transition-all",
                    isRTL && "flex-row-reverse"
                  )}>
                    {t('home.learn_more')}
                    <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
                  </Link>
                </div>
              </div>

              {/* Decorative Number */}
              <div className={cn(
                "absolute -bottom-10 -right-4 text-[160px] font-black text-white/[0.03] leading-none pointer-events-none select-none",
                isRTL && "-left-4 right-auto"
              )}>
                02
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
