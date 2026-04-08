'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface CertificationItem {
  name: string
  institution: string
  year: string
  credential: string
}

export function Certifications() {
  const { t, tObject } = useTranslation()
  const items = tObject<CertificationItem[]>('certifications.items')

  return (
    <SectionWrapper id="certifications" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('certifications.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('certifications.subtitle')}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card p-6 relative overflow-hidden w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary-500" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-primary-500 font-medium text-sm mb-1">
                  {item.institution}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {item.year}
                </p>

                {item.credential && (
                  <a
                    href={item.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 transition-colors"
                  >
                    <span>{t('certifications.viewCredential') || 'Ver credencial'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
