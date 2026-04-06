'use client'

import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

const sections = [
  'hero',
  'about',
  'experience',
  'education',
  'skills',
  'certifications',
  'projects',
  'languages',
  'contact',
]

export function useScrollSpy() {
  const { setActiveSection } = useStore()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [setActiveSection])
}
