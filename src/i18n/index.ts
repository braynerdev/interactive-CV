import ptBR from './pt-BR.json'
import en from './en.json'

export const translations = {
  'pt-BR': ptBR,
  'en': en,
} as const

export type Locale = keyof typeof translations
export type TranslationKeys = typeof ptBR

export const defaultLocale: Locale = 'pt-BR'
export const locales: Locale[] = ['pt-BR', 'en']
