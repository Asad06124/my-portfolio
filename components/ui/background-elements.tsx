'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BackgroundElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clientHeight, setClientHeight] = useState(800) // default fallback

  useEffect(() => {
    setClientHeight(window.innerHeight)
    const handleResize = () => setClientHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Always use light theme colors
  const colors = {
    bg: 'from-white via-blue-50 to-indigo-100',
    accent1: '#1e40af',
    accent2: '#0891b2',
    accent3: '#7c3aed',
    accent4: '#d97706',
    accent5: '#059669',
    text: '#1e293b',
    codeText: '#1e293b',
    glow: 'rgba(30, 64, 175, 0.08)',
    secondary: 'rgba(8, 145, 178, 0.06)',
    screenBg: '#ffffff',
    deviceBg: 'linear-gradient(135deg, #ffffff, #f8fafc)',
    deviceBorder: '40',
    steamBg: 'rgba(8, 145, 178, 0.25)',
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blur and overlay for clarity */}
      <div
  className="absolute inset-0 backdrop-blur-[1px] z-10"
  style={{ backgroundColor: 'rgba(255, 255, 255, 0.62)' }}
/>
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />

      {/* Circuit Board Foundation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(0deg, ${colors.accent1}30 1px, transparent 1px),
            linear-gradient(90deg, ${colors.accent1}30 1px, transparent 1px),
            linear-gradient(45deg, ${colors.accent2}20 1px, transparent 1px),
            linear-gradient(-45deg, ${colors.accent3}20 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px, 0px 0px',
            '40px 40px, 40px 40px, 80px 80px, 80px 80px'
          ],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Primary MacBook Pro */}
      <motion.div
        className="absolute top-1/5 left-1/4 w-80 h-56"
        style={{
          transform: `perspective(1400px) rotateX(${12 + mousePosition.y * 6}deg) rotateY(${mousePosition.x * 12}deg)`,
        }}
        animate={{
          y: [0, -25, 0],
          rotateZ: [0, 1, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Laptop Base */}
        <motion.div
          className="absolute bottom-0 w-full h-6 rounded-xl shadow-2xl"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* Laptop Screen */}
        <motion.div
          className="absolute top-0 w-full h-48 rounded-t-xl shadow-2xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
            transform: 'rotateX(-12deg)',
            transformOrigin: 'bottom',
          }}
        >
          {/* Screen Display */}
          <div
            className="absolute inset-3 rounded-lg"
            style={{ backgroundColor: colors.screenBg }}
          >
            {/* IDE Interface */}
            <div className="p-3 h-full">
              {/* Title Bar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs" style={{ color: colors.codeText }}>
                  AI_System.tsx
                </div>
              </div>

              {/* Code Editor */}
              <div className="font-mono text-xs space-y-1">
                <motion.div
                  style={{ color: colors.accent3 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {'import { NeuralNetwork } from \'@ai/core\''}
                </motion.div>
                <motion.div
                  style={{ color: colors.codeText }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  {''}
                </motion.div>
                <motion.div
                  style={{ color: colors.accent1 }}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  {'const model = new NeuralNetwork({'}
                </motion.div>
                <motion.div
                  style={{ color: colors.accent2 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
                >
                  {'  layers: [128, 64, 32],'}
                </motion.div>
                <motion.div
                  style={{ color: colors.accent4 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: 2 }}
                >
                  {'  activation: "relu"'}
                </motion.div>
                <div style={{ color: colors.accent1 }}>{'});'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Ultra-wide Monitor Setup */}
      <motion.div
        className="absolute top-1/4 right-1/6 w-96 h-64"
        style={{
          transform: `perspective(1200px) rotateX(${mousePosition.y * 3}deg) rotateY(${-mousePosition.x * 8}deg)`,
        }}
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Monitor Stand */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-24 h-12 rounded-lg shadow-lg"
          style={{
            background: colors.deviceBg,
            transform: 'translateX(-50%)',
          }}
        />

        {/* Monitor Screen */}
        <motion.div
          className="absolute top-0 w-full h-52 rounded-xl shadow-2xl"
          style={{
            background: colors.deviceBg,
            border: `4px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        >
          {/* Screen Content */}
          <div
            className="absolute inset-4 rounded-lg"
            style={{ backgroundColor: colors.screenBg }}
          >
            {/* AI Dashboard */}
            <div className="p-4 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold" style={{ color: colors.codeText }}>
                  AI Training Dashboard
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-12 rounded-lg p-2"
                    style={{
                      backgroundColor: [colors.accent1, colors.accent2, colors.accent3][i % 3] + '20',
                      border: `1px solid ${[colors.accent1, colors.accent2, colors.accent3][i % 3]}40`,
                    }}
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-xs" style={{ color: colors.codeText }}>
                      {['Accuracy', 'Loss', 'Epochs', 'Learning', 'Memory', 'Speed'][i]}
                    </div>
                    <div className="text-sm font-bold" style={{ color: colors.codeText }}>
                      {['94.2%', '0.023', '847', '0.001', '2.1GB', '156ms'][i]}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Training Progress */}
              <motion.div
                className="h-16 rounded-lg p-3"
                style={{
                  backgroundColor: colors.accent1 + '15',
                  border: `1px solid ${colors.accent1}30`,
                }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="text-xs mb-2" style={{ color: colors.codeText }}>
                  Model Training Progress
                </div>
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: colors.accent1 + '30' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: colors.accent1 }}
                    animate={{ width: ['0%', '87%', '87%'] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* High-End Desktop Workstation */}
      <motion.div
        className="absolute top-1/6 right-1/12 w-32 h-48"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 3}deg) rotateY(${-mousePosition.x * 5}deg)`,
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Tower Case */}
        <motion.div
          className="absolute inset-0 rounded-xl shadow-2xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        >
          {/* Power Button */}
          <motion.div
            className="absolute top-6 left-1/2 w-4 h-4 rounded-full shadow-lg"
            style={{
              backgroundColor: colors.accent1,
              transform: 'translateX(-50%)',
            }}
            animate={{
              boxShadow: [
                `0 0 10px ${colors.accent1}80`,
                `0 0 20px ${colors.accent1}`,
                `0 0 10px ${colors.accent1}80`
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* RGB Lighting */}
          <motion.div
            className="absolute top-16 left-2 right-2 h-16 rounded-lg"
            style={{
              background: `linear-gradient(45deg, ${colors.accent1}40, ${colors.accent2}40, ${colors.accent3}40)`,
            }}
            animate={{
              background: [
                `linear-gradient(45deg, ${colors.accent1}40, ${colors.accent2}40, ${colors.accent3}40)`,
                `linear-gradient(45deg, ${colors.accent3}40, ${colors.accent1}40, ${colors.accent2}40)`,
                `linear-gradient(45deg, ${colors.accent2}40, ${colors.accent3}40, ${colors.accent1}40)`
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          {/* Ventilation Grilles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-px"
              style={{
                backgroundColor: colors.accent1 + '25',
                top: `${100 + i * 8}px`,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          ))}

          {/* GPU Fans */}
          <motion.div
            className="absolute bottom-16 left-1/2 w-8 h-8 rounded-full"
            style={{
              backgroundColor: colors.accent2 + '30',
              transform: 'translateX(-50%)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Mechanical Keyboard */}
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-56 h-16"
        style={{
          transform: `perspective(800px) rotateX(${45 + mousePosition.y * 6}deg) rotateY(${mousePosition.x * 4}deg)`,
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* Key Layout */}
        <div className="absolute inset-3 grid grid-cols-15 gap-px">
          {Array.from({ length: 75 }).map((_, i) => (
            <motion.div
              key={i}
              className="rounded-sm shadow-sm"
              style={{
                backgroundColor: colors.accent1 + '25',
                border: `1px solid ${colors.accent1}40`,
                height: '8px',
              }}
              animate={{
                backgroundColor: [
                  colors.accent1 + '25',
                  [colors.accent2, colors.accent3, colors.accent4][Math.floor(i / 25)] + '35',
                  colors.accent1 + '25'
                ],
                y: [0, -1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* RGB Underglow */}
        <motion.div
          className="absolute -bottom-2 left-2 right-2 h-1 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors.accent1}, ${colors.accent2}, ${colors.accent3}, ${colors.accent1})`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Gaming Mouse */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-18"
        style={{
          transform: `perspective(500px) rotateX(${25 + mousePosition.y * 4}deg) rotateY(${mousePosition.x * 6}deg)`,
        }}
        animate={{
          y: [0, -6, 0],
          rotateZ: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* RGB Lighting */}
        <motion.div
          className="absolute inset-2 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${colors.accent1}30, ${colors.accent3}30)`,
          }}
          animate={{
            background: [
              `linear-gradient(135deg, ${colors.accent1}30, ${colors.accent3}30)`,
              `linear-gradient(135deg, ${colors.accent2}30, ${colors.accent1}30)`,
              `linear-gradient(135deg, ${colors.accent3}30, ${colors.accent2}30)`
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Scroll Wheel */}
        <motion.div
          className="absolute top-3 left-1/2 w-3 h-6 rounded-full"
          style={{
            backgroundColor: colors.accent1 + '60',
            transform: 'translateX(-50%)',
          }}
          animate={{
            scaleY: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Tablet with Stylus */}
      <motion.div
        className="absolute bottom-1/6 center w-40 h-28"
        style={{
          left: '45%',
          transform: `perspective(700px) rotateX(${8 + mousePosition.y * 4}deg) rotateY(${mousePosition.x * 3}deg)`,
        }}
        animate={{
          y: [0, -12, 0],
          rotateZ: [0, 1, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* Screen */}
        <motion.div
          className="absolute inset-3 rounded-xl"
          style={{ backgroundColor: colors.screenBg }}
        >
          {/* Design Canvas */}
          <div className="p-3 h-full">
            <svg className="w-full h-full" viewBox="0 0 100 60">
              {/* Bezier Curves */}
              <motion.path
                d="M 10 30 Q 30 10 50 30 T 90 30"
                stroke={colors.accent1}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.path
                d="M 10 40 Q 50 20 90 40"
                stroke={colors.accent2}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: 2,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Stylus */}
        <motion.div
          className="absolute -right-3 top-1/2 w-16 h-2 rounded-full shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `1px solid ${colors.accent1}${colors.deviceBorder}`,
            transform: 'translateY(-50%) rotate(25deg)',
          }}
          animate={{
            rotateZ: [25, 30, 25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Smart Phone */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-20 h-40"
        style={{
          transform: `perspective(600px) rotateX(${mousePosition.y * 4}deg) rotateY(${mousePosition.x * 5}deg)`,
        }}
        animate={{
          y: [0, -15, 0],
          rotateZ: [0, -1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-3xl shadow-2xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* Screen */}
        <motion.div
          className="absolute inset-3 rounded-2xl"
          style={{ backgroundColor: colors.screenBg }}
        >
          {/* Mobile Interface */}
          <div className="p-2">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs" style={{ color: colors.codeText }}>9:41</div>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.accent1 }}></div>
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.accent2 }}></div>
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.accent5 }}></div>
              </div>
            </div>

            {/* App Grid */}
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-xl shadow-sm"
                  style={{
                    backgroundColor: [colors.accent1, colors.accent2, colors.accent3, colors.accent4][i % 4] + '70',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Smart Watch */}
      <motion.div
        className="absolute top-2/3 left-1/6 w-16 h-20"
        style={{
          transform: `perspective(500px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 4}deg)`,
        }}
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Watch Band */}
        <motion.div
          className="absolute top-0 left-1/2 w-4 h-full rounded-full"
          style={{
            background: `linear-gradient(135deg, ${colors.accent1}70, ${colors.accent3}50)`,
            transform: 'translateX(-50%)',
          }}
        />

        {/* Watch Case */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-12 h-12 rounded-2xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}${colors.deviceBorder}`,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Watch Face */}
          <div
            className="absolute inset-2 rounded-xl"
            style={{ backgroundColor: colors.screenBg }}
          >
            <motion.div
              className="absolute inset-1 rounded-full"
              style={{ backgroundColor: colors.accent1 + '20' }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* Time Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-xs font-bold"
                style={{ color: colors.codeText }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                15:42
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Headphones */}
      <motion.div
        className="absolute top-1/2 left-1/8 w-32 h-28"
        style={{
          transform: `perspective(900px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 7}deg)`,
        }}
        animate={{
          y: [0, -15, 0],
          rotateZ: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Headband */}
        <motion.div
          className="absolute top-0 left-1/2 w-20 h-3 rounded-full shadow-lg"
          style={{
            background: colors.deviceBg,
            border: `2px solid ${colors.accent1}${colors.deviceBorder}`,
            transform: 'translateX(-50%)',
          }}
        />

        {/* Left Ear Cup */}
        <motion.div
          className="absolute left-0 top-6 w-12 h-16 rounded-2xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        >
          <motion.div
            className="absolute inset-2 rounded-xl"
            style={{ backgroundColor: colors.accent1 + '20' }}
            animate={{
              backgroundColor: [
                colors.accent1 + '20',
                colors.accent2 + '25',
                colors.accent3 + '20'
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Right Ear Cup */}
        <motion.div
          className="absolute right-0 top-6 w-12 h-16 rounded-2xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        >
          <motion.div
            className="absolute inset-2 rounded-xl"
            style={{ backgroundColor: colors.accent1 + '20' }}
            animate={{
              backgroundColor: [
                colors.accent1 + '20',
                colors.accent2 + '25',
                colors.accent3 + '20'
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>

        {/* Connecting Cables */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M 12 8 Q 16 4 20 8"
            stroke={colors.accent2}
            strokeWidth="3"
            fill="none"
            opacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </motion.div>

      {/* Coffee Cup with Steam */}
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-20 h-24"
        style={{
          transform: `perspective(600px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 6}deg)`,
        }}
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Cup Body */}
        <motion.div
          className="absolute bottom-0 w-16 h-20 rounded-b-3xl shadow-xl"
          style={{
            background: colors.deviceBg,
            border: `3px solid ${colors.accent1}${colors.deviceBorder}`,
          }}
        />

        {/* Coffee */}
        <motion.div
          className="absolute bottom-2 left-2 w-12 h-16 rounded-b-2xl"
          style={{
            background: 'linear-gradient(135deg, #92400e, #b45309, #d97706)',
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Handle */}
        <motion.div
          className="absolute right-1 top-6 w-6 h-10 border-3 rounded-r-full"
          style={{
            borderColor: colors.accent1 + '70',
            borderLeft: 'none',
          }}
        />

        {/* Steam Animation */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-12 rounded-full"
            style={{
              backgroundColor: colors.steamBg,
              left: `${6 + i * 3}px`,
              top: '-30px',
            }}
            animate={{
              scaleY: [0.3, 1.2, 0.3],
              opacity: [0.2, 0.8, 0.2],
              x: [0, Math.sin(i) * 8, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* AI Neural Network Visualization */}
      <motion.div
        className="absolute top-1/6 left-1/12 w-40 h-32"
        style={{
          transform: `perspective(700px) rotateX(${mousePosition.y * 4}deg) rotateY(${mousePosition.x * 6}deg)`,
        }}
        animate={{
          y: [0, -25, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Network Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl shadow-2xl"
          style={{
            background: `radial-gradient(circle, ${colors.accent1}15, ${colors.accent3}10, transparent)`,
            border: `2px solid ${colors.accent1}30`,
          }}
        />

        {/* Neural Network Grid */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 128">
          {/* Connection Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={20 + (i % 4) * 40}
              y1={20 + Math.floor(i / 4) * 25}
              x2={20 + ((i + 1) % 4) * 40}
              y2={20 + Math.floor((i + 1) / 4) * 25}
              stroke={colors.accent2}
              strokeWidth="2"
              opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Pulsing Data Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.line
              key={`pulse-${i}`}
              x1={10}
              y1={20 + i * 15}
              x2={150}
              y2={20 + i * 15}
              stroke={colors.accent1}
              strokeWidth="1"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
        </svg>

        {/* Neural Nodes */}
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full shadow-lg"
            style={{
              backgroundColor: [colors.accent1, colors.accent2, colors.accent3, colors.accent5][i % 4],
              width: `${8 + Math.random() * 8}px`,
              height: `${8 + Math.random() * 8}px`,
              left: `${16 + (i % 4) * 40}px`,
              top: `${16 + Math.floor(i / 4) * 25}px`,
            }}
            animate={{
              scale: [0.5, 1.8, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* AI Processing Indicator */}
        <motion.div
          className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: colors.accent5 + '80',
            color: colors.screenBg,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          AI
        </motion.div>
      </motion.div>

      {/* Data Visualization Charts */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`chart-${i}`}
          className="absolute"
          style={{
            top: `${25 + Math.random() * 50}%`,
            left: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, (Math.random() - 0.5) * 80, 0],
            rotateZ: [0, 180, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 18 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        >
          <svg width="48" height="36" viewBox="0 0 48 36">
            {/* Bar Chart */}
            <motion.rect
              x="4" y="24" width="6" height="8"
              fill={colors.accent1 + '70'}
              animate={{ height: [8, 20, 8] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
            <motion.rect
              x="12" y="18" width="6" height="14"
              fill={colors.accent2 + '70'}
              animate={{ height: [14, 24, 14] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 + 0.5 }}
            />
            <motion.rect
              x="20" y="12" width="6" height="20"
              fill={colors.accent3 + '70'}
              animate={{ height: [20, 28, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 + 1 }}
            />
            <motion.rect
              x="28" y="16" width="6" height="16"
              fill={colors.accent4 + '70'}
              animate={{ height: [16, 26, 16] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 + 1.5 }}
            />
            <motion.rect
              x="36" y="20" width="6" height="12"
              fill={colors.accent5 + '70'}
              animate={{ height: [12, 22, 12] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 + 2 }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating Code Elements */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute font-mono text-lg font-bold"
          style={{
            color: [colors.accent1, colors.accent2, colors.accent3, colors.accent4][i % 4] + '90',
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, (Math.random() - 0.5) * 120, 0],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        >
          {['<>', '/>', '{}', '[]', '()', '&&', '||', '++', '===', '!=', '=>', '::'][i]}
        </motion.div>
      ))}

      {/* Binary Matrix Rain */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute font-mono text-sm opacity-40"
          style={{
            color: colors.accent1,
            left: `${3 + i * 6.5}%`,
            top: '-50px',
          }}
          animate={{
            y: [0, clientHeight + 150],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear"
          }}
        >
          {Array.from({ length: 25 }).map((_, j) => (
            <motion.div
              key={j}
              style={{ lineHeight: '1.1' }}
              animate={{
                color: [colors.accent1, colors.accent2, colors.accent3, colors.accent1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.05,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Floating Tech UI Elements */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`ui-${i}`}
          className="absolute rounded-lg shadow-lg"
          style={{
            width: `${12 + Math.random() * 24}px`,
            height: `${12 + Math.random() * 24}px`,
            background: [colors.accent1, colors.accent2, colors.accent3, colors.accent4, colors.accent5][i % 5] + '50',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            border: `2px solid ${[colors.accent1, colors.accent2, colors.accent3, colors.accent4, colors.accent5][i % 5]}70`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, (Math.random() - 0.5) * 80, 0],
            rotate: [0, 360, 0],
            scale: [0.6, 1.4, 0.6],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 12 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Network Connectivity Lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, ${colors.accent1}12 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, ${colors.accent2}12 2px, transparent 2px),
            radial-gradient(circle at 50% 50%, ${colors.accent3}12 2px, transparent 2px),
            radial-gradient(circle at 80% 30%, ${colors.accent4}12 2px, transparent 2px),
            radial-gradient(circle at 20% 80%, ${colors.accent5}12 2px, transparent 2px)
          `,
          backgroundSize: '80px 80px, 120px 120px, 100px 100px, 90px 90px, 110px 110px',
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
            '80px 80px, 120px 120px, 100px 100px, 90px 90px, 110px 110px'
          ],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Dynamic Ambient Lighting */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${45 + mousePosition.x * 25}% ${45 + mousePosition.y * 25}%, ${colors.glow} 0%, transparent 60%),
            radial-gradient(circle at ${55 - mousePosition.x * 20}% ${55 - mousePosition.y * 20}%, ${colors.secondary} 0%, transparent 70%)
          `,
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle System */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            backgroundColor: [colors.accent1, colors.accent2, colors.accent3, colors.accent4, colors.accent5][i % 5] + '60',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 200],
            y: [0, (Math.random() - 0.5) * 200],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 12,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}