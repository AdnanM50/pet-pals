"use client"

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { FiAirplay, FiUser, FiMenu } from 'react-icons/fi'
// import { FaCartShopping, FaChevronDown } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Airplay, ChevronDown, Menu, ShoppingCart, User } from 'lucide-react'

interface NavItem {
  id: number
  link: string
  label: string
  children?: NavItem[]
}

const items: NavItem[] = [
  {
    id: 1,
    link: '/',
    label: 'Home',
  },
  {
    id: 2,
    link: '/',
    label: 'Pets',
    children: [
      { id: 1, link: '/', label: 'Cats' },
      { id: 2, link: '/', label: 'Dogs' },
      { id: 3, link: '/', label: 'Birds' },
    ],
  },
  {
    id: 3,
    link: '/',
    label: 'Services',
    children: [
      { id: 1, link: '/services', label: 'Grooming' },
      { id: 2, link: '/trainers', label: 'Training' },
      { id: 3, link: '/bath-services', label: 'Bath services' },
    ],
  },
  {
    id: 4,
    link: '/our-shop',
    label: 'Products',
  },
]

export default function Navbar() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const NavItems = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center justify-center container gap-4 ${className}`}>
      {items?.map((item) => (
        <div key={item.id} className="flex items-center hover:text-primary p-3 md:py-1 md:px-3 md:rounded">
          {item.children ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 space-y-1">
                <span>{item.label}</span>
                {/* <FaChevronDown /> */}
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.children.map((childItem) => (
                  <DropdownMenuItem key={childItem.id}>
                    <Link href={childItem.link}>{childItem.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={item.link}>{item.label}</Link>
          )}
        </div>
      ))}
      <Link href="/manage-account" className="border-2 border-primary px-4 py-2 rounded text-primary">
        Become A Seller
      </Link>
    </div>
  )

  return (
    <div className="container relative">
      <div className="flex items-center justify-between text-lg font-medium py-4">
        <Link href="/">
          <Image src="/logo/logo.png" className="rounded-xl" width={100} height={100} alt="logo" />
        </Link>

        {!isMobile && <NavItems />}

        <div className="flex items-center gap-4">
          <Link href="/cart">
            {/* <FaCartShopping className="hover:text-primary" /> */}
            <ShoppingCart className="hover:text-primary" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {/* <FiUser className="hover:text-primary" /> */}
              <User className="hover:text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  {/* <FiMenu className="h-5 w-5" /> */}
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <NavItems className="flex-col items-start" />
              </SheetContent>
            </Sheet>
          )}

          <div className="hidden md:block">
            <Button  className="flex items-center gap-2 text-lg">
              {/* <FiAirplay /> */}
              <Airplay />
              <span className="mb-[3px]">How it works</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

