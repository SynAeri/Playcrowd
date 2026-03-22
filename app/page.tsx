// Retro liminal space website with rotating Teto pear and interactive Framer Motion elements
// Focuses on abstraction and non-conventional design patterns

'use client'

import { motion } from 'framer-motion'
import TetoPear from './components/TetoPear'
import Navigation from './components/Navigation'

export default function Home() {
  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.08,
      y: 0,
    },
  }

  return (
    <main className="liminal-container">
      {/* Navigation */}
      <Navigation />

      {/* Floating abstract shapes with Framer Motion */}
      {[1, 2, 3, 4].map((num) => (
        <motion.div
          key={num}
          className={`shape shape-${num}`}
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          transition={{
            delay: (num - 1) * 0.2,
            duration: 0.8,
            type: 'spring' as const,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 45,
            borderColor: 'rgba(232, 196, 102, 0.6)',
            transition: { duration: 0.3 },
          }}
        />
      ))}

      {/* Scanline overlay */}
      <div className="scanlines"></div>

      {/* Glitch text elements with Framer Motion */}
      <motion.div
        className="text-element text-top"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.5, duration: 1 }}
        whileHover={{
          opacity: 0.3,
          scale: 1.05,
          textShadow: '4px 4px rgba(184, 134, 63, 0.5)',
        }}
      >
        LIMINAL
      </motion.div>
      <motion.div
        className="text-element text-bottom"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.6, duration: 1 }}
        whileHover={{
          opacity: 0.3,
          scale: 1.05,
          textShadow: '4px 4px rgba(184, 134, 63, 0.5)',
        }}
      >
        SPACE
      </motion.div>
      <motion.div
        className="text-element text-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.7, duration: 1 }}
        whileHover={{
          opacity: 0.3,
          scale: 1.05,
          textShadow: '4px 4px rgba(184, 134, 63, 0.5)',
        }}
      >
        ENTER
      </motion.div>
      <motion.div
        className="text-element text-right"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{
          opacity: 0.3,
          scale: 1.05,
          textShadow: '4px 4px rgba(184, 134, 63, 0.5)',
        }}
      >
        VOID
      </motion.div>

      {/* Center rotating Teto pear */}
      <div className="center-container">
        <TetoPear />
      </div>

      {/* Abstract grid background */}
      <div className="grid-overlay"></div>

      {/* Corner timestamps with Framer Motion */}
      {[
        { className: 'timestamp-tl', text: '19:84', delay: 0 },
        { className: 'timestamp-tr', text: '∞', delay: 0.1 },
        { className: 'timestamp-bl', text: 'NULL', delay: 0.2 },
        { className: 'timestamp-br', text: '???', delay: 0.3 },
      ].map((ts, i) => (
        <motion.div
          key={ts.className}
          className={`timestamp ${ts.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 + ts.delay, duration: 0.5 }}
          whileHover={{
            opacity: 0.9,
            scale: 1.3,
            textShadow: '0 0 10px rgba(232, 196, 102, 0.8)',
          }}
        >
          {ts.text}
        </motion.div>
      ))}
    </main>
  )
}
