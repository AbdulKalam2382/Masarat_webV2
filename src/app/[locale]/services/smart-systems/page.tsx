import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { Cpu, Wifi, Video } from "lucide-react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Systems & Infrastructure',
  description: 'Intelligent building and enterprise hardware integration.'
}

export default function SmartSystemsPage() {
  return (
    <ServiceDetailTemplate
      name="Smart Systems"
      category="Integration & IoT"
      description="Intelligent building management and unified enterprise hardware integration for modern workplace efficiency."
      deliverables={[
        "Building Management Systems (BMS)",
        "Advanced CCTV & Surveillance",
        "ELV Hardware Integration",
        "Access Control Systems",
        "Network Infrastructure",
        "Smart Office Solutions"
      ]}
      steps={[
        {
          title: "Assess",
          description: "On-site assessment and hardware requirements planning."
        },
        {
          title: "Design",
          description: "System design and technical specifications mapping."
        },
        {
          title: "Install",
          description: "Professional installation and multi-system integration."
        },
        {
          title: "Handover",
          description: "Final testing, commissioned handover and training."
        }
      ]}
      differentiators={[
        {
          title: "Unified Control",
          description: "Bringing disparate hardware into a single management pane.",
          icon: <Cpu size={20} />
        },
        {
          title: "Future Proof",
          description: "Architecting systems that scale with your building's growth.",
          icon: <Wifi size={20} />
        },
        {
          title: "Intelligent Security",
          description: "Integrating surveillance with AI for predictive building safety.",
          icon: <Video size={20} />
        }
      ]}
    />
  );
}
