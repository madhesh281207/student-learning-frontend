import type {
  SettingsSection,
  UserSettings,
} from "../types/settings";

export const settingsSections: SettingsSection[] = [
  {
    id: "profile",
    title: "Profile",
    description: "Manage your public profile information.",
  },
  {
    id: "account",
    title: "Account",
    description: "Manage account and regional preferences.",
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Customize how Tenfinity looks.",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Control when Tenfinity contacts you.",
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Control what other students can see.",
  },
  {
    id: "security",
    title: "Security",
    description: "Protect your Tenfinity account.",
  },
  {
    id: "learning",
    title: "Learning",
    description: "Customize your learning experience.",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Make Tenfinity easier to use.",
  },
  {
    id: "language",
    title: "Language & Region",
    description: "Manage language and regional formatting.",
  },
  {
    id: "danger",
    title: "Danger Zone",
    description: "Export or permanently remove your account.",
  },
];

export const defaultSettings: UserSettings = {
  profile: {
    firstName: "Krish",
    lastName: "Kumar",
    username: "dev_krish",
    email: "krish@example.com",
    college: "IIT Delhi",
    bio: "Computer science student preparing for coding interviews and placements.",
    avatar: "",
  },

  account: {
    timezone: "Asia/Kolkata",
    language: "English",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "12-hour",
  },

  appearance: {
    theme: "system",
    compactMode: false,
    reduceMotion: false,
    highContrast: false,
  },

  notifications: {
    emailNotifications: true,
    inAppNotifications: true,
    problemReminders: true,
    streakReminders: true,
    leaderboardUpdates: true,
    submissionResults: true,
    weeklyProgress: true,
    productUpdates: false,
  },

  privacy: {
    publicProfile: true,
    showCollege: true,
    showActivity: true,
    showLeaderboardPresence: true,
    showSolvedProblems: true,
    showStreak: true,
  },

  security: {
    twoFactorEnabled: false,
    loginAlerts: true,
  },

  learning: {
    defaultDifficulty: "mixed",
    preferredLanguage: "typescript",
    dailyGoal: 3,
    weeklyTarget: 15,
    showHints: true,
    autoSavePreferences: true,
    showExplanationsAfterSubmission: true,
  },

  accessibility: {
    fontSize: "medium",
    keyboardNavigation: true,
    screenReaderOptimized: false,
    strongFocusIndicators: true,
    reduceAnimations: false,
  },

  language: {
    interfaceLanguage: "English",
    codeLanguage: "typescript",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "12-hour",
  },
};