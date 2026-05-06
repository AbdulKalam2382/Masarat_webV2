"use client";

import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { MessageSquare, Database, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AISolutionsPage() {
  const { isRTL } = useLanguage();

  return (
    <ServiceDetailTemplate
      name={isRTL ? "الذكاء الاصطناعي وتعلم الآلة" : "AI & Machine Learning"}
      category={isRTL ? "الذكاء الاصطناعي" : "Artificial Intelligence"}
      description={isRTL 
        ? "دورة حياة كاملة لتحويل الذكاء الاصطناعي على المستوى المؤسسي، من النماذج اللغوية الكبيرة المخصصة إلى معالجة المستندات العربية." 
        : "Complete AI transformation lifecycle for institutional scale, from custom LLMs to localized Arabic document intelligence."}
      deliverables={isRTL ? [
        "تدقيق الجاهزية للذكاء الاصطناعي",
        "مساعد ذكاء اصطناعي مخصص (Copilot)",
        "ذكاء المستندات العربية",
        "نشر عمليات الذكاء الاصطناعي (MLOps)",
        "هندسة خطوط البيانات",
        "مسؤول ذكاء اصطناعي جزئي (FAIO)"
      ] : [
        "AI Readiness Audits",
        "Custom AI Copilots",
        "Arabic Document Intelligence",
        "MLOps Deployment",
        "Data Pipeline Engineering",
        "Fractional AI Officer (FAIO)"
      ]}
      steps={isRTL ? [
        { title: "التقييم", description: "تدقيق البيانات وتقييم الجاهزية للذكاء الاصطناعي." },
        { title: "التحديد", description: "تحديد حالات الاستخدام عالية التأثير ورسم خرائط العائد على الاستثمار." },
        { title: "التطوير", description: "تطوير نماذج مخصصة وتدريبها على بيانات الملكية." },
        { title: "النشر", description: "نشر الإنتاج مع إدارة العمليات ودورة الحياة." }
      ] : [
        { title: "Assess", description: "Data audit and AI readiness assessment." },
        { title: "Define", description: "High-impact use case definition and ROI mapping." },
        { title: "Develop", description: "Custom model development and training on proprietary data." },
        { title: "Deploy", description: "Production deployment with MLOps and lifecycle management." }
      ]}
      differentiators={isRTL ? [
        {
          title: "إتقان العربية",
          description: "نماذج متخصصة محسنة للهجة العربية الخليجية.",
          icon: <MessageSquare size={20} />
        },
        {
          title: "الخصوصية أولاً",
          description: "حلول ذكاء اصطناعي مستضافة ذاتياً تبقي بياناتك داخل المؤسسة.",
          icon: <Database size={20} />
        },
        {
          title: "نطاق مؤسسي",
          description: "هندسة ذكاء اصطناعي تعمل لآلاف المستخدمين عبر الأقسام.",
          icon: <Cpu size={20} />
        }
      ] : [
        {
          title: "Arabic Mastery",
          description: "Specialized models optimized for the Gulf Arabic dialect.",
          icon: <MessageSquare size={20} />
        },
        {
          title: "Privacy First",
          description: "Self-hosted AI solutions that keep your data on-premise.",
          icon: <Database size={20} />
        },
        {
          title: "Institutional Scale",
          description: "Architecting AI that works for thousands of users across departments.",
          icon: <Cpu size={20} />
        }
      ]}
    />
  );
}
