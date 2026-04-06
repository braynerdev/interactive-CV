'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

export function Education() {
  const { t, tObject } = useTranslation()
  const items = tObject<EducationItem[]>('education.items')

  return (
    <SectionWrapper id="education" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('education.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('education.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500" />

            <div className="space-y-8">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <motion.div
                    className="glass-card p-6 card-hover"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                        <GraduationCap className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    
                    <p className="text-primary-500 font-medium mb-3">
                      {item.institution}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
