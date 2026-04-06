'use client'

import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, Users } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

const highlightIcons = {
  experience: Briefcase,
  projects: FolderGit2,
  clients: Users,
}

export function About() {
  const { t, tObject } = useTranslation()
  const highlights = tObject<{
    experience: { title: string; value: string }
    projects: { title: string; value: string }
    clients: { title: string; value: string }
  }>('about.highlights')

  return (
    <SectionWrapper id="about" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('about.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl -rotate-6 opacity-20" />
              <div className="relative glass-card p-8 h-full flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-6xl md:text-8xl font-bold text-white">
                  JV
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(highlights).map(([key, value], index) => {
                const IconComponent = highlightIcons[key as keyof typeof highlightIcons]
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 text-center card-hover"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {value.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {value.title}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
