"use client";

import { ArrowRight } from "lucide-react";
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
        "solution-card relative overflow-hidden rounded-2xl min-h-[420px] group",
        "transition-all duration-300 hover:-translate-y-1",
        "hover:shadow-[0_20px_40px_rgba(26,86,219,0.15)]",
        "bg-[#0D1B2A]",
        className
      )}
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

      {/* Card content */}
      <div
        className={cn(
          "relative z-[2] p-8 h-full flex flex-col justify-between min-h-[420px]",
          isRTL && "text-right"
        )}
      >
        {/* Domain tag */}
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#DBEAFE]/80">
          {tag}
        </span>

        {/* Bottom content */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-4 leading-tight font-outfit">
            {title}
          </h3>

          <ul className="space-y-2 mb-6">
            {bullets.map((b, i) => (
              <li
                key={i}
                className={cn(
                  "flex items-start gap-2 text-[13px] text-white/65 leading-relaxed",
                  isRTL && "flex-row-reverse"
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-[5px] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <Link href={href}>
            <div
              className={cn(
                "flex items-center gap-2 text-[#DBEAFE] text-sm font-semibold group/btn",
                isRTL && "flex-row-reverse"
              )}
            >
              <span className="group-hover/btn:underline underline-offset-4 transition-all">
                Know More
              </span>
              <div className="w-7 h-7 rounded-full border border-[#DBEAFE]/30 flex items-center justify-center group-hover/btn:bg-[#1A56DB] group-hover/btn:border-[#1A56DB] transition-all duration-200">
                <ArrowRight
                  size={12}
                  className={cn("text-[#DBEAFE]", isRTL && "rotate-180")}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
