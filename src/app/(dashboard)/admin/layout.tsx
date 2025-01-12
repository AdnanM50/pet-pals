'use client'
import { useAuth } from '@/contexts/user_context'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (user?.role !== "admin") {
            router.push("/login");
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Layout