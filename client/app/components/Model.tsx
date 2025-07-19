'use client'

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

interface ModelProps {
  url: string
  position: [number, number, number]
  scale?: number
  rotationSpeed?: number
}

export function Model({ url, position, scale = 1, rotationSpeed = 0.01 }: ModelProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(url)

  // Rotate the model slowly around Y-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  )
}

// Preload the models for better performance
useGLTF.preload('/modals/fatman/scene.gltf')
useGLTF.preload('/modals/thinman/scene.gltf') 