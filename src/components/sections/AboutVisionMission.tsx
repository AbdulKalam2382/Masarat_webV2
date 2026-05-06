'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AboutVisionMission() {
  const { t, isRTL } = useLanguage()
  
  const visionRef = useRef(null)
  const missionRef = useRef(null)

  const { scrollYProgress: visionScroll } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"]
  })

  const { scrollYProgress: missionScroll } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  })

  const visionY = useTransform(visionScroll, [0, 1], ["0%", "30%"])
  const missionY = useTransform(missionScroll, [0, 1], ["0%", "30%"])

  return (
    <>
      {/* VISION SECTION */}
      <section 
        id="vision" 
        ref={visionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y: visionY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
            alt="Masarat Vision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/88 via-[#1A56DB]/40 to-transparent" />
        </motion.div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-black tracking-[0.3em] text-brand-blue-soft uppercase">
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
        ref={missionRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y: missionY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=90&w=1920&auto=format&fit=crop"
            alt="Masarat Mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 to-[#0D1B2A]/70" />
        </motion.div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[10px] font-black tracking-[0.3em] text-brand-blue-soft uppercase">
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
