"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const officialPartners = [
  {
    name: "Broadcom",
    src: "/images/Partners/broadcom.png",
    height: "22px"
  },
  {
    name: "BroadcomSymantec",
    src: "/images/Partners/BroadcomSymantec.webp",
    height: "22px"
  },
  {
    name: "BroadcomCA",
    src: "/images/Partners/BroadcomCA.png",
    height: "22px"
  },
  {
    name: "Huawei",
    src: "/images/Partners/Huawei-Logo.png",
    height: "22px"
  },
  {
    name: "Qlik",
    src: "/images/Partners/qlik.png",
    height: "20px"
  },
  {
    name: "Cloudera",
    src: "/images/Partners/cloudera.png",
    height: "20px"
  },
  {
    name: "SUSE",
    src: "/images/Partners/suse.png",
    height: "20px"
  },
  {
    name: "HYDROTEK",
    src: "/images/Partners/Hydrotek.png",
    height: "20px"
  },
];

const textPartners = [
  { name: "INTALIO" },
  { name: "EVIDEN" },
  { name: "Broadcom" },
  { name: "HYDROTEK" },
];

export default function Partners() {
  const { isRTL } = useLanguage();

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-brand-border transition-colors duration-500">
      <div className="container max-w-7xl mx-auto px-6">
        <div className={cn("mb-16", isRTL ? "text-right" : "text-left")}>
          <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-brand-blue mb-5 block">
            {isRTL ? "شركاء التقنية" : "Technology Partners"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-outfit text-[#1B3A6B]">
            {isRTL ? "شراكات استراتيجية عالمية" : "Global Strategic Partnerships"}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {officialPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={partner.src}
                alt={partner.name}
                style={{
                  height: partner.height,
                  width: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML =
                      `<span style="font-size:12px; font-weight:700; letter-spacing:1px; color:#6B6B6B">${partner.name}</span>`;
                  }
                }}
              />
            </motion.div>
          ))}

          {textPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (officialPartners.length + i) * 0.05 }}
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#6B6B6B',
                fontFamily: 'Inter, sans-serif'
              }}>
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
