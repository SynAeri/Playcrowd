// Teto pear GIF component with Framer Motion interactive animations
// Enhanced color-changing system with visual feedback and smooth transitions
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import tetoPearGif from './pearto-kasane-teto.gif'
import { useState } from 'react'

interface ColorScheme {
  hue: number
  name: string
  glow: string
}

export default function TetoPear() {
  const [isHovered, setIsHovered] = useState(false)
  const [colorIndex, setColorIndex] = useState(0)
  const [isClicking, setIsClicking] = useState(false)

  // Enhanced color schemes with names and custom glow colors
  const colorSchemes: ColorScheme[] = [
    { hue: 0, name: 'Golden', glow: 'rgba(232, 196, 102, 1)' },
    { hue: 60, name: 'Lime', glow: 'rgba(196, 232, 102, 1)' },
    { hue: 120, name: 'Emerald', glow: 'rgba(102, 232, 196, 1)' },
    { hue: 180, name: 'Cyan', glow: 'rgba(102, 196, 232, 1)' },
    { hue: 240, name: 'Violet', glow: 'rgba(196, 102, 232, 1)' },
    { hue: 300, name: 'Magenta', glow: 'rgba(232, 102, 196, 1)' },
  ]

  const handleClick = () => {
    setIsClicking(true)
    setColorIndex((prev) => (prev + 1) % colorSchemes.length)
    setTimeout(() => setIsClicking(false), 300)
  }

  return (
    <motion.div
      className="pear-container"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }}
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.8 },
      }}
      whileTap={{
        scale: 0.9,
        rotate: -90,
        transition: { duration: 0.2 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        animate={{
          filter: isHovered
            ? [
                `hue-rotate(${colorSchemes[colorIndex].hue}deg) drop-shadow(0 0 40px ${colorSchemes[colorIndex].glow.replace('1)', '0.8)')}) blur(0.5px)`,
                `hue-rotate(${colorSchemes[colorIndex].hue}deg) drop-shadow(0 0 60px ${colorSchemes[colorIndex].glow}) blur(0px)`,
                `hue-rotate(${colorSchemes[colorIndex].hue}deg) drop-shadow(0 0 40px ${colorSchemes[colorIndex].glow.replace('1)', '0.8)')}) blur(0.5px)`,
              ]
            : `hue-rotate(${colorSchemes[colorIndex].hue}deg) drop-shadow(0 0 40px ${colorSchemes[colorIndex].glow.replace('1)', '0.8)')}) blur(0.5px)`,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={tetoPearGif}
          alt="Kasane Teto Pear"
          className="teto-pear"
          width={300}
          height={300}
          unoptimized
        />
      </motion.div>

      {/* Particle effects on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="pear-particle"
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 100,
                y: Math.sin((i * Math.PI * 2) / 8) * 100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </>
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="pear-ripple"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: `3px solid ${colorSchemes[colorIndex].glow}`,
            pointerEvents: 'none',
            boxShadow: `0 0 30px ${colorSchemes[colorIndex].glow}`,
          }}
        />
      )}

      {/* Color indicator */}
      <motion.div
        className="color-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isClicking ? 1 : 0, y: isClicking ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: colorSchemes[colorIndex].glow,
          fontWeight: 'bold',
          fontSize: '18px',
          textShadow: `0 0 10px ${colorSchemes[colorIndex].glow}`,
          pointerEvents: 'none',
        }}
      >
        {colorSchemes[colorIndex].name}
      </motion.div>
    </motion.div>
  )
}
