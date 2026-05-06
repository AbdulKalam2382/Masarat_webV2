"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { Server, Building2, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElvSmartSystemsPage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "أنظمة ELV والأنظمة الذكية" : "ELV & Smart Systems"}
      category={isRTL ? "بنية تحتية" : "Infrastructure"}
      description={isRTL
        ? "مقدَّمة بتكامل كامل مع هيدروتيك للهندسة — تصميم وتنفيذ البيئات المادية والذكية المتكاملة."
        : "Delivered in full integration with Hydrotek Engineering — designing and implementing integrated physical and smart environments."}
      deliverables={isRTL ? [
        "أنظمة ELV والأمن المتكاملة (كاميرات، تحكم بالوصول، مراكز القيادة)",
        "أنظمة الإطفاء وسلامة الحياة",
        "أنظمة إدارة المباني (BMS)",
        "المباني الذكية وأتمتة المرافق",
        "المراقبة والتحكم في الوقت الفعلي",
        "تحسين الكفاءة التشغيلية"
      ] : [
        "ELV and integrated security systems (CCTV, access control, command centers)",
        "Fire and life safety systems",
        "Building management systems (BMS)",
        "Smart buildings and facility automation",
        "Real-time monitoring and control",
        "Improved operational efficiency"
      ]}
      steps={isRTL ? [
        { title: "التقييم", description: "تقييم البنية التحتية الحالية ومتطلبات التكامل والأهداف التشغيلية." },
        { title: "التصميم", description: "تصميم بنية تحتية متكاملة للحوسبة وأنظمة الجهد المنخفض والبيئات الذكية." },
        { title: "النشر", description: "تنفيذ دقيق مع الحد الأدنى من التأثير على العمليات." },
        { title: "التسليم", description: "اختبار شامل وتسليم منضبط وتدريب الفريق." }
      ] : [
        { title: "Assess", description: "Current infrastructure evaluation, integration requirements, and operational goals." },
        { title: "Design", description: "Integrated architecture for compute, ELV systems, and smart environments." },
        { title: "Deploy", description: "Precise implementation with minimal operational disruption." },
        { title: "Deliver", description: "Comprehensive testing, controlled handover, and team enablement." }
      ]}
      differentiators={isRTL ? [
        { title: "بنية تحتية مؤسسية", description: "حوسبة مؤسسية وتخزين وشبكات مصممة للأداء والمرونة.", icon: <Server size={20} /> },
        { title: "أنظمة الجهد المنخفض والأمن", description: "أنظمة جهد منخفض متكاملة تشمل المراقبة والتحكم بالوصول وأمن المباني.", icon: <Building2 size={20} /> },
        { title: "الأوامر والتحكم", description: "منصات مركزية للأوامر والتحكم وحلول البيئات الذكية.", icon: <Monitor size={20} /> }
      ] : [
        { title: "IT Infrastructure", description: "Enterprise compute, storage, and networking designed for performance and resilience.", icon: <Server size={20} /> },
        { title: "ELV & Security Systems", description: "Integrated low-voltage systems including CCTV, access control, and building security.", icon: <Building2 size={20} /> },
        { title: "Command & Control", description: "Centralised command and control platforms and smart environment solutions.", icon: <Monitor size={20} /> }
      ]}
    />
  );
}
