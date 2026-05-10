"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import {
  Database, Cpu, Lightbulb,
  Brain, TrendingUp, Bot, GitBranch, PieChart, GraduationCap,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import CapabilityWheel from "@/components/ui/CapabilityWheel";

export default function AiDataPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="ai-data"
      name={isRTL ? "الذكاء الاصطناعي والبيانات والأنظمة الذكية" : "AI, Data & Intelligent Systems"}
      category={isRTL ? "ذكاء" : "Intelligence"}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
      bannerImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=85&w=1920&auto=format&fit=crop"
      description={isRTL
        ? "بناء أساس البيانات والذكاء الاصطناعي الذي يُمكّن من اتخاذ قرارات ذكية وقدرات تنبؤية وميزة تنافسية على نطاق مؤسسي."
        : "Building the data and AI foundation that enables intelligent decision-making, predictive capability, and competitive advantage at enterprise scale."}
      deliverables={isRTL ? [
        { title: "استراتيجية الذكاء الاصطناعي", description: "تقييم الجاهزية وخرائط الطريق الاستراتيجية.", icon: <Lightbulb size={20} /> },
        { title: "منصات البيانات", description: "بناء بيئات بيانات قابلة للتوسع ومحكومة.", icon: <Database size={20} /> },
        { title: "حلول مخصصة", description: "تطوير ونشر نماذج الذكاء الاصطناعي المخصصة.", icon: <Cpu size={20} /> }
      ] : [
        { title: "AI Strategy", description: "Readiness assessments and strategic roadmaps.", icon: <Lightbulb size={20} /> },
        { title: "Data Platforms", description: "Building scalable, governed, and high-performance data environments.", icon: <Database size={20} /> },
        { title: "Custom AI Solutions", description: "End-to-end development and deployment of custom AI models.", icon: <Cpu size={20} /> }
      ]}
      approach={isRTL ? [
        { title: "ممارسة استراتيجية", description: "نجمع بين الاستشارة الاستراتيجية والهندسة العملية لضمان نجاح مبادرات الذكاء الاصطناعي." },
        { title: "منصات بيانات مؤسسية", description: "إنشاء بيئات بيانات قابلة للتوسع ومُدارة لدعم أعباء عمل التحليلات المتقدمة والذكاء الاصطناعي." },
        { title: "نتائج قابلة للقياس", description: "التركيز على تحويل استثمارات البيانات إلى نتائج تشغيلية ملموسة وقيمة تجارية حقيقية." }
      ] : [
        { title: "Strategic Practice", description: "Our AI practice combines strategic advisory with hands-on engineering to ensure success." },
        { title: "Enterprise Data Platforms", description: "Scalable, governed data environments supporting advanced analytics and AI workloads." },
        { title: "Measurable Outcomes", description: "Data investments that translate into real operational and business results through actionable insights." }
      ]}
    >
      <section className="py-20 bg-[#F8FAFF] border-t border-[#E2EAF8]">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tighter">
              Our Capabilities at a Glance
            </h2>
          </div>
          <CapabilityWheel
            solutionName="AI Data"
            centerLabel={"AI & Data\nIntelligence"}
            categories={[
              {
                name: "AI Capabilities",
                nodes: [
                  { label: "AI Strategy", icon: Brain },
                  { label: "Custom AI Solutions", icon: Cpu },
                  { label: "Predictive Analytics", icon: TrendingUp },
                  { label: "Automation", icon: Bot },
                ],
              },
              {
                name: "Data Foundation",
                nodes: [
                  { label: "Data Platforms", icon: Database },
                  { label: "Data Integration", icon: GitBranch },
                  { label: "Advanced Analytics", icon: PieChart },
                  { label: "Training & Advisory", icon: GraduationCap },
                ],
              },
            ]}
          />
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
