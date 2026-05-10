"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import EnterpriseCardBg from "@/components/ui/cards/EnterpriseCardBg";
import AICardBg from "@/components/ui/cards/AICardBg";
import CyberCardBg from "@/components/ui/cards/CyberCardBg";
import ELVCardBg from "@/components/ui/cards/ELVCardBg";
import DataCenterCardBg from "@/components/ui/cards/DataCenterCardBg";

export type CardType = "enterprise" | "ai" | "cyber" | "elv" | "datacenter";

interface AnimatedBentoCardProps {
  cardType: CardType;
  tag: string;
  title: string;
  bullets: string[];
  href: string;
  isRTL?: boolean;
  className?: string;
  overlayFrom?: string;
  overlayTo?: string;
}

const bgComponents: Record<CardType, React.ComponentType> = {
  enterprise: EnterpriseCardBg,
  ai: AICardBg,
  cyber: CyberCardBg,
  elv: ELVCardBg,
  datacenter: DataCenterCardBg,
};

const defaultOverlay: Record<CardType, { from: string; to: string }> = {
  enterprise: { from: "from-[#0D1B2A]/70", to: "to-[#0D1B2A]/80" },
  ai:         { from: "from-[#0A1628]/80", to: "to-[#0A1628]/75" },
  cyber:      { from: "from-[#0D1B2A]/75", to: "to-[#0D1B2A]/80" },
  elv:        { from: "from-[#0A1628]/70", to: "to-[#0A1628]/80" },
  datacenter: { from: "from-[#0D1B2A]/60", to: "to-[#0D1B2A]/70" },
};

export default function AnimatedBentoCard({
  cardType,
  tag,
  title,
  bullets,
  href,
  isRTL = false,
  className,
}: AnimatedBentoCardProps) {
  const BgComponent = bgComponents[cardType];
  const overlay = defaultOverlay[cardType];

  return (
    <div
      className={cn(
        "solution-card relative overflow-hidden rounded-2xl min-h-[420px] group flex flex-col",
        "transition-all duration-300 hover:-translate-y-1",
        "hover:shadow-[0_20px_40px_rgba(26,86,219,0.25)]",
        className
      )}
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0F2A4A 25%, #1A3A6B 60%, #1A56DB 100%)' }}
    >
      {/* Animated background canvas */}
      <BgComponent />

      {/* Dark gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b via-[#0D1B2A]/20 z-[1] pointer-events-none",
          overlay.from,
          overlay.to
        )}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1A56DB] z-[2]" />

      {/* Card content — 3 zones: tag / content / button */}
      <div
        className={cn(
          "relative z-[3] p-7 flex-1 flex flex-col",
          isRTL ? "text-right" : "text-left"
        )}
      >
        {/* TOP — domain tag */}
        <div className="mb-4">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#DBEAFE]">
            {tag}
          </span>
        </div>

        {/* MIDDLE — title + divider + bullets, centred in remaining space */}
        <div className="flex-1 flex flex-col justify-center py-2">
          <h3 className="text-[20px] font-bold text-white tracking-tight leading-snug mb-4 font-outfit">
            {title}
          </h3>
          <div className="w-8 h-[1.5px] bg-[#1A56DB] rounded-full mb-4" />
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className={cn("flex items-start gap-2.5", isRTL && "flex-row-reverse")}>
                <span className="w-2 h-2 rounded-full bg-white/40 mt-[6px] flex-shrink-0" />
                <span className="text-[14px] text-white/65 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM — know more link */}
        <div className="pt-4 border-t border-white/10">
          <Link href={href}>
            <div className={cn(
              "flex items-center gap-2 text-[#DBEAFE] text-[13px] font-semibold group-hover:gap-3 transition-all duration-200",
              isRTL && "flex-row-reverse"
            )}>
              <span>Know More</span>
              <div className="w-6 h-6 rounded-full border border-[#DBEAFE]/30 flex items-center justify-center group-hover:bg-[#1A56DB] group-hover:border-[#1A56DB] transition-all duration-200">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
