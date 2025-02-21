import { Middleware, Navigation, PrefixStrategy } from '@inlang/paraglide-next'

import type { Locale } from '@/paraglide/runtime'

const strategy = PrefixStrategy<Locale>({
  prefixDefault: 'never',

  // don't generate alternate routes for the api
  exclude: (pathname) => {
    return pathname.startsWith('/api/') || pathname === '/api'
  },
})

export const middleware = Middleware({ strategy })
export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy })
