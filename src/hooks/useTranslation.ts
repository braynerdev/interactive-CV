'use client'

import { useCallback } from 'react'
import { useStore } from '@/store/useStore'
import { translations, type TranslationKeys } from '@/i18n'

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
          : `${K}`
        : never
    }[keyof T]
  : never

type TranslationKey = NestedKeyOf<TranslationKeys>

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function useTranslation() {
  const { locale, setLocale } = useStore()

  const t = useCallback(
    (key: TranslationKey | string): string => {
      const value = getNestedValue(translations[locale] as Record<string, unknown>, key)
      if (typeof value === 'string') {
        return value
      }
      return key
    },
    [locale]
  )

  const tObject = useCallback(
    <T = unknown>(key: string): T => {
      const value = getNestedValue(translations[locale] as Record<string, unknown>, key)
      return value as T
    },
    [locale]
  )

  return { t, tObject, locale, setLocale }
}
