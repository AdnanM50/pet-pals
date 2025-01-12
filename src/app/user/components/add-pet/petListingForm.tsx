'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Baby, Dog, Heart, UserIcon as Male, UserIcon as Female, Sword, Search, Footprints, Feather, Crown, Brain, HeartIcon, PlayCircle, Shield, Hammer, Skull, BeakerIcon as Bear, Eye, Volume2, Ghost, Minus, Users, Anchor, } from 'lucide-react'
import Image from 'next/image'
import ImageUpload from '@/components/common/form/image_upload'
import { Input } from '@/components/ui/input'

const ageFilters = [
  { id: "puppy", label: "Puppy", icon: <Baby className="h-4 w-4" /> },
  { id: "young", label: "Young", icon: <Heart className="h-4 w-4" /> },
  { id: "adult", label: "Adult", icon: <Dog className="h-4 w-4" /> },
  { id: "senior", label: "Senior", icon: <Search className="h-4 w-4" /> },
]

const sizeFilters = [
  { id: "x-small", label: "X-Small", icon: <Dog className="h-3 w-3" /> },
  { id: "small", label: "Small", icon: <Dog className="h-3.5 w-3.5" /> },
  { id: "medium", label: "Medium", icon: <Dog className="h-4 w-4" /> },
  { id: "large", label: "Large", icon: <Dog className="h-5 w-5" /> },
  { id: "x-large", label: "X-Large", icon: <Dog className="h-6 w-6" /> },
]

const temperamentFilters = [
  { id: "affectionate", label: "Affectionate", icon: <HeartIcon className="h-4 w-4" /> },
  { id: "aggressive", label: "Aggressive", icon: <Sword className="h-4 w-4" /> },
  { id: "curious", label: "Curious", icon: <Search className="h-4 w-4" /> },
  { id: "docile", label: "Docile", icon: <Feather className="h-4 w-4" /> },
  { id: "energetic", label: "Energetic", icon: <Footprints className="h-4 w-4" /> },
  { id: "gentle", label: "Gentle", icon: <Baby className="h-4 w-4" /> },
  { id: "independent", label: "Independent", icon: <Crown className="h-4 w-4" /> },
  { id: "smart", label: "Smart", icon: <Brain className="h-4 w-4" /> },
  { id: "loyal", label: "Loyal", icon: <Heart className="h-4 w-4" /> },
  { id: "playful", label: "Playful", icon: <PlayCircle className="h-4 w-4" /> },
  { id: "protective", label: "Protective", icon: <Shield className="h-4 w-4" /> },
  { id: "rough", label: "Rough", icon: <Hammer className="h-4 w-4" /> },
  { id: "mischievous", label: "Mischievous", icon: <Skull className="h-4 w-4" /> },
  { id: "cuddly", label: "Cuddly", icon: <Bear className="h-4 w-4" /> },
  { id: "shy", label: "Shy", icon: <Eye className="h-4 w-4" /> },
  { id: "vocal", label: "Vocal", icon: <Volume2 className="h-4 w-4" /> },
  { id: "fearful", label: "Fearful", icon: <Ghost className="h-4 w-4" /> },
  { id: "quiet", label: "Quiet", icon: <Minus className="h-4 w-4" /> },
  { id: "social", label: "Social", icon: <Users className="h-4 w-4" /> },
  { id: "stubborn", label: "Stubborn", icon: <Anchor className="h-4 w-4" /> },
]

const sexFilters = [
  { id: "female", label: "Female", icon: <Female className="h-4 w-4" /> },
  { id: "male", label: "Male", icon: <Male className="h-4 w-4" /> },
]

export default function PropertyListingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
  })
  const [age, setAge] = useState("adult")
  const [size, setSize] = useState("medium")
  const [temperaments, setTemperaments] = useState<string[]>([])
  const [gender, setGender] = useState("female")

  const steps = [1, 2, 3, 4, 5]

  const handleNext = (e) => {
    e?.preventDefault()
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const toggleTemperament = (id: string) => {
    setTemperaments(prev =>
      prev.includes(id)
        ? prev.filter(t => t !== id)
        : [...prev, id]
    )
  }

  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({ ...prev, category }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const submittedData = {
      ...formData,
      age,
      size,
      temperaments,
      gender,
    }

    try {
      const response = await fetch(`${process.env.backendUrl}/pet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submittedData),
        credentials: 'include',
      }).then((res) => res.json())

      if (response.status === 201 && response?.data) {
        // Handle successful submission (e.g., show a success message or redirect)
        console.log('Pet added successfully')
        // Redirect or show success message
      } else {
        console.error('Failed to add pet:', response)
      }
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Error adding pet:', error)
    }
  }

  return (
    <div className="py-8">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl !text-center font-bold">
          {currentStep === 1 ? "It's easy to add your pet" : ""}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-8 flex justify-around items-center">
              <Image src="/pets.jpg" width={300} height={300} alt="pet" />
            </div>
          )}

          {currentStep === 2 && (
            <div className="flex justify-around flex-col items-center space-y-4">
              <h1 className="text-4xl !text-center font-bold">Select your pet category</h1>
              <div className="flex gap-6 mt-6">
                <div
                  className={`flex justify-center items-center border-[6px] rounded-full p-12 cursor-pointer ${
                    formData.category === 'cat' ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => handleCategorySelect('cat')}
                >
                  <Image src="/cat.jpg" width={300} height={300} alt="pet" className="w-[200px] h-[200px]" />
                </div>
                <div
                  className={`flex justify-center items-center border-[6px] rounded-full p-12 cursor-pointer ${
                    formData.category === 'dog' ? 'border-primary' : 'border-border'
                  }`}
                  onClick={() => handleCategorySelect('dog')}
                >
                  <Image src="/dog.jpg" width={300} height={300} alt="pet" className="w-[200px] h-[200px]" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 p-6">
              <h1 className="text-4xl !text-center font-bold">Select your pet age and size</h1>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-500">AGE</h3>
                <div className="flex flex-wrap gap-2">
                  {ageFilters.map((filter) => (
                    <button
                      type="button"
                      key={filter.id}
                      onClick={() => setAge(filter.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                        age === filter.id
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-border bg-background hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {filter.icon}
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-500">SIZE</h3>
                <div className="flex flex-wrap gap-2">
                  {sizeFilters.map((filter) => (
                    <button
                      type="button"
                      key={filter.id}
                      onClick={() => setSize(filter.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                        size === filter.id
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-border bg-background hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {filter.icon}
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-6 p-6">
                <h1 className="text-4xl !text-center font-bold">Select your pet temperament and sex</h1>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-zinc-500">TEMPERAMENTS</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {temperamentFilters.map((filter) => (
                      <button
                      type='button'
                        key={filter.id}
                        onClick={() => toggleTemperament(filter.id)}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                          temperaments.includes(filter.id)
                            ? "border-transparent bg-primary text-primary-foreground"
                            : "border-border bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {filter.icon}
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-zinc-500">SEX</h3>
                  <div className="flex flex-wrap gap-2">
                    {sexFilters.map((filter) => (
                      <button
                      type='button'
                        key={filter.id}
                        onClick={() => setGender(filter.id)}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                          gender === filter.id
                            ? "border-transparent bg-primary text-primary-foreground"
                            : "border-border bg-background hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {filter.icon}
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <ImageUpload
                onChange={(value: string, name: string) => setFormData((prev) => ({ ...prev, image: value, name }))}
                value={formData.image}
                name={formData.name}
              />
              <Input placeholder="Name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
              <Textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              />
            </div>
          )}
        </div>

        <div className="flex justify-between p-6">
          <Button type="button" onClick={handleBack} disabled={currentStep === 1}>
            Back
          </Button>
          {currentStep === steps.length ? (
            <Button type="submit">Submit</Button>
          ) : (
            <Button type="button" onClick={(e) => handleNext(e)}>
              Next
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}