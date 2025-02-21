'use client'

import AboutSection from '@/components/home/about'
import Hero from '@/components/home/hero'
import { getuser } from '@/helpers/endpiont'
import { useFetch } from '@/helpers/use_fetch'
import React, { useEffect, useState } from 'react'

const Page = () => {
  // const { data, getData } = useFetch(getuser)
  // console.log("🚀 ~ Page ~ data:", data)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.backendUrl}${getuser}`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  console.log("🚀 ~ Page ~ data:", data)


  return (
    <div>
      <Hero />
      <AboutSection />
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  )
}

export default Page