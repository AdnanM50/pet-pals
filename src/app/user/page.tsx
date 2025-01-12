"use client"

import { useState } from 'react'
import Image from 'next/image'
import {  X, Plus } from 'lucide-react'
import { StaticImageData } from 'next/image'
// import puppy from '@/public/puppy.png'
import { useRouter } from 'next/navigation'
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip'
// import { Tooltip } from 'shadcn';

interface HealthCheck {
  type: string
  date: string
  doctor: string
}

interface HealthStat {
  label: string
  value: string
  unit: string
  icon: React.ReactNode
  color: string
}

interface Pet {
  name: string
  breed: string
  image: StaticImageData
  age: number
  sex: string
  weight: string
  healthChecks: HealthCheck[]
}

const mockPet: Pet = {
  name: "Joshua",
  breed: "French bulldog",
  image: '/puppy.png',
  age: 1,
  sex: "Male",
  weight: "22 lbs",
  healthChecks: [
    {
      type: "Heart rate check",
      date: "01/15/2024",
      doctor: "DR. JOHN BROWN"
    },
    {
      type: "Stomach bacteria",
      date: "9/15/2023",
      doctor: "DR. PETER JACKSON"
    },
    {
      type: "Leg wound",
      date: "07/22/2023",
      doctor: "DR. VANESSA LIM"
    }
  ]
}

// const healthStats: HealthStat[] = [
//   {
//     label: "Heartbeat",
//     value: "57",
//     unit: "bps",
//     icon: <Heart className="h-5 w-5 text-red-500" />,
//     color: "bg-red-50"
//   },
//   {
//     label: "Temperature",
//     value: "38,5",
//     unit: "°",
//     icon: <Thermometer className="h-5 w-5 text-blue-500" />,
//     color: "bg-blue-50"
//   },
//   {
//     label: "Blood pressure",
//     value: "120/66",
//     unit: "",
//     icon: <Activity className="h-5 w-5 text-orange-500" />,
//     color: "bg-orange-50"
//   },
//   {
//     label: "Glucose",
//     value: "7",
//     unit: "mmol/l",
//     icon: <Droplet className="h-5 w-5 text-green-500" />,
//     color: "bg-green-50"
//   }
// ]

export default function VetDashboard() {
  const router = useRouter()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <TooltipProvider>
    <div className="min-h-screen bg-gray-50">
      {/* Pet Drawer */}
      <>
        {/* Backdrop */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
        
        {/* Drawer */}
        <div className={`
          fixed right-0 top-0 z-50 
          h-full w-full sm:w-[360px] 
          bg-white
          transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
             <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
          <div className="flex flex-col h-full">
            {/* Content */}
            <div className="flex-1 overflow-auto px-6">
              <div className="space-y-6 py-6">
                {/* Pet Info */}
                <div className="text-center">
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={'/puppy.png'}
                      alt={mockPet.name}
                      className="w-full h-full object-cover bg-blue-500"
                      width={96}
                      height={96}
                    />
                  </div>
                  <h2 className="text-xl font-semibold">{mockPet.name}</h2>
                  <p className="text-sm text-gray-500 uppercase">{mockPet.breed}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="text-center">
                    <p className="text-2xl font-medium">{mockPet.age}</p>
                    <p className="text-xs text-gray-500">Age</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-medium">{mockPet.sex}</p>
                    <p className="text-xs text-gray-500">Sex</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-medium">{mockPet.weight}</p>
                    <p className="text-xs text-gray-500">Weight</p>
                  </div>
                </div>

                {/* Health Checks */}
                <div>
                  <h3 className="text-sm font-medium mb-4">Last health checks</h3>
                  <div className="space-y-4">
                    {mockPet.healthChecks.map((check, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{check.type}</p>
                          <p className="text-xs text-gray-500">{check.doctor}</p>
                          <p className="text-xs text-gray-400 mt-1">{check.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
        
          </div>
        </div>
      </>

      {/* Main Dashboard */}
      <div className="">
        <div className="w-full space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
  <h1 className="text-2xl font-semibold">Welcome Back, Nicole!</h1>
  <div className="flex space-x-4">
    <button
      onClick={() => setIsDrawerOpen(true)}
      className="flex items-center space-x-2 p-2 rounded-full bg-white shadow-sm hover:shadow"
    >
      <Image
        src={'/puppy.png'}
        alt={mockPet.name}
        className="w-8 h-8 rounded-full"
        width={32}
        height={32}
      />
    </button>
    <Tooltip content="Add a new pet">
  <button
    onClick={() => router.push('/user/add-pets')}
    className="flex items-center px-3 rounded-full text-blue-500 bg-white shadow-sm hover:shadow"
  >
    <span><Plus /></span>
  </button>
</Tooltip>
  </div>
</div>

          {/* Health Stats */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {healthStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-xl font-semibold">
                      {stat.value}
                      <span className="text-sm font-normal ml-1">{stat.unit}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Placeholder for additional dashboard content */}
          {/* <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Average health condition</h2>
          </div> */}
        </div>
      </div>
    </div>
    </TooltipProvider>
  )
}