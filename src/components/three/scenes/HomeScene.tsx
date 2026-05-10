"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

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

const MAX_EDGES = 15;
const CONNECT_DIST = 4.5;

function ParticleField({ count }: { count: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lineGeomRef = useRef<THREE.BufferGeometry>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { positions, velocities, edgePairs } = useMemo(() => {
    const positions = Array.from({ length: count }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 6
      )
    );
    // Same length as positions — derived from the same count
    const velocities = Array.from({ length: count }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.001
      )
    );

    // Find closest pairs, keep only MAX_EDGES
    const pairs: [number, number][] = [];
    const dists: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const d = positions[i].distanceTo(positions[j]);
        if (d < CONNECT_DIST) {
          pairs.push([i, j]);
          dists.push(d);
        }
      }
    }
    const sorted = pairs
      .map((p, k) => ({ p, d: dists[k] }))
      .sort((a, b) => a.d - b.d)
      .slice(0, MAX_EDGES)
      .map((x) => x.p);

    return { positions, velocities, edgePairs: sorted };
  }, [count]);

  const currentPos = useRef(positions.map((p) => p.clone()));

  // Build initial edge Float32Array
  const edgeData = useMemo(() => {
    const arr = new Float32Array(edgePairs.length * 6);
    edgePairs.forEach(([i, j], k) => {
      const pi = positions[i];
      const pj = positions[j];
      arr[k * 6 + 0] = pi.x; arr[k * 6 + 1] = pi.y; arr[k * 6 + 2] = pi.z;
      arr[k * 6 + 3] = pj.x; arr[k * 6 + 4] = pj.y; arr[k * 6 + 5] = pj.z;
    });
    return arr;
  }, [positions, edgePairs]);

  // Initial instance setup
  useEffect(() => {
    if (!meshRef.current) return;
    currentPos.current.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions, dummy]);

  useFrame(() => {
    if (!groupRef.current || !meshRef.current) return;

    // Very slow Y rotation + subtle mouse tilt (max ~8 degrees)
    groupRef.current.rotation.y += 0.005;
    const targetX = mouse.current.y * 0.14;
    const targetZ = -mouse.current.x * 0.06;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.03;

    // Per-particle drift
    const cp = currentPos.current;
    cp.forEach((pos, i) => {
      if (!velocities[i]) return;
      pos.add(velocities[i]);
      if (Math.abs(pos.x) > 11) velocities[i].x *= -1;
      if (Math.abs(pos.y) > 7) velocities[i].y *= -1;
      if (Math.abs(pos.z) > 3) velocities[i].z *= -1;
      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update edge line positions
    if (lineGeomRef.current) {
      const attr = lineGeomRef.current.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      edgePairs.forEach(([i, j], k) => {
        const pi = cp[i];
        const pj = cp[j];
        arr[k * 6 + 0] = pi.x; arr[k * 6 + 1] = pi.y; arr[k * 6 + 2] = pi.z;
        arr[k * 6 + 3] = pj.x; arr[k * 6 + 4] = pj.y; arr[k * 6 + 5] = pj.z;
      });
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color="#1A56DB" emissive="#3B82F6" emissiveIntensity={0.5} />
      </instancedMesh>

      {edgePairs.length > 0 && (
        <lineSegments>
          <bufferGeometry ref={lineGeomRef}>
            <bufferAttribute attach="attributes-position" args={[edgeData, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#3B82F6" opacity={0.15} transparent />
        </lineSegments>
      )}
    </group>
  );
}

export default function HomeScene() {
  const isMobile = useIsMobile();
  return (
    <Canvas
      camera={{ position: [0, 0, 13], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <ParticleField count={isMobile ? 20 : 60} />
    </Canvas>
  );
}
