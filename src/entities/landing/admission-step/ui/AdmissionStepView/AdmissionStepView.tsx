import { useTranslation } from "~shared/lib/i18n";
import { IAdmissionStep } from "../../model";
import { useTheme } from "~shared/lib/theme";

interface Props {
  step: IAdmissionStep;
}

export const AdmissionStepView = ({ step }: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="p-6 lg:p-10 rounded-2xl lg:rounded-3xl bg-white dark:bg-slate-900 flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-2 lg:gap-6">
        <div className="flex flex-col gap-1 lg:gap-2 text-center lg:text-left">
          <h3 className="font-semibold lg:text-lg dark:text-white">
            {t(step.title)}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t(step.description)}
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2">
            <step.icon themeColor={theme === "dark" ? "#ffffff" : "#000000"} />
          </div>
        </div>
      </div>
    </div>
  );
};
