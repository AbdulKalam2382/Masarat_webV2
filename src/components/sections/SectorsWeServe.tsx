"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { Landmark, Banknote, Flame, Building2 } from 'lucide-react';

const sectors = [
  {
    icon: Landmark,
    titleEN: "Government & Public Sector",
    titleAR: "الحكومة والقطاع العام",
    p1EN: "We partner with government ministries and public agencies to deliver digital transformation initiatives that modernize service delivery and improve operational efficiency.",
    p1AR: "نتشارك مع وزارات الحكومة والجهات العامة لتقديم مبادرات التحول الرقمي التي تُحدّث تقديم الخدمات وتُحسّن الكفاءة التشغيلية.",
    p2EN: "From enterprise resource planning to citizen service portals, we help government entities modernize their operational backbone with scalable, secure platforms.",
    p2AR: "من تخطيط موارد المؤسسات إلى بوابات خدمات المواطنين، نساعد الجهات الحكومية على تحديث بنيتها التشغيلية بمنصات آمنة وقابلة للتوسع.",
    p3EN: "Our work supports strategic institutional visions by enabling data-driven governance and digital-first public service delivery across ministries and agencies.",
    p3AR: "يدعم عملنا الرؤى الاستراتيجية والتحول الرقمي من خلال تمكين الحوكمة القائمة على البيانات وتقديم الخدمات العامة بنهج رقمي عبر الوزارات والجهات الحكومية.",
  },
  {
    icon: Banknote,
    titleEN: "Banking & Financial Services",
    titleAR: "الخدمات المصرفية والمالية",
    p1EN: "Leading financial institutions demand the highest standards of security, availability, and compliance. We deliver purpose-built solutions that meet these requirements without compromise.",
    p1AR: "تتطلب المؤسسات المالية الرائدة أعلى معايير الأمان والتوافر والامتثال. نقدم حلولاً مصممة خصيصاً لتلبية هذه المتطلبات دون تنازل.",
    p2EN: "We deliver robust cybersecurity frameworks, compliance-aligned platforms, and AI-powered risk analytics purpose-built for regional financial institutions.",
    p2AR: "نقدم أطر أمن سيبراني متينة ومنصات متوافقة مع الامتثال وتحليلات مخاطر مدعومة بالذكاء الاصطناعي مصممة للمؤسسات المالية الكبرى.",
    p3EN: "Our mission-critical infrastructure ensures continuous availability for banking operations, with Tier III aligned environments and zero-downtime upgrade pathways.",
    p3AR: "تضمن بنيتنا التحتية الحيوية الاستمرارية الكاملة للعمليات المصرفية، مع بيئات متوافقة مع المستوى الثالث ومسارات ترقية بدون توقف.",
  },
  {
    icon: Flame,
    titleEN: "Oil, Gas & Energy",
    titleAR: "النفط والغاز والطاقة",
    p1EN: "The energy sector requires resilient, highly available infrastructure that can withstand operational demands while meeting stringent security and compliance obligations.",
    p1AR: "يتطلب قطاع الطاقة بنية تحتية متينة وعالية التوافر قادرة على تحمل المتطلبات التشغيلية مع الوفاء بالتزامات الأمن والامتثال الصارمة.",
    p2EN: "We integrate OT security monitoring and industrial control system protection to safeguard critical energy assets against advanced cyber threats.",
    p2AR: "ندمج مراقبة أمن التقنيات التشغيلية وحماية أنظمة التحكم الصناعي لحماية أصول الطاقة الحيوية من التهديدات الإلكترونية المتقدمة.",
    p3EN: "Smart infrastructure solutions — from BMS integration to SCADA-connected ELV systems — support operational continuity across upstream and downstream facilities.",
    p3AR: "تدعم حلول البنية التحتية الذكية — من تكامل أنظمة BMS إلى أنظمة ELV المتصلة بـ SCADA — استمرارية العمليات عبر منشآت المنبع والمصب.",
  },
  {
    icon: Building2,
    titleEN: "Real Estate & Hospitality",
    titleAR: "العقارات والضيافة",
    p1EN: "The growing real estate and hospitality sector demands intelligent, connected building environments that deliver exceptional experiences while optimizing operational costs.",
    p1AR: "يتطلب قطاع العقارات والضيافة المتنامي بيئات مبانٍ ذكية ومتصلة تقدم تجارب استثنائية مع تحسين التكاليف التشغيلية.",
    p2EN: "Intelligent building management systems, integrated ELV, and fire & life safety solutions transform commercial and hospitality properties into seamlessly connected environments.",
    p2AR: "تحوّل أنظمة إدارة المباني الذكية وأنظمة ELV المتكاملة وحلول الحماية من الحرائق والسلامة العقارات التجارية والضيافة إلى بيئات متصلة بسلاسة.",
    p3EN: "Our smart building frameworks reduce operational costs, enhance guest experiences, and meet the growing demand for sustainable, connected real estate.",
    p3AR: "تقلل أطر المباني الذكية لدينا التكاليف التشغيلية وتعزز تجارب الضيوف وتلبي الطلب المتزايد على العقارات المستدامة والمتصلة.",
  },
];

export default function SectorsWeServe() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      data-section-name={t("sectors.kicker")}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)" }}
    >
      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute" style={{ top: "-20%", left: "-10%", width: "60%", height: "140%", background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)", transform: "rotate(-15deg)" }} />
        <div className="absolute" style={{ top: "-30%", right: "-5%", width: "50%", height: "130%", background: "linear-gradient(225deg, rgba(26,86,219,0.12) 0%, transparent 60%)", transform: "rotate(10deg)" }} />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mb-16", isRTL ? "text-right" : "text-left")}
        >
          <span className={cn("section-kicker text-brand-blue mb-4", isRTL ? "flex-row-reverse" : "")}>
            {t("sectors.kicker")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-outfit mt-4">
            {t("sectors.title")}
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-2xl mt-6">
            {t("sectors.desc")}
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "p-8 rounded-2xl border border-white/10 hover:border-brand-blue/40 transition-all duration-300",
                  isRTL ? "text-right" : "text-left"
                )}
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(26,86,219,0.15)' }}
                >
                  <Icon size={20} className="text-brand-blue" />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-5 font-outfit">
                  {isRTL ? sector.titleAR : sector.titleEN}
                </h3>

                <p className="text-[16px] text-white/60 font-light leading-relaxed mb-3">
                  {isRTL ? sector.p1AR : sector.p1EN}
                </p>
                <p className="text-[16px] text-white/60 font-light leading-relaxed mb-3">
                  {isRTL ? sector.p2AR : sector.p2EN}
                </p>
                <p className="text-[16px] text-white/60 font-light leading-relaxed">
                  {isRTL ? sector.p3AR : sector.p3EN}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
