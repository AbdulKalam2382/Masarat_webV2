"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLS = 5;
const ROWS = 4;
const SPACING = 1.6;

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

function ServerGrid() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = COLS * ROWS;

  useEffect(() => {
    if (!meshRef.current) return;
    let idx = 0;
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS; r++) {
        dummy.position.set(
          (c - (COLS - 1) / 2) * SPACING,
          (r - (ROWS - 1) / 2) * SPACING,
          0
        );
        dummy.scale.set(1.2, 0.3, 0.5);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(idx++, dummy.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += (mouse.current.y * 0.15 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (-mouse.current.x * 0.15 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.position.z = Math.sin(clock.elapsedTime * 0.3) * 0.3;
  });

  return (
    <group ref={groupRef} rotation={[0.2, -0.3, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry />
        <meshBasicMaterial color="#1A56DB" wireframe opacity={0.6} transparent />
      </instancedMesh>
    </group>
  );
}

function DataStreams({ count = 60 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const streams = useMemo(() =>
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * (COLS * SPACING),
      y: -4,
      z: (Math.random() - 0.5) * 2,
      speed: 0.03 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
    })), [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    streams.forEach((s, i) => {
      s.y += s.speed;
      if (s.y > 4) s.y = -4;
      dummy.position.set(s.x, s.y, s.z);
      dummy.scale.setScalar(0.05 + 0.03 * Math.sin(clock.elapsedTime * 3 + s.phase));
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#3B82F6" opacity={0.7} transparent />
    </instancedMesh>
  );
}

export default function DataCenterScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <ServerGrid />
      <DataStreams />
    </Canvas>
  );
}
