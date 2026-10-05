import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-text-secondary">{label}</label>}
      <input
        {...props}
        className={`w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
      />
    </div>
  )
}

export default Input
