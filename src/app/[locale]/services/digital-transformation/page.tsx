"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { Layers, Zap, BarChart2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DigitalTransformationPage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "التحول المؤسسي والمنصات الرقمية" : "Enterprise Transformation & Digital Platforms"}
      category={isRTL ? "مؤسسي" : "Enterprise"}
      description={isRTL
        ? "تمكين المؤسسات من إعادة تصميم وأتمتة وتوسيع عملياتها الأساسية من خلال منصات مؤسسية متكاملة وتحول مدفوع بالعمليات."
        : "Enabling organisations to redesign, automate, and scale their core operations through integrated enterprise platforms and process-driven transformation."}
      deliverables={isRTL ? [
        "منصات المؤسسات للحوكمة والأداء",
        "أتمتة العمليات ورقمنة سير العمل",
        "التكامل عبر أنظمة وظائف الأعمال",
        "نماذج تشغيل متصلة وقابلة للقياس والتوسع"
      ] : [
        "Enterprise platforms for governance and performance",
        "Process automation and workflow digitization",
        "Integration across business systems and functions",
        "Connected, measurable, and scalable operating models"
      ]}
      steps={isRTL ? [
        { title: "التقييم", description: "تقييم معمّق للعمليات الحالية والثغرات والأهداف الاستراتيجية." },
        { title: "التصميم", description: "تصميم منصات مؤسسية وخرائط عمليات مخصصة لمتطلباتك." },
        { title: "التنفيذ", description: "تنفيذ دقيق مع إدارة التغيير وتكامل الأنظمة." },
        { title: "الاختبار", description: "التحقق الصارم والتشغيل المضبوط عبر جميع الوظائف." }
      ] : [
        { title: "Assess", description: "Deep-dive assessment of current processes, gaps, and strategic goals." },
        { title: "Design", description: "Custom enterprise platform and process map design for your requirements." },
        { title: "Implement", description: "Precise execution with change management and system integration." },
        { title: "Validate", description: "Rigorous testing and controlled go-live across all functions." }
      ]}
      differentiators={isRTL ? [
        { title: "خبرة في العمليات", description: "نجمع بين خبرة العمليات التجارية والقدرة التقنية العميقة.", icon: <Layers size={20} /> },
        { title: "أتمتة ذكية", description: "تبسيط العمليات من خلال الأتمتة الذكية وإعادة تصميم سير العمل.", icon: <Zap size={20} /> },
        { title: "رؤية قيادية", description: "لوحات معلومات وأنظمة إبلاغ لدعم قرارات القيادة.", icon: <BarChart2 size={20} /> }
      ] : [
        { title: "Process Expertise", description: "We combine business process expertise with deep technical integration capability.", icon: <Layers size={20} /> },
        { title: "Intelligent Automation", description: "Streamlining operations through intelligent automation and workflow redesign.", icon: <Zap size={20} /> },
        { title: "Leadership Visibility", description: "Dashboards and reporting systems for leadership decision-making.", icon: <BarChart2 size={20} /> }
      ]}
    />
  );
}
