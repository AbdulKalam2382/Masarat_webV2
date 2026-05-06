"use client";
import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { CheckSquare, Settings, BarChart2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DataCentersPage() {
  const { isRTL } = useLanguage();
  return (
    <ServiceDetailTemplate
      name={isRTL ? "حلول وخدمات مراكز البيانات" : "Data Center Solutions & Services"}
      category={isRTL ? "حيوي" : "Mission-Critical"}
      description={isRTL
        ? "تسليم كامل لدورة حياة مراكز البيانات بالتعاون الوثيق مع هيدروتيك للهندسة — من التصميم والبناء إلى الترقيات والعمليات وإدارة المرافق."
        : "Full lifecycle data center delivery in close collaboration with Hydrotek Engineering — from design and construction to upgrades, operations, and ongoing facility management."}
      deliverables={isRTL ? [
        "دعم التصميم والهندسة",
        "تنسيق البناء",
        "ترقيات البيئة الحية",
        "العمليات وإدارة المرافق",
        "تخطيط الطاقة والإبلاغ",
        "الانضباط التشغيلي (SOP/MOP/EOP)"
      ] : [
        "Design & Engineering Support",
        "Construction Coordination",
        "Live Environment Upgrades",
        "Operations & Facility Management",
        "Capacity Planning & Reporting",
        "SOP/MOP/EOP Operational Discipline"
      ]}
      steps={isRTL ? [
        { title: "التخطيط", description: "تصميم مركز البيانات وتخطيط الطاقة ومتطلبات الامتثال." },
        { title: "البناء", description: "تنسيق بناء المرفق وتكامل الأنظمة." },
        { title: "التشغيل", description: "تشغيل مضبوط مع انضباط تشغيلي كامل." },
        { title: "الإدارة", description: "إدارة المرافق المستمرة والمراقبة وتقارير الطاقة." }
      ] : [
        { title: "Plan", description: "Data center design, capacity planning, and compliance requirements." },
        { title: "Build", description: "Facility construction coordination and systems integration." },
        { title: "Operate", description: "Controlled go-live with full operational discipline." },
        { title: "Manage", description: "Ongoing facility management, monitoring, and capacity reporting." }
      ]}
      differentiators={isRTL ? [
        { title: "تسليم حقيقي", description: "مراكز بيانات معتمدة من Tier III وخبرة ترقية حية وإدارة تشغيل مستمرة.", icon: <CheckSquare size={20} /> },
        { title: "شراكة هيدروتيك", description: "مسارات وهيدروتيك تجمعان نقاط قوة متكاملة للبنية التحتية الحيوية.", icon: <Settings size={20} /> },
        { title: "إدارة الطاقة", description: "تخطيط الطاقة والإبلاغ وممارسات الانضباط التشغيلي لأعلى مستوى من الجاهزية.", icon: <BarChart2 size={20} /> }
      ] : [
        { title: "Real Delivery", description: "Tier III certified environments, live upgrade experience, and ongoing operational management.", icon: <CheckSquare size={20} /> },
        { title: "Hydrotek Partnership", description: "Masarat and Hydrotek combine complementary strengths for mission-critical infrastructure delivery.", icon: <Settings size={20} /> },
        { title: "Capacity Management", description: "Capacity planning, reporting, and SOP/MOP/EOP operational discipline for maximum uptime.", icon: <BarChart2 size={20} /> }
      ]}
    />
  );
}
