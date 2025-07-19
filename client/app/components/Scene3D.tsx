'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { Model } from './Model'

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      {/* Environment for realistic reflections */}
      <Environment preset="studio" />

      {/* Models positioned on left and right */}
      <Suspense fallback={<LoadingFallback />}>
        <Model 
          url="/modals/fatman/scene.gltf" 
          position={[-5, 0, 0]} 
          scale={0.5}
          rotationSpeed={0.012}
        />
        <Model 
          url="/modals/thinman/scene.gltf" 
          position={[5, 0, 0]} 
          scale={0.8}
          rotationSpeed={0.012}
        />
      </Suspense>

      {/* Camera controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
      />
    </>
  )
}

export function Scene3D() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        camera={{ position: [0, 1, 8], fov: 60 }}
        shadows
        className="w-full h-full"
      >
        <Scene />
      </Canvas>
    </div>
  )
} 