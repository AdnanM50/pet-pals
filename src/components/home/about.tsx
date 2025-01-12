import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowDownRight } from 'lucide-react'

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            How we take care of your  <span className="text-pink-400">Pet</span> 
          </h1>
          <p className="text-gray-600 max-w-md">
            Want to train your pet? Or Looking for someone who takes care of your pet? Well we are here.
          </p>
          <div className="flex gap-4 relative">
            <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6">
              Book A Schedule
            </Button>
            <Button variant="outline" className="rounded-full px-6">
              Price Pack
            </Button>
            <div className="absolute -bottom-16 left-0 flex items-center">
              <ArrowDownRight className="w-16 h-16 text-pink-400 rotate-45" />
              <span className="text-gray-600 ml-2">Do it Now...!!</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Main circular frame */}
          <div className="relative aspect-video rounded-full bg-pink-200/50 overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Pet care service"
              width={600}
              height={600}
              className="object-cover"
            />
            
            {/* Feature badges */}
            <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Safety icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="text-sm">
                <p className="font-semibold">Safety First</p>
                <p className="text-xs text-gray-600">We care them like babies</p>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Playground icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="text-sm">
                <p className="font-semibold">Spacious play yards</p>
                <p className="text-xs text-gray-600">We play on a field</p>
              </div>
            </div>
          </div>

          {/* Floating pet icons */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-12 h-12 rounded-full bg-white shadow-lg p-2
                ${i === 0 ? 'top-0 left-1/4' : ''}
                ${i === 1 ? 'top-1/4 right-0' : ''}
                ${i === 2 ? 'bottom-1/4 left-0' : ''}
                ${i === 3 ? 'bottom-0 right-1/4' : ''}
              `}
            >
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt={`Pet icon ${i + 1}`}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

