"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PLACEMENTS: [number, number, number][] = [
  [-4.5, 2.5, -1], [4.5, 2.5, -2], [-4, -2.5, 0],
  [4, -2.5, -1],   [0, 3.5, -3],   [0, -3.5, -2],
];

const GEO_TYPES = [
  () => new THREE.TetrahedronGeometry(0.7),
  () => new THREE.BoxGeometry(0.9, 0.9, 0.9),
  () => new THREE.OctahedronGeometry(0.75),
  () => new THREE.IcosahedronGeometry(0.7),
  () => new THREE.DodecahedronGeometry(0.65),
  () => new THREE.TorusGeometry(0.55, 0.18, 8, 28),
];

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

function FloatingPolyhedra() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const mouse = useMouse();
  const geometries = useMemo(() => GEO_TYPES.map(fn => fn()), []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += (mouse.current.y * 0.08 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (mouse.current.x * 0.08 - groupRef.current.rotation.y) * 0.04;
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x += 0.003 + i * 0.0008;
      mesh.rotation.y += 0.005 + i * 0.001;
      mesh.position.y = PLACEMENTS[i][1] + Math.sin(clock.elapsedTime * 0.5 + i * 1.1) * 0.35;
    });
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}
          position={PLACEMENTS[i]} geometry={geo}>
          <meshBasicMaterial color={i % 2 === 0 ? "#1A56DB" : "#3B82F6"} wireframe />
        </mesh>
      ))}
    </group>
  );
}

export default function SolutionsScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <FloatingPolyhedra />
    </Canvas>
  );
}
