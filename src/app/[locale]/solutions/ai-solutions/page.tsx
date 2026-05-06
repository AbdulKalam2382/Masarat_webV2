"use client";

import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import { MessageSquare, Database, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AISolutionsPage() {
  const { isRTL } = useLanguage();

  const deliverables = isRTL ? [
    { title: "تدقيق الجاهزية للذكاء الاصطناعي", description: "تقييم شامل للبيانات والبنية التحتية.", icon: <Cpu size={20} /> },
    { title: "مساعد ذكاء اصطناعي مخصص (Copilot)", description: "مساعد ذكاء اصطناعي مدرب على بياناتك.", icon: <MessageSquare size={20} /> },
    { title: "ذكاء المستندات العربية", description: "معالجة آلية للمستندات باللغة العربية.", icon: <Database size={20} /> },
    { title: "نشر عمليات الذكاء الاصطناعي (MLOps)", description: "نشر ومراقبة النماذج في الإنتاج.", icon: <Cpu size={20} /> },
    { title: "هندسة خطوط البيانات", description: "خطوط بيانات موثوقة وقابلة للتوسع.", icon: <Database size={20} /> },
    { title: "مسؤول ذكاء اصطناعي جزئي (FAIO)", description: "قيادة استراتيجية للذكاء الاصطناعي عند الطلب.", icon: <MessageSquare size={20} /> }
  ] : [
    { title: "AI Readiness Audits", description: "Comprehensive assessment of data and infrastructure.", icon: <Cpu size={20} /> },
    { title: "Custom AI Copilots", description: "AI assistants trained on your proprietary data.", icon: <MessageSquare size={20} /> },
    { title: "Arabic Document Intelligence", description: "Automated processing of Arabic-language documents.", icon: <Database size={20} /> },
    { title: "MLOps Deployment", description: "Production deployment and model lifecycle management.", icon: <Cpu size={20} /> },
    { title: "Data Pipeline Engineering", description: "Reliable, scalable data pipelines for AI workloads.", icon: <Database size={20} /> },
    { title: "Fractional AI Officer (FAIO)", description: "On-demand strategic AI leadership.", icon: <MessageSquare size={20} /> }
  ];

  const approach = isRTL ? [
    { title: "التقييم", description: "تدقيق البيانات وتقييم الجاهزية للذكاء الاصطناعي." },
    { title: "التحديد", description: "تحديد حالات الاستخدام عالية التأثير ورسم خرائط العائد على الاستثمار." },
    { title: "التطوير", description: "تطوير نماذج مخصصة وتدريبها على بيانات الملكية." },
    { title: "النشر", description: "نشر الإنتاج مع إدارة العمليات ودورة الحياة." }
  ] : [
    { title: "Assess", description: "Data audit and AI readiness assessment." },
    { title: "Define", description: "High-impact use case definition and ROI mapping." },
    { title: "Develop", description: "Custom model development and training on proprietary data." },
    { title: "Deploy", description: "Production deployment with MLOps and lifecycle management." }
  ];

  return (
    <SolutionDetailTemplate
      slug="ai-solutions"
      name={isRTL ? "الذكاء الاصطناعي وتعلم الآلة" : "AI & Machine Learning"}
      category={isRTL ? "الحلول" : "Solutions"}
      description={isRTL
        ? "دورة حياة كاملة لتحويل الذكاء الاصطناعي على المستوى المؤسسي، من النماذج اللغوية الكبيرة المخصصة إلى معالجة المستندات العربية."
        : "Complete AI transformation lifecycle for institutional scale, from custom LLMs to localized Arabic document intelligence."}
      heroImage=""
      bannerImage=""
      deliverables={deliverables}
      approach={approach}
    />
  );
}
