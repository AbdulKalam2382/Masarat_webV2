"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DomainHeroAnimation({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // ---------------------------------------------------------
      // SCROLL TRIGGER: DISMANTLE ON SCROLL
      // ---------------------------------------------------------
      gsap.to(".animation-content", {
        scrollTrigger: {
          trigger: ".hero-section-trigger",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: -300,
        opacity: 0,
        scale: 0.8,
        rotateX: 10,
        filter: "blur(20px)",
        stagger: 0.05,
      });

      // ---------------------------------------------------------
      // AI: NEURAL NETWORKS
      // ---------------------------------------------------------
      if (slug === "ai-data") {
        const nodes = gsap.utils.toArray<Element>(".ai-node");
        nodes.forEach((node) => {
          gsap.to(node, {
            x: "random(-20, 20)",
            y: "random(-20, 20)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
        
        // Pulse connections
        gsap.to(".ai-connection", {
          strokeDashoffset: 100,
          duration: 3,
          repeat: -1,
          ease: "none"
        });
      }

      // ---------------------------------------------------------
      // CYBERSECURITY: MATRIX
      // ---------------------------------------------------------
      if (slug === "cybersecurity") {
        const columns = gsap.utils.toArray<Element>(".matrix-column");
        columns.forEach((col) => {
          gsap.to(col, {
            y: "100%",
            duration: () => gsap.utils.random(1.5, 4),
            repeat: -1,
            ease: "none",
            delay: () => gsap.utils.random(0, 2)
          });
        });
      }

      // ---------------------------------------------------------
      // ELV: MOTHERBOARD
      // ---------------------------------------------------------
      if (slug === "elv-smart-systems") {
        gsap.fromTo(".circuit-line", 
          { strokeDasharray: 500, strokeDashoffset: 500 },
          { strokeDashoffset: 0, duration: 2, stagger: 0.1, ease: "power2.inOut" }
        );
        gsap.to(".circuit-node", {
          scale: 1.5,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          delay: 1
        });
      }

      // ---------------------------------------------------------
      // DATA CENTERS: SERVER BOX
      // ---------------------------------------------------------
      if (slug === "mission-critical") {
        gsap.to(".server-box", {
          rotateY: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });
        gsap.to(".server-led", {
          opacity: 1,
          duration: 0.1,
          stagger: {
            each: 0.05,
            from: "random",
            repeat: -1,
            yoyo: true
          }
        });
      }

      // ---------------------------------------------------------
      // ENTERPRISE: DATA PIPELINE
      // ---------------------------------------------------------
      if (slug === "digital-transformation") {
        gsap.to(".pipeline-data", {
          x: "500",
          duration: 1,
          stagger: {
            each: 0.02,
            repeat: -1
          },
          ease: "none"
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden perspective-1000">
      
      <div className="animation-content w-full h-full relative flex items-center justify-center">
        
        {/* AI: NEURAL NETWORK */}
        {slug === "ai-data" && (
          <svg width="800" height="600" viewBox="0 0 400 300" className="opacity-40 dark:opacity-60">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1A56DB" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            {/* Connections */}
            <line className="ai-connection" x1="100" y1="150" x2="200" y2="80" stroke="url(#aiGradient)" strokeWidth="0.5" strokeDasharray="5" />
            <line className="ai-connection" x1="100" y1="150" x2="200" y2="220" stroke="url(#aiGradient)" strokeWidth="0.5" strokeDasharray="5" />
            <line className="ai-connection" x1="200" y1="80" x2="300" y2="150" stroke="url(#aiGradient)" strokeWidth="0.5" strokeDasharray="5" />
            <line className="ai-connection" x1="200" y1="220" x2="300" y2="150" stroke="url(#aiGradient)" strokeWidth="0.5" strokeDasharray="5" />
            
            {/* Nodes */}
            <circle className="ai-node" cx="100" cy="150" r="4" fill="#1A56DB" />
            <circle className="ai-node" cx="200" cy="80" r="4" fill="#3B82F6" />
            <circle className="ai-node" cx="200" cy="220" r="4" fill="#3B82F6" />
            <circle className="ai-node" cx="300" cy="150" r="4" fill="#1A56DB" />
          </svg>
        )}

        {/* CYBERSECURITY: MATRIX RAIN */}
        {slug === "cybersecurity" && (
          <div className="flex gap-4 opacity-30 dark:opacity-50">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="matrix-column flex flex-col text-[10px] font-mono text-brand-blue leading-none select-none" style={{ marginTop: `-${Math.random() * 100}%` }}>
                {Array.from({ length: 30 }).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? "0" : "1"}</span>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* ELV: MOTHERBOARD */}
        {slug === "elv-smart-systems" && (
          <svg width="600" height="600" viewBox="0 0 200 200" className="opacity-40 dark:opacity-60">
            <path className="circuit-line" d="M20 100 H80 V40 H140 V160 H180" fill="none" stroke="#1A56DB" strokeWidth="1" />
            <path className="circuit-line" d="M20 120 H60 V180 H120 V100 H180" fill="none" stroke="#3B82F6" strokeWidth="1" />
            <circle className="circuit-node opacity-0" cx="80" cy="40" r="2" fill="#3B82F6" />
            <circle className="circuit-node opacity-0" cx="140" cy="160" r="2" fill="#1A56DB" />
            <circle className="circuit-node opacity-0" cx="120" cy="100" r="2" fill="#DBEAFE" />
          </svg>
        )}

        {/* MISSION CRITICAL: SERVER BOX */}
        {slug === "mission-critical" && (
          <div className="server-box relative w-64 h-80 preserve-3d">
            {/* Glass Box Faces */}
            <div className="absolute inset-0 border border-brand-blue/30 bg-brand-blue/5 backdrop-blur-[2px] translate-z-32" />
            <div className="absolute inset-0 border border-brand-blue/30 bg-brand-blue/5 backdrop-blur-[2px] -translate-z-32" />
            
            {/* Internal Server Units */}
            <div className="absolute inset-x-4 inset-y-8 flex flex-col gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-4 bg-brand-navy/40 dark:bg-white/10 rounded flex items-center px-2 gap-2">
                  <div className="server-led w-1 h-1 rounded-full bg-brand-blue opacity-20" />
                  <div className="server-led w-1 h-1 rounded-full bg-blue-300 opacity-20" />
                  <div className="w-full h-[1px] bg-brand-blue/20" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ENTERPRISE: DATA PIPELINE */}
        {slug === "digital-transformation" && (
          <div className="relative w-[600px] h-20 border-y border-brand-blue/20 flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/5 to-transparent" />
            <div className="flex gap-1">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="pipeline-data w-1 h-4 bg-brand-blue/40 rounded-full flex-shrink-0" />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
