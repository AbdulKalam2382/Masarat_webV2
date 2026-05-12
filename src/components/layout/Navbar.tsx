"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, Target, GitMerge, Globe, Layers, Brain, Shield, Building2, Server } from "lucide-react";
import { cn } from "@/lib/utils";

type DropdownKey = "about" | "solutions" | "resources" | null;

export default function Navbar() {
  const { t, isRTL } = useLanguage();
  const pathname = usePathname();

  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey>(null);

  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const openDropdown = useCallback((key: DropdownKey) => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setActiveDropdown(key);
  }, []);

  const scheduleClose = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  }, []);

  const aboutLinks = [
    { label: t("nav.dropdowns.about.who_we_are.title"), href: "/about", icon: Users },
    { label: t("nav.dropdowns.about.delivery_model.title"), href: "/about#delivery", icon: GitMerge },
    { label: t("nav.dropdowns.about.vision_mission.title"), href: "/about#vision", icon: Target },
    { label: t("nav.dropdowns.about.tech_partners.title"), href: "/about#partners", icon: Globe },
  ];

  const solutionLinks = [
    { label: t("nav.dropdowns.solutions.enterprise.title"), href: "/solutions/digital-transformation", icon: Layers },
    { label: t("nav.dropdowns.solutions.ai_data.title"), href: "/solutions/ai-data", icon: Brain },
    { label: t("nav.dropdowns.solutions.cybersecurity.title"), href: "/solutions/cybersecurity", icon: Shield },
    { label: t("nav.dropdowns.solutions.elv.title"), href: "/solutions/elv-smart-systems", icon: Building2 },
    { label: t("nav.dropdowns.solutions.infrastructure.title"), href: "/solutions/mission-critical", icon: Server },
  ];

  const resourceLinks = [
    { label: t("nav.dropdowns.resources.knowledge.title"), href: "/insights" },
    { label: t("nav.dropdowns.resources.case_studies.title"), href: "/insights?filter=case-studies" },
    { label: t("nav.dropdowns.resources.downloads.title"), href: "/insights?filter=downloads" },
  ];

  const dropdownItems: Record<NonNullable<DropdownKey>, { label: string; href: string; icon?: React.ElementType }[]> = {
    about: aboutLinks,
    solutions: solutionLinks,
    resources: resourceLinks,
  };

  const navItemClass = cn(
    "text-sm font-semibold flex items-center gap-1 transition-colors duration-150 cursor-pointer select-none",
    "text-[#0D1B2A] hover:text-[#1A56DB]"
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "110px",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #E2EAF8",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={() => setActiveDropdown(null)}>
            <img
              src="/images/Masarat Logo.png"
              alt="Masarat Technologies"
              style={{
                height: "180px",
                width: "auto",
                objectFit: "contain",
                mixBlendMode: "multiply",
              }}
            />
          </Link>

          {/* Desktop nav — centered */}
          <div className={cn("hidden md:flex items-center gap-8 mr-auto", isRTL && "flex-row-reverse")}>
            {(["about", "solutions"] as NonNullable<DropdownKey>[]).map((key) => (
              <div
                key={key}
                className="relative h-full flex items-center"
                onMouseEnter={() => openDropdown(key)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={key === "about" ? "/about" : "/solutions"}
                  className={navItemClass}
                  onClick={() => setActiveDropdown(null)}
                >
                  {key === "about" ? t("nav.about") : t("nav.solutions")}
                  <ChevronDown
                    size={13}
                    className={cn("transition-transform duration-200", activeDropdown === key && "rotate-180")}
                  />
                </Link>

                {/* Dropdown anchored below this nav item */}
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-px rounded-xl overflow-hidden"
                      style={{
                        background: "rgba(255,255,255,0.97)",
                        backdropFilter: "blur(24px)",
                        border: "1px solid #E2EAF8",
                        boxShadow: "0 8px 40px rgba(13,27,42,0.08)",
                      }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="py-3 px-2">
                        <div className={cn(
                          "flex flex-col gap-1",
                          key === "about" && "min-w-[260px]",
                          key === "solutions" && "min-w-[380px]",
                        )}>
                          {dropdownItems[key].map((item) => {
                            const Icon = item.icon;
                            return Icon ? (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#EEF4FF] transition-colors duration-150 group"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#EEF4FF] border border-[#DBEAFE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A56DB] group-hover:border-[#1A56DB] transition-all duration-150">
                                  <Icon size={13} strokeWidth={2} className="text-[#1A56DB] group-hover:text-white transition-colors duration-150" />
                                </div>
                                <span className="text-[12px] font-semibold text-[#0D1B2A] group-hover:text-[#1A56DB] transition-colors duration-150 leading-tight whitespace-nowrap">
                                  {item.label}
                                </span>
                              </Link>
                            ) : (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  "text-[13px] font-semibold text-[#0D1B2A] px-4 py-[10px] rounded-lg",
                                  "border-l-2 border-transparent",
                                  "hover:text-[#1A56DB] hover:border-l-[#1A56DB] hover:bg-[rgba(26,86,219,0.04)]",
                                  "transition-all duration-150"
                                )}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/career" className={navItemClass} onClick={() => setActiveDropdown(null)}>
              {t("nav.career")}
            </Link>

            <Link href="/contact" className={navItemClass} onClick={() => setActiveDropdown(null)}>
              {t("nav.contact")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-lg transition-colors text-[#0D1B2A]"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0D1B2A] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-14 border-b border-white/10 flex-shrink-0">
              <div className="relative w-[130px] h-[44px]">
                <img
                  src="/images/Masarat Logo.png"
                  alt="Masarat"
                  className="w-full h-full object-contain object-left brightness-200"
                />
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
              {(["about", "solutions"] as NonNullable<DropdownKey>[]).map((key) => (
                <div key={key}>
                  <button
                    onClick={() => setMobileAccordion(mobileAccordion === key ? null : key)}
                    className={cn(
                      "w-full flex items-center justify-between py-4 text-base font-semibold text-white border-b border-white/10",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    {key === "about"
                      ? t("nav.about")
                      : key === "solutions"
                        ? t("nav.solutions")
                        : t("nav.resources")}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform duration-200 text-white/50",
                        mobileAccordion === key && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className={cn("pl-4 pb-2 space-y-1", isRTL && "pl-0 pr-4")}>
                          {dropdownItems[key].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-3 text-sm font-medium text-white/70 hover:text-white border-b border-white/5 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/career"
                onClick={() => setMobileOpen(false)}
                className="flex items-center py-4 text-base font-semibold text-white border-b border-white/10"
              >
                {t("nav.career")}
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center py-4 px-6 text-base font-semibold text-white border-b border-white/10"
            >
              {t("nav.contact")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
