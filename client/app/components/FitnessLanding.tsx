'use client'

import { Scene3D } from './Scene3D'
import { FancyArrow } from './FancyArrow'

export function FitnessLanding() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Fun Minimal Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        
        {/* Fancy Arrow in Center */}
        <div className="mb-8">
          <FancyArrow />
        </div>
        
        {/* Playful Labels */}
        <div className="flex items-center justify-between w-full max-w-4xl px-8">
          <div className="text-left">
            <div className="text-4xl mb-2">🍔</div>
            <div className="text-white/80 text-lg font-bold">BEFORE</div>
          </div>
          
          <div className="text-right">
            <div className="text-4xl mb-2">💪</div>
            <div className="text-white/80 text-lg font-bold">AFTER</div>
          </div>
        </div>
        
        {/* Fun Call to Action */}
        <div className="mt-12 pointer-events-auto">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse">
            🚀 Let's Go! 🚀
          </button>
        </div>
        
        {/* Bottom Fun Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center text-white/60">
          <div className="flex space-x-2 mb-2">
            <span className="text-2xl animate-bounce">⚡</span>
            <span className="text-2xl animate-bounce" style={{animationDelay: '0.2s'}}>🔥</span>
            <span className="text-2xl animate-bounce" style={{animationDelay: '0.4s'}}>💥</span>
          </div>
          <p className="text-sm">Transform Mode Activated!</p>
        </div>
      </div>
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none z-5"></div>
    </div>
  )
} 