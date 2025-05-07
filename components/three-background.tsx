"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { useMobile } from "@/hooks/use-mobile"
import * as THREE from "three"

function Scene({ mousePosition }) {
  const isMobile = useMobile()

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2} position={[3, 0, 0]}>
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]} scale={isMobile ? 0.6 : 1}>
          <MeshDistortMaterial
            color="#7c3aed"
            attach="material"
            distort={0.4}
            speed={4}
            roughness={0.2}
            metalness={0.8}
            opacity={0.8}
            transparent
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1} position={[-3, -1, -1]}>
        <Sphere args={[1, 32, 32]} scale={isMobile ? 0.4 : 0.7}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0.4}
            metalness={0.7}
            opacity={0.7}
            transparent
          />
        </Sphere>
      </Float>

      <MouseFollower mousePosition={mousePosition} />
      <Environment preset="city" />
    </>
  )
}

function MouseFollower({ mousePosition }) {
  const mesh = useRef()
  const { viewport } = useThree()

  useFrame(() => {
    if (mesh.current && mousePosition.current) {
      // Convert mouse position to 3D space
      const x = (mousePosition.current.x / window.innerWidth) * 2 - 1
      const y = -(mousePosition.current.y / window.innerHeight) * 2 + 1

      // Smooth interpolation
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, x * viewport.width * 0.5, 0.05)
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, y * viewport.height * 0.5, 0.05)
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={0.3}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#7c3aed" roughness={0.3} metalness={0.8} opacity={0.6} transparent />
    </mesh>
  )
}

export default function ThreeBackground() {
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="fixed inset-0 z-0 opacity-70">
      <Suspense
        fallback={<div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene mousePosition={mousePosition} />
        </Canvas>
      </Suspense>
    </div>
  )
}
