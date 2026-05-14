'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, FileText } from 'lucide-react'

export default function CVModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '' })
  const fileRef = useRef<HTMLInputElement>(null)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) setFile(f)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setStatus('loading')
    try {
      const data = new FormData()
      data.append('cv', file)
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('position', formData.position)
      const res = await fetch('/api/cv', { method: 'POST', body: data })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full px-4 py-2.5 rounded-xl border border-[#E2EAF8] text-[14px] text-[#0D1B2A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/10 transition-all duration-200 bg-white`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
          />

          {/* Centering wrapper */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden w-full"
            style={{
              maxWidth: '520px',
              maxHeight: 'min(90vh, 700px)',
            }}
          >
            {/* Header — never scrolls */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-[#E2EAF8]">
              <div>
                <h2 className="text-[20px] font-bold text-[#0D1B2A] tracking-tight">Submit Your CV</h2>
                <p className="text-[13px] text-[#64748B] mt-0.5">We will be in touch soon.</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#E2EAF8] flex items-center justify-center flex-shrink-0 hover:bg-[#F8FAFF] transition-colors duration-200"
              >
                <X size={14} className="text-[#64748B]" />
              </button>
            </div>

            {/* Body — scrolls independently */}
            <div
              className="flex-1 overflow-y-auto px-6 py-5"
              style={{ WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain' } as React.CSSProperties}
            >
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#0D1B2A] mb-2">CV Submitted Successfully</h3>
                  <p className="text-[14px] text-[#64748B]">Thank you. We will review your CV and be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 pb-2">
                  <div>
                    <label className="block text-[12px] font-bold text-[#0D1B2A] mb-2 tracking-wide uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0D1B2A] mb-2 tracking-wide uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0D1B2A] mb-2 tracking-wide uppercase">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+965 XXXX XXXX"
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0D1B2A] mb-2 tracking-wide uppercase">Position of Interest</label>
                    <input
                      type="text"
                      placeholder="e.g. Network Engineer"
                      value={formData.position}
                      onChange={e => setFormData(p => ({ ...p, position: e.target.value }))}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0D1B2A] mb-2 tracking-wide uppercase">Upload CV *</label>

                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="hidden"
                      id="cv-upload"
                    />

                    <label
                      htmlFor="cv-upload"
                      className="flex flex-col items-center justify-center w-full h-[100px] border-2 border-dashed border-[#DBEAFE] rounded-xl cursor-pointer hover:border-[#1A56DB] hover:bg-[#F8FAFF] transition-all duration-200"
                    >
                      {file ? (
                        <div className="flex items-center gap-3 px-4">
                          <FileText size={20} className="text-[#1A56DB] flex-shrink-0" />
                          <span className="text-[13px] font-semibold text-[#0D1B2A] truncate">{file.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload size={20} className="text-[#1A56DB] mb-2" />
                          <span className="text-[13px] font-semibold text-[#0D1B2A]">Choose file or tap to browse</span>
                          <span className="text-[11px] text-[#94A3B8] mt-1">PDF, DOC, DOCX — from device, Drive or Files</span>
                        </>
                      )}
                    </label>

                    <p className="text-[11px] text-[#94A3B8] mt-2">
                      Works on iPhone and iPad — tap to open Files, Drive, or Camera Roll.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E2EAF8]">
                  <button
                    type="submit"
                    disabled={!file || status === 'loading'}
                    className="w-full py-3.5 bg-[#1A56DB] text-white rounded-xl text-[14px] font-bold tracking-tight hover:bg-[#0D4BC4] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 mt-3"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit CV'}
                  </button>
                  </div>

                  {status === 'error' && (
                    <p className="text-[13px] text-red-500 text-center">
                      Something went wrong. Please email your CV to info@masaratkwt.com
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
