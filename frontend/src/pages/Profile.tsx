import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";
import ProblemProgress from "../components/profile/ProblemProgress";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import SubmissionHistory from "../components/profile/SubmissionHistory";
import AchievementGrid from "../components/profile/AchievementGrid";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileEditModal from "../components/profile/ProfileEditModal";
import ProfileSkeleton from "../components/profile/ProfileSkeleton";

import { profileService } from "../services/profileService";

import type {
  ProfileResponse,
  ProfileTab,
  ProfileUser,
} from "../types/profile";

export default function Profile() {
  const [data, setData] =
    useState<ProfileResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [activeTab, setActiveTab] =
    useState<ProfileTab>("overview");

  const [editOpen, setEditOpen] = useState(false);

  const [toast, setToast] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError("");

        const result =
          await profileService.getProfile();

        setData(result);
      } catch {
        setError(
          "Unable to load your profile.",
        );
      } finally {
        setLoading(false);
      }
    };

    void loadProfile();
  }, []);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToast("");
    }, 3000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [toast]);

  const handleProfileSave = async (
    user: ProfileUser,
  ) => {
    if (!data) {
      return;
    }

    const updated = await profileService.updateProfile({
      ...data,
      user,
    });

    setData(updated);
    setToast("Profile updated successfully.");
  };

  const renderContent = () => {
    if (!data) {
      return null;
    }

    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <ProfileStats user={data.user} />

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <ProblemProgress
                progress={data.progress}
              />

              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
                  <h2 className="font-semibold text-slate-900 dark:text-white">
                    Learning summary
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    A quick view of your current learning journey.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-px overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <div className="bg-white p-5 dark:bg-slate-900">
                    <p className="text-xs text-slate-500">
                      Total attempts
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {data.user.totalAttempts.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white p-5 dark:bg-slate-900">
                    <p className="text-xs text-slate-500">
                      Successful
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {data.user.successfulSubmissions.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white p-5 dark:bg-slate-900">
                    <p className="text-xs text-slate-500">
                      Longest streak
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      {data.user.longestStreak} days
                    </p>
                  </div>

                  <div className="bg-white p-5 dark:bg-slate-900">
                    <p className="text-xs text-slate-500">
                      Current rank
                    </p>

                    <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                      #{data.user.rank}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ActivityTimeline
              activities={data.activities.slice(0, 5)}
            />
          </div>
        );

      case "activity":
        return (
          <ActivityTimeline
            activities={data.activities}
          />
        );

      case "submissions":
        return (
          <SubmissionHistory
            submissions={data.submissions}
          />
        );

      case "achievements":
        return (
          <AchievementGrid
            achievements={data.achievements}
          />
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProfileSkeleton />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-full bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="max-w-md text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                <AlertCircle size={22} />
              </div>

              <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                Unable to load profile
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {error ||
                  "Something went wrong while loading your profile."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50 px-4 py-6 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <ProfileHeader
          user={data.user}
          onEdit={() => setEditOpen(true)}
        />

        <section className="rounded-2xl border border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
          <ProfileTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </section>

        {renderContent()}
      </div>

      <ProfileEditModal
        user={data.user}
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={handleProfileSave}
      />

      {toast && (
        <div className="fixed bottom-6 right-6 z-[110] flex items-center gap-3 rounded-xl border border-emerald-200 bg-white px-4 py-3 shadow-xl dark:border-emerald-500/20 dark:bg-slate-900">
          <CheckCircle2
            size={18}
            className="text-emerald-500"
          />

          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {toast}
          </p>
        </div>
      )}
    </div>
  );
}
