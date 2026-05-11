"use client";
import { useMemo } from "react";

function hexPoints(cx: number, cy: number, r: number): string {
  const s3 = Math.sqrt(3);
  return [
    [cx, cy - r],
    [cx + (r * s3) / 2, cy - r / 2],
    [cx + (r * s3) / 2, cy + r / 2],
    [cx, cy + r],
    [cx - (r * s3) / 2, cy + r / 2],
    [cx - (r * s3) / 2, cy - r / 2],
  ]
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
}

const R = 22;
const SQ3 = Math.sqrt(3);
const X_STEP = R * SQ3;
const Y_STEP = R * 1.5;
const X_OFF = X_STEP / 2;
const COLS_HEX = 10;
const ROWS_HEX = 15;
const VW = COLS_HEX * X_STEP;
const VH = ROWS_HEX * Y_STEP;

export default function CyberCardBg() {
  const hexes = useMemo(() => {
    const out: { cx: number; cy: number; key: string }[] = [];
    for (let row = 0; row < ROWS_HEX; row++) {
      for (let col = 0; col < COLS_HEX; col++) {
        out.push({
          cx: col * X_STEP + (row % 2 === 0 ? 0 : X_OFF),
          cy: row * Y_STEP,
          key: `${row}-${col}`,
        });
      }
    }
    return out;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
        shapeRendering="optimizeSpeed"
        colorRendering="optimizeSpeed"
      >
        <defs>
          <linearGradient id="scan-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(59,130,246,0)" />
            <stop offset="50%"  stopColor="rgba(59,130,246,0.15)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>

        {/* Hex grid */}
        {hexes.map(({ cx, cy, key }) => (
          <polygon
            key={key}
            points={hexPoints(cx, cy, R - 1.5)}
            fill="none"
            stroke="rgba(26,86,219,0.12)"
            strokeWidth="0.8"
          />
        ))}

        {/* Scanning beam — gradient rect animating left to right */}
        <rect y="0" width="60" height={VH} fill="url(#scan-grad)">
          <animate
            attributeName="x"
            from={`${-60}`}
            to={`${VW + 60}`}
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Secondary slower beam */}
        <rect y="0" width="30" height={VH} fill="url(#scan-grad)" opacity="0.5">
          <animate
            attributeName="x"
            from={`${-30}`}
            to={`${VW + 30}`}
            dur="7s"
            begin="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}
