interface Step {
    id: number
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }
  
  interface StepOverviewProps {
    steps: Step[]
  }
  
  export function StepOverview({ steps }: StepOverviewProps) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex gap-4">
            <div className="flex-shrink-0">
              <step.icon className="w-8 h-8 text-neutral-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  