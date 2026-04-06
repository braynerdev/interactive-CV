'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, ChevronRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export function Experience() {
  const { t, tObject } = useTranslation()
  const items = tObject<ExperienceItem[]>('experience.items')

  return (
    <SectionWrapper id="experience" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('experience.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('experience.subtitle')}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 glow" />

                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass-card p-6 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.role}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>

                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 text-primary-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
