import {
  Accessibility,
  Bell,
  BookOpen,
  Globe,
  Lock,
  Palette,
  Shield,
  User,
  UserCog,
  AlertTriangle,
} from "lucide-react";

import type { SettingsSectionId } from "../../types/settings";

interface SettingsSidebarProps {
  activeSection: SettingsSectionId;
  onSectionChange: (section: SettingsSectionId) => void;
}

const items = [
  {
    id: "profile" as const,
    title: "Profile",
    icon: User,
  },
  {
    id: "account" as const,
    title: "Account",
    icon: UserCog,
  },
  {
    id: "appearance" as const,
    title: "Appearance",
    icon: Palette,
  },
  {
    id: "notifications" as const,
    title: "Notifications",
    icon: Bell,
  },
  {
    id: "privacy" as const,
    title: "Privacy",
    icon: Shield,
  },
  {
    id: "security" as const,
    title: "Security",
    icon: Lock,
  },
  {
    id: "learning" as const,
    title: "Learning",
    icon: BookOpen,
  },
  {
    id: "accessibility" as const,
    title: "Accessibility",
    icon: Accessibility,
  },
  {
    id: "language" as const,
    title: "Language & Region",
    icon: Globe,
  },
];

export default function SettingsSidebar({
  activeSection,
  onSectionChange,
}: SettingsSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSectionChange(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                active
                  ? "bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </button>
          );
        })}

        <div className="my-2 border-t border-slate-200 dark:border-slate-800" />

        <button
          type="button"
          onClick={() => onSectionChange("danger")}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
            activeSection === "danger"
              ? "bg-red-50 font-medium text-red-700 dark:bg-red-500/10 dark:text-red-400"
              : "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
          }`}
        >
          <AlertTriangle size={18} />
          <span>Danger Zone</span>
        </button>
      </nav>
    </aside>
  );
}
