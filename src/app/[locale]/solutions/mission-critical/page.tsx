"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import {
  Server, Zap, ShieldCheck,
  HardDrive, RefreshCw, Cpu,
  Settings, BarChart2, Shield, Clock,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import CapabilityWheel from "@/components/ui/CapabilityWheel";

export default function MissionCriticalPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="mission-critical"
      name={isRTL ? "البنية التحتية الحيوية ومراكز البيانات" : "Mission-Critical Infrastructure & Data Centers"}
      category={isRTL ? "حيوي" : "Mission-Critical"}
      heroImage="/images/datacenter.jpg"
      bannerImage="/images/datacenter.jpg"
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
      {/* Data center capabilities image */}
      <section className="relative overflow-hidden border-t border-[#E2EAF8]" style={{ height: 320 }}>
        <img
          src="/images/datacenter.jpg"
          alt="Data center"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D1B2A]/85 flex items-end p-10">
          <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
            Masarat and Hydrotek Engineering deliver Tier III certified data center environments — from design through live operations.
          </p>
        </div>
      </section>

      {/* Proven Experience & Value to Clients */}
      <section className="py-24 border-t border-brand-border dark:border-white/5 bg-white dark:bg-brand-navy">
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

      {/* Capability Wheel */}
      <section className="py-20 bg-[#F8FAFF] border-t border-[#E2EAF8]">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tighter">
              Our Capabilities at a Glance
            </h2>
          </div>
          <CapabilityWheel
            solutionName="Mission Critical"
            centerLabel={"Mission-Critical\nInfrastructure"}
            categories={[
              {
                name: "Data Center",
                nodes: [
                  { label: "Design & Build", icon: Server },
                  { label: "Tier III Delivery", icon: HardDrive },
                  { label: "Live Upgrades", icon: RefreshCw },
                  { label: "AI-Ready Environments", icon: Cpu },
                ],
              },
              {
                name: "Operations",
                nodes: [
                  { label: "Facility Management", icon: Settings },
                  { label: "Capacity Planning", icon: BarChart2 },
                  { label: "Mission-Critical Ops", icon: Shield },
                  { label: "24/7 Support", icon: Clock },
                ],
              },
            ]}
          />
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
