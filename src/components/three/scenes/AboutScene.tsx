"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 80;

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

function Constellation() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { positions, scales } = useMemo(() => {
    const positions = Array.from({ length: COUNT }, () => {
      const r = 2 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    });
    const scales = Array.from({ length: COUNT }, () => 0.03 + Math.random() * 0.07);
    return { positions, scales };
  }, []);

  // Edge connections between close particles
  const edgePositions = useMemo(() => {
    const pts: number[] = [];
    for (let i = 0; i < positions.length; i++)
      for (let j = i + 1; j < positions.length; j++)
        if (positions[i].distanceTo(positions[j]) < 2.8)
          pts.push(...positions[i].toArray(), ...positions[j].toArray());
    return new Float32Array(pts);
  }, [positions]);

  useEffect(() => {
    if (!meshRef.current) return;
    positions.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions, scales, dummy]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.04;
    groupRef.current.rotation.x += (mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (-mouse.current.x * 0.04 - groupRef.current.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color="#3B82F6" opacity={0.8} transparent />
      </instancedMesh>
      {edgePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#1A56DB" opacity={0.2} transparent />
        </lineSegments>
      )}
    </group>
  );
}

export default function AboutScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <Constellation />
    </Canvas>
  );
}
