'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'
import { Link } from '@/i18n/routing'

export default function PowerQuote() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-brand-navy">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.4] dark:opacity-[0.2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <Quote size={32} fill="currentColor" className="opacity-20" />
          </div>

          <h2 className={cn(
            "text-3xl md:text-5xl font-bold tracking-tight text-brand-navy dark:text-white leading-[1.15] max-w-4xl",
            isRTL ? "font-cairo" : "font-outfit"
          )}>
            {t('home.power_quote')}
          </h2>

          <div className="w-24 h-1 bg-brand-blue/20 rounded-full" />

          <p className="text-lg text-brand-muted dark:text-white/60 font-medium max-w-2xl leading-relaxed">
            {t('home.power_sub')}
          </p>

          <Link href="/about">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block px-8 py-4 bg-brand-navy dark:bg-white text-white dark:text-brand-navy rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:bg-brand-blue dark:hover:bg-brand-surface cursor-pointer"
            >
              {t('home.power_btn')}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
