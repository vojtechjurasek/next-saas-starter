import { Inter } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
})

export const fonts = [fontSans.variable]
