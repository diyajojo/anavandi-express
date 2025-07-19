'use client'

import { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

interface TransformationModelProps {
  position: [number, number, number]
  scale?: number
  rotationSpeed?: number
  transformationCycle?: number // Duration in seconds for one complete cycle
}

export function TransformationModel({ 
  position, 
  scale = 1, 
  rotationSpeed = 0.01,
  transformationCycle = 8
}: TransformationModelProps) {
  const fatGroupRef = useRef<Group>(null)
  const slimGroupRef = useRef<Group>(null)
  const [time, setTime] = useState(0)
  
  const { scene: fatScene } = useGLTF('/modals/fatman/scene.gltf')
  const { scene: slimScene } = useGLTF('/modals/thinman/scene.gltf')

  useFrame((state, delta) => {
    // Update time
    setTime(prev => prev + delta)
    
    // Rotate both models
    if (fatGroupRef.current) {
      fatGroupRef.current.rotation.y += rotationSpeed
    }
    if (slimGroupRef.current) {
      slimGroupRef.current.rotation.y += rotationSpeed
    }
    
    // Calculate transformation progress (0 to 1 and back)
    const cycleProgress = (time % transformationCycle) / transformationCycle
    const transformProgress = Math.sin(cycleProgress * Math.PI * 2) * 0.5 + 0.5
    
    // Smooth transition using easing
    const easedProgress = transformProgress * transformProgress * (3 - 2 * transformProgress)
    
    // Update opacity based on transformation progress
    if (fatGroupRef.current) {
      fatGroupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = 1 - easedProgress
        }
      })
    }
    
    if (slimGroupRef.current) {
      slimGroupRef.current.traverse((child: any) => {
        if (child.material) {
          child.material.transparent = true
          child.material.opacity = easedProgress
        }
      })
    }
  })

  return (
    <group position={position} scale={scale}>
      <group ref={fatGroupRef}>
        <primitive object={fatScene.clone()} />
      </group>
      <group ref={slimGroupRef}>
        <primitive object={slimScene.clone()} />
      </group>
    </group>
  )
} 