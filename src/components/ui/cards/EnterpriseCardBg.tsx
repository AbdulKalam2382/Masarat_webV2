"use client";

const COLS = 12;
const ROWS = 9;
const CELL = 26;
const GAP = 4;
const S = CELL + GAP;
const DUR = 6;

export default function EnterpriseCardBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox={`0 0 ${COLS * S} ${ROWS * S}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
        shapeRendering="optimizeSpeed"
        colorRendering="optimizeSpeed"
      >
        <defs>
          <style>{`
            .ec {
              fill: rgba(26,86,219,0.04);
              stroke: rgba(26,86,219,0.15);
              stroke-width: 0.5;
              animation: ecw ${DUR}s linear infinite;
            }
            @keyframes ecw {
              0%, 100% { fill: rgba(26,86,219,0.04); stroke: rgba(26,86,219,0.15); }
              8%, 18%   { fill: rgba(59,130,246,0.18); stroke: rgba(59,130,246,0.45); }
            }
            @media (prefers-reduced-motion: reduce) { .ec { animation: none; } }
          `}</style>
        </defs>
        {Array.from({ length: ROWS }, (_, row) =>
          Array.from({ length: COLS }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              className="ec"
              x={col * S}
              y={row * S}
              width={CELL}
              height={CELL}
              style={{ animationDelay: `${(col / COLS) * DUR}s` }}
            />
          ))
        )}
      </svg>
    </div>
  );
}
