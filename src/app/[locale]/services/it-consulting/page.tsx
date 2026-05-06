import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { BarChart, Settings, Users } from "lucide-react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Consulting',
  description: 'Strategic technology guidance aligned with your business goals.'
}

export default function ITConsultingPage() {
  return (
    <ServiceDetailTemplate
      name="IT Consulting"
      category="Strategy & Advisory"
      description="Strategic technology guidance aligned with your business goals, ensuring long-term institutional agility."
      deliverables={[
        "IT Strategy Development",
        "Digital Transformation Roadmap",
        "Vendor Management",
        "IT Project Management",
        "Technology Assessment",
        "IT Governance & Compliance"
      ]}
      steps={[
        {
          title: "Assess",
          description: "Current state technology and process assessment."
        },
        {
          title: "Strategy",
          description: "Development of a long-term technology strategy and roadmap."
        },
        {
          title: "Implement",
          description: "Ongoing support during the implementation of key initiatives."
        },
        {
          title: "Review",
          description: "Regular reviews and periodic optimization of the IT landscape."
        }
      ]}
      differentiators={[
        {
          title: "Business Alignment",
          description: "Ensuring tech investments drive real institutional outcomes.",
          icon: <BarChart size={20} />
        },
        {
          title: "Vendor Neutral",
          description: "Unbiased advice that puts your interests first.",
          icon: <Settings size={20} />
        },
        {
          title: "Change Management",
          description: "Helping your people adapt to new technologies seamlessly.",
          icon: <Users size={20} />
        }
      ]}
    />
  );
}
