"use client";

import React from "react";
import { motion } from "framer-motion";
import BentoCard from "@/components/ui/BentoCard";
import { useLanguage } from "@/lib/LanguageContext";
import {
  LayoutDashboard,
  Brain,
  Shield,
  Server,
  Database,
} from "lucide-react";

export default function Services() {
  const { t, isRTL } = useLanguage();

  const servicesData = [
    {
      tag: isRTL ? "ذكاء" : "Intelligence",
      title: t("solutions.s2title"),
      description: t("solutions.s2desc"),
      number: "01",
      variant: "dark" as const,
      className: "col-span-12 lg:col-span-8 lg:row-span-2 min-h-[520px]",
      href: "/solutions/ai-data",
      icon: <Brain size={24} />,
    },
    {
      tag: isRTL ? "أمن" : "Security",
      title: t("solutions.s3title"),
      description: t("solutions.s3desc"),
      number: "02",
      variant: "blue" as const,
      className: "col-span-12 lg:col-span-4 min-h-[250px]",
      href: "/solutions/cybersecurity",
      icon: <Shield size={24} />,
    },
    {
      tag: isRTL ? "أنظمة ذكية" : "Smart Systems",
      title: t("solutions.s4title"),
      description: t("solutions.s4desc"),
      number: "03",
      variant: "gold" as const,
      className: "col-span-12 lg:col-span-4 min-h-[250px]",
      href: "/solutions/elv-smart-systems",
      icon: <Server size={24} />,
    },
    {
      tag: isRTL ? "حيوي" : "Mission-Critical",
      title: t("solutions.s5title"),
      description: t("solutions.s5desc"),
      number: "04",
      variant: "offwhite" as const,
      className: "col-span-12 lg:col-span-4 min-h-[250px]",
      href: "/solutions/mission-critical",
      icon: <Database size={24} />,
    },
    {
      tag: isRTL ? "مؤسسي" : "Enterprise",
      title: t("solutions.s1title"),
      description: t("solutions.s1desc"),
      number: "05",
      variant: "outline" as const,
      className: "col-span-12 lg:col-span-8 min-h-[250px]",
      href: "/solutions/digital-transformation",
      icon: <LayoutDashboard size={24} />,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-white dark:bg-[#0B1221] overflow-hidden transition-colors duration-500"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] translate-y-1/2" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-12 gap-6 md:gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {servicesData.map((service, i) => {
            const { className, ...rest } = service;
            return (
              <motion.div
                key={i}
                className={className}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                }}
              >
                <BentoCard {...rest} className="h-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
