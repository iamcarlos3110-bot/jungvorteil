"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#3F5E39] text-white hover:bg-[#324B2D] active:scale-95 shadow-sm hover:shadow-md",
  secondary:
    "bg-[#4B7043] text-white hover:bg-[#3B5A34] active:scale-95",
  ghost:
    "bg-transparent text-[#3F5E39] hover:bg-[#EAF0E5] active:scale-95",
  danger:
    "bg-[#DC2626] text-white hover:bg-[#B91C1C] active:scale-95",
  outline:
    "border border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F3F4F6] active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-6 py-3.5 text-base rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, fullWidth, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer select-none",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          (disabled || loading) && "opacity-60 pointer-events-none",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
