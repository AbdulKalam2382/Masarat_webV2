"use client";

const BX = 50, BY = 50, BW = 260, BH = 340;
const PERIMETER = 2 * (BW + BH);
const FLOOR_Y = [BY + BH * 0.33, BY + BH * 0.66];

const NODES = [
  // Ground floor
  { cx: 90,  cy: BY + BH - 30 },
  { cx: 180, cy: BY + BH - 30 },
  { cx: 270, cy: BY + BH - 30 },
  // Second floor
  { cx: 90,  cy: FLOOR_Y[1] - 20 },
  { cx: 180, cy: FLOOR_Y[1] - 20 },
  { cx: 270, cy: FLOOR_Y[1] - 20 },
  // Third floor
  { cx: 90,  cy: FLOOR_Y[0] - 20 },
  { cx: 180, cy: FLOOR_Y[0] - 20 },
  { cx: 270, cy: FLOOR_Y[0] - 20 },
  // Roof center
  { cx: 180, cy: BY + 30 },
];

const CONNECTIONS = [
  [0, 1], [1, 2],  // ground floor
  [3, 4], [4, 5],  // second floor
  [6, 7], [7, 8],  // third floor
  [1, 4], [4, 7], [7, 9], // vertical center
];

export default function ELVCardBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 360 480"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Building outline — draws in */}
        <rect
          x={BX} y={BY} width={BW} height={BH}
          fill="rgba(59,130,246,0.02)"
          stroke="rgba(59,130,246,0.15)"
          strokeWidth="1"
          strokeDasharray={PERIMETER}
          strokeDashoffset={PERIMETER}
        >
          <animate attributeName="stroke-dashoffset" from={PERIMETER} to={0} dur="2.5s" fill="freeze" />
        </rect>

        {/* Floor dividers */}
        {FLOOR_Y.map((y, i) => (
          <line
            key={i}
            x1={BX} y1={y} x2={BX + BW} y2={y}
            stroke="rgba(59,130,246,0.1)"
            strokeWidth="0.8"
            strokeDasharray={BW}
            strokeDashoffset={BW}
          >
            <animate
              attributeName="stroke-dashoffset"
              from={BW} to={0}
              dur="1.5s"
              begin={`${2.2 + i * 0.4}s`}
              fill="freeze"
            />
          </line>
        ))}

        {/* Connection lines between nodes */}
        {CONNECTIONS.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b];
          const dist = Math.hypot(nb.cx - na.cx, nb.cy - na.cy);
          return (
            <line
              key={i}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              stroke="rgba(59,130,246,0.15)"
              strokeWidth="0.5"
              strokeDasharray={dist}
              strokeDashoffset={dist}
            >
              <animate
                attributeName="stroke-dashoffset"
                from={dist} to={0}
                dur="0.6s"
                begin={`${4.5 + i * 0.2}s`}
                fill="freeze"
              />
            </line>
          );
        })}

        {/* System nodes — activate sequentially then pulse */}
        {NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="rgba(59,130,246,0.1)">
            <animate
              attributeName="fill"
              values="rgba(59,130,246,0.1);rgba(59,130,246,0.45);rgba(59,130,246,0.45)"
              dur="0.4s"
              begin={`${3.5 + i * 0.25}s`}
              fill="freeze"
            />
            <animate
              attributeName="r"
              values="5;6;5"
              dur="2s"
              begin={`${4.0 + i * 0.25}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2s"
              begin={`${4.0 + i * 0.25}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
