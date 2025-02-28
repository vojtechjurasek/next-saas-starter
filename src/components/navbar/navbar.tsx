import Link from 'next/link'

import { LanguageSwitcher } from './language-switcher'

import { auth } from '@/app/api/auth/[...nextauth]/auth-options'
import { SignInButton } from '@/components/navbar/sign-in-button'
import { UserDropdown } from '@/components/navbar/user-dropdown'
import { m } from '@/paraglide/messages'
import { localizeHref } from '@/paraglide/runtime'

export const Navbar = async () => {
  const session = await auth()

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href={localizeHref('/')} className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>
        <div className="flex items-center gap-2">
          {session ? <UserDropdown session={session} /> : <SignInButton />}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
