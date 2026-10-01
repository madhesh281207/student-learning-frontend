import ProfileMenu from './ProfileMenu'

interface NavbarProps {
  onMenuClick: () => void
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Open sidebar"
        >
          ☰
        </button>

        <h2 className="hidden text-sm font-medium text-gray-500 sm:block">
          Student Learning Platform
        </h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <span>🔔</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <ProfileMenu />
      </div>
    </header>
  )
}

export default Navbar
