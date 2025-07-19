'use client'

export function FancyArrow() {
  return (
    <div className="relative">
      <svg 
        width="200" 
        height="120" 
        viewBox="0 0 200 120" 
        fill="none" 
        className="drop-shadow-lg"
      >
        {/* Curved arrow path */}
        <path
          d="M20 60 Q60 20 100 60 Q140 100 180 60"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
        
        {/* Arrow head */}
        <path
          d="M170 50 L180 60 L170 70 L175 60 Z"
          fill="url(#gradient)"
          className="drop-shadow-md"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Fun emoji decoration */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="text-2xl animate-bounce">💪</span>
      </div>
    </div>
  )
} 