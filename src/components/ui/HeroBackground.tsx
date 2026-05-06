"use client";

import React, { useEffect, useRef } from "react";

interface HeroBackgroundProps {
  color?: string;
}

export default function HeroBackground({ color }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;
    let isMobile = false;

    // Default colors as per specification - BOOSTED for verification
    const gridColor = color || "rgba(26, 86, 219, 0.3)";
    const shapeColor = "rgba(26, 86, 219, 0.25)";
    const particleColor = "rgba(59, 130, 246, 0.4)";

    // Particles state
    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    
    const initParticles = () => {
      particles.length = 0;
      const count = isMobile ? 15 : 30;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      isMobile = width < 768;
      initParticles();
    };

    let animationFrameId: number;
    let gridOffset = 0;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!isMobile) {
        // LAYER 1: Perspective Grid
        ctx.beginPath();
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;

        const gridSpacing = 60;
        const horizon = height * 0.4;
        gridOffset = (gridOffset + 0.2) % gridSpacing;

        // Vertical perspective lines
        for (let x = -width; x <= width * 2; x += gridSpacing) {
          ctx.moveTo(width / 2, horizon);
          ctx.lineTo(x, height);
        }

        // Horizontal lines (moving toward viewer)
        for (let y = horizon; y <= height; y += (y - horizon + 10) * 0.2) {
          const shiftedY = y + (gridOffset * (y - horizon) / 100);
          if (shiftedY > horizon && shiftedY <= height) {
            ctx.moveTo(0, shiftedY);
            ctx.lineTo(width, shiftedY);
          }
        }
        ctx.stroke();

        // LAYER 2: Large Rotating Hexagon Outline (Subtle)
        ctx.save();
        ctx.translate(width * 0.8, height * 0.5);
        rotation += 0.001;
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.strokeStyle = shapeColor;
        ctx.lineWidth = 2;
        const size = 300;
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x = size * Math.cos(angle);
          const y = size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }

      // LAYER 3: Micro-Particles (Always active)
      ctx.fillStyle = particleColor;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
