import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({ className, children, subtitle }: { className?: string, children: React.ReactNode, subtitle?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-center space-y-4 mb-12", className)}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{children}</h2>
      {subtitle && <p className="text-lg text-white/70 max-w-[800px]">{subtitle}</p>}
    </div>
  )
}
