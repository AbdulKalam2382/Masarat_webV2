"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { Brain, Database, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AiDataPage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "الذكاء الاصطناعي والبيانات والأنظمة الذكية" : "AI, Data & Intelligent Systems"}
      category={isRTL ? "ذكاء" : "Intelligence"}
      description={isRTL
        ? "بناء أساس البيانات والذكاء الاصطناعي الذي يُمكّن من اتخاذ قرارات ذكية وقدرات تنبؤية وميزة تنافسية على نطاق مؤسسي. الذكاء الاصطناعي مُطبَّق فعلياً وليس مجرد تجريب."
        : "Building the data and AI foundation that enables intelligent decision-making, predictive capability, and competitive advantage at enterprise scale. AI is practically deployed and operationalized — not limited to experimentation."}
      deliverables={isRTL ? [
        "استراتيجية الذكاء الاصطناعي وتقييم الجاهزية",
        "منصات البيانات وتكاملها",
        "التحليلات المتقدمة والرؤى التنبؤية",
        "حلول الذكاء الاصطناعي المخصصة والأتمتة",
        "التدريب والتمكين"
      ] : [
        "AI strategy and readiness assessment",
        "Data platforms and data integration",
        "Advanced analytics and predictive insights",
        "Custom AI solutions and automation",
        "Training and enablement"
      ]}
      steps={isRTL ? [
        { title: "التقييم", description: "تدقيق جاهزية الذكاء الاصطناعي ونضج البيانات والبنية التحتية." },
        { title: "التصميم", description: "تصميم بنية تحتية للبيانات مصممة لأعباء عمل التحليلات والذكاء الاصطناعي." },
        { title: "البناء", description: "تنفيذ منصات البيانات وخطوط الاستدلال ونشر النماذج." },
        { title: "التحسين", description: "مراقبة الأداء المستمرة وإعادة التدريب وتحسين النماذج." }
      ] : [
        { title: "Assess", description: "AI readiness audit covering data maturity, infrastructure, and talent." },
        { title: "Design", description: "Data architecture designed for analytics and AI workloads." },
        { title: "Build", description: "Platform implementation, inference pipelines, and model deployment." },
        { title: "Optimise", description: "Continuous performance monitoring, retraining, and model improvement." }
      ]}
      differentiators={isRTL ? [
        { title: "ممارسة استراتيجية", description: "نجمع بين الاستشارة الاستراتيجية والهندسة العملية.", icon: <Brain size={20} /> },
        { title: "منصات بيانات مؤسسية", description: "بيئات بيانات قابلة للتوسع ومُدارة لأعباء عمل التحليلات والذكاء الاصطناعي.", icon: <Database size={20} /> },
        { title: "نتائج قابلة للقياس", description: "استثمارات البيانات تُترجم إلى نتائج تشغيلية وأعمال حقيقية.", icon: <TrendingUp size={20} /> }
      ] : [
        { title: "Strategic Practice", description: "Our AI practice combines strategic advisory with hands-on engineering.", icon: <Brain size={20} /> },
        { title: "Enterprise Data Platforms", description: "Scalable, governed data environments supporting analytics and AI workloads.", icon: <Database size={20} /> },
        { title: "Measurable Outcomes", description: "Data investments that translate into real operational and business results.", icon: <TrendingUp size={20} /> }
      ]}
    />
  );
}
