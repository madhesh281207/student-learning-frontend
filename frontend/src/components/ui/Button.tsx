import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-black hover:bg-primary-hover',
    secondary: 'border border-border bg-card text-text hover:bg-card-hover',
    ghost: 'text-text-secondary hover:bg-card-hover hover:text-text',
    danger: 'bg-danger text-white hover:bg-danger-light',
  }

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
