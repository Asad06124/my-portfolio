'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
  toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'devstudio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null)

  // Set theme on client only
  useEffect(() => {
    let initial: Theme = defaultTheme
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as Theme
      if (stored === 'light') {
        initial = stored
      }
    }
    setTheme(initial)
  }, [defaultTheme, storageKey])

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (!theme) return
    const root = window.document.documentElement
    root.classList.remove('light', 'light')
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'light' : 'light'))
  }

  const value = {
    theme: theme || defaultTheme,
    setTheme: (t: Theme) => setTheme(t),
    toggleTheme,
  }

  // Only render children after theme is set on client
  if (theme === null) return null

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider')

  return context
}