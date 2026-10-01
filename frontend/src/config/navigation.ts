import { BarChart3, Code2, FileCheck2, LayoutDashboard, ListChecks, Settings, Trophy, UserCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  label: string
  href: string
  icon: LucideIcon
}

export const mainNavigation: NavigationItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Problems', href: '/problems', icon: Code2 },
  { label: 'Practice', href: '/practice', icon: ListChecks },
  { label: 'Submissions', href: '/submissions', icon: FileCheck2 },
  { label: 'Progress', href: '/progress', icon: BarChart3 },
  { label: 'Leaderboard', href: '/leaderboard', icon: Trophy },
]

export const accountNavigation: NavigationItem[] = [
  { label: 'Profile', href: '/profile', icon: UserCircle },
  { label: 'Settings', href: '/settings', icon: Settings },
]