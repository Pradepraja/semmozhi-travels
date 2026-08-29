import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-50 text-[#1b4b8f] border border-blue-200/60",
        gold:
          "bg-amber-50 text-amber-800 border border-amber-200/80",
        navy:
          "bg-[#12294d] text-white",
        secondary:
          "bg-slate-100 text-slate-800 border border-slate-200",
        outline:
          "border border-slate-300 text-slate-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
