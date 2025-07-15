'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export function BackgroundElements() {
  const [clientHeight, setClientHeight] = useState(800)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      setClientHeight(window.innerHeight)
    }
    
    checkMobile()
    const handleResize = () => checkMobile()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const colors = useMemo(() => ({
    bg: 'from-white via-blue-50 to-indigo-100',
    accent1: '#1e40af',
    accent2: '#0891b2',
    accent3: '#7c3aed',
    accent4: '#d97706',
    accent5: '#059669',
    text: '#1e293b',
    glow: 'rgba(30, 64, 175, 0.08)',
    secondary: 'rgba(8, 145, 178, 0.06)',
    screenBg: '#ffffff',
    deviceBg: 'linear-gradient(135deg, #ffffff, #f8fafc)',
  }), [])

  // Reduce animations on mobile
  const animationConfig = useMemo(() => ({
    duration: isMobile ? 8 : 4,
    particleCount: isMobile ? 8 : 15,
    floatingElements: isMobile ? 6 : 12,
    binaryColumns: isMobile ? 6 : 10,
  }), [isMobile])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Simplified overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[1px] z-10"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.62)' }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />

      {/* Simplified circuit board - reduced animation complexity */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(0deg, ${colors.accent1}30 1px, transparent 1px),
            linear-gradient(90deg, ${colors.accent1}30 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          willChange: 'transform',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Primary MacBook - simplified */}
      <motion.div
        className="absolute top-1/5 left-1/4 w-80 h-56"
        style={{
          transform: `perspective(1400px) rotateX(12deg)`,
          willChange: 'transform',
        }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Laptop Base */}
        <div
          className="absolute bottom-0 w-full h-6 rounded-xl shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}40`,
          }}
        />

        {/* Laptop Screen */}
        <div
          className="absolute top-0 w-full h-48 rounded-t-xl shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}40`,
            transform: 'rotateX(-12deg)',
            transformOrigin: 'bottom',
          }}
        >
          {/* Screen Display */}
          <div
            className="absolute inset-3 rounded-lg"
            style={{ backgroundColor: colors.screenBg }}
          >
            <div className="p-3">
              {/* Simplified title bar */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="ml-1 text-xs text-gray-600">AI_System.tsx</div>
              </div>

              {/* Simplified code */}
              <div className="font-mono text-xs space-y-1">
                <motion.div
                  className="text-purple-600"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {'import { NeuralNetwork } from \'@ai/core\''}
                </motion.div>
                <div className="text-blue-600">{'const model = new NeuralNetwork({'}</div>
                <div className="text-teal-600 ml-2">{'layers: [128, 64, 32],'}</div>
                <div className="text-blue-600">{'});'}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ultra-wide Monitor - simplified */}
      <motion.div
        className="absolute top-1/4 right-1/6 w-96 h-64"
        style={{ willChange: 'transform' }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Monitor Stand */}
        <div
          className="absolute bottom-0 left-1/2 w-20 h-8 rounded-lg shadow-md"
          style={{
            background: colors.deviceBg,
            transform: 'translateX(-50%)',
          }}
        />

        {/* Monitor Screen */}
        <div
          className="absolute top-0 w-full h-52 rounded-xl shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}40`,
          }}
        >
          <div
            className="absolute inset-4 rounded-lg"
            style={{ backgroundColor: colors.screenBg }}
          >
            <div className="p-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-gray-700">AI Dashboard</span>
              </div>

              {/* Simplified metrics - only 4 instead of 6 */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-8 rounded-lg p-2"
                    style={{
                      backgroundColor: [colors.accent1, colors.accent2, colors.accent3, colors.accent4][i] + '20',
                    }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <div className="text-xs text-gray-600">
                      {['Accuracy', 'Loss', 'Speed', 'Memory'][i]}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Simplified progress bar */}
              <div
                className="h-8 rounded-lg p-2"
                style={{
                  backgroundColor: colors.accent1 + '15',
                }}
              >
                <div className="text-xs mb-1 text-gray-600">Training Progress</div>
                <div
                  className="h-1 rounded-full"
                  style={{ backgroundColor: colors.accent1 + '30' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: colors.accent1 }}
                    animate={{ width: ['0%', '75%'] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Simplified floating elements - reduced count */}
      {Array.from({ length: animationConfig.floatingElements }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute font-mono text-lg font-bold"
          style={{
            color: [colors.accent1, colors.accent2, colors.accent3][i % 3] + '70',
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        >
          {['<>', '/>', '{}', '[]', '()', '&&', '||', '++', '=>', '::', '!=', '==='][i]}
        </motion.div>
      ))}

      {/* Simplified binary rain - reduced columns */}
      {Array.from({ length: animationConfig.binaryColumns }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute font-mono text-sm opacity-25"
          style={{
            color: colors.accent1,
            left: `${5 + i * 15}%`,
            top: '-50px',
            willChange: 'transform',
          }}
          animate={{
            y: [0, clientHeight + 100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        >
          {Array.from({ length: 15 }).map((_, j) => (
            <div key={j} style={{ lineHeight: '1.2' }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}

      {/* Simplified particles - reduced count */}
      {Array.from({ length: animationConfig.particleCount }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: '3px',
            height: '3px',
            backgroundColor: [colors.accent1, colors.accent2, colors.accent3][i % 3] + '50',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            willChange: 'transform',
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified ambient lighting */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.glow} 0%, transparent 70%)`,
          willChange: 'opacity',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}