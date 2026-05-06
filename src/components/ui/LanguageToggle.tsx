"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-brand-surface dark:bg-white/5 border border-brand-border dark:border-white/10 rounded-full p-1 transition-colors duration-500">
      <button 
        onClick={() => setLanguage('en')}
        className={cn(
          "px-4 py-1.5 text-[10px] font-black rounded-full transition-all uppercase tracking-widest",
          language === 'en' 
            ? "bg-white dark:bg-brand-blue text-brand-navy dark:text-white shadow-sm" 
            : "text-brand-muted dark:text-white/40 hover:text-brand-navy dark:hover:text-white"
        )}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('ar')}
        className={cn(
          "px-4 py-1.5 text-[10px] font-black rounded-full transition-all uppercase tracking-widest",
          language === 'ar' 
            ? "bg-white dark:bg-brand-blue text-brand-navy dark:text-white shadow-sm" 
            : "text-brand-muted dark:text-white/40 hover:text-brand-navy dark:hover:text-white"
        )}
      >
        عربي
      </button>
    </div>
  );
}
