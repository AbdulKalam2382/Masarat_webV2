"use client";
import SolutionDetailTemplate from "@/components/templates/SolutionDetailTemplate";
import { Video, ShieldAlert, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ElvSmartSystemsPage() {
  const { isRTL } = useLanguage();
  return (
    <SolutionDetailTemplate
      slug="elv-smart-systems"
      name={isRTL ? "أنظمة ELV والأنظمة الذكية" : "ELV & Smart Systems"}
      category={isRTL ? "بنية تحتية" : "Infrastructure"}
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=90&w=1920&auto=format&fit=crop"
      bannerImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=85&w=1920&auto=format&fit=crop"
      description={isRTL
        ? "مقدَّمة بتكامل كامل مع هيدروتيك للهندسة — تصميم وتنفيذ البيئات المادية والذكية المتكاملة."
        : "Delivered in full integration with Hydrotek Engineering — designing and implementing integrated physical and smart environments."}
      deliverables={isRTL ? [
        { title: "أنظمة ELV والأمن", description: "كاميرات، تحكم بالوصول، ومراكز القيادة.", icon: <Video size={20} /> },
        { title: "السلامة الذكية", description: "أنظمة الإطفاء وسلامة الحياة المتقدمة.", icon: <ShieldAlert size={20} /> },
        { title: "إدارة المباني", description: "أنظمة BMS وأتمتة المرافق الذكية.", icon: <Cpu size={20} /> }
      ] : [
        { title: "ELV & Security", description: "CCTV, access control, and centralized command centers.", icon: <Video size={20} /> },
        { title: "Smart Safety", description: "Advanced fire and life safety systems integration.", icon: <ShieldAlert size={20} /> },
        { title: "Building Management", description: "Intelligent BMS and facility automation solutions.", icon: <Cpu size={20} /> }
      ]}
      approach={isRTL ? [
        { title: "بنية تحتية مؤسسية", description: "حوسبة مؤسسية وتخزين وشبكات مصممة للأداء والمرونة العالية في البيئات الذكية." },
        { title: "أنظمة الجهد المنخفض", description: "أنظمة جهد منخفض متكاملة تشمل المراقبة والتحكم بالوصول وأمن المباني بشكل موحد." },
        { title: "الأوامر والتحكم", description: "منصات مركزية للأوامر والتحكم وحلول البيئات الذكية لإدارة شاملة للمرافق." }
      ] : [
        { title: "Enterprise Infrastructure", description: "Enterprise compute, storage, and networking designed for performance and resilience in smart environments." },
        { title: "Integrated ELV Systems", description: "Low-voltage systems including CCTV, access control, and building security working as one." },
        { title: "Command & Control", description: "Centralised command and control platforms for seamless facility and smart environment management." }
      ]}
    />
  );
}
