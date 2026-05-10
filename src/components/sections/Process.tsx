"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/LanguageContext";
import { CheckCircle, Shield, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const calloutRef = useRef<HTMLDivElement>(null);
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("process.p1t"),
      desc: t("process.p1d")
    },
    {
      num: "02",
      title: t("process.p2t"),
      desc: t("process.p2d")
    },
    {
      num: "03",
      title: t("process.p3t"),
      desc: t("process.p3d")
    },
    {
      num: "04",
      title: t("process.p4t"),
      desc: t("process.p4d")
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance for steps
      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Animated connecting line reveal
      gsap.from(".process-line", {
        scaleX: 0,
        transformOrigin: isRTL ? "right center" : "left center",
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      if (calloutRef.current) {
        gsap.from(calloutRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: calloutRef.current,
            start: "top 85%",
          }
        });
      }
    });

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section className="py-24 bg-white dark:bg-[#0B1221] overflow-hidden transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-6" ref={containerRef}>
        <div className="mb-16 relative">
          <span className="text-[14px] uppercase tracking-[0.2em] font-bold text-blue-600 mb-5 block rtl:text-right">
            {t("process.kicker")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-outfit rtl:text-right text-brand-ink dark:text-[#F5F5F7]">
            {t("process.title")}
          </h2>
          {/* Animated Connecting Line */}
          <div className="absolute bottom-[-64px] left-0 w-full h-[1px] bg-blue-600/20 hidden lg:block overflow-hidden">
            <div className="process-line w-full h-full bg-blue-600" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-[1px] border-[#E5E5EA] dark:border-[#1E3150]">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { if (el) stepsRef.current[i] = el; }}
              className={`p-8 md:p-12 flex flex-col gap-8 transition-colors group hover:bg-[#F8FAFC] dark:hover:bg-[#10192C] ${
                i !== steps.length - 1 ? (isRTL ? "lg:border-l-[1px]" : "lg:border-r-[1px]") : ""
              } border-[#E5E5EA] dark:border-[#1E3150] border-b-[1px] lg:border-b-0`}
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-blue-600 font-outfit rtl:text-right">
                  {step.num}
                </span>
                <div className={`w-8 h-[2px] bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${isRTL ? "self-end origin-right" : "origin-left"}`} />
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold tracking-tight font-outfit rtl:text-right text-brand-ink dark:text-[#F5F5F7]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-[#8E8E93] leading-relaxed font-light rtl:text-right">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded deployment callout */}
        <div ref={calloutRef} className="mt-12 p-8 rounded-2xl bg-[#1B3A6B] border border-[#1E4080] shadow-xl shadow-brand-blue/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                <CheckCircle size={16} className="text-[#2563EB]" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">
                {t("process.callouts.c1t")}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                {t("process.callouts.c1d")}
              </p>
            </div>

            <div>
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                <Shield size={16} className="text-[#2563EB]" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">
                {t("process.callouts.c2t")}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                {t("process.callouts.c2d")}
              </p>
            </div>

            <div>
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center mb-4">
                <Activity size={16} className="text-[#2563EB]" />
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">
                {t("process.callouts.c3t")}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                {t("process.callouts.c3d")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
