"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import {
  FileCheck, Shield, Search,
  Network, Lock, Eye,
  ClipboardCheck, AlertTriangle, Settings,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import CapabilityWheel from "@/components/ui/CapabilityWheel";

export default function CybersecurityPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="cybersecurity"
      name={isRTL ? "الأمن السيبراني والثقة الرقمية" : "Cybersecurity & Digital Trust"}
      category={isRTL ? "أمن" : "Security"}
      heroImage="/images/security.jpg"
      bannerImage="/images/security.jpg"
      description={isRTL
        ? "حماية البيئات الرقمية الأكثر أهمية من خلال أطر أمنية على مستوى المؤسسات ومراقبة مستمرة وإدارة مخاطر موجهة بالامتثال."
        : "Protecting critical digital environments through enterprise-grade security frameworks, continuous monitoring, and compliance-driven risk management."}
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
    >
      {/* Cybersecurity approach image */}
      <section className="py-12 bg-white border-t border-[#E2EAF8]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 320 }}>
            <img
              src="/images/security.jpg"
              alt="Cybersecurity"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0D1B2A]/60 flex items-end p-10">
              <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">
                Enterprise-grade security architecture designed for the most critical environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Wheel */}
      <section className="py-20 bg-[#F8FAFF] border-t border-[#E2EAF8]">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tighter">
              Our Capabilities at a Glance
            </h2>
          </div>
          <CapabilityWheel
            solutionName="Cybersecurity"
            centerLabel={"Cybersecurity\n& Digital Trust"}
            categories={[
              {
                name: "Protection",
                nodes: [
                  { label: "IT Security", icon: Shield },
                  { label: "OT Security", icon: Network },
                  { label: "Infrastructure Protection", icon: Lock },
                  { label: "Threat Monitoring", icon: Eye },
                ],
              },
              {
                name: "Governance",
                nodes: [
                  { label: "Risk Management", icon: FileCheck },
                  { label: "Compliance", icon: ClipboardCheck },
                  { label: "Incident Response", icon: AlertTriangle },
                  { label: "Security Architecture", icon: Settings },
                ],
              },
            ]}
          />
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
