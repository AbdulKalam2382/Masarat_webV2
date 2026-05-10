"use client";

import { Link } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  const links = [
    { name: t("nav.solutions"), href: "/solutions" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.career"), href: "/career" },
    { name: t("nav.contact"), href: "/contact" },
    { name: t("footer.insights"), href: "/insights" },
  ];

  return (
    <footer className="relative bg-[#F8FAFC] dark:bg-[#0B1221] border-t-[0.5px] border-[#E5E5EA] dark:border-[#1E3150] py-32 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <div className="relative w-[480px] h-[220px]">
                <Image
                  src="/images/Masarat Logo.png"
                  alt="Masarat Technologies"
                  fill
                  sizes="480px"
                  className="object-contain object-left mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </Link>
            <p className="text-base text-[#6B6B6B] dark:text-[#A1A1A6] font-light max-w-xs leading-relaxed rtl:text-right">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] dark:text-[#A1A1A6] rtl:text-right">
              {t("footer.nav_label")}
            </span>
            <div className="grid grid-cols-2 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-brand-ink dark:text-[#F5F5F7] hover:text-blue-600 dark:hover:text-blue-400 transition-colors rtl:text-right"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] dark:text-[#A1A1A6] rtl:text-right">
              {t("footer.connect_label")}
            </span>
            <div className={cn("flex gap-5", isRTL ? "flex-row-reverse" : "flex-row")}>
              <a href="#" className="p-4 bg-white dark:bg-[#10192C] border border-[#E5E5EA] dark:border-[#1E3150] rounded-2xl text-brand-ink dark:text-white hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-blue-600/20 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-4 bg-white dark:bg-[#10192C] border border-[#E5E5EA] dark:border-[#1E3150] rounded-2xl text-brand-ink dark:text-white hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-blue-600/20 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://x.com/masaratkwt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E2EAF8] dark:border-white/10 flex items-center justify-center hover:bg-[#1A56DB] hover:border-[#1A56DB] hover:text-white transition-all duration-200 text-[#64748B] dark:text-[#94A3B8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[#6B6B6B] dark:text-[#A1A1A6] font-bold uppercase tracking-widest rtl:text-right">
                {t("footer.support_label")}
              </span>
              <a href="mailto:info@masaratkwt.com" className="text-lg font-bold text-brand-ink dark:text-[#F5F5F7] hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-outfit rtl:text-right">
                info@masaratkwt.com
              </a>
            </div>
          </div>

        </div>


        {/* Bottom Strip */}
        <div className={cn("flex flex-col md:flex-row items-center justify-between border-t-[0.5px] border-[#E5E5EA] dark:border-[#1E3150] pt-10 gap-6 relative z-10", isRTL && "md:flex-row-reverse")}>
          <div className={cn("flex gap-8", isRTL ? "flex-row-reverse" : "flex-row")}>
            <Link href="/privacy" className="text-xs text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-brand-ink dark:hover:text-[#F5F5F7] transition-colors font-medium">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-[#6B6B6B] dark:text-[#A1A1A6] hover:text-brand-ink dark:hover:text-[#F5F5F7] transition-colors font-medium">
              {t("footer.terms")}
            </Link>
          </div>
          <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1A6] font-medium rtl:text-right">
            {t("footer.copy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
