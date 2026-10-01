import type { ReactNode } from "react";

interface SettingsCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SettingsCard({
  title,
  description,
  children,
}: SettingsCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      <div className="p-6">{children}</div>
    </section>
  );
}
