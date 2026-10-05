import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { RegisterRequest } from '../../types/auth'

const initialForm: RegisterRequest = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  collegeName: '',
}

function Register() {
  const [form, setForm] = useState<RegisterRequest>(initialForm)
  const [error, setError] = useState('')

  const handleChange = (field: keyof RegisterRequest, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setError('')
    console.log('Register request payload', { ...form, profilePhoto: undefined })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-text">
      <div className="w-full max-w-xl rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text">Create your account</h1>
          <p className="mt-2 text-sm text-text-secondary">Join the student learning platform.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-text-secondary">
              <span className="mb-1.5 block font-medium">First name</span>
              <input
                value={form.firstName}
                onChange={(event) => handleChange('firstName', event.target.value)}
                className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="block text-sm text-text-secondary">
              <span className="mb-1.5 block font-medium">Last name</span>
              <input
                value={form.lastName}
                onChange={(event) => handleChange('lastName', event.target.value)}
                className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          <label className="block text-sm text-text-secondary">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-text-secondary">
              <span className="mb-1.5 block font-medium">Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => handleChange('password', event.target.value)}
                className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            <label className="block text-sm text-text-secondary">
              <span className="mb-1.5 block font-medium">Confirm password</span>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(event) => handleChange('confirmPassword', event.target.value)}
                className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          <label className="block text-sm text-text-secondary">
            <span className="mb-1.5 block font-medium">College name</span>
            <input
              value={form.collegeName}
              onChange={(event) => handleChange('collegeName', event.target.value)}
              className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="block text-sm text-text-secondary">
            <span className="mb-1.5 block font-medium">Profile photo</span>
            <input
              type="file"
              onChange={(event) => {
                const file = event.target.files?.[0]
                setForm((previous) => ({ ...previous, profilePhoto: file }))
              }}
              className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          {error && <p className="text-sm text-danger">{error}</p>}

          <button type="submit" className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black transition hover:bg-primary-hover">
            Create account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:text-primary-hover">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
