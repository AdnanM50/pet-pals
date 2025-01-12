import React from 'react'
import Sidebar from './components/layout/sideber'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1  transition-all duration-300 ease-in-out p-5" id="main-content">
        {children}
      </div>
    </div>
  )
}

export default Layout