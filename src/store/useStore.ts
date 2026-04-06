import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale } from '@/i18n'

interface AppState {
  locale: Locale
  theme: 'light' | 'dark'
  isLoading: boolean
  activeSection: string
  setLocale: (locale: Locale) => void
  setTheme: (theme: 'light' | 'dark') => void
  toggleTheme: () => void
  setIsLoading: (isLoading: boolean) => void
  setActiveSection: (section: string) => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      locale: 'pt-BR',
      theme: 'dark',
      isLoading: true,
      activeSection: 'hero',
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
      setIsLoading: (isLoading) => set({ isLoading }),
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ locale: state.locale, theme: state.theme }),
    }
  )
)
