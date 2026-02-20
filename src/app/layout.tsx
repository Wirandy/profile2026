import type { Metadata } from 'next'
import { Inter, Outfit, Patrick_Hand } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-patrick',
  display: 'swap',
})

import WaterCursor from '@/components/WaterCursor';

export const metadata: Metadata = {
  title: 'Web3 Developer Portfolio',
  description: 'A modern, futuristic portfolio for a Web3 developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${patrickHand.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
