'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import Image from 'next/image'

export default function NotFound() {
  const { isRTL } = useLanguage()

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-white 
        dark:bg-[#0F1C2E] flex flex-col 
        items-center justify-center 
        px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="max-w-md"
      >
        {/* Logo */}
        <div className="relative w-[200px] h-[80px] mx-auto mb-10">
          <Image
            src="/images/Masarat Logo.png"
            alt="Masarat Technologies"
            fill
            sizes="200px"
            className="object-contain mix-blend-multiply dark:mix-blend-normal"
          />
        </div>

        {/* 404 */}
        <div className="text-[120px] font-black 
          leading-none tracking-tighter 
          text-[#1d1d1f] dark:text-white mb-4"
        >
          404
        </div>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-[#2563EB] 
          rounded-full mx-auto mb-6" 
        />

        {/* Message */}
        <h1 className="text-2xl font-bold 
          tracking-tight text-[#1d1d1f] 
          dark:text-white mb-4">
          {isRTL 
            ? 'الصفحة غير موجودة' 
            : 'Page not found'}
        </h1>

        <p className="text-[15px] text-[#6B6B6B] 
          dark:text-[#A1A1A6] leading-relaxed mb-10">
          {isRTL
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : "The page you're looking for doesn't exist or has been moved."}
        </p>

        {/* Back home button */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#2563EB] 
              text-white rounded-full text-sm 
              font-semibold tracking-tight
              hover:bg-[#1D4ED8] transition-colors"
          >
            {isRTL 
              ? '← العودة للرئيسية' 
              : 'Back to Home →'}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
}
