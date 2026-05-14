'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'

export default function AboutVisionMission() {
  const { t, isRTL } = useLanguage()

  const gradientBg = 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 65%, #1A56DB 100%)'

  return (
    <>
      {/* VISION SECTION */}
      <section
        id="vision"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: gradientBg }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
          <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[14px] font-bold tracking-[0.2em] text-brand-blue-soft uppercase">
              {t('home.vision_eyebrow')}
            </span>

            <div className="relative">
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[120px] font-black text-brand-blue/20 leading-none pointer-events-none select-none">
                &ldquo;
              </span>
              <h2 className={cn(
                "text-3xl md:text-5xl font-light text-white leading-tight max-w-4xl mx-auto",
                isRTL ? "font-cairo" : "font-outfit"
              )}>
                {t('home.vision_text')}
              </h2>
            </div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-brand-blue-soft mx-auto rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        id="mission"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{ background: gradientBg }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
          <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[14px] font-bold tracking-[0.2em] text-brand-blue-soft uppercase">
              {t('home.mission_eyebrow')}
            </span>

            <h2 className={cn(
              "text-3xl md:text-5xl font-light text-white leading-tight max-w-4xl mx-auto",
              isRTL ? "font-cairo" : "font-outfit"
            )}>
              {t('home.mission_text')}
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-brand-blue-soft mx-auto rounded-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
