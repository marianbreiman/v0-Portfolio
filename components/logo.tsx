import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
        <rect width="40" height="40" rx="8" className="fill-primary" />
        <path d="M10 10H16L22 30H16L10 10Z" className="fill-primary-foreground" />
        <path d="M18 10H24L30 30H24L18 10Z" className="fill-secondary" />
        <path d="M14 20H26" stroke="currentColor" strokeWidth="2" className="stroke-primary-foreground" />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-heading font-bold text-primary-foreground text-xs">
        MB
      </span>
    </div>
  )
}
