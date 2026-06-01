"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Process from "@/components/sections/Process";
import Challenges from "@/components/sections/Challenges";
import AboutVisionMission from "@/components/sections/AboutVisionMission";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SceneWrapper from "@/components/three/SceneWrapper";


export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-[145px] pb-16">
          <div className="absolute inset-0 z-0 overflow-clip">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
            <div className="relative z-[1]"><SceneWrapper scene="about" /></div>
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-[10]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-kicker text-brand-blue mb-6 block">
                {t("about_page.kicker")}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-outfit uppercase text-white leading-tight">
                {t("about_page.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light max-w-3xl leading-relaxed whitespace-pre-line">
                {t("about_page.body")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reduced Girth & Opacity Transition */}
        <div className="h-12 w-full bg-gradient-to-b from-[#0D1B2A]/30 to-transparent pointer-events-none -mt-px" />

        {/* TECHNOLOGY PARTNERS MARQUEE */}
        <section className="py-8 bg-[#F8FAFF] overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center mb-12">
            <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-[#1A56DB] mb-3 flex items-center justify-center gap-3">
              <span className="w-7 h-[2px] bg-[#1A56DB] rounded-full" />
              Technology Partners
              <span className="w-7 h-[2px] bg-[#1A56DB] rounded-full" />
            </p>
            <h2 className="text-3xl font-bold text-[#0D1B2A] tracking-tight">
              Powered by world-class technology.
            </h2>
          </div>

          {(() => {
            const logos = [
              { name: "Broadcom", src: "/images/Partners/broadcom.png", large: true },
              { name: "Broadcom CA", src: "/images/Partners/BroadcomCA.png", large: true },
              { name: "Broadcom Symantec", src: "/images/Partners/BroadcomSymantec.webp", large: true },
              { name: "Cloudera", src: "/images/Partners/cloudera.png" },
              { name: "Qlik", src: "/images/Partners/qlik.png" },
              { name: "Nozomi Networks", src: "/images/Partners/nozomi-networks.png" },
              { name: "SUSE", src: "/images/Partners/suse.png" },
              { name: "Huawei", src: "/images/Partners/Huawei-Logo.png", large: true },
              { name: "Intalio", src: "/images/Partners/intalio.png" },
              { name: "Ivanti", src: "/images/Partners/ivanti.png" },
              { name: "Hydrotek Engineering", src: "/images/Partners/Hydrotek.png" },
            ];
            const row1 = logos.slice(0, 5);
            const row2 = logos.slice(4);

            const LogoPill = ({ logo }: { logo: { name: string; src: string; large?: boolean } }) => (
              <div className={cn("flex-shrink-0 flex items-center justify-center px-8 mx-3 bg-white rounded-2xl shadow-sm border border-[#E2EAF8] hover:border-[#1A56DB]/30 hover:shadow-md transition-all duration-300", logo.large ? "h-24 min-w-[220px]" : "h-16 min-w-[160px]")}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={cn(logo.large ? "h-full w-auto max-w-[240px]" : "h-8 w-auto max-w-[120px]", "object-contain")}
                  style={{ mixBlendMode: 'multiply' }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const p = img.parentElement;
                    if (p) p.innerHTML = `<span style="font-size:10px;font-weight:800;letter-spacing:0.1em;color:#0D1B2A">${logo.name.toUpperCase()}</span>`;
                  }}
                />
              </div>
            );

            return (
              <div className="flex flex-col gap-6">
                {/* Row 1 — scrolls left */}
                <div
                  className="group flex overflow-hidden"
                  onMouseEnter={(e) => { (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.style.setProperty('animation-play-state', 'paused'); }}
                  onMouseLeave={(e) => { (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.style.setProperty('animation-play-state', 'running'); }}
                >
                  <div className="marquee-track flex animate-marquee-left">
                    {[...row1, ...row1].map((logo, i) => <LogoPill key={i} logo={logo} />)}
                  </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div
                  className="group flex overflow-hidden"
                  onMouseEnter={(e) => { (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.style.setProperty('animation-play-state', 'paused'); }}
                  onMouseLeave={(e) => { (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.style.setProperty('animation-play-state', 'running'); }}
                >
                  <div className="marquee-track flex animate-marquee-right">
                    {[...row2, ...row2].map((logo, i) => <LogoPill key={i} logo={logo} />)}
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* Executive Overview — 2 column with institutional imagery */}
        <section className="py-8 bg-[#F8FAFF]">
          <div className="max-w-7xl mx-auto px-6">
            <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", isRTL ? "lg:flex lg:flex-row-reverse" : "")}>
              <div className={cn(isRTL ? "text-right" : "text-left")}>
                <span className="section-kicker mb-6 block">{t("about_page.kicker")}</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 font-outfit text-brand-navy dark:text-white">
                  {t("about.title")}
                </h2>
                <p className="text-lg text-brand-muted dark:text-white/50 font-light leading-relaxed whitespace-pre-line">
                  {t("about.body")}
                </p>
              </div>
              <div className="w-full rounded-2xl overflow-hidden" style={{ height: 380 }}>
                <img
                  src="/images/building.jpg"
                  alt="Kuwait city"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* LIGHT SECTION - Diagonal Lines + Ghost M */}
        <section className="animate-section relative py-12 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          <div className={cn(
            "absolute text-[200px] font-black text-brand-blue/[0.025] leading-none select-none pointer-events-none tracking-tighter",
            isRTL ? "left-0 bottom-0" : "right-0 bottom-0"
          )}>
            M
          </div>

          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Challenges />
          </div>
        </section>


        {/* VISION & MISSION */}
        <AboutVisionMission />

        {/* LIGHT SECTION - Process */}
        <section className="animate-section relative py-12 bg-brand-surface overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-lines pointer-events-none opacity-50" />
          <div className="container max-w-7xl mx-auto px-6 relative z-10">
            <Process />
          </div>
        </section>

        {/* CLIENT SUCCESS */}
        <section className="relative py-10 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 30%, #1A3A6B 65%, #1A56DB 100%)' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm text-[11px] font-bold tracking-[0.2em] uppercase text-white/70 mb-8">
              Client Success
            </div>

            <h2 className="text-5xl font-bold text-white tracking-tight mb-12" style={{ letterSpacing: '-0.03em' }}>
              What our clients say.
            </h2>

            <div className="bg-white rounded-2xl p-10 text-left" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>
              <div className="text-[48px] leading-none text-[#1A56DB] font-serif mb-6">&ldquo;</div>

              <p className="text-[20px] text-[#0D1B2A] leading-relaxed font-light tracking-tight mb-8">
                Masarat&apos;s integrated approach gave us a single point of accountability across our entire technology environment. What used to take months of coordination now happens as one seamless delivery.
              </p>

              <div className={cn("flex items-center justify-between pt-6 border-t border-[#E2EAF8]", isRTL ? "flex-row-reverse" : "")}>
                <div>
                  <div className="text-[15px] font-bold text-[#0D1B2A]">Technology Director</div>
                  <div className="text-[13px] text-[#64748B] mt-0.5">Leading Kuwait Banking Institution</div>
                </div>
                <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#0D1B2A]">Banking Sector</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
