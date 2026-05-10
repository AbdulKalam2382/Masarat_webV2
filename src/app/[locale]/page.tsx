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
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Home() {
  const {t, isRTL } = useLanguage();

  return (
    <div className={cn(isRTL ? "font-cairo text-right" : "font-inter")}>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Why Masarat — differentiators */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/50 mb-5 flex items-center justify-center gap-3">
                <span className="w-7 h-[2px] bg-white/40 rounded-full" />
                Why Masarat
                <span className="w-7 h-[2px] bg-white/40 rounded-full" />
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ letterSpacing: '-0.03em' }}>
                The way we work<br />
                <span className="font-light text-white/70">sets us apart.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "01", title: "Integrated by Design", body: "We do not deliver isolated technology components. Every solution is designed to work as part of a connected, intelligent environment — eliminating gaps between digital platforms, security, and physical infrastructure." },
                { number: "02", title: "Accountability First", body: "From the first assessment to long-term operations, Masarat maintains a single point of accountability. No handover gaps. No blame-shifting. One partner who owns the outcome from start to finish." },
                { number: "03", title: "Built for Kuwait", body: "Our work is grounded in deep knowledge of Kuwait's regulatory environment, institutional culture, and operational needs. We understand what it means to deliver technology in environments where failure is not an option." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">{item.number}</div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight mb-3">{item.title}</h3>
                  <p className="text-[14px] text-white/55 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Marquee Strip */}
        <MarqueeStrip />

        {/* 3. Power Quote (New) */}
        <PowerQuote />

        {/* 4. Who We Are */}
        <WhoWeAre />

        {/* 5. Vision & Mission (New) */}
        <VisionMission />

        {/* 6. Solutions Preview (renamed ServicesPreview) */}
        <SolutionsPreview />

        {/* 7. Sectors We Serve */}
        <SectorsWeServe />

        {/* 8. Insights Preview — 3 articles */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1A56DB] mb-3 flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#1A56DB] rounded-full" />
                  Latest Insights
                </p>
                <h2 className="text-4xl font-bold text-[#0D1B2A] tracking-tight">Knowledge Hub</h2>
              </div>
              <a href="/en/insights" className="text-[13px] font-semibold text-[#1A56DB] hover:underline underline-offset-4">
                View All Articles →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  slug: "cybersecurity-zero-trust",
                  category: "Cybersecurity",
                  title: "Top Cybersecurity Threats Facing Kuwait Enterprises in 2026",
                  excerpt: "As Kuwait accelerates digital transformation, security threats are evolving rapidly. Here is what every CTO needs to know.",
                  date: "Jan 15, 2026",
                  readTime: "5 min read",
                  accentColor: "#0D1B2A",
                },
                {
                  slug: "ai-enterprise-readiness",
                  category: "AI",
                  title: "AI Enterprise Readiness: A Framework for Kuwait Organisations",
                  excerpt: "Before deploying AI, organisations need to assess data maturity, infrastructure readiness, and governance frameworks.",
                  date: "Feb 10, 2026",
                  readTime: "6 min read",
                  accentColor: "#3B82F6",
                },
                {
                  slug: "cloud-migration-guide",
                  category: "Cloud",
                  title: "The Complete Guide to Cloud Migration for Kuwait Businesses",
                  excerpt: "Moving to the cloud is no longer optional for competitive enterprises. This guide walks you through every step.",
                  date: "Mar 1, 2026",
                  readTime: "7 min read",
                  accentColor: "#1A56DB",
                },
              ].map((article, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2EAF8] rounded-2xl overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1 w-full" style={{ background: article.accentColor }} />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#EEF4FF] text-[#1A56DB] mb-4">
                      {article.category}
                    </span>
                    <a href={`/en/insights/${article.slug}`}>
                      <h3 className="text-[17px] font-bold text-[#0D1B2A] tracking-tight leading-snug mb-3 group-hover:text-[#1A56DB] transition-colors duration-200 cursor-pointer">
                        {article.title}
                      </h3>
                    </a>
                    <p className="text-[15px] text-[#64748B] leading-relaxed line-clamp-2 mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#E2EAF8]">
                      <span className="text-[11px] text-[#94A3B8]">{article.date}</span>
                      <span className="text-[11px] text-[#94A3B8]">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gradient transition: light → dark */}
        <div className="h-24 w-full bg-gradient-to-b from-[#F8FAFF] to-[#0D1B2A] pointer-events-none" />

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
              Partner with Masarat Technologies for integrated, mission-critical technology delivery across Kuwait.
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

        {/* Technology is the lever — enhanced dark section */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
            <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[14px] font-bold tracking-[0.2em] uppercase text-white/50 mb-5 flex items-center justify-center gap-3">
                <span className="w-7 h-[2px] bg-white/40 rounded-full" />Why Masarat<span className="w-7 h-[2px] bg-white/40 rounded-full" />
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
                Technology is the lever.<br />
                <span className="font-light text-white/70">Trust is the fulcrum.</span>
              </h2>
              <p className="text-[17px] text-white/60 max-w-2xl mx-auto leading-relaxed">
                For over four decades, Masarat has operated at the intersection of enterprise technology and institutional trust — delivering outcomes that matter in Kuwait&apos;s most demanding environments.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 border border-white/10 rounded-2xl overflow-hidden">
              {[
                { num: "40+", label: "Years of Combined Experience", desc: "Decades of proven delivery across Kuwait's most critical sectors." },
                { num: "5",   label: "Integrated Capabilities",      desc: "One partner covering the full enterprise technology stack." },
                { num: "Tier III", label: "Certified Delivery",       desc: "Data center projects delivered to international standards." },
                { num: "1",   label: "Point of Accountability",      desc: "Single partner from design through to long-term operations." },
              ].map((stat, i) => (
                <div key={i} className="p-8 text-center border-r border-b border-white/10 last:border-r-0 hover:bg-white/5 transition-colors duration-200">
                  <div className="text-4xl font-bold text-white tracking-tight mb-2" style={{ letterSpacing: '-0.04em' }}>{stat.num}</div>
                  <div className="text-[12px] font-bold tracking-wide uppercase text-white/50 mb-3">{stat.label}</div>
                  <div className="text-[13px] text-white/40 leading-relaxed">{stat.desc}</div>
                </div>
              ))}
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
                      Leading Kuwait Banking Institution
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
