'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <span>© {currentYear} João Victor de Souza Brayner.</span>
            <span>{t('footer.rights')}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/braynerdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-victor-brayner-817599323/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dev.brayner@outlook.com"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-gray-600 dark:text-gray-400"
          >
            <span>{t('footer.madeBy')} João Brayner</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
