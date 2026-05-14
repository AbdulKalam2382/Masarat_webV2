'use client'
import { useState } from 'react'
import CVModal from '@/components/ui/CVModal'

export default function JobsPage() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <main>
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 65%, #1A56DB 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
          <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4 flex items-center gap-3">
            <span className="w-7 h-[2px] bg-white/40 rounded-full" />
            Careers at Masarat
          </p>
          <h1 className="text-5xl font-bold text-white tracking-tight mb-4" style={{ letterSpacing: '-0.04em' }}>
            Open Positions
          </h1>
          <p className="text-[17px] text-white/60 max-w-xl leading-relaxed">
            We are always looking for talented people to join our team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] border border-[#DBEAFE] flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] tracking-tight mb-3">
            No open positions right now
          </h2>
          <p className="text-[16px] text-[#64748B] leading-relaxed max-w-md mx-auto mb-8">
            We do not have any open roles at the moment but we are always interested in hearing from talented people.
          </p>
          <button
            onClick={() => setCvOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1A56DB] text-white text-[15px] font-bold hover:bg-[#0D4BC4] transition-colors duration-200"
          >
            Submit Your CV
          </button>
        </div>
      </section>

      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </main>
  )
}
