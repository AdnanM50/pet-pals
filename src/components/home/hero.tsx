'use client'

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Hover } from "../motion/hover"

export default function Hero() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    { name: "DAYCARE", image: '/puppy.png', text: "Daycare for your dog" },
    { name: "TRAINING", image: '/puppy.png', text: "Training for your dog" },
    { name: "BOARDING", image: '/puppy.png', text: "Boarding for your dog" },
    { name: "GROOMING", image: '/puppy.png', text: "Grooming for your dog" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                Your dogs home<br />away from home
              </h1>
              <p className="text-gray-600">
                Our mission is to provide a safe, fun, and nurturing environment for your furry friends.
              </p>
            </div>

            <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded bg-yellow-400 text-white hover:bg-yellow-500">
              RESERVE A PLACE
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              <div className="h-2 w-8 bg-yellow-400" />
              <span className="text-sm font-medium">JOIN TO OUR COMMUNITY</span>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">WORK WITH ALL BREEDS</div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full bg-yellow-100 overflow-hidden"
                  >
                    <Image
                      src={'/puppy.png'}
                      alt={`Dog breed ${i}`}
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
                <button className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative">
            <div className="absolute top-0 right-0 rounded-full bg-yellow-100 p-4 z-10">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">CONTACT US</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 bg-yellow-100 rounded-full" />
              <Image
                src='/puppy.png'
                alt="Happy dog"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={`/puppy.png`}
                      alt={`Reviewer ${i}`}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">4.9</span>
                <span className="text-sm text-gray-600">45k reviews</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                WHAT DO WE OFFER FOR YOUR DOGGIE
              </h2>
              {/* hover part of services */}
              <div className="space-y-2">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="relative"
                    onMouseEnter={() => setHoveredService(service.name)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer">
                      <span className="font-medium">{service.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    {hoveredService === service.name && (
                      <Hover imageSrc={service.image} altText={service.name} text={service.text} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}