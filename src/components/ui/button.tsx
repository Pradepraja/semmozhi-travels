import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#f5a623] text-[#1c1200] hover:bg-[#ffb83d] hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(245,166,35,0.35)] hover:shadow-[0_10px_22px_rgba(245,166,35,0.45)]",
        blue:
          "bg-[#1b4b8f] text-white hover:bg-[#2f6dc4] hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(27,75,143,0.35)] hover:shadow-[0_10px_22px_rgba(27,75,143,0.45)]",
        outline:
          "border-2 border-[#1b4b8f] text-[#1b4b8f] hover:bg-[#1b4b8f] hover:text-white shadow-sm",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20bd5a] hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(37,211,102,0.35)]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
