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
  const cx = 50; // Center X in %
  const cy = 50; // Center Y in %
  const orbitRadiusPercent = 30; // Reduced slightly to pull nodes inward
  const labelOffsetPercent = 15; // Increased to push labels further out
  const total = allNodes.length;

  return (
    <div className="relative mx-auto w-full max-w-[480px] aspect-square">
      {/* SVG layer: rings, lines, node circles */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        {/* Dashed orbit ring */}
        <circle cx={cx} cy={cy} r={orbitRadiusPercent} fill="none" stroke="#DBEAFE" strokeWidth="0.2" strokeDasharray="1.5 1" />

        {/* Center circle */}
        <circle cx={cx} cy={cy} r={14} fill="#0D1B2A" stroke="#1A56DB" strokeWidth="0.5" />

        {/* Spoke lines */}
        {allNodes.map((_, i) => {
          const a = (i / total) * Math.PI * 2 - Math.PI / 2;
          return (
            <line key={i}
              x1={cx} y1={cy}
              x2={cx + Math.cos(a) * orbitRadiusPercent}
              y2={cy + Math.sin(a) * orbitRadiusPercent}
              stroke="#1A56DB" strokeWidth="0.15" strokeOpacity="0.2"
            />
          );
        })}

        {/* Node circles */}
        {allNodes.map((_, i) => {
          const a = (i / total) * Math.PI * 2 - Math.PI / 2;
          const nx = cx + Math.cos(a) * orbitRadiusPercent;
          const ny = cy + Math.sin(a) * orbitRadiusPercent;
          return <circle key={i} cx={nx} cy={ny} r={5} fill="white" stroke="#E2EAF8" strokeWidth="0.3" />;
        })}
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[28%] text-center px-1">
          <span className="text-[9px] md:text-[11px] font-bold text-white leading-tight block">
            {centerLabel ?? solutionName}
          </span>
        </div>
      </div>

      {/* Icons + labels as HTML divs */}
      {allNodes.map((node, i) => {
        const a = (i / total) * Math.PI * 2 - Math.PI / 2;
        const nx = cx + Math.cos(a) * orbitRadiusPercent;
        const ny = cy + Math.sin(a) * orbitRadiusPercent;
        const lx = cx + Math.cos(a) * (orbitRadiusPercent + labelOffsetPercent);
        const ly = cy + Math.sin(a) * (orbitRadiusPercent + labelOffsetPercent);
        const Icon = node.icon;
        
        return (
          <div key={i}>
            {/* Icon centred on the node circle */}
            <div 
              className="absolute flex items-center justify-center text-[#1A56DB] pointer-events-none"
              style={{ 
                left: `${nx}%`, 
                top: `${ny}%`, 
                width: "6%", 
                height: "6%", 
                transform: "translate(-50%, -50%)" 
              }}
            >
              <Icon className="w-full h-full p-[20%]" strokeWidth={2.5} />
            </div>
            
            {/* Label outside the orbit ring */}
            <div 
              className="absolute flex items-center justify-center text-center pointer-events-none"
              style={{ 
                left: `${lx}%`, 
                top: `${ly}%`, 
                width: "25%", // Increased width to prevent tight wrapping
                height: "12%", 
                transform: "translate(-50%, -50%)" 
              }}
            >
              <span className="text-[7.5px] md:text-[10.5px] font-semibold text-[#0D1B2A] leading-[1.1] dark:text-white/80">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}

    </div>
  );
}

