'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface LanguageItem {
  name: string
  level: string
  percentage: number
}

export function Languages() {
  const { t, tObject } = useTranslation()
  const items = tObject<LanguageItem[]>('languages.items')
  const levels = tObject<Record<string, string>>('languages.levels')

  return (
    <SectionWrapper id="languages" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('languages.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('languages.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={251.2}
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{ strokeDashoffset: 251.2 - (251.2 * language.percentage) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary-500" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {language.name}
              </h3>

              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-500 rounded-full text-sm font-medium">
                {levels[language.level] || language.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
