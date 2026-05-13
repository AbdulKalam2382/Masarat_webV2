'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('masarat_cookie_consent')
    if (!consent) {
      setTimeout(() => setShow(true), 1500)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('masarat_cookie_consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('masarat_cookie_consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-[420px] z-[9998]"
        >
          <div className="bg-white dark:bg-[#0D1B2A] border border-[#E2EAF8] dark:border-white/10 rounded-2xl p-6 shadow-[0_24px_64px_rgba(13,27,42,0.15)]">

            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] dark:bg-[#1A56DB]/20 border border-[#DBEAFE] dark:border-[#1A56DB]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-[#0D1B2A] dark:text-white tracking-tight">
                  Cookie Preferences
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13px] text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-5">
              We use essential cookies to keep the site functional and remember your preferences. No tracking or advertising cookies are used.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="flex-1 py-2.5 px-4 bg-[#1A56DB] text-white text-[13px] font-semibold rounded-xl hover:bg-[#0D4BC4] transition-colors duration-200"
              >
                Accept All
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 px-4 border border-[#E2EAF8] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] text-[13px] font-semibold rounded-xl hover:border-[#1A56DB]/30 hover:text-[#0D1B2A] dark:hover:text-white transition-all duration-200"
              >
                Decline
              </button>
            </div>

            {/* Privacy link */}
            <p className="text-[11px] text-[#94A3B8] mt-4 text-center">
              By using this site you agree to our{' '}
              <a href="/en/privacy" className="text-[#1A56DB] hover:underline underline-offset-2">
                Privacy Policy
              </a>
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
