import { HomeIcon, BedSingleIcon, UsersIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const placeTypes = [
  {
    id: 'entire',
    title: 'An Entire Place',
    description: 'Guests have the whole place to themselves.',
    icon: HomeIcon,
  },
  {
    id: 'room',
    title: 'A Room',
    description: 'Guests have their own room in a home, plus access to shared spaces.',
    icon: BedSingleIcon,
  },
  {
    id: 'shared',
    title: 'A Shared Room',
    description: 'Guests sleep in a room or common area that may be shared with you or others.',
    icon: UsersIcon,
  },
]

interface PlaceTypeProps {
  value: string
  onChange: (value: string) => void
}

export function PlaceType({ value, onChange }: PlaceTypeProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">What type of place will guests have?</h2>
      <div className="space-y-2">
        {placeTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange(type.id)}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-lg border hover:border-black transition-colors",
              value === type.id ? "border-black" : "border-gray-200"
            )}
          >
            <type.icon className="w-6 h-6" />
            <div className="text-left">
              <div className="font-medium">{type.title}</div>
              <div className="text-sm text-muted-foreground">{type.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

