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

function NeuralNetwork({ nodeCount }: { nodeCount: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { positions, scales, edgePositions } = useMemo(() => {
    const positions = Array.from({ length: nodeCount }, () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4
      )
    );
    const scales = positions.map(() => 0.05 + Math.random() * 0.12);
    const edgePts: number[] = [];
    for (let i = 0; i < positions.length; i++)
      for (let j = i + 1; j < positions.length; j++)
        if (positions[i].distanceTo(positions[j]) < 3.2)
          edgePts.push(...positions[i].toArray(), ...positions[j].toArray());
    return { positions, scales, edgePositions: new Float32Array(edgePts) };
  }, [nodeCount]);

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
    if (!groupRef.current || !meshRef.current) return;
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += (mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.z += (-mouse.current.x * 0.04 - groupRef.current.rotation.z) * 0.04;
    // Pulse node sizes
    positions.forEach((_, i) => {
      dummy.scale.setScalar(scales[i] * (1 + 0.2 * Math.sin(clock.elapsedTime * 2 + i)));
      meshRef.current!.getMatrixAt(i, dummy.matrix);
      const pos = new THREE.Vector3();
      pos.setFromMatrixPosition(dummy.matrix);
      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#1A56DB" opacity={0.9} transparent />
      </instancedMesh>
      {edgePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#3B82F6" opacity={0.25} transparent />
        </lineSegments>
      )}
    </group>
  );
}

export default function AIScene() {
  const isMobile = useIsMobile();
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <NeuralNetwork nodeCount={isMobile ? 18 : 40} />
    </Canvas>
  );
}
