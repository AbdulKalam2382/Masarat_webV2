"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GSAPSetup() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    const timer = setTimeout(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.innerWidth < 768;
        const startScale = isMobile ? 0.97 : 0.94; 
        const bgYPercent = isMobile ? 25 : 50;     // Increased parallax distance

        const sections = gsap.utils.toArray<HTMLElement>("section");

        sections.forEach((section, index) => {
          if (index === 0) {
            gsap.set(section, { scale: 1, opacity: 1, willChange: 'transform' });
          } else if (section.classList.contains('animate-section')) {
            // Play-once slide-in (no scrub) — prevents sections going blank on scroll back
            gsap.set(section, { willChange: 'transform' });
            gsap.fromTo(section,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                clearProps: 'all',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          } else {
            // Scale only via GSAP — opacity handled by Framer Motion on each section
            gsap.set(section, { willChange: 'transform' });
            gsap.fromTo(
              section,
              { scale: startScale },
              {
                scale: 1,
                scrollTrigger: {
                  trigger: section,
                  start: "top 85%",
                  end: "top 30%",
                  scrub: 0.3,
                  onLeaveBack: () => gsap.set(section, { scale: startScale }),
                }
              }
            );
          }

          // Effect 4: Parallax backgrounds
          // "Every section background element moves at 60 percent scroll speed."
          const bgs = section.querySelectorAll<HTMLElement>('.absolute.inset-0.bg-dot-grid, .absolute.inset-0.bg-diagonal-lines, .absolute.inset-0.bg-noise, [class*="bg-dot-grid"], [class*="bg-diagonal-lines"]');
          bgs.forEach((bg) => {
            gsap.set(bg, { willChange: 'transform' });
            gsap.to(bg, {
              yPercent: bgYPercent,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5, // Tighter follow
              }
            });
            // "Background glow color: rgba(26, 86, 219, 0.08)"
            bg.style.boxShadow = "inset 0 0 150px rgba(26, 86, 219, 0.08)";
            bg.style.backgroundColor = "rgba(26, 86, 219, 0.02)";
          });

        });
      });
    }, 100);

    // CRITICAL FIX 5 — Add ScrollTrigger refresh after fonts and images load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);
    
    // Also refresh after a short delay to catch late-loading components
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      window.removeEventListener('load', handleLoad);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
