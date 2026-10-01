export type SettingsSectionId =
  | "profile"
  | "account"
  | "appearance"
  | "notifications"
  | "privacy"
  | "security"
  | "learning"
  | "accessibility"
  | "language"
  | "danger";

export type ThemeMode = "light" | "dark" | "system";

export type Difficulty = "easy" | "medium" | "hard" | "mixed";

export type FontSize = "small" | "medium" | "large" | "extra-large";

export type PreferredLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "cpp"
  | "c"
  | "go";

export interface ProfileSettings {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  college: string;
  bio: string;
  avatar: string;
}

export interface AccountSettings {
  timezone: string;
  language: string;
  dateFormat: string;
  timeFormat: "12-hour" | "24-hour";
}

export interface AppearanceSettings {
  theme: ThemeMode;
  compactMode: boolean;
  reduceMotion: boolean;
  highContrast: boolean;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  inAppNotifications: boolean;
  problemReminders: boolean;
  streakReminders: boolean;
  leaderboardUpdates: boolean;
  submissionResults: boolean;
  weeklyProgress: boolean;
  productUpdates: boolean;
}

export interface PrivacySettings {
  publicProfile: boolean;
  showCollege: boolean;
  showActivity: boolean;
  showLeaderboardPresence: boolean;
  showSolvedProblems: boolean;
  showStreak: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  loginAlerts: boolean;
}

export interface LearningSettings {
  defaultDifficulty: Difficulty;
  preferredLanguage: PreferredLanguage;
  dailyGoal: number;
  weeklyTarget: number;
  showHints: boolean;
  autoSavePreferences: boolean;
  showExplanationsAfterSubmission: boolean;
}

export interface AccessibilitySettings {
  fontSize: FontSize;
  keyboardNavigation: boolean;
  screenReaderOptimized: boolean;
  strongFocusIndicators: boolean;
  reduceAnimations: boolean;
}

export interface LanguageSettings {
  interfaceLanguage: string;
  codeLanguage: PreferredLanguage;
  dateFormat: string;
  timeFormat: "12-hour" | "24-hour";
}

export interface UserSettings {
  profile: ProfileSettings;
  account: AccountSettings;
  appearance: AppearanceSettings;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  security: SecuritySettings;
  learning: LearningSettings;
  accessibility: AccessibilitySettings;
  language: LanguageSettings;
}

export interface SettingsSection {
  id: SettingsSectionId;
  title: string;
  description: string;
}