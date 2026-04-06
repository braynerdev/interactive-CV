'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { SectionWrapper } from '@/components/SectionWrapper'

export function Contact() {
  const { t } = useTranslation()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: t('contact.email'), href: `mailto:${t('contact.email')}` },
    { icon: Phone, label: 'Phone', value: t('contact.phone'), href: `tel:${t('contact.phone')}` },
    { icon: MapPin, label: 'Location', value: t('contact.location'), href: '#' },
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: t('contact.github') },
    { icon: Linkedin, label: 'LinkedIn', href: t('contact.linkedin') },
  ]

  return (
    <SectionWrapper id="contact" className="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="gradient-text">{t('contact.title')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all"
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={5}
                  className="input-field resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('contact.form.sending')}
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t('contact.form.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.form.send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
