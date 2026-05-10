'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LogoIntro() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('masarat_intro_seen')
    if (!seen) {
      setShow(true)
      document.body.style.overflow = 'hidden'

      const timer = setTimeout(() => {
        sessionStorage.setItem('masarat_intro_seen', 'true')
        document.body.style.overflow = ''
        setShow(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!show) return null

  const skipIntro = () => {
    sessionStorage.setItem('masarat_intro_seen', 'true')
    document.body.style.overflow = ''
    setShow(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
        style={{ background: '#FFFFFF' }}
        onClick={skipIntro}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
      >
        <motion.img
          src="/images/Masarat Logo.png"
          alt="Masarat Technologies"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '320px', height: 'auto', mixBlendMode: 'multiply' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
