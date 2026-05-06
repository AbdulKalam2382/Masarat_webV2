import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { FileText, ShieldCheck, Search } from "lucide-react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Management',
  description: 'Scalable data infrastructure protecting and powering your operations.'
}

export default function DataManagementPage() {
  return (
    <ServiceDetailTemplate
      name="Data Management"
      category="Data & Storage"
      description="Scalable institutional data infrastructure for modern document processing and secure lifecycle management."
      deliverables={[
        "Data Warehouse Design",
        "Secure Data Archiving",
        "Data Governance Framework",
        "Institutional Digitization",
        "Business Intelligence Setup",
        "Data Privacy & Compliance"
      ]}
      steps={[
        {
          title: "Audit",
          description: "Data audit and legacy system assessment."
        },
        {
          title: "Design",
          description: "Architecture design for storage and accessibility."
        },
        {
          title: "Migrate",
          description: "Secure data migration and digitization of paper assets."
        },
        {
          title: "Maintain",
          description: "Ongoing governance and automated backup maintenance."
        }
      ]}
      differentiators={[
        {
          title: "Secure Digitization",
          description: "Turning physical archives into searchable, secure digital assets.",
          icon: <FileText size={20} />
        },
        {
          title: "Regulatory Compliance",
          description: "Meeting local and international data sovereignty requirements.",
          icon: <ShieldCheck size={20} />
        },
        {
          title: "Clean Intelligence",
          description: "Ensuring the data powering your BI tools is accurate and curated.",
          icon: <Search size={20} />
        }
      ]}
    />
  );
}
