import type { ProfileTab } from "../../types/profile";

interface Props {
  activeTab: ProfileTab;
  onChange: (tab: ProfileTab) => void;
}

const tabs: {
  id: ProfileTab;
  label: string;
}[] = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "activity",
    label: "Activity",
  },
  {
    id: "submissions",
    label: "Submissions",
  },
  {
    id: "achievements",
    label: "Achievements",
  },
];

export default function ProfileTabs({
  activeTab,
  onChange,
}: Props) {
  return (
    <div className="overflow-x-auto border-b border-slate-200 dark:border-slate-800">
      <div className="flex min-w-max gap-6">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`relative py-4 text-sm font-medium transition ${
                active
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}

              {active && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-indigo-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
