"use client";

import type { LucideIcon } from "lucide-react";

interface NodeItem { label: string; icon: LucideIcon; }

export interface CapabilityWheelProps {
  solutionName: string;
  centerLabel?: string;
  categories?: { name: string; nodes: NodeItem[] }[];
  nodes?: NodeItem[];
}

export default function CapabilityWheel({ solutionName, centerLabel, categories, nodes }: CapabilityWheelProps) {
  const allNodes: NodeItem[] = categories
    ? categories.flatMap((c) => c.nodes)
    : (nodes ?? []);

  const size = 480;
  const cx = size / 2;
  const cy = size / 2;
  const nodeRadius = 24;
  const orbitRadius = 160;
  const labelOffset = 52;
  const total = allNodes.length;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size, maxWidth: "100%" }}>
      {/* SVG layer: rings, lines, node circles — NO text in SVG */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full">
        {/* Dashed orbit ring */}
        <circle cx={cx} cy={cy} r={orbitRadius} fill="none" stroke="#DBEAFE" strokeWidth="1" strokeDasharray="6 4" />

        {/* Center circle */}
        <circle cx={cx} cy={cy} r={68} fill="#0D1B2A" stroke="#1A56DB" strokeWidth="2" />

        {/* Spoke lines */}
        {allNodes.map((_, i) => {
          const a = (i / total) * Math.PI * 2 - Math.PI / 2;
          return (
            <line key={i}
              x1={cx} y1={cy}
              x2={cx + Math.cos(a) * (orbitRadius - nodeRadius - 4)}
              y2={cy + Math.sin(a) * (orbitRadius - nodeRadius - 4)}
              stroke="#1A56DB" strokeWidth="0.6" strokeOpacity="0.25"
            />
          );
        })}

        {/* Node circles (no text here — icons placed as HTML below) */}
        {allNodes.map((_, i) => {
          const a = (i / total) * Math.PI * 2 - Math.PI / 2;
          const nx = cx + Math.cos(a) * orbitRadius;
          const ny = cy + Math.sin(a) * orbitRadius;
          return <circle key={i} cx={nx} cy={ny} r={nodeRadius} fill="white" stroke="#E2EAF8" strokeWidth="1.5" />;
        })}
      </svg>

      {/* Center label — HTML div, never overlaps SVG text */}
      <div className="absolute flex items-center justify-center text-center px-3"
        style={{ left: cx - 54, top: cy - 28, width: 108, height: 56 }}>
        <span className="text-[11px] font-bold text-white leading-tight">
          {centerLabel ?? solutionName}
        </span>
      </div>

      {/* Icons + labels as HTML divs — positioned independently, no overlap */}
      {allNodes.map((node, i) => {
        const a = (i / total) * Math.PI * 2 - Math.PI / 2;
        const nx = cx + Math.cos(a) * orbitRadius;
        const ny = cy + Math.sin(a) * orbitRadius;
        const lx = cx + Math.cos(a) * (orbitRadius + labelOffset);
        const ly = cy + Math.sin(a) * (orbitRadius + labelOffset);
        const Icon = node.icon;
        return (
          <div key={i}>
            {/* Icon centred on the node circle */}
            <div className="absolute flex items-center justify-center text-[#1A56DB]"
              style={{ left: nx - 12, top: ny - 12, width: 24, height: 24, pointerEvents: "none" }}>
              <Icon size={15} strokeWidth={2} />
            </div>
            {/* Label outside the orbit ring */}
            <div className="absolute flex items-center justify-center text-center"
              style={{ left: lx - 44, top: ly - 18, width: 88, height: 36, pointerEvents: "none" }}>
              <span className="text-[10px] font-semibold text-[#0D1B2A] leading-tight">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
