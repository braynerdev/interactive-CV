'use client'

import { motion } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  ShieldCheck, 
  Package, 
  Flame, 
  Wheat, 
  Bus, 
  CreditCard,
  Ticket,
  Calculator,
  Folder
} from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  view?: string
  image?: string
  Architecture?: string[]
  status?: string
  level_code?: string
}

const getProjectIcon = (projectName: string) => {
  const name = projectName.toLowerCase()
  if (name.includes('auth')) return ShieldCheck
  if (name.includes('catalogo') || name.includes('catalog')) return Package
  if (name.includes('fogo') || name.includes('fire')) return Flame
  if (name.includes('agro')) return Wheat
  if (name.includes('rumo')) return Bus
  if (name.includes('terminal')) return CreditCard
  if (name.includes('bilhetagem') || name.includes('ticketing')) return Ticket
  if (name.includes('remuneração') || name.includes('remuneration')) return Calculator
  return Folder
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
                  {(() => {
                    const IconComponent = getProjectIcon(project.name)
                    return <IconComponent className="w-16 h-16 text-primary-500/50 group-hover:scale-110 transition-transform duration-300" />
                  })()}
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
                    {(project.demo || project.view) && (
                      <motion.a
                        href={project.demo || project.view}
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
                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors leading-tight">
                        {project.name}
                      </h3>
                    </div>
                    {project.status && (
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                        project.status.toLowerCase().includes('desenvolvimento') || project.status.toLowerCase().includes('development') || project.status.toLowerCase().includes('andamento') || project.status.toLowerCase().includes('progress')
                          ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                          : 'bg-green-500/10 text-green-600 dark:text-green-400'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {project.Architecture && project.Architecture.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-medium">Arquitetura:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.Architecture.map((arch, archIndex) => (
                          <span
                            key={archIndex}
                            className="px-2 py-0.5 text-xs font-medium bg-accent-500/10 text-accent-500 rounded-full"
                          >
                            {arch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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

                  {project.level_code && (
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <span className={`text-xs font-medium ${
                        project.level_code.toLowerCase() === 'privada' || project.level_code.toLowerCase() === 'private'
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}>
                        {project.level_code.toLowerCase() === 'privada' || project.level_code.toLowerCase() === 'private' ? '🔒' : '🔓'} {project.level_code}
                      </span>
                    </div>
                  )}
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
