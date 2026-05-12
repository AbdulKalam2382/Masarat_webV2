"use client";

import Marquee from "@/components/ui/Marquee";

const keywords = [
  "ZERO TRUST", "HYBRID CLOUD", "ML OPS", "DIGITAL TWIN", "BIG DATA", 
  "QUANTUM SECURITY", "EDGE COMPUTING", "ENTERPRISE INTELLIGENCE"
];

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-[#F8FAFC] overflow-hidden transition-colors duration-500">
      <Marquee items={keywords} direction="left" />
    </section>
  );
}
