'use client'
// import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU_ITEMS } from '../utils/constants'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '../ui/dropdown-menu';

function Header(): JSX.Element {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 flex items-center gap-6 bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40'>
      <Link href='/'>
        <Image alt='logo' height={30} src='/architecture.svg' width={36} />
      </Link>

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild className="lg:hidden">
          <HamburgerMenuIcon height={30} width={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          {MENU_ITEMS.map((item) => (
            <DropdownMenuItem
              onSelect={() => {
                router.push(item.pathname);
              }}
              className={clsx(pathname === item.pathname && 'bg-accent')}
              key={item.key}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu> */}

      <nav className='flex items-center gap-16'>
        <ul className='flex items-center gap-6'>
          {MENU_ITEMS.map((item) => (
            <li
              key={item.key}
              className={clsx(
                'text-sm text-foreground/60 hover:text-foreground/80',
                pathname.split('/')[1] === item.pathname.split('/')[1] &&
                  'font-medium text-foreground/90'
              )}
            >
              <Link href={item.pathname}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
