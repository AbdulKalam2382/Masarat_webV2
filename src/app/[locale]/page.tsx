"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import PowerQuote from "@/components/sections/PowerQuote";
import WhoWeAre from "@/components/sections/WhoWeAre";
import VisionMission from "@/components/sections/VisionMission";
import SolutionsPreview from "@/components/sections/ServicesPreview";
import SectorsWeServe from "@/components/sections/SectorsWeServe";
import WhyMasaratConsolidated from "@/components/sections/WhyMasaratConsolidated";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Home() {
  const {t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter", "pt-[90px]")}>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Marquee Strip */}
        <MarqueeStrip />

        {/* 3. Consolidated Why Masarat — Technology is the lever */}
        <WhyMasaratConsolidated />


        {/* 4. Who We Are */}
        <WhoWeAre />

        {/* 5. Vision & Mission (New) */}
        <VisionMission />

        {/* 6. Solutions Preview (renamed ServicesPreview) */}
        <SolutionsPreview />

        {/* 7. Sectors We Serve */}
        <SectorsWeServe />

        {/* 9. Contact CTA Banner */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 65%, #1A56DB 100%)" }} />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute" style={{ top: "-20%", left: "-10%", width: "60%", height: "140%", background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)", transform: "rotate(-15deg)" }} />
            <div className="absolute" style={{ top: "-30%", right: "-5%", width: "50%", height: "130%", background: "linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)", transform: "rotate(10deg)" }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-[12px] font-bold tracking-[0.3em] uppercase text-white/50 mb-5 flex items-center justify-center gap-3">
              <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
              Contact Us
              <span className="w-6 h-[1.5px] bg-white/40 rounded-full" />
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tight mb-5" style={{ letterSpacing: "-0.04em" }}>
              Ready to transform your<br />
              <span className="font-light text-white/75">organisation?</span>
            </h2>
            <p className="text-[17px] text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
              Partner with Masarat Technologies for integrated, mission-critical technology delivery.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact"
                className="px-8 py-4 rounded-full bg-white text-[#0D1B2A] text-[15px] font-bold tracking-tight hover:bg-[#F8FAFF] hover:scale-105 transition-all duration-200 shadow-lg">
                Schedule a Consultation
              </Link>
              <Link href="/solutions"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white text-[15px] font-semibold tracking-tight hover:border-white/60 hover:bg-white/10 transition-all duration-200">
                View Our Solutions →
              </Link>
            </div>
          </div>
        </section>


        {/* Customer Success Quote */}
        <section className="relative py-24 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 60%, #1A56DB 100%)",
          }}
        >
          {/* Light ray effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute"
              style={{
                top: "-20%", left: "-10%",
                width: "60%", height: "140%",
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
                transform: "rotate(-15deg)",
              }}
            />
            <div className="absolute"
              style={{
                top: "-30%", right: "-5%",
                width: "50%", height: "130%",
                background: "linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)",
                transform: "rotate(10deg)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 mb-8">
                CLIENT SUCCESS
              </div>

              <h2
                className="text-white font-bold mb-12 tracking-tight"
                style={{ fontSize: 40, letterSpacing: "-0.03em" }}
              >
                What our clients say.
              </h2>

              {/* Quote card */}
              <div
                className="max-w-3xl mx-auto bg-white rounded-2xl p-10 text-left"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.2)" }}
              >
                <div
                  className="text-[#1A56DB] font-serif mb-4 leading-none"
                  style={{ fontSize: 64 }}
                >
                  &ldquo;
                </div>

                <p
                  className="text-[#0D1B2A] leading-relaxed font-light tracking-tight mb-8"
                  style={{ fontSize: 20 }}
                >
                  Masarat&apos;s integrated approach gave us a single point of accountability
                  across our entire technology environment. What used to take months of
                  coordination now happens as one seamless delivery.
                </p>

                <div
                  className={cn(
                    "flex items-center justify-between pt-6 border-t border-[#E2EAF8]",
                    isRTL ? "flex-row-reverse" : ""
                  )}
                >
                  <div>
                    <div className="text-[15px] font-bold text-[#0D1B2A]">
                      Technology Director
                    </div>
                    <div className="text-[13px] text-[#64748B] mt-0.5">
                      Leading Banking Institution
                    </div>
                  </div>
                  <div
                    className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#0D1B2A]"
                  >
                    Banking Sector
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
