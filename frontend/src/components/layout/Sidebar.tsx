import { ChevronRight, GraduationCap, LogOut } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { accountNavigation, mainNavigation } from '../../config/navigation'

interface SidebarProps {
  onNavigate?: () => void
}

function Sidebar({ onNavigate }: SidebarProps) {
  const renderLinks = (items: typeof mainNavigation) => items.map((item) => {
    const Icon = item.icon

    return (
      <NavLink
        key={item.href}
        to={item.href}
        onClick={onNavigate}
        className={({ isActive }) => `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
          isActive ? 'bg-primary-light text-primary' : 'text-text-secondary hover:bg-card-hover hover:text-text'
        }`}
      >
        {({ isActive }) => (
          <>
            <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-text-muted group-hover:text-text-secondary'}`} />
            <span className="flex-1">{item.label}</span>
            {isActive && <ChevronRight className="h-4 w-4 text-primary" />}
          </>
        )}
      </NavLink>
    )
  })

  return (
    <aside className="flex h-full w-64 flex-col border-r border-border bg-surface">
      <div className="flex h-16 items-center border-b border-border px-5">
        <NavLink to="/dashboard" onClick={onNavigate} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary"><GraduationCap className="h-5 w-5 text-black" /></div>
          <div><p className="text-sm font-bold text-text">Tenfinity</p><p className="text-[10px] text-text-muted">Learn. Practice. Prepare.</p></div>
        </NavLink>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Workspace</p>
        <nav className="space-y-1">{renderLinks(mainNavigation)}</nav>
        <p className="mb-2 mt-8 px-3 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Account</p>
        <nav className="space-y-1">{renderLinks(accountNavigation)}</nav>
      </div>

      <div className="border-t border-border p-3">
        <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-card-hover hover:text-text"><LogOut className="h-5 w-5" /><span>Logout</span></button>
      </div>
    </aside>
  )
}

export default Sidebar
