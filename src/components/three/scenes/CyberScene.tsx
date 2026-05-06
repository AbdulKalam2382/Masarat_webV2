"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useMouse() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return mouse;
}

function ParticleRain({ count = 180 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 14,
      y: 5 + Math.random() * 8,
      z: (Math.random() - 0.5) * 5,
      speed: 0.025 + Math.random() * 0.05,
    })), [count]);

  useFrame(() => {
    if (!meshRef.current) return;
    particles.forEach((p, i) => {
      p.y -= p.speed;
      if (p.y < -6) { p.y = 6 + Math.random() * 4; p.x = (Math.random() - 0.5) * 14; }
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.setScalar(0.04);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry />
      <meshBasicMaterial color="#3B82F6" opacity={0.55} transparent />
    </instancedMesh>
  );
}

function Shield() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMouse();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.18;
    groupRef.current.rotation.x += (mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[1.8, 0]} />
        <meshBasicMaterial color="#1A56DB" wireframe opacity={0.5} transparent />
      </mesh>
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#3B82F6" wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

export default function CyberScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <ParticleRain />
      <Shield />
    </Canvas>
  );
}
