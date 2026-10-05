import { useState } from 'react'
import { Link } from 'react-router-dom'

import type { LoginRequest } from '../../types/auth'

const initialForm: LoginRequest = {
  email: '',
  password: '',
}

function Login() {
  const [form, setForm] = useState<LoginRequest>(initialForm)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Login request payload', form)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-text">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text">Welcome back</h1>
          <p className="mt-2 text-sm text-text-secondary">Log in to continue your learning journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm text-text-secondary">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
              className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <label className="block text-sm text-text-secondary">
            <span className="mb-1.5 block font-medium">Password</span>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((previous) => ({ ...previous, password: event.target.value }))}
              className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>

          <button type="submit" className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-black transition hover:bg-primary-hover">
            Log in
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-text-secondary">
          New here?{' '}
          <Link to="/register" className="font-medium text-primary hover:text-primary-hover">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
