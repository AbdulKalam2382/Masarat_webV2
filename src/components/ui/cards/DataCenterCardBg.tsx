"use client";

// Rack definitions: x, y, w, h, slotCount, ledCount
const RACKS = [
  { x: 5,   y: 80,  w: 65, h: 360, slots: 12, leds: 5, ledOff: 8  },
  { x: 80,  y: 110, w: 55, h: 300, slots: 10, leds: 4, ledOff: 6  },
  { x: 145, y: 140, w: 40, h: 240, slots: 8,  leds: 3, ledOff: 5  },
  { x: 175, y: 140, w: 40, h: 240, slots: 8,  leds: 3, ledOff: 5  },
  { x: 225, y: 110, w: 55, h: 300, slots: 10, leds: 4, ledOff: 6  },
  { x: 290, y: 80,  w: 65, h: 360, slots: 12, leds: 5, ledOff: 8  },
];

const VP_X = 180; // vanishing point x
const VP_Y = 70;  // vanishing point y

// Perspective convergence lines (floor + ceiling edges of corridor)
const PERSP_LINES = [
  { x1: 0,   y1: 80,  x2: VP_X, y2: VP_Y },
  { x1: 360, y1: 80,  x2: VP_X, y2: VP_Y },
  { x1: 0,   y1: 440, x2: VP_X, y2: VP_Y },
  { x1: 360, y1: 440, x2: VP_X, y2: VP_Y },
];

export default function DataCenterCardBg() {
  let ledIndex = 0;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 360 480"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="dc-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="dc-rack-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(26,86,219,0.25)" />
            <stop offset="100%" stopColor="rgba(13,27,42,0.85)" />
          </linearGradient>
        </defs>

        {/* Perspective lines */}
        {PERSP_LINES.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="rgba(26,86,219,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Server racks */}
        {RACKS.map((rack, ri) => {
          const slotH = (rack.h - 10) / rack.slots;
          return (
            <g key={ri}>
              {/* Rack body */}
              <rect
                x={rack.x} y={rack.y}
                width={rack.w} height={rack.h}
                fill="url(#dc-rack-grad)"
                stroke="rgba(26,86,219,0.3)"
                strokeWidth="0.8"
              />
              {/* Slot dividers */}
              {Array.from({ length: rack.slots - 1 }, (_, si) => (
                <line
                  key={si}
                  x1={rack.x + 2}
                  y1={rack.y + 5 + (si + 1) * slotH}
                  x2={rack.x + rack.w - 2}
                  y2={rack.y + 5 + (si + 1) * slotH}
                  stroke="rgba(26,86,219,0.15)"
                  strokeWidth="0.5"
                />
              ))}
              {/* LED indicators */}
              {Array.from({ length: rack.leds }, (_, li) => {
                const globalIdx = ledIndex++;
                const ledY = rack.y + rack.ledOff + li * (rack.h / rack.leds);
                const ledX = rack.x + rack.w - 10;
                const delay = (globalIdx % 8) * 0.12;
                return (
                  <rect
                    key={li}
                    x={ledX} y={ledY}
                    width={4} height={4}
                    fill="rgba(59,130,246,0.3)"
                    rx="0.5"
                  >
                    <animate
                      attributeName="fill"
                      values="rgba(59,130,246,0.3);rgba(59,130,246,0.92);rgba(59,130,246,0.3)"
                      dur="1s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="1s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                );
              })}
            </g>
          );
        })}

        {/* Data transfer light — travels across the top of racks */}
        <circle cy="78" r="4" fill="#3B82F6" filter="url(#dc-glow)">
          <animate
            attributeName="cx"
            from="0"
            to="360"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.05;0.95;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
