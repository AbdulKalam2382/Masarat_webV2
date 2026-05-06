"use client";

const PATHS = [
  { d: "M-10,70  C70,50  180,95  370,62",  dur: 3.0, begin: 0.0 },
  { d: "M-10,160 C90,180 210,140 370,175", dur: 4.0, begin: 0.8 },
  { d: "M-10,250 C100,228 220,272 370,248",dur: 5.0, begin: 0.3 },
  { d: "M-10,340 C85,360 190,315 370,352", dur: 3.5, begin: 1.2 },
  { d: "M-10,420 C75,400 235,442 370,418", dur: 4.5, begin: 1.7 },
];

const NODES = [
  { cx: 5,   cy: 70  }, { cx: 5,   cy: 160 }, { cx: 5,   cy: 250 },
  { cx: 5,   cy: 340 }, { cx: 5,   cy: 420 },
  { cx: 135, cy: 82  }, { cx: 162, cy: 164 }, { cx: 178, cy: 252 },
  { cx: 148, cy: 342 }, { cx: 168, cy: 422 },
  { cx: 355, cy: 62  }, { cx: 355, cy: 175 }, { cx: 355, cy: 248 },
  { cx: 355, cy: 352 }, { cx: 355, cy: 418 },
];

export default function AICardBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 360 480"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="ai-glow-f" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Pipeline paths */}
        {PATHS.map((p, i) => (
          <path key={i} d={p.d} fill="none" stroke="rgba(26,86,219,0.2)" strokeWidth="1" />
        ))}

        {/* Moving data particles */}
        {PATHS.map((p, i) => (
          <circle key={`p${i}`} r="3" fill="#3B82F6" filter="url(#ai-glow-f)">
            <animateMotion path={p.d} dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Node dots with pulse */}
        {NODES.map((n, i) => (
          <circle key={`n${i}`} cx={n.cx} cy={n.cy} r="4" fill="rgba(59,130,246,0.3)">
            <animate
              attributeName="r"
              values="4;7;4"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
