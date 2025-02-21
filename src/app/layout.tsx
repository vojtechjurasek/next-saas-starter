import '@/styles/globals.css'

import { cache, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { Toaster } from '@/components/ui/toaster'
import { siteConfig } from '@/lib/constant'
import { fonts } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import {
  assertIsLocale,
  baseLocale,
  getLocale,
  Locale,
  overwriteGetLocale,
} from '@/paraglide/runtime'

const ssrLocale = cache(() => ({ locale: baseLocale }))

overwriteGetLocale(() => assertIsLocale(ssrLocale().locale))

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title()}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: '/opengraph-image.png',
    type: 'website',
    locale: getLocale(),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: '/opengraph-image.png',
  },
})

const RootLayout = async ({ children }: PropsWithChildren) => {
  // @ts-expect-error - headers must be sync
  // https://github.com/opral/inlang-paraglide-js/issues/245#issuecomment-2608727658
  ssrLocale().locale = headers().get('x-paraglide-locale') as Locale

  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <ThemeSwitcher className="absolute bottom-5 right-5 z-10" />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
