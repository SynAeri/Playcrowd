// Particle system component that spawns animated tetoPear.gif particles on click
// Uses Framer Motion for physics-based animations with gravity and random trajectories
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import tetoPearGif from './pearto-kasane-teto.gif'
import { useState, useCallback, useEffect } from 'react'

interface Particle {
  id: string
  x: number
  y: number
}

export default function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([])

  const spawnParticles = useCallback((clientX: number, clientY: number) => {
    const particleCount = 8 + Math.floor(Math.random() * 5) // 8-12 particles
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: `${Date.now()}-${i}`,
        x: clientX,
        y: clientY,
      })
    }

    setParticles((prev) => [...prev, ...newParticles])

    // Clean up particles after animation completes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)))
    }, 2000)
  }, [])

  // Global click handler
  const handleClick = useCallback(
    (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY)
    },
    [spawnParticles]
  )

  // Attach global click listener using useEffect
  useEffect(() => {
    window.addEventListener('click', handleClick as any)
    return () => {
      window.removeEventListener('click', handleClick as any)
    }
  }, [handleClick])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <AnimatePresence>
        {particles.map((particle, index) => {
          // Random trajectory angles
          const angle = (Math.random() * Math.PI * 2)
          const velocity = 200 + Math.random() * 300
          const vx = Math.cos(angle) * velocity
          const vy = Math.sin(angle) * velocity - 200 // Upward bias

          return (
            <motion.div
              key={particle.id}
              initial={{
                x: particle.x - 30, // Center the 60px image
                y: particle.y - 30,
                opacity: 1,
                scale: 0.3,
                rotate: 0,
              }}
              animate={{
                x: particle.x - 30 + vx,
                y: particle.y - 30 + vy + 500, // Gravity effect
                opacity: 0,
                scale: 0.8,
                rotate: Math.random() * 720 - 360, // Random rotation
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for natural motion
              }}
              style={{
                position: 'fixed',
                pointerEvents: 'none',
              }}
            >
              <Image
                src={tetoPearGif}
                alt=""
                width={60}
                height={60}
                unoptimized
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(232, 196, 102, 0.8))',
                }}
              />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
