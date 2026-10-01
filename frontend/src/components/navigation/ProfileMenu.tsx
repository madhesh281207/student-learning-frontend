import { useState } from 'react'
import { Link } from 'react-router-dom'

import { mockUser } from '../../mocks/users'

function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const initials = `${mockUser.firstName[0]}${mockUser.lastName[0]}`.toUpperCase()

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
        aria-expanded={isOpen}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          <span className="text-sm font-medium text-gray-700">{initials}</span>
        </div>

        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium text-gray-900">{`${mockUser.firstName} ${mockUser.lastName}`}</p>
          <p className="text-xs text-gray-500">{mockUser.email}</p>
        </div>

        <span className="text-gray-400">⌄</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-lg border bg-white py-2 shadow-lg">
          <div className="border-b px-4 py-3">
            <p className="text-sm font-medium text-gray-900">{`${mockUser.firstName} ${mockUser.lastName}`}</p>
            <p className="truncate text-xs text-gray-500">{mockUser.email}</p>
          </div>

          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Profile &amp; History
          </Link>

          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            Settings
          </button>

          <div className="my-1 border-t" />

          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
