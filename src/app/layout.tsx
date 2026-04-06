import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'João Victor de Souza Brayner | Portfolio',
  description: 'Professional portfolio and interactive CV showcasing skills, experience, and projects.',
  keywords: ['portfolio', 'cv', 'resume', 'developer', 'professional'],
  authors: [{ name: 'João Victor de Souza Brayner' }],
  openGraph: {
    title: 'João Victor de Souza Brayner | Portfolio',
    description: 'Professional portfolio and interactive CV showcasing skills, experience, and projects.',
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Victor de Souza Brayner | Portfolio',
    description: 'Professional portfolio and interactive CV showcasing skills, experience, and projects.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
