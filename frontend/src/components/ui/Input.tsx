import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...props}
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200 ${className}`}
      />
    </div>
  )
}

export default Input
