"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  X, Menu, ChevronDown, 
  Users, Eye, Rocket, Globe,
  LayoutDashboard, Brain, Shield, Building2, Database,
  BookOpen, Briefcase, Download, 
} from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { t, isRTL } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const isHomepage = pathname === "/" || pathname === "";
  const isAtTop = !isScrolled;
  const isOverDark = isHomepage && isAtTop && isDark;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    {
      id: "about",
      name: t("nav.about"),
      href: "/about",
      dropdown: [
        { title: t("nav.dropdowns.about.who_we_are.title"), brief: t("nav.dropdowns.about.who_we_are.brief"), href: "/about", icon: Users },
        { title: t("nav.dropdowns.about.vision_mission.title"), brief: t("nav.dropdowns.about.vision_mission.brief"), href: "/about#vision", icon: Eye },
        { title: t("nav.dropdowns.about.delivery_model.title"), brief: t("nav.dropdowns.about.delivery_model.brief"), href: "/about#process", icon: Rocket },
        { title: t("nav.dropdowns.about.tech_partners.title"), brief: t("nav.dropdowns.about.tech_partners.brief"), href: "/about#partners", icon: Globe },
      ]
    },
    {
      id: "solutions",
      name: t("nav.solutions"),
      href: "/solutions",
      dropdown: [
        { title: t("nav.dropdowns.solutions.ai_data.title"), brief: t("nav.dropdowns.solutions.ai_data.brief"), href: "/solutions/ai-data", icon: Brain },
        { title: t("nav.dropdowns.solutions.cybersecurity.title"), brief: t("nav.dropdowns.solutions.cybersecurity.brief"), href: "/solutions/cybersecurity", icon: Shield },
        { title: t("nav.dropdowns.solutions.elv.title"), brief: t("nav.dropdowns.solutions.elv.brief"), href: "/solutions/elv-smart-systems", icon: Building2 },
        { title: t("nav.dropdowns.solutions.infrastructure.title"), brief: t("nav.dropdowns.solutions.infrastructure.brief"), href: "/solutions/mission-critical", icon: Database },
        { title: t("nav.dropdowns.solutions.enterprise.title"), brief: t("nav.dropdowns.solutions.enterprise.brief"), href: "/solutions/digital-transformation", icon: LayoutDashboard },
      ]
    },
    {
      id: "resources",
      name: t("nav.resources"),
      href: "/insights",
      dropdown: [
        { title: t("nav.dropdowns.resources.knowledge.title"), brief: t("nav.dropdowns.resources.knowledge.brief"), href: "/insights", icon: BookOpen },
        { title: t("nav.dropdowns.resources.case_studies.title"), brief: t("nav.dropdowns.resources.case_studies.brief"), href: "/insights#cases", icon: Briefcase },
        { title: t("nav.dropdowns.resources.downloads.title"), brief: t("nav.dropdowns.resources.downloads.brief"), href: "/downloads", icon: Download },
      ]
    },
    {
      id: "career",
      name: t("nav.career"),
      href: "/career"
    }
  ];

  const linkColor = (isActive: boolean) => {
    if (isOverDark) return isActive ? "text-white" : "text-white/80 hover:text-white";
    if (isActive) return "text-[#1A56DB] dark:text-[#3B82F6]";
    return "text-[#0D1B2A] dark:text-[#F5F5F7] hover:text-[#1A56DB] dark:hover:text-[#3B82F6]";
  };

  const ctaStyle = isOverDark
    ? "bg-white text-[#0D1B2A] hover:bg-brand-surface"
    : "bg-brand-blue text-white hover:bg-brand-navy shadow-lg shadow-brand-blue/20";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full",
          isScrolled
            ? "bg-white/95 dark:bg-brand-navy/95 backdrop-blur-xl border-b-[0.5px] border-brand-border dark:border-white/10 h-[72px] md:h-[88px]"
            : "bg-transparent h-[88px] md:h-[110px]"
        )}
      >
        <div className="container max-w-7xl px-6 flex items-center justify-between h-full w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 z-10">
            {isOverDark ? (
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-transparent">
                  <img
                    src="/images/Masarat Logo.png"
                    
                    className="w-full h-full object-cover scale-[2.2] translate-y-[-10%]"
                  />
                </div>
                <span className="text-white font-bold text-2xl tracking-tighter">
                
                </span>
              </div>
            ) : (
              <div className="relative w-[180px] h-[60px]">
                <img
                  src="/images/Masarat Logo.png"
                  alt="Masarat Technologies"
                  className="w-full h-full object-contain object-left mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className={cn("flex items-center gap-8", isRTL && "flex-row-reverse")}>
              {navItems.map((item) => (
                <div 
                  key={item.id}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-[15px] font-semibold transition-all duration-300 py-4 hover:opacity-80",
                      linkColor(pathname.includes(item.href))
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === item.id && "rotate-180")} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                          "absolute top-[100%] left-1/2 -translate-x-1/2 w-[320px] bg-white dark:bg-brand-navy rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl p-3 backdrop-blur-xl",
                          isRTL && "text-right"
                        )}
                      >
                        <div className="flex flex-col gap-1">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.href}
                              href={subItem.href}
                              className="group block p-3 rounded-xl hover:bg-brand-surface dark:hover:bg-white/5 transition-all duration-200"
                            >
                              <div className="text-[13px] font-bold text-brand-navy dark:text-white tracking-tight group-hover:text-brand-blue transition-colors">
                                {subItem.title}
                              </div>
                              <div className="text-[11px] text-brand-muted dark:text-white/40 mt-0.5 leading-relaxed font-medium">
                                {subItem.brief}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
              <LanguageToggle />
              <ThemeToggle />
              <Link
                href="/contact"
                className={cn(
                  "px-7 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95",
                  ctaStyle
                )}
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "p-2 rounded-xl transition-colors z-[101]",
                isOverDark 
                  ? "text-white hover:bg-white/10" 
                  : isDark 
                    ? "text-white hover:bg-white/5" 
                    : "text-brand-navy hover:bg-[#0D1B2A]/5"
              )}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: isRTL ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={cn(
              "fixed inset-0 z-[1001] lg:hidden bg-white dark:bg-brand-navy flex flex-col h-[100dvh]",
              isRTL ? "right-0" : "left-0"
            )}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 flex items-center justify-between border-b border-black/5 dark:border-white/10 flex-shrink-0">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-[140px] h-[48px]">
                    <img
                      src="/images/Masarat Logo.png"
                      alt="Masarat"
                      className="w-full h-full object-contain object-left dark:brightness-200"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-navy dark:text-white hover:bg-[#0D1B2A]/5 dark:hover:bg-white/5 rounded-xl transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8 pb-32">
                {navItems.map((item) => (
                  <div key={item.id} className="space-y-5">
                    {item.dropdown ? (
                      <>
                        <div className={cn(
                          "text-[11px] font-black uppercase tracking-[0.3em] text-brand-blue",
                          isRTL && "text-right"
                        )}>
                          {item.name}
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "block p-5 bg-brand-surface dark:bg-white/5 rounded-[1.5rem] border border-black/5 dark:border-white/5 active:scale-[0.98] transition-transform",
                                isRTL && "text-right"
                              )}
                            >
                              <div className="space-y-1">
                                <div className="text-[15px] font-bold text-brand-navy dark:text-white">
                                  {subItem.title}
                                </div>
                                <div className="text-[12px] text-brand-muted dark:text-white/40 leading-relaxed font-medium">
                                  {subItem.brief}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block text-[11px] font-black uppercase tracking-[0.3em] text-brand-blue",
                          isRTL && "text-right"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className={cn(
                "p-8 border-t border-black/5 dark:border-white/10 flex items-center justify-between bg-white/80 dark:bg-brand-navy/80 backdrop-blur-md sticky bottom-0 left-0 right-0",
                isRTL && "flex-row-reverse"
              )}>
                <LanguageToggle />
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-10 py-4 bg-brand-blue text-white rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-brand-blue/20"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
