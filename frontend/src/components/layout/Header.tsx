import { Bell, Menu, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-surface/95 px-4 backdrop-blur sm:px-6">
      <button type="button" onClick={onMenuClick} className="mr-3 rounded-lg p-2 text-text-muted hover:bg-card-hover lg:hidden" aria-label="Open navigation">
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden max-w-md flex-1 md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
          <input
            type="search"
            placeholder="Search problems..."
            className="h-9 w-full rounded-lg border border-border bg-input pl-9 pr-3 text-sm text-text placeholder:text-text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button type="button" className="relative rounded-lg p-2 text-text-muted hover:bg-card-hover" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <NavLink to="/profile" className="ml-1 flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-card-hover">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">DK</div>
          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-text">Dev Krish</p>
            <p className="text-[10px] text-text-secondary">Student</p>
          </div>
        </NavLink>
      </div>
    </header>
  )
}

export default Header