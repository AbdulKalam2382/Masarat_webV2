"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GRID = 7;
const SPACING = 1.4;

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

function CircuitBoard() {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useMouse();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const { nodeCount, edgePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let x = 0; x < GRID; x++)
      for (let y = 0; y < GRID; y++)
        nodes.push(new THREE.Vector3(
          (x - (GRID - 1) / 2) * SPACING,
          (y - (GRID - 1) / 2) * SPACING,
          0
        ));

    const edgePts: number[] = [];
    for (let x = 0; x < GRID; x++) {
      for (let y = 0; y < GRID; y++) {
        const idx = x * GRID + y;
        if (x < GRID - 1 && Math.random() > 0.25) {
          edgePts.push(...nodes[idx].toArray(), ...nodes[(x + 1) * GRID + y].toArray());
        }
        if (y < GRID - 1 && Math.random() > 0.25) {
          edgePts.push(...nodes[idx].toArray(), ...nodes[x * GRID + (y + 1)].toArray());
        }
      }
    }
    return { nodeCount: nodes.length, edgePositions: new Float32Array(edgePts), nodes };
  }, []);

  useEffect(() => {
    if (!nodeRef.current) return;
    let idx = 0;
    for (let x = 0; x < GRID; x++) {
      for (let y = 0; y < GRID; y++) {
        dummy.position.set(
          (x - (GRID - 1) / 2) * SPACING,
          (y - (GRID - 1) / 2) * SPACING,
          0
        );
        dummy.scale.setScalar(0.07 + Math.random() * 0.07);
        dummy.updateMatrix();
        nodeRef.current.setMatrixAt(idx++, dummy.matrix);
      }
    }
    nodeRef.current.instanceMatrix.needsUpdate = true;
  }, [dummy]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += (mouse.current.y * 0.12 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (-mouse.current.x * 0.12 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <group ref={groupRef} rotation={[0.1, 0, 0]}>
      <instancedMesh ref={nodeRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#1A56DB" />
      </instancedMesh>
      {edgePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#3B82F6" opacity={0.45} transparent />
        </lineSegments>
      )}
    </group>
  );
}

export default function ELVScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true, antialias: true }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      dpr={[1, 1.5]}>
      <CircuitBoard />
    </Canvas>
  );
}
