import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl glass text-[var(--card-foreground)] shadow", className)}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

export { Card, GlassCard }
