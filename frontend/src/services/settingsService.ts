import { defaultSettings } from "../data/settingsData";
import type { UserSettings } from "../types/settings";

const STORAGE_KEY = "tenfinity_user_settings";

const delay = (milliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });

export const settingsService = {
  async getSettings(): Promise<UserSettings> {
    await delay(500);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        return structuredClone(defaultSettings);
      }

      const parsed = JSON.parse(stored) as UserSettings;

      return {
        ...structuredClone(defaultSettings),
        ...parsed,
        profile: {
          ...defaultSettings.profile,
          ...parsed.profile,
        },
        account: {
          ...defaultSettings.account,
          ...parsed.account,
        },
        appearance: {
          ...defaultSettings.appearance,
          ...parsed.appearance,
        },
        notifications: {
          ...defaultSettings.notifications,
          ...parsed.notifications,
        },
        privacy: {
          ...defaultSettings.privacy,
          ...parsed.privacy,
        },
        security: {
          ...defaultSettings.security,
          ...parsed.security,
        },
        learning: {
          ...defaultSettings.learning,
          ...parsed.learning,
        },
        accessibility: {
          ...defaultSettings.accessibility,
          ...parsed.accessibility,
        },
        language: {
          ...defaultSettings.language,
          ...parsed.language,
        },
      };
    } catch {
      return structuredClone(defaultSettings);
    }
  },

  async saveSettings(settings: UserSettings): Promise<UserSettings> {
    await delay(700);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(settings),
    );

    return structuredClone(settings);
  },

  async resetSettings(): Promise<UserSettings> {
    await delay(500);

    const reset = structuredClone(defaultSettings);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(reset),
    );

    return reset;
  },

  async changePassword(
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    await delay(800);

    if (!currentPassword.trim()) {
      throw new Error("Current password is required.");
    }

    if (newPassword.length < 8) {
      throw new Error(
        "New password must contain at least 8 characters.",
      );
    }
  },

  async exportData(settings: UserSettings): Promise<Blob> {
    await delay(300);

    const exportData = {
      exportedAt: new Date().toISOString(),
      platform: "Tenfinity",
      settings,
    };

    return new Blob(
      [JSON.stringify(exportData, null, 2)],
      {
        type: "application/json",
      },
    );
  },

  async deactivateAccount(): Promise<void> {
    await delay(600);
  },

  async deleteAccount(): Promise<void> {
    await delay(800);

    localStorage.removeItem(STORAGE_KEY);
  },
};