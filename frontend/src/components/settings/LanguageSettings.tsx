import SettingsCard from "./SettingsCard";
import SelectRow from "./SelectRow";
import type {
  LanguageSettings as LanguageSettingsType,
} from "../../types/settings";

interface Props {
  settings: LanguageSettingsType;
  onChange: (settings: LanguageSettingsType) => void;
}

export default function LanguageSettings({
  settings,
  onChange,
}: Props) {
  return (
    <div className="space-y-6">
      <SettingsCard
        title="Language"
        description="Choose the languages used by your Tenfinity experience."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <SelectRow
            label="Interface language"
            description="Language used for menus, buttons and messages."
            value={settings.interfaceLanguage}
            onChange={(value) =>
              onChange({
                ...settings,
                interfaceLanguage: value,
              })
            }
            options={[
              {
                label: "English",
                value: "English",
              },
              {
                label: "Hindi",
                value: "Hindi",
              },
              {
                label: "Tamil",
                value: "Tamil",
              },
            ]}
          />

          <SelectRow
            label="Code language"
            description="Preferred programming language for coding problems."
            value={settings.codeLanguage}
            onChange={(value) =>
              onChange({
                ...settings,
                codeLanguage:
                  value as LanguageSettingsType["codeLanguage"],
              })
            }
            options={[
              {
                label: "TypeScript",
                value: "typescript",
              },
              {
                label: "JavaScript",
                value: "javascript",
              },
              {
                label: "Python",
                value: "python",
              },
              {
                label: "Java",
                value: "java",
              },
              {
                label: "C++",
                value: "cpp",
              },
              {
                label: "C",
                value: "c",
              },
              {
                label: "Go",
                value: "go",
              },
            ]}
          />
        </div>
      </SettingsCard>

      <SettingsCard
        title="Regional formatting"
        description="Control how dates and times are displayed."
      >
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <SelectRow
            label="Date format"
            value={settings.dateFormat}
            onChange={(value) =>
              onChange({
                ...settings,
                dateFormat: value,
              })
            }
            options={[
              {
                label: "DD/MM/YYYY",
                value: "DD/MM/YYYY",
              },
              {
                label: "MM/DD/YYYY",
                value: "MM/DD/YYYY",
              },
              {
                label: "YYYY-MM-DD",
                value: "YYYY-MM-DD",
              },
            ]}
          />

          <SelectRow
            label="Time format"
            value={settings.timeFormat}
            onChange={(value) =>
              onChange({
                ...settings,
                timeFormat:
                  value as LanguageSettingsType["timeFormat"],
              })
            }
            options={[
              {
                label: "12-hour",
                value: "12-hour",
              },
              {
                label: "24-hour",
                value: "24-hour",
              },
            ]}
          />
        </div>
      </SettingsCard>
    </div>
  );
}
