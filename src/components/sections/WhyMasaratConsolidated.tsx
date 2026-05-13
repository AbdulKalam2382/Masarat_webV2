"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function WhyMasaratConsolidated() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { 
      num: "Elite", 
      label: isRTL ? "سجل حافل بالتميز" : "Track Record of Excellence", 
      desc: isRTL ? "قدرة مثبتة على التنفيذ عبر القطاعات المؤسسية الحيوية." : "Proven delivery capability across critical institutional sectors." 
    },
    { 
      num: "5", 
      label: isRTL ? "قدرات متكاملة" : "Integrated Capabilities",      
      desc: isRTL ? "شريك واحد يغطي كامل مجموعة تقنيات المؤسسات." : "One partner covering the full enterprise technology stack." 
    },
    { 
      num: "Tier III", 
      label: isRTL ? "تسليم معتمد" : "Certified Delivery",       
      desc: isRTL ? "مشاريع مراكز البيانات المسلمة وفقاً للمعايير الدولية." : "Data center projects delivered to international standards." 
    },
    { 
      num: "1", 
      label: isRTL ? "نقطة للمسؤولية" : "Point of Accountability",      
      desc: isRTL ? "شريك واحد من التصميم حتى العمليات طويلة الأجل." : "Single partner from design through to long-term operations." 
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background with high-end gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }} />
      
      {/* Decorative Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute" style={{ top: '-20%', left: '-10%', width: '60%', height: '140%', background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)', transform: 'rotate(-15deg)' }} />
        <div className="absolute" style={{ top: '-30%', right: '-5%', width: '50%', height: '130%', background: 'linear-gradient(225deg, rgba(26,86,219,0.15) 0%, transparent 60%)', transform: 'rotate(10deg)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <p className="text-[12px] font-bold tracking-[0.4em] uppercase text-white/50 mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-white/20 rounded-full" />
            {isRTL ? "لماذا مسارات" : "Why Masarat"}
            <span className="w-8 h-[1px] bg-white/20 rounded-full" />
          </p>
          
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8",
            isRTL ? "font-cairo" : "font-outfit"
          )} style={{ letterSpacing: '-0.03em' }}>
            {isRTL ? "التقنية تخلق القدرة." : "Technology creates capability."}<br />
            <span className="font-light text-white/50">{isRTL ? "والثقة تخلق المرونة." : "Trust creates resilience."}</span>
          </h2>

          <p className="text-[17px] md:text-[19px] text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            {isRTL 
              ? "مع أساس مبني على الخبرة الاستراتيجية، تعمل مسارات عند تقاطع تكنولوجيا المؤسسات والثقة المؤسسية - لتحقيق نتائج مهمة في أكثر البيئات تطلباً."
              : "With a foundation built on strategic expertise, Masarat operates at the intersection of enterprise technology and institutional trust — delivering outcomes that matter in the most demanding environments."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/[0.02]">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 text-center border-white/10 border-b lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 hover:bg-white/[0.05] transition-all duration-500 group"
            >
              <div className="text-4xl font-bold text-white tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-500" style={{ letterSpacing: '-0.04em' }}>
                {stat.num}
              </div>
              <div className="text-[11px] font-black tracking-[0.2em] uppercase text-white/40 mb-4 group-hover:text-blue-400 transition-colors">
                {stat.label}
              </div>
              <div className="text-[13px] text-white/30 leading-relaxed font-medium">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
