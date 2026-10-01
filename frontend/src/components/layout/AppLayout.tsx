import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import MobileSidebar from './MobileSidebar'
import Sidebar from './Sidebar'

function AppLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="fixed inset-y-0 left-0 hidden lg:block"><Sidebar /></div>
      <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <Header onMenuClick={() => setMobileSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
