'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
}

export function Projects() {
  const { t, tObject } = useTranslation()
  const items = tObject<ProjectItem[]>('projects.items')

  return (
    <SectionWrapper id="projects" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('projects.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden h-full flex flex-col relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-500 z-0" />
                
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center relative overflow-hidden">
                  <Folder className="w-16 h-16 text-primary-500/50 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
