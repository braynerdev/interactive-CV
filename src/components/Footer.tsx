'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'
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
              href="https://github.com/[SEU-USUARIO]"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/[SEU-PERFIL]"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:[SEU-EMAIL@EXEMPLO.COM]"
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
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>{t('footer.by')} JV</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
