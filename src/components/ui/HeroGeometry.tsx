"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, Line } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Function to get points strictly on the surface
const getSurfacePoint = (radius: number) => {
  const u = Math.random();
  const v = Math.random();
  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const sinPhi = Math.sin(phi);
  return new THREE.Vector3(
    radius * sinPhi * Math.cos(theta),
    radius * sinPhi * Math.sin(theta),
    radius * Math.cos(phi)
  );
};

function ConnectionArc({ start, end, mid }: { start: THREE.Vector3, end: THREE.Vector3, mid: THREE.Vector3 }) {
  const curve = useMemo(() => new THREE.QuadraticBezierCurve3(start, mid, end), [start, mid, end]);
  const points = useMemo(() => curve.getPoints(30), [curve]);
  const dotRef = useRef<THREE.Mesh>(null);
  
  // Randomize speed and offset for variety
  const speed = useMemo(() => 0.002 + Math.random() * 0.003, []);
  const offset = useMemo(() => Math.random(), []);

  useFrame((state) => {
    if (!dotRef.current) return;
    const t = (state.clock.elapsedTime * speed + offset) % 1;
    const pos = curve.getPoint(t);
    dotRef.current.position.copy(pos);
  });

  return (
    <group>
      <Line points={points} color="#DBEAFE" lineWidth={1} transparent opacity={0.15} />
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#1A56DB" />
      </mesh>
    </group>
  );
}

function HighTechGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  useThree();
  const isMobile = window.innerWidth < 768;
  const radius = 2.5;

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Slow continuous rotation
    groupRef.current.rotation.y += isMobile ? 0.001 : 0.002;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    // Mouse tilt effect (desktop only)
    if (!isMobile) {
      const targetRotationX = (state.mouse.y * Math.PI) / 8;
      const targetRotationZ = (-state.mouse.x * Math.PI) / 8;
      groupRef.current.rotation.x += THREE.MathUtils.lerp(0, targetRotationX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotationZ, 0.05);
    }
  });

  // Generate Data Connections (Arcs)
  const arcs = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 30; i++) {
      const start = getSurfacePoint(radius);
      const end = getSurfacePoint(radius);
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.setLength(radius + dist * 0.4); // Push midpoint out to create an arc
      arr.push({ start, end, mid });
    }
    return arr;
  }, [radius]);

  // Generate Abstract Continent Nodes
  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 150; i++) {
      arr.push(getSurfacePoint(radius));
    }
    return arr;
  }, [radius]);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      
      {/* Inner Glass Core */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 64, 64]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={1}
          thickness={2}
          roughness={0.1}
          ior={1.5}
          clearcoat={1}
        />
      </mesh>

      {/* Wireframe Sphere Grid */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial color="#1A56DB" wireframe transparent opacity={0.05} />
      </mesh>

      {/* Surface Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Data Connection Arcs */}
      {arcs.map((arc, i) => (
        <ConnectionArc key={i} start={arc.start} end={arc.end} mid={arc.mid} />
      ))}

    </group>
  );
}

export default function HeroGeometry() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax & scale down on scroll
    gsap.to(containerRef.current, {
      yPercent: 30,
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section-trigger",
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <ambientLight intensity={1.5} />
        
        {/* Key Light */}
        <spotLight 
          position={[5, 10, 5]} 
          intensity={3} 
          angle={0.5} 
          penumbra={0.5} 
        />
        
        {/* Fill Light */}
        <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" />
        
        <HighTechGlobe />
        
        <ContactShadows 
          position={[0, -3, 0]} 
          opacity={0.3} 
          scale={15} 
          blur={2.5} 
          far={5} 
          color="#1A56DB"
        />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
