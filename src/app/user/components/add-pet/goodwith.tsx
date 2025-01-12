import { HomeIcon, Building2Icon, WarehouseIcon, BedDoubleIcon, AnchorIcon, BuildingIcon, CaravanIcon, TreesIcon, HotelIcon, FlagIcon, TowerControlIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const propertyTypes = [
  { id: 'house', label: 'House', icon: HomeIcon },
  { id: 'apartment', label: 'Apartment', icon: Building2Icon },
  { id: 'barn', label: 'Barn', icon: WarehouseIcon },
  { id: 'bnb', label: 'Bed & Breakfast', icon: BedDoubleIcon },
  { id: 'boat', label: 'Boat', icon: AnchorIcon },
  { id: 'castle', label: 'Castle', icon: BuildingIcon },
  { id: 'cave', label: 'Cave', icon: HomeIcon },
  { id: 'container', label: 'Container', icon: WarehouseIcon },
  { id: 'cycladic', label: 'Cycladic Home', icon: HomeIcon },
  { id: 'dammuso', label: 'Dammuso', icon: HomeIcon },
  { id: 'dome', label: 'Dome', icon: BuildingIcon },
  { id: 'earthHome', label: 'Earth Home', icon: HomeIcon },
  { id: 'farm', label: 'Farm', icon: TreesIcon },
  { id: 'guesthouse', label: 'Guesthouse', icon: HomeIcon },
  { id: 'hotel', label: 'Hotel', icon: HotelIcon },
  { id: 'ryokan', label: 'Ryokan', icon: FlagIcon },
  { id: 'tower', label: 'Tower', icon: TowerControlIcon },
  { id: 'tiny', label: 'Tiny Home', icon: CaravanIcon },
]

interface PropertyTypeProps {
  value: string
  onChange: (value: string) => void
}

export function PropertyType({ value, onChange }: PropertyTypeProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Which of these best describes your place?</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {propertyTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange(type.id)}
            className={cn(
              "flex flex-col items-center p-4 rounded-lg border hover:border-black transition-colors",
              value === type.id ? "border-black" : "border-gray-200"
            )}
          >
            <type.icon className="w-6 h-6 mb-2" />
            <span className="text-sm text-center">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

