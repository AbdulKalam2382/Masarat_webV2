'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function InfinityParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const COUNT = 800

  const positions = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      const t = (i / COUNT) * Math.PI * 2
      const denom = 1 + Math.sin(t) * Math.sin(t)
      const scale = 3.5
      const x = (scale * Math.cos(t)) / denom
      const y = (scale * Math.sin(t) * Math.cos(t)) / denom
      const z = Math.sin(t * 2) * 0.4
      const spread = 0.08
      pos[i * 3]     = x + (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = y + (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = z + (Math.random() - 0.5) * spread
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime()
    pointsRef.current.rotation.y = Math.sin(t * 0.2) * 0.3
    pointsRef.current.rotation.x = Math.sin(t * 0.15) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={COUNT} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={0x3B82F6} transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function InfinityGlow() {
  const meshRef = useRef<THREE.Mesh>(null)

  const curve = useMemo(() => {
    const points = []
    for (let i = 0; i <= 200; i++) {
      const t = (i / 200) * Math.PI * 2
      const denom = 1 + Math.sin(t) * Math.sin(t)
      const scale = 3.5
      const x = (scale * Math.cos(t)) / denom
      const y = (scale * Math.sin(t) * Math.cos(t)) / denom
      const z = Math.sin(t * 2) * 0.4
      points.push(new THREE.Vector3(x, y, z))
    }
    return new THREE.CatmullRomCurve3(points, true)
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.15
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <tubeGeometry args={[curve, 200, 0.02, 8, true]} />
      <meshStandardMaterial
        color={0x1A56DB}
        emissive={0x1A56DB}
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

export default function InfinityScene() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight color={0xF8FAFF} intensity={0.4} />
      <pointLight color={0x1A56DB} intensity={2} position={[5, 5, 5]} />
      <InfinityParticles />
      <InfinityGlow />
    </Canvas>
  )
}
