import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        background: {
          DEFAULT: '#0a0a0f',
          light: '#ffffff',
        },
        foreground: {
          DEFAULT: '#ffffff',
          light: '#0a0a0f',
        },
        accent: {
          DEFAULT: '#00d9ff',
          light: '#0066cc',
        },
        'accent-secondary': {
          DEFAULT: '#ff6b6b',
          light: '#e74c3c',
        },
        'accent-tertiary': {
          DEFAULT: '#4ecdc4',
          light: '#16a085',
        },
        'accent-foreground': {
          DEFAULT: '#000000',
          light: '#ffffff',
        },
        muted: {
          DEFAULT: '#1a1a24',
          light: '#f8f9fa',
        },
        'muted-foreground': {
          DEFAULT: '#8892b0',
          light: '#6c757d',
        },
        border: {
          DEFAULT: '#233554',
          light: '#e9ecef',
        },
        card: {
          DEFAULT: '#0f1419',
          light: '#ffffff',
        },
        'card-foreground': {
          DEFAULT: '#ffffff',
          light: '#0a0a0f',
        },
        'glass': {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          light: 'rgba(0, 0, 0, 0.05)',
        },
        'glass-border': {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(0, 0, 0, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rotate-y': 'rotateY 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            'box-shadow': '0 0 20px rgba(0, 217, 255, 0.5)',
            'border-color': 'rgba(0, 217, 255, 0.5)'
          },
          '100%': { 
            'box-shadow': '0 0 40px rgba(0, 217, 255, 0.8)',
            'border-color': 'rgba(0, 217, 255, 0.8)'
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(0, 217, 255, 0.3)' 
          },
          '50%': { 
            'box-shadow': '0 0 40px rgba(0, 217, 255, 0.6)' 
          },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'cyber-grid': `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23233554' fill-opacity='0.1'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
        'light-cyber-grid': `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.02'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'neon': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-strong': '0 0 40px rgba(0, 217, 255, 0.8)',
        'neon-light': '0 0 20px rgba(0, 102, 204, 0.3)',
        '3d': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        '3d-light': '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'navbar': '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'navbar-light': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config