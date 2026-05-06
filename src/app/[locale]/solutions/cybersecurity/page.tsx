"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import { FileCheck, Shield, Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function CybersecurityPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="cybersecurity"
      name={isRTL ? "الأمن السيبراني والثقة الرقمية" : "Cybersecurity & Digital Trust"}
      category={isRTL ? "أمن" : "Security"}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
      bannerImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=85&w=1920&auto=format&fit=crop"
      description={isRTL
        ? "حماية البيئات الرقمية الأكثر أهمية في الكويت من خلال أطر أمنية على مستوى المؤسسات ومراقبة مستمرة وإدارة مخاطر موجهة بالامتثال."
        : "Protecting Kuwait's most critical digital environments through enterprise-grade security frameworks, continuous monitoring, and compliance-driven risk management."}
      deliverables={isRTL ? [
        { title: "حماية البنية التحتية", description: "تأمين الشبكات والأنظمة الحيوية ضد التهديدات.", icon: <Shield size={20} /> },
        { title: "المخاطر والامتثال", description: "التوافق التنظيمي وإدارة المخاطر المؤسسية.", icon: <FileCheck size={20} /> },
        { title: "المراقبة المستمرة", description: "الكشف عن التهديدات والاستجابة السريعة للحوادث.", icon: <Search size={20} /> }
      ] : [
        { title: "Infrastructure Protection", description: "Securing critical networks and systems against advanced threats.", icon: <Shield size={20} /> },
        { title: "Risk & Compliance", description: "Regulatory compliance alignment and enterprise risk management.", icon: <FileCheck size={20} /> },
        { title: "Continuous Monitoring", description: "Real-time threat detection, incident response, and security operations.", icon: <Search size={20} /> }
      ]}
      approach={isRTL ? [
        { title: "أطر أمنية مؤسسية", description: "تصميم وتنفيذ بنى أمنية متوافقة مع المعايير الدولية لضمان أقصى درجات الحماية." },
        { title: "مراقبة ومتابعة", description: "مراقبة مستمرة للتهديدات وتخطيط الاستجابة للحوادث لضمان استمرارية الأعمال." },
        { title: "الأمن كمبدأ تصميم", description: "ندمج الأمن في جميع طبقات الحلول التقنية من البداية وليس كإضافة متأخرة." }
      ] : [
        { title: "Enterprise Frameworks", description: "Designing security architectures aligned to global standards for maximum protection." },
        { title: "Continuous Response", description: "Proactive threat monitoring and incident response planning to ensure business continuity." },
        { title: "Security by Design", description: "Embedding security controls into the foundation of every solution we deliver." }
      ]}
    />
  );
}
