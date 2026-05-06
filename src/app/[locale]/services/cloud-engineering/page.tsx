"use client";

import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { Zap, Server, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CloudEngineeringPage() {
  const { isRTL } = useLanguage();

  return (
    <ServiceDetailTemplate
      name={isRTL ? "هندسة السحابة" : "Cloud Engineering"}
      category={isRTL ? "البنية التحتية والعمليات" : "Infrastructure & DevOps"}
      description={isRTL 
        ? "استراتيجية سحابية هجينة مبنية للعمليات المؤسسية التي لا تحتمل التوقف وأحمال العمل عالية التوفر." 
        : "Hybrid cloud strategy built for zero-downtime enterprise operations and high-availability workloads."}
      deliverables={isRTL ? [
        "استراتيجية السحابة الهجينة",
        "الهجرة السحابية",
        "التعافي من الكوارث (DR)",
        "الافتراضية المؤسسية",
        "تحسين تكلفة السحابة",
        "إدارة السحابة المتعددة"
      ] : [
        "Hybrid Cloud Strategy",
        "Cloud Migration",
        "Disaster Recovery (DR)",
        "Enterprise Virtualization",
        "Cloud Cost Optimization",
        "Multi-Cloud Management"
      ]}
      steps={isRTL ? [
        { title: "التقييم", description: "تقييم الجاهزية السحابية وتدقيق البنية التحتية." },
        { title: "المخطط", description: "مخطط هيكلي مفصل للسحابة الهجينة أو المتعددة." },
        { title: "الهجرة", description: "هجرة مرحلية ونشر عالي التوفر." },
        { title: "التحسين", description: "تحسين مستمر للتكلفة وإدارة الأداء." }
      ] : [
        { title: "Assess", description: "Cloud readiness assessment and infrastructure audit." },
        { title: "Blueprint", description: "Detailed architecture blueprint for hybrid or multi-cloud." },
        { title: "Migrate", description: "Staged migration and high-availability deployment." },
        { title: "Optimize", description: "Ongoing cost optimization and performance management." }
      ]}
      differentiators={isRTL ? [
        {
          title: "هجرة بدون توقف",
          description: "أدوات وعمليات متخصصة للانتقال السلس.",
          icon: <Zap size={20} />
        },
        {
          title: "الهجين أولاً",
          description: "الربط بين أمن الأجهزة المحلية ونطاق السحابة العامة.",
          icon: <Server size={20} />
        },
        {
          title: "وصول عالمي",
          description: "خبرة في إدارة بيئات السحاب المتعددة الموزعة.",
          icon: <Globe size={20} />
        }
      ] : [
        {
          title: "Zero-Downtime Migration",
          description: "Specialized tools and processes for seamless transitions.",
          icon: <Zap size={20} />
        },
        {
          title: "Hybrid First",
          description: "Bridging on-premise security with public cloud scale.",
          icon: <Server size={20} />
        },
        {
          title: "Global Reach",
          description: "Expertise in managing distributed multi-cloud environments.",
          icon: <Globe size={20} />
        }
      ]}
    />
  );
}
