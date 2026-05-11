"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useTheme } from "next-themes";

type DropdownKey = "about" | "solutions" | "resources" | null;

export default function Navbar() {
  const { t, isRTL } = useLanguage();
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

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
    { label: t("nav.dropdowns.about.who_we_are.title"), href: "/about" },
    { label: t("nav.dropdowns.about.delivery_model.title"), href: "/about#delivery" },
    { label: t("nav.dropdowns.about.vision_mission.title"), href: "/about#vision" },
    { label: t("nav.dropdowns.about.tech_partners.title"), href: "/about#partners" },
  ];

  const solutionLinks = [
    { label: t("nav.dropdowns.solutions.enterprise.title"), href: "/solutions/digital-transformation" },
    { label: t("nav.dropdowns.solutions.ai_data.title"), href: "/solutions/ai-data" },
    { label: t("nav.dropdowns.solutions.cybersecurity.title"), href: "/solutions/cybersecurity" },
    { label: t("nav.dropdowns.solutions.elv.title"), href: "/solutions/elv-smart-systems" },
    { label: t("nav.dropdowns.solutions.infrastructure.title"), href: "/solutions/mission-critical" },
  ];

  const resourceLinks = [
    { label: t("nav.dropdowns.resources.knowledge.title"), href: "/insights" },
    { label: t("nav.dropdowns.resources.case_studies.title"), href: "/insights?filter=case-studies" },
    { label: t("nav.dropdowns.resources.downloads.title"), href: "/insights?filter=downloads" },
  ];

  const dropdownItems: Record<NonNullable<DropdownKey>, { label: string; href: string }[]> = {
    about: aboutLinks,
    solutions: solutionLinks,
    resources: resourceLinks,
  };

  const navItemClass = cn(
    "text-sm font-semibold flex items-center gap-1 transition-colors duration-150 cursor-pointer select-none",
    isDark
      ? "text-white hover:text-[#3B82F6]"
      : "text-[#0D1B2A] hover:text-[#1A56DB]"
  );

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: "90px",
          background: isDark ? "rgba(13,27,42,0.97)" : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E2EAF8",
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
                mixBlendMode: isDark ? "normal" : "multiply",
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className={cn("hidden md:flex items-center gap-8", isRTL && "flex-row-reverse")}>
            {(["about", "solutions", "resources"] as NonNullable<DropdownKey>[]).map((key) => (
              <div
                key={key}
                className="relative h-full flex items-center"
                onMouseEnter={() => openDropdown(key)}
                onMouseLeave={scheduleClose}
              >
                <button className={navItemClass}>
                  {key === "about"
                    ? t("nav.about")
                    : key === "solutions"
                      ? t("nav.solutions")
                      : t("nav.resources")}
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      activeDropdown === key && "rotate-180"
                    )}
                  />
                </button>
              </div>
            ))}

            <Link
              href="/career"
              className={navItemClass}
              onClick={() => setActiveDropdown(null)}
            >
              {t("nav.career")}
            </Link>

            <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              {/* <LanguageToggle /> */}
              <ThemeToggle />
              <Link
                href="/contact"
                onClick={() => setActiveDropdown(null)}
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-150 bg-[#1A56DB] text-white hover:bg-[#2563EB]"
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className={cn(
                "p-2 rounded-lg transition-colors",
                isDark ? "text-white" : "text-[#0D1B2A]"
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Desktop dropdown panel — full width below navbar */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              key={activeDropdown}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full hidden md:block"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid #E2EAF8",
                boxShadow: "0 8px 40px rgba(13,27,42,0.08)",
              }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className="max-w-7xl mx-auto px-6 py-5">
                <div
                  className={cn(
                    "grid gap-1",
                    activeDropdown === "about" && "grid-cols-2 max-w-sm",
                    activeDropdown === "solutions" && "grid-cols-1 max-w-xs",
                    activeDropdown === "resources" && "grid-cols-1 max-w-xs"
                  )}
                >
                  {dropdownItems[activeDropdown].map((item) => (
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
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              {(["about", "solutions", "resources"] as NonNullable<DropdownKey>[]).map((key) => (
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

            <div className="px-6 pb-10 pt-4 space-y-3 flex-shrink-0">
              {/* <LanguageToggle /> */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 bg-[#1A56DB] text-white text-center text-sm font-semibold rounded-lg"
              >
                {t("nav.cta")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
