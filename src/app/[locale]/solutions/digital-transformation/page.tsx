"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import {
  Zap, LayoutDashboard, Settings,
  Layers, GitMerge, BarChart2, Target, RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import CapabilityWheel from "@/components/ui/CapabilityWheel";

export default function DigitalTransformationPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="digital-transformation"
      name={isRTL ? "التحول المؤسسي والمنصات الرقمية" : "Enterprise Transformation & Digital Platforms"}
      category={isRTL ? "مؤسسي" : "Enterprise"}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
      bannerImage="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=85&w=1920&auto=format&fit=crop"
      description={isRTL
        ? "تمكين المؤسسات من إعادة تصميم وأتمتة وتوسيع عملياتها الأساسية من خلال منصات مؤسسية متكاملة وتحول مدفوع بالعمليات."
        : "Enabling organisations to redesign, automate, and scale their core operations through integrated enterprise platforms and process-driven transformation."}
      deliverables={isRTL ? [
        { title: "منصات المؤسسات", description: "حوكمة وأداء معزز عبر منصات متكاملة.", icon: <LayoutDashboard size={20} /> },
        { title: "أتمتة العمليات", description: "رقمنة سير العمل وتقليل المهام اليدوية.", icon: <Zap size={20} /> },
        { title: "تكامل الأنظمة", description: "ربط وظائف الأعمال بسلاسة تامة.", icon: <Settings size={20} /> }
      ] : [
        { title: "Enterprise Platforms", description: "Governance and performance via integrated platforms.", icon: <LayoutDashboard size={20} /> },
        { title: "Process Automation", description: "Workflow digitization and manual task reduction.", icon: <Zap size={20} /> },
        { title: "System Integration", description: "Seamlessly connecting business functions and data silos.", icon: <Settings size={20} /> }
      ]}
      approach={isRTL ? [
        { title: "خبرة في العمليات", description: "نجمع بين خبرة العمليات التجارية والقدرة التقنية العميقة لضمان أن التكنولوجيا تخدم أهداف العمل." },
        { title: "أتمتة ذكية", description: "تبسيط العمليات من خلال الأتمتة الذكية وإعادة تصميم سير العمل لتحقيق أقصى قدر من الكفاءة." },
        { title: "رؤية قيادية", description: "توفير لوحات معلومات وأنظمة إبلاغ متطورة لدعم قرارات القيادة بناءً على بيانات دقيقة." }
      ] : [
        { title: "Process Expertise", description: "We combine business process expertise with deep technical integration capability to ensure technology serves business goals." },
        { title: "Intelligent Automation", description: "Streamlining operations through intelligent automation and workflow redesign for maximum efficiency." },
        { title: "Leadership Visibility", description: "Dashboards and reporting systems that provide real-time insights for leadership decision-making." }
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
            solutionName="Enterprise Transformation"
            centerLabel={"Enterprise\nTransformation"}
            categories={[
              {
                name: "Digital Platforms",
                nodes: [
                  { label: "Enterprise Platforms", icon: Layers },
                  { label: "Process Automation", icon: Zap },
                  { label: "System Integration", icon: GitMerge },
                  { label: "Governance", icon: BarChart2 },
                ],
              },
              {
                name: "Operational Excellence",
                nodes: [
                  { label: "Workflow Design", icon: Settings },
                  { label: "Performance Mgmt", icon: Target },
                  { label: "Continuous Improvement", icon: RefreshCw },
                ],
              },
            ]}
          />
        </div>
      </section>
    </SolutionDetailTemplate>
  );
}
