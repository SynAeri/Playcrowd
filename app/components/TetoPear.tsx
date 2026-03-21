// Teto pear GIF component with Framer Motion interactive animations
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import tetoPearGif from './pearto-kasane-teto.gif'
import { useState } from 'react'

export default function TetoPear() {
  const [isHovered, setIsHovered] = useState(false)

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
    >
      <motion.div
        animate={{
          filter: isHovered
            ? [
                'drop-shadow(0 0 40px rgba(232, 196, 102, 0.8)) blur(0.5px)',
                'drop-shadow(0 0 60px rgba(232, 196, 102, 1)) blur(0px)',
                'drop-shadow(0 0 40px rgba(232, 196, 102, 0.8)) blur(0.5px)',
              ]
            : 'drop-shadow(0 0 40px rgba(232, 196, 102, 0.8)) blur(0.5px)',
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
    </motion.div>
  )
}
