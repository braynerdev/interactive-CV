'use client'

import { useEffect, useState } from 'react'
import { useStore } from '@/store/useStore'
import { LoadingScreen } from './LoadingScreen'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const { theme, isLoading, setIsLoading, setTheme } = useStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const savedTheme = localStorage.getItem('portfolio-storage')
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme)
        if (parsed.state?.theme) {
          setTheme(parsed.state.theme)
        }
      } catch {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(prefersDark ? 'dark' : 'light')
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [setIsLoading, setTheme])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, mounted])

  if (!mounted) {
    return null
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  )
}
