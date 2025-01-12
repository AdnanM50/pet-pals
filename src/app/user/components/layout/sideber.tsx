"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PawPrint, CalendarDays, Users, Stethoscope, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/user', icon: Home },
  { name: 'Patients', href: '/patients', icon: PawPrint },
  { name: 'Appointments', href: '/appointments', icon: CalendarDays },
  { name: 'Staff', href: '/staff', icon: Users },
  { name: 'Medical Records', href: '/records', icon: Stethoscope },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
      setExpanded(false)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      if (isMobile || isTablet) {
        mainContent.style.marginLeft = isOpen ? '160px' : '0'
      } else {
        mainContent.style.marginLeft = expanded ? '256px' : '64px'
      }
    }
  }, [expanded, isMobile, isTablet, isOpen])

  const toggleSidebar = () => {
    if (isMobile || isTablet) {
      setIsOpen(!isOpen)
    } else {
      setExpanded(!expanded)
    }
  }

  return (
    <>
      <aside 
        className={`
          ${isMobile || isTablet ? (isOpen ? 'translate-x-0' : '-translate-x-full') : (expanded ? 'w-64' : 'w-16')}
          fixed left-0 top-0 z-40
          h-full bg-white text-gray-700
          transition-all duration-300 ease-in-out
          flex flex-col
          border-r
          ${isMobile || isTablet ? 'shadow-lg' : ''}
        `}
      >
        <div className="flex items-center justify-between p-2 ">
          <Link href="/dashboard" className={`flex items-center ${expanded || isMobile || isTablet ? 'px-2' : 'justify-center'}`}>
            <PawPrint className="h-6 w-6 text-blue-500 flex-shrink-0" />
            {(expanded || isMobile || isTablet) && <span className="ml-2 text-lg font-semibold">VetCare</span>}
          </Link>
          <button 
            onClick={toggleSidebar} 
            className={`
              absolute top-1/2 -translate-y-1/2 
              flex items-center justify-center
              h-6 w-6
              rounded-full border border-gray-200
              bg-white hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-300
              transition-all duration-300
              ${expanded ? 'right-0 translate-x-1/2' : 'right-0 translate-x-1/2'}
              shadow-sm
            `}
            aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {expanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
        <nav className={`flex-1 py-2 ${expanded ? 'overflow-y-auto' : ''}`}>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center px-2 py-2 text-sm font-medium rounded-md mx-2
                    ${pathname === item.href ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
                    ${expanded || isMobile || isTablet ? '' : 'justify-center'}
                    group relative
                  `}
                >
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${expanded || isMobile || isTablet ? 'mr-3' : ''}`} />
                  {(expanded || isMobile || isTablet) ? (
                    <span>{item.name}</span>
                  ) : (
                    <span className="absolute left-full ml-2 p-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}