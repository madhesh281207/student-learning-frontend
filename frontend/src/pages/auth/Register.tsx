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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="mt-2 text-sm text-gray-500">Join the student learning platform.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-gray-700">
              <span className="mb-1.5 block font-medium">First name</span>
              <input
                value={form.firstName}
                onChange={(event) => handleChange('firstName', event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
              />
            </label>

            <label className="block text-sm text-gray-700">
              <span className="mb-1.5 block font-medium">Last name</span>
              <input
                value={form.lastName}
                onChange={(event) => handleChange('lastName', event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
              />
            </label>
          </div>

          <label className="block text-sm text-gray-700">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-gray-700">
              <span className="mb-1.5 block font-medium">Password</span>
              <input
                type="password"
                value={form.password}
                onChange={(event) => handleChange('password', event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
              />
            </label>

            <label className="block text-sm text-gray-700">
              <span className="mb-1.5 block font-medium">Confirm password</span>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(event) => handleChange('confirmPassword', event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
              />
            </label>
          </div>

          <label className="block text-sm text-gray-700">
            <span className="mb-1.5 block font-medium">College name</span>
            <input
              value={form.collegeName}
              onChange={(event) => handleChange('collegeName', event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm text-gray-700">
            <span className="mb-1.5 block font-medium">Profile photo</span>
            <input
              type="file"
              onChange={(event) => {
                const file = event.target.files?.[0]
                setForm((previous) => ({ ...previous, profilePhoto: file }))
              }}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800">
            Create account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-gray-900 underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
