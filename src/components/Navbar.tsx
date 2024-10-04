/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JyNwxnyckPN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/Sheet';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='fixed top-0 z-50 w-full bg-background shadow-sm'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
        <Link to='#' className='flex items-center gap-2'>
          <MountainIcon className='h-6 w-6' />
          <span className='text-lg font-semibold'>UrlTiny</span>
        </Link>
        <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
          <Link to='/about' className='text-muted-foreground hover:text-foreground'>
            About
          </Link>
          <Link to='/services' className='text-muted-foreground hover:text-foreground'>
            Services
          </Link>
          <Link to='/contact' className='text-muted-foreground hover:text-foreground'>
            Contact
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className='rounded-full'>
              <Avatar className='h-8 w-8'>
                <AvatarImage src='/placeholder-user.jpg' alt='@shadcn' />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {/* to */}
            <DropdownMenuItem>
              <MountainIcon className='h-6 w-6' />
              <Link to='/login' className='ml-2 flex justify-around'>
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Create new UrlShort</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='md:hidden'>
            <div className='grid gap-4 p-4'>
              <Link to='#' className='text-lg font-medium'>
                Home
              </Link>
              <Link to='#' className='text-lg font-medium'>
                About
              </Link>
              <Link to='#' className='text-lg font-medium'>
                Services
              </Link>
              <Link to='#' className='text-lg font-medium'>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

// Icon components props
// width: 24
// height: 24

interface IconProps {
  className?: string;
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function MountainIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}
