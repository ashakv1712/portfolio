import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Educator & Developer Portfolio',
  description: 'Experienced educator teaching Python, JavaScript, HTML, CSS, Next.js, Mathematics and English with 14+ years of experience working with children and adults.',
  keywords: 'educator, developer, Python, JavaScript, Next.js, mathematics, English, teaching, portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}