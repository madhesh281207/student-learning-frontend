import Sidebar from './Sidebar'

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  if (!open) return null
  return <div className="fixed inset-0 z-50 lg:hidden"><button type="button" aria-label="Close navigation" onClick={onClose} className="absolute inset-0 bg-slate-900/40" /><div className="relative h-full w-72 bg-white shadow-xl"><Sidebar onNavigate={onClose} /></div></div>
}

export default MobileSidebar