import { Link } from '@tanstack/react-router'
import { MENU_ITEMS } from '@admin/utils/constants'
import clsx from 'clsx'

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@ui/components/dropdown-menu';

const Header = () => {

  return <header className='sticky top-0 z-50 flex items-center gap-6 bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40'>
    <Link to='/'>
      <img alt='logo' height={30} width={36} src='/architecture.svg' />
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
      <div className='flex items-center gap-6'>
        {MENU_ITEMS.map((item) => (
          <Link key={item.key} className={clsx(
            'text-sm text-foreground/60 hover:text-foreground/80',
            '[&.active]:font-medium [&.active]:text-foreground/90'
          )} to={item.pathname}>{item.label}</Link>
        ))}
      </div>
    </nav>
  </header>
}
export default Header