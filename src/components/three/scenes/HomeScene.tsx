"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COLOR = "#1A56DB";
const EDGE_COLOR = "#3B82F6";
const MAX_DIST = 3.5;

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

function Network({ nodeCount }: { nodeCount: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { positions, edgePositions } = useMemo(() => {
    const positions = Array.from({ length: nodeCount }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      )
    );
    const edgePts: number[] = [];
    for (let i = 0; i < positions.length; i++)
      for (let j = i + 1; j < positions.length; j++)
        if (positions[i].distanceTo(positions[j]) < MAX_DIST)
          edgePts.push(...positions[i].toArray(), ...positions[j].toArray());
    return { positions, edgePositions: new Float32Array(edgePts) };
  }, [nodeCount]);

  useEffect(() => {
    if (!meshRef.current) return;
    positions.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions, dummy]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0015;
    groupRef.current.rotation.x += (mouse.current.y * 0.12 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (-mouse.current.x * 0.05 - groupRef.current.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color={NODE_COLOR} />
      </instancedMesh>
      {edgePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={EDGE_COLOR} opacity={0.35} transparent />
        </lineSegments>
      )}
    </group>
  );
}

export default function HomeScene() {
  const isMobile = useIsMobile();
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <Network nodeCount={isMobile ? 12 : 28} />
    </Canvas>
  );
}
