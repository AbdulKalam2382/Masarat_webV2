"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { ShieldCheck, Eye, FileCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CybersecurityPage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "الأمن السيبراني والثقة الرقمية" : "Cybersecurity & Digital Trust"}
      category={isRTL ? "أمن" : "Security"}
      description={isRTL
        ? "حماية البيئات الرقمية الأكثر أهمية من خلال أطر أمنية على مستوى المؤسسات ومراقبة مستمرة وإدارة مخاطر موجهة بالامتثال. الأمن مبدأ تصميم أساسي وليس طبقة إضافية."
        : "Protecting critical digital environments through enterprise-grade security frameworks, continuous monitoring, and compliance-driven risk management. Security is a core design principle, not an add-on layer."}
      deliverables={isRTL ? [
        "الأمن السيبراني لتقنية المعلومات والتقنيات التشغيلية",
        "حماية البنية التحتية والشبكات",
        "المخاطر والامتثال والمراقبة",
        "الأمن مدمج في جميع الحلول"
      ] : [
        "IT and OT cybersecurity",
        "Infrastructure and network protection",
        "Risk, compliance, and monitoring",
        "Security embedded across all solutions"
      ]}
      steps={isRTL ? [
        { title: "التدقيق", description: "تدقيق أمني شامل وتقييم المخاطر والثغرات." },
        { title: "التصميم", description: "تصميم إطار الأمن المناسب لبيئتك وملف مخاطرك." },
        { title: "التحصين", description: "تنفيذ الضوابط الأمنية وتحصين الأنظمة." },
        { title: "المراقبة", description: "مراقبة مستمرة ودعم عمليات الأمن واستجابة للحوادث." }
      ] : [
        { title: "Audit", description: "Comprehensive security audit, risk and vulnerability assessment." },
        { title: "Design", description: "Security framework design aligned to your environment and risk profile." },
        { title: "Harden", description: "Implementation of security controls and system hardening." },
        { title: "Monitor", description: "Continuous monitoring, security operations support, and incident response." }
      ]}
      differentiators={isRTL ? [
        { title: "أطر أمنية مؤسسية", description: "تصميم وتنفيذ بنى أمنية متوافقة مع المعايير الدولية.", icon: <ShieldCheck size={20} /> },
        { title: "مراقبة ومتابعة", description: "مراقبة مستمرة للتهديدات وتخطيط الاستجابة للحوادث.", icon: <Eye size={20} /> },
        { title: "المخاطر والامتثال", description: "برامج إدارة المخاطر والتوافق التنظيمي مع معايير الأمن الدولية.", icon: <FileCheck size={20} /> }
      ] : [
        { title: "Security Frameworks", description: "Enterprise security architecture aligned to global standards.", icon: <ShieldCheck size={20} /> },
        { title: "Monitoring & Response", description: "Continuous threat monitoring, incident response, and security operations support.", icon: <Eye size={20} /> },
        { title: "Risk & Compliance", description: "Risk management programmes and regulatory compliance alignment.", icon: <FileCheck size={20} /> }
      ]}
    />
  );
}
