"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { HardDrive, Building2, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function SmartInfrastructurePage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "البنية التحتية الذكية والأنظمة المتكاملة" : "Intelligent Infrastructure & Integrated Systems"}
      category={isRTL ? "بنية تحتية" : "Infrastructure"}
      description={isRTL
        ? "تصميم ونشر البنية التحتية المتكاملة لتقنية المعلومات وأنظمة الجهد المنخفض والبيئات الذكية التي تشكل العمود الفقري التشغيلي للمؤسسات الحديثة."
        : "Designing and deploying integrated IT infrastructure, ELV systems, and smart environments that form the operational backbone of modern enterprises."}
      deliverables={isRTL ? [
        "الحوسبة المؤسسية والتخزين والشبكات",
        "أنظمة الجهد المنخفض (المراقبة، التحكم بالوصول، الأمن)",
        "منصات الأوامر والتحكم",
        "حلول البيئات الذكية",
        "تصميم البنية التحتية للمرونة والأداء",
        "تكامل وإدارة الأنظمة"
      ] : [
        "Enterprise Compute, Storage & Networking",
        "ELV Systems (CCTV, Access Control, Building Security)",
        "Command & Control Platforms",
        "Smart Environment Solutions",
        "Infrastructure Design for Resilience & Performance",
        "Systems Integration & Management"
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
        { title: "بنية تحتية مؤسسية", description: "حوسبة مؤسسية وتخزين وشبكات مصممة للأداء والمرونة.", icon: <HardDrive size={20} /> },
        { title: "أنظمة الجهد المنخفض والأمن", description: "أنظمة جهد منخفض متكاملة تشمل المراقبة والتحكم بالوصول وأمن المباني.", icon: <Building2 size={20} /> },
        { title: "الأوامر والتحكم", description: "منصات مركزية للأوامر والتحكم وحلول البيئات الذكية.", icon: <Monitor size={20} /> }
      ] : [
        { title: "IT Infrastructure", description: "Enterprise compute, storage, and networking designed for performance and resilience.", icon: <HardDrive size={20} /> },
        { title: "ELV & Security Systems", description: "Integrated low-voltage systems including CCTV, access control, and building security.", icon: <Building2 size={20} /> },
        { title: "Command & Control", description: "Centralised command and control platforms and smart environment solutions.", icon: <Monitor size={20} /> }
      ]}
    />
  );
}
