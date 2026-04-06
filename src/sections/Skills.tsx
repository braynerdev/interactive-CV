'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

interface HardSkill {
  name: string
  level: number
}

interface HardSkillsData {
  title: string
  items: HardSkill[]
}

interface SoftSkillsData {
  title: string
  items: string[]
}

export function Skills() {
  const { t, tObject } = useTranslation()
  const hardSkills = tObject<HardSkillsData>('skills.hardSkills')
  const softSkills = tObject<SoftSkillsData>('skills.softSkills')

  return (
    <SectionWrapper id="skills" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('skills.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              {hardSkills.title}
            </h3>
            <div className="space-y-6">
              {hardSkills.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-primary-500 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              {softSkills.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-gray-700 dark:text-gray-300 font-medium cursor-default hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
