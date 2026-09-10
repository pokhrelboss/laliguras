import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-[#0A1914] uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-[#9E1A2F] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          required={required}
          className={cn(
            "w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#0A1914] placeholder:text-[#809489] transition-all duration-200 outline-none",
            error
              ? "border-[#D9383A] focus:border-[#D9383A] focus:ring-2 focus:ring-[#D9383A]/20"
              : "border-[#CCD6CE] focus:border-[#9E1A2F] focus:ring-2 focus:ring-[#9E1A2F]/15",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-[#D9383A] font-medium">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-[#52665C]">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-semibold text-[#0A1914] uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-[#9E1A2F] ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          rows={rows}
          className={cn(
            "w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#0A1914] placeholder:text-[#809489] transition-all duration-200 outline-none resize-y",
            error
              ? "border-[#D9383A] focus:border-[#D9383A] focus:ring-2 focus:ring-[#D9383A]/20"
              : "border-[#CCD6CE] focus:border-[#9E1A2F] focus:ring-2 focus:ring-[#9E1A2F]/15",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-[#D9383A] font-medium">{error}</p>}
        {!error && helperText && (
          <p className="text-xs text-[#52665C]">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: (string | SelectOption)[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, required, options, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold text-[#0A1914] uppercase tracking-wider"
          >
            {label}
            {required && <span className="text-[#9E1A2F] ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg border bg-white text-sm text-[#0A1914] transition-all duration-200 outline-none appearance-none cursor-pointer pr-10",
              error
                ? "border-[#D9383A] focus:border-[#D9383A] focus:ring-2 focus:ring-[#D9383A]/20"
                : "border-[#CCD6CE] focus:border-[#9E1A2F] focus:ring-2 focus:ring-[#9E1A2F]/15",
              className
            )}
            {...props}
          >
            {options.map((option) => {
              const value = typeof option === "string" ? option : option.value;
              const text = typeof option === "string" ? option : option.label;
              return (
                <option key={value} value={value}>
                  {text}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#52665C]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && <p className="text-xs text-[#D9383A] font-medium">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
