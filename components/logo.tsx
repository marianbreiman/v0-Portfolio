import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        MAB
      </span>
    </div>
  )
}
