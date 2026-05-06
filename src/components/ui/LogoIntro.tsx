'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import { useLanguage } from '@/lib/LanguageContext'

export default function LogoIntro() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const seen = sessionStorage.getItem('masarat_intro_seen')
    if (!seen) {
      setShow(true)
      document.body.style.overflow = 'hidden'
      
      // Progress through phases
      const timers = [
        setTimeout(() => setPhase(1), 800),
        setTimeout(() => setPhase(2), 1400),
        setTimeout(() => setPhase(3), 2000),
        setTimeout(() => setPhase(4), 2400),
        setTimeout(() => setPhase(5), 3200),
        setTimeout(() => {
          sessionStorage.setItem('masarat_intro_seen', 'true')
          document.body.style.overflow = ''
          setShow(false)
        }, 4200),
      ]
      
      return () => timers.forEach(clearTimeout)
    }
  }, [])

  if (!show) return null

  const letters = 'MASARAT'.split('')

  const skipIntro = () => {
    sessionStorage.setItem('masarat_intro_seen', 'true')
    document.body.style.overflow = ''
    setShow(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-[#0D1B2A] flex flex-col items-center justify-center cursor-pointer"
        onClick={skipIntro}
        exit={{ 
          y: '-100%',
          transition: { 
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1]
          }
        }}
      >
        {/* Cyan background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={phase >= 1 ? {
              opacity: [0, 0.15, 0.08],
              scale: [0.8, 1.2, 1],
            } : { opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-[400px] h-[400px] rounded-full bg-[#3B82F6] blur-[80px]"
          />
        </div>

        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative w-40 h-40 mb-8"
        >
          <Image
            src="/images/Masarat Logo.png"
            alt="Masarat Technologies"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* MASARAT letters stagger */}
        {phase >= 2 && (
          <div className="flex items-center gap-[0.3em] overflow-hidden mb-3">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-white font-bold text-4xl tracking-[0.3em] block font-outfit"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        )}

        {/* TECHNOLOGIES */}
        {phase >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#3B82F6] text-xs tracking-[0.5em] uppercase font-bold mb-6 font-outfit"
          >
            TECHNOLOGIES
          </motion.p>
        )}

        {/* Line draw */}
        {phase >= 4 && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.4 }}
            className="h-[1.5px] bg-[#1A56DB] rounded-full"
          />
        )}

        <div className="absolute bottom-10 text-white/20 text-[10px] uppercase tracking-[0.2em]">
          {t("common.skip")}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
