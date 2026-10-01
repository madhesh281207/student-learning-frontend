import { profileData } from "../data/profileData";
import type { ProfileResponse } from "../types/profile";

const delay = (milliseconds: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });

export const profileService = {
  async getProfile(): Promise<ProfileResponse> {
    await delay(500);

    return structuredClone(profileData);
  },

  async updateProfile(
    profile: ProfileResponse,
  ): Promise<ProfileResponse> {
    await delay(700);

    return structuredClone(profile);
  },
};
