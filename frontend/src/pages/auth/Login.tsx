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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500">Log in to continue your learning journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm text-gray-700">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm text-gray-700">
            <span className="mb-1.5 block font-medium">Password</span>
            <input
              type="password"
              value={form.password}
              onChange={(event) => setForm((previous) => ({ ...previous, password: event.target.value }))}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800">
            Log in
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          New here?{' '}
          <Link to="/register" className="font-medium text-gray-900 underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
