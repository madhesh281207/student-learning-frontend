import {
  CalendarDays,
  MapPin,
  Pencil,
  Trophy,
} from "lucide-react";

import type { ProfileUser } from "../../types/profile";

interface Props {
  user: ProfileUser;
  onEdit: () => void;
}

export default function ProfileHeader({
  user,
  onEdit,
}: Props) {
  const initials =
    `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="h-32 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600" />

      <div className="px-6 pb-6">
        <div className="-mt-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={`${user.firstName} ${user.lastName}`}
                className="h-28 w-28 rounded-2xl border-4 border-white object-cover shadow-lg dark:border-slate-900"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-3xl font-bold text-indigo-700 shadow-lg dark:border-slate-900 dark:bg-indigo-500/20 dark:text-indigo-400">
                {initials}
              </div>
            )}

            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {user.firstName} {user.lastName}
                </h1>

                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                  Student
                </span>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                @{user.username}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Trophy size={14} />
                  Rank #{user.rank}
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {user.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  Joined {user.joinedDate}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Pencil size={16} />
            Edit profile
          </button>
        </div>

        <div className="mt-6 max-w-3xl">
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {user.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {user.college}
          </span>

          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Preferred: {user.preferredLanguage}
          </span>
        </div>
      </div>
    </section>
  );
}
