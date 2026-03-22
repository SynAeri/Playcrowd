// Navigation component with Framer Motion animations for interactive top menu
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'HOME', icon: '◆' },
    { id: 'explore', label: 'EXPLORE', icon: '◇' },
    { id: 'void', label: 'VOID', icon: '◈' },
    { id: 'infinite', label: '∞', icon: '◉' },
  ]

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="nav-container">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            className={`nav-button ${item.id === 'home' ? 'nav-button-home' : ''} ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              textShadow: '0 0 8px rgba(232, 196, 102, 0.8)',
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
          >
            <motion.span
              className="nav-icon"
              animate={{
                rotate: activeSection === item.id ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              {item.icon}
            </motion.span>
            <span className="nav-label">{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                className="nav-underline"
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Glitch effect overlay */}
      <motion.div
        className="nav-glitch"
        animate={{
          opacity: [0, 0.3, 0, 0.2, 0],
          scaleX: [1, 1.02, 1, 1.01, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.nav>
  )
}
