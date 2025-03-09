'use client'

import AboutSection from '@/components/home/about'
import Hero from '@/components/home/hero'
import { fetchUserList } from '@/hooks/endpiont'
import { useFetch } from '@/hooks/use_fetch'
// import { fetchUserList } from '@/hooks/endpiont'
// import { useFetch } from '@/hooks/use_fetch'
// import { useFetch } from '@/hooks/use_fetch'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

const Page = () => {
  const { data, error, isLoading } = useFetch(fetchUserList);

  console.log("🚀 ~ Page ~ data:123", data?.data)


  return (
    <div>
      <Hero />
      <AboutSection />
      <Link href="/about">About</Link>
    </div>
  )
}

export default Page