"use client";
import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textarea?: boolean;
}

export type TextareaProps = InputProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps | TextareaProps>(
  ({ label, error, helperText, leftIcon, rightIcon, textarea, className, ...props }, ref) => {
    const inputClassName = cn(
      "w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-[#111827] outline-none transition-all duration-200 placeholder:text-gray-400",
      "focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20",
      error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      className
    );

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}
        <div className="relative w-full">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center pointer-events-none">
              {leftIcon}
            </div>
          )}

          {textarea ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={cn(inputClassName, "py-3 min-h-[100px]")}
              {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputClassName}
              {...(props as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {rightIcon && !textarea && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn("text-xs mt-0.5", error ? "text-red-500" : "text-gray-500")}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
