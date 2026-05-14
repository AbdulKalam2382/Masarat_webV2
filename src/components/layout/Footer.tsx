"use client";

import { Link } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const solutionLinks = [
    { name: t("nav.dropdowns.solutions.enterprise.title"), href: "/solutions/digital-transformation" },
    { name: t("nav.dropdowns.solutions.ai_data.title"), href: "/solutions/ai-data" },
    { name: t("nav.dropdowns.solutions.cybersecurity.title"), href: "/solutions/cybersecurity" },
    { name: t("nav.dropdowns.solutions.elv.title"), href: "/solutions/elv-smart-systems" },
    { name: t("nav.dropdowns.solutions.infrastructure.title"), href: "/solutions/mission-critical" },
  ];

  const quickLinks = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const techPartners = [
    "Broadcom", "BroadcomCA", "BroadcomSymantec", "Cloudera", "Qlik", "Nozomi Networks",
    "SUSE", "Huawei", "Intalio", "Ivanti", "Hydrotek"
  ];

  return (
    <footer className="relative bg-white dark:bg-[#0B1221] text-brand-ink dark:text-white pt-10 pb-6 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#E2EAF8] dark:bg-white/10" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <div className="relative w-[500px] h-[200px]">
                <Image
                  src="/images/Masarat Logo.png"
                  alt="Masarat Technologies"
                  fill
                  sizes="500px"
                  className="object-contain object-left dark:invert dark:brightness-0"
                />
              </div>
            </Link>
            <p className="text-lg text-[#64748B] dark:text-white/60 font-light leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
              <a href="https://www.linkedin.com/company/masart/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <Linkedin size={20} className="text-[#0D1B2A]/80 dark:text-white/80 group-hover:text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/Masarat_Tech_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#0D1B2A]/80 dark:text-white/80 group-hover:text-white group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/masarat_tech_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0D1B2A]/80 dark:text-white/80 group-hover:text-white group-hover:scale-110 transition-transform">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className={cn("text-sm font-black uppercase tracking-[0.3em] text-[#0D1B2A]/30 dark:text-white/40", isRTL && "text-right")}>
              {t("footer.solutions_label")}
            </h4>
            <ul className="flex flex-col gap-5">
              {solutionLinks.map((link) => (
                <li key={link.name} className={cn("group", isRTL && "text-right")}>
                  <Link href={link.href} className="text-[15px] text-[#475569] dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 rtl:group-hover:-translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <h4 className={cn("text-sm font-black uppercase tracking-[0.3em] text-[#0D1B2A]/30 dark:text-white/40", isRTL && "text-right")}>
              {t("footer.nav_label")}
            </h4>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((link) => (
                <li key={link.name} className={cn("group", isRTL && "text-right")}>
                  <Link href={link.href} className="text-[15px] text-[#475569] dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300 rtl:group-hover:-translate-x-1">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className={cn("text-sm font-black uppercase tracking-[0.3em] text-[#0D1B2A]/30 dark:text-white/40", isRTL && "text-right")}>
              {t("footer.connect_label")}
            </h4>
            <div className="flex flex-col gap-6">
              <a href="mailto:info@masaratkwt.com" className="flex items-center gap-4 text-[#475569] dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] dark:bg-white/5 border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-600/30 transition-all">
                  <Mail size={18} className="group-hover:text-blue-600" />
                </div>
                <div className={cn("flex flex-col", isRTL && "text-right")}>
                  <span className="text-xs text-[#0D1B2A]/20 dark:text-white/30 uppercase tracking-tighter">Email</span>
                  <span className="text-sm font-semibold">info@masaratkwt.com</span>
                </div>
              </a>
              <a href="tel:+96567013229" className="flex items-center gap-4 text-[#475569] dark:text-white/70 hover:text-blue-600 dark:hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] dark:bg-white/5 border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600/10 group-hover:border-blue-600/30 transition-all">
                  <Phone size={18} className="group-hover:text-blue-600" />
                </div>
                <div className={cn("flex flex-col", isRTL && "text-right")}>
                  <span className="text-xs text-[#0D1B2A]/20 dark:text-white/30 uppercase tracking-tighter">Phone</span>
                  <span className="text-sm font-semibold">+965 6701 3229</span>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=Dar+Al+Awadi+Tower+Sharq+Kuwait"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[13px] text-[#64748B] dark:text-[#94A3B8] hover:text-[#1A56DB] dark:hover:text-white transition-colors duration-200 group"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="leading-snug">
                  Dar Al Awadi Tower, 2nd Floor<br />
                  Dar Al Awadi Mall, Sharq<br />
                  Kuwait
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Partners Section */}
        <div className="border-t border-[#E2EAF8] dark:border-white/10 pt-8 pb-10">
          <div className="flex flex-col gap-10">
            <h4 className={cn("text-[11px] font-black uppercase tracking-[0.4em] text-center text-[#0D1B2A]/40 dark:text-white/50")}>
              {t("footer.partners_label")}
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 transition-all duration-700">
              {techPartners.map((partner) => {
                const isBroadcom = partner === "Broadcom";
                const isBroadcomVariant = partner === "BroadcomCA" || partner === "BroadcomSymantec";
                const isHuawei = partner === "Huawei";
                return (
                  <div key={partner} className={cn(
                    "flex items-center justify-center group relative",
                    isBroadcom ? "h-28 px-1" : isBroadcomVariant ? "h-20 px-4" : isHuawei ? "h-20 px-4" : "h-14 px-4"
                  )}>
                    <div className={cn(
                      "relative transition-transform duration-500 group-hover:scale-110",
                      isBroadcom ? "h-24 w-72" : isBroadcomVariant ? "h-14 w-44" : isHuawei ? "h-16 w-52" : "h-12 w-36"
                    )}>
                      <img
                        src={
                          partner === "Hydrotek" ? "/images/Partners/Hydrotek.png" :
                          partner === "BroadcomCA" ? "/images/Partners/BroadcomCA.png" :
                          partner === "BroadcomSymantec" ? "/images/Partners/BroadcomSymantec.webp" :
                          partner === "Huawei" ? "/images/Partners/Huawei-Logo.png" :
                          `/images/Partners/${partner.toLowerCase().replace(/\s+/g, "-")}.png`
                        }
                        alt={partner}
                        className="h-full w-full object-contain"
                        style={partner === "Huawei" ? { mixBlendMode: 'multiply' } : undefined}
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          if (partner.toLowerCase().includes('broadcom')) {
                            img.src = '/images/Partners/broadcom.png';
                          } else {
                            img.style.display = 'none';
                            const p = img.parentElement;
                            if (p) p.innerHTML = `<span style="font-size:10px;font-weight:800;letter-spacing:0.1em;color:#0D1B2A">${partner.toUpperCase()}</span>`;
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className={cn("flex flex-col md:flex-row items-center justify-between border-t border-[#E2EAF8] dark:border-white/5 pt-6 gap-4", isRTL && "md:flex-row-reverse")}>
          <p className="text-[13px] text-[#64748B] dark:text-white/30 font-medium tracking-tight">
            {t("footer.copy")}
          </p>
          <div className={cn("flex items-center gap-10", isRTL && "flex-row-reverse")}>
            <Link href="/privacy" className="text-[13px] text-[#64748B] dark:text-white/30 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-[13px] text-[#64748B] dark:text-white/30 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">
              {t("footer.terms")}
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0D1B2A]/40 dark:text-white/40 hover:text-blue-600 transition-all group"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                <ArrowUpRight size={14} className="group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
