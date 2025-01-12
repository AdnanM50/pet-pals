'use client'
import { useAuth } from '@/contexts/user_context'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Layout = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user?.role !== "trainer") {
      router.push("/");
    }
  }, [])

  return (
    <div>Layout</div>
  )
}

export default Layout