// Teto pear component with constant rotation animation
'use client'

export default function TetoPear() {
  return (
    <div className="pear-container">
      <svg className="teto-pear" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
        {/* Pear body */}
        <path
          d="M100,50 Q70,60 60,90 Q50,120 55,150 Q60,180 80,200 Q100,220 120,200 Q140,180 145,150 Q150,120 140,90 Q130,60 100,50 Z"
          fill="#98D98E"
          stroke="#6B9B37"
          strokeWidth="3"
        />

        {/* Pear stem */}
        <path
          d="M100,50 Q95,35 90,25 Q88,20 92,18 Q96,16 100,20"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="2"
        />

        {/* Leaf */}
        <path
          d="M100,20 Q120,15 125,25 Q120,35 105,32 Z"
          fill="#7CB342"
          stroke="#558B2F"
          strokeWidth="2"
        />

        {/* Highlight */}
        <ellipse
          cx="85"
          cy="100"
          rx="15"
          ry="25"
          fill="#C8E6C9"
          opacity="0.6"
        />

        {/* Eyes (Teto style) */}
        <ellipse cx="85" cy="110" rx="8" ry="12" fill="#2C2C2C"/>
        <ellipse cx="115" cy="110" rx="8" ry="12" fill="#2C2C2C"/>
        <ellipse cx="87" cy="108" rx="3" ry="5" fill="#FFFFFF"/>
        <ellipse cx="117" cy="108" rx="3" ry="5" fill="#FFFFFF"/>

        {/* Smile */}
        <path
          d="M90,135 Q100,145 110,135"
          stroke="#2C2C2C"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
