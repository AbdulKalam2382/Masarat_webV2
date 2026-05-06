"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import { Server, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function MissionCriticalPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="mission-critical"
      name={isRTL ? "البنية التحتية الحيوية ومراكز البيانات" : "Mission-Critical Infrastructure & Data Centers"}
      category={isRTL ? "حيوي" : "Mission-Critical"}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=85&w=1920&auto=format&fit=crop"
      description={isRTL
        ? "مسارات، بالتعاون مع هيدروتيك للهندسة، تقدم قدرات متخصصة في مراكز البيانات والبيئات الحيوية — من التصميم حتى التشغيل."
        : "Masarat, together with Hydrotek Engineering, delivers specialized capabilities in data center and mission-critical environments."}
      deliverables={isRTL ? [
        { title: "مراكز البيانات", description: "تصميم وبناء وترقية مراكز البيانات المتكاملة.", icon: <Server size={20} /> },
        { title: "بنية Tier III", description: "تسليم بنية تحتية متوافقة مع المعايير الدولية.", icon: <ShieldCheck size={20} /> },
        { title: "إدارة الطاقة", description: "تخطيط السعة وتحسين كفاءة استهلاك الطاقة.", icon: <Zap size={20} /> }
      ] : [
        { title: "Data Centers", description: "Design, build, and upgrade of integrated data center environments.", icon: <Server size={20} /> },
        { title: "Tier III Infrastructure", description: "Delivery of infrastructure aligned to Tier III availability standards.", icon: <ShieldCheck size={20} /> },
        { title: "Power & Capacity", description: "Capacity planning, power optimization, and operational efficiency.", icon: <Zap size={20} /> }
      ]}
      approach={isRTL ? [
        { title: "تسليم حقيقي", description: "خبرة واسعة في تسليم مراكز بيانات معتمدة وترقيات حية دون انقطاع للخدمة." },
        { title: "شراكة استراتيجية", description: "نجمع بين نقاط قوة مسارات وهيدروتيك لتقديم حلول بنية تحتية حيوية متكاملة." },
        { title: "الانضباط التشغيلي", description: "تطبيق ممارسات SOP/MOP/EOP الصارمة لضمان أقصى قدر من الجاهزية والاستمرارية." }
      ] : [
        { title: "Proven Delivery", description: "Extensive experience in delivering certified data centers and performing live upgrades with zero downtime." },
        { title: "Strategic Synergy", description: "Combining the complementary strengths of Masarat and Hydrotek for mission-critical infrastructure." },
        { title: "Operational Discipline", description: "Implementing rigorous SOP/MOP/EOP practices to ensure maximum availability and uptime." }
      ]}
    >
      <section className="py-24 border-t border-brand-border dark:border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className={cn(isRTL ? "text-right" : "text-left")}>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white">
                {isRTL ? "خبرة مثبتة" : "Proven Experience"}
              </h3>
              <ul className="space-y-4">
                {(isRTL ? [
                  "تسليم مراكز بيانات المستوى الثالث في القطاع المصرفي",
                  "ترقية مراكز البيانات الحية لعملاء الاتصالات والمؤسسات",
                  "تطوير بيئات بنية تحتية واسعة النطاق جاهزة للذكاء الاصطناعي"
                ] : [
                  "Delivery of Tier III data centers in banking sector",
                  "Upgrade of live data centers for telecom and enterprise clients",
                  "Development of large-scale AI-ready infrastructure environments"
                ]).map((item, idx) => (
                  <li key={idx} className={cn("flex items-start gap-4", isRTL ? "flex-row-reverse" : "")}>
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-lg text-brand-muted dark:text-white/40 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn(isRTL ? "text-right" : "text-left")}>
              <h3 className="text-3xl font-bold tracking-tighter mb-8 font-outfit text-brand-navy dark:text-white">
                {isRTL ? "القيمة للعملاء" : "Value to Clients"}
              </h3>
              <ul className="space-y-4">
                {(isRTL ? [
                  "شريك مسؤول واحد عبر التصميم والبناء والعمليات",
                  "تقليل المخاطر في البيئات الحيوية",
                  "تحسين الأداء والكفاءة وقابلية التوسع"
                ] : [
                  "Single accountable partner across design, build, and operations",
                  "Reduced risk in mission-critical environments",
                  "Optimized performance, efficiency, and scalability"
                ]).map((item, idx) => (
                  <li key={idx} className={cn("flex items-start gap-4", isRTL ? "flex-row-reverse" : "")}>
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                    </div>
                    <span className="text-lg text-brand-muted dark:text-white/40 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
