import SettingsCard from "./SettingsCard";
import SelectRow from "./SelectRow";
import ToggleRow from "./ToggleRow";
import type {
  AccessibilitySettings as AccessibilitySettingsType,
} from "../../types/settings";

interface Props {
  settings: AccessibilitySettingsType;
  onChange: (settings: AccessibilitySettingsType) => void;
}

export default function AccessibilitySettings({
  settings,
  onChange,
}: Props) {
  const update = (
    key: keyof AccessibilitySettingsType,
    value:
      | AccessibilitySettingsType[keyof AccessibilitySettingsType],
  ) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      <SettingsCard
        title="Reading preferences"
        description="Adjust text size and interface readability."
      >
        <SelectRow
          label="Font size"
          description="Choose the default text size used across Tenfinity."
          value={settings.fontSize}
          onChange={(value) =>
            update(
              "fontSize",
              value as AccessibilitySettingsType["fontSize"],
            )
          }
          options={[
            {
              label: "Small",
              value: "small",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "Large",
              value: "large",
            },
            {
              label: "Extra large",
              value: "extra-large",
            },
          ]}
        />
      </SettingsCard>

      <SettingsCard
        title="Navigation"
        description="Make the interface easier to navigate."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <ToggleRow
            title="Keyboard navigation"
            description="Ensure important interface controls can be reached using a keyboard."
            enabled={settings.keyboardNavigation}
            onChange={(value) =>
              update("keyboardNavigation", value)
            }
          />

          <ToggleRow
            title="Strong focus indicators"
            description="Make focused controls easier to identify."
            enabled={settings.strongFocusIndicators}
            onChange={(value) =>
              update(
                "strongFocusIndicators",
                value,
              )
            }
          />

          <ToggleRow
            title="Screen reader optimization"
            description="Enable additional accessibility optimizations for screen readers."
            enabled={settings.screenReaderOptimized}
            onChange={(value) =>
              update(
                "screenReaderOptimized",
                value,
              )
            }
          />

          <ToggleRow
            title="Reduce animations"
            description="Reduce non-essential visual movement."
            enabled={settings.reduceAnimations}
            onChange={(value) =>
              update(
                "reduceAnimations",
                value,
              )
            }
          />
        </div>
      </SettingsCard>
    </div>
  );
}
