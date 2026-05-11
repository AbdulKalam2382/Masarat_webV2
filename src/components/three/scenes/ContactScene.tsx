"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RING_COUNT = 6;

function PulsingRings() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!groupRef.current) return;
      groupRef.current.rotation.x = -(e.clientY / window.innerHeight - 0.5) * 0.4;
      groupRef.current.rotation.z = (e.clientX / window.innerWidth - 0.5) * 0.2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;
      const phase = ((t * 0.25 + i / RING_COUNT) % 1);
      const s = 0.5 + phase * 9;
      ring.scale.setScalar(s);
      (ring.material as THREE.MeshBasicMaterial).opacity = (1 - phase) * 0.45;
    });
  });

  return (
    <group ref={groupRef} rotation={[-0.4, 0, 0]}>
      {Array.from({ length: RING_COUNT }, (_, i) => (
        <mesh key={i} ref={(el) => { ringsRef.current[i] = el; }}>
          <ringGeometry args={[0.85, 1, 80]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#1A56DB" : "#3B82F6"} opacity={0.4} transparent side={THREE.DoubleSide} />
        </mesh>
      ))}
      {/* Central dot */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color="#3B82F6" />
      </mesh>
    </group>
  );
}

export default function ContactScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 55 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <PulsingRings />
    </Canvas>
  );
}
