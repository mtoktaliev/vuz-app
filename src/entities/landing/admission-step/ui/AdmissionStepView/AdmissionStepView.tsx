import { useTranslation } from "~shared/lib/i18n";
import { IAdmissionStep } from "../../model";

interface Props {
  step: IAdmissionStep;
}

export const AdmissionStepView = ({ step }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="p-10 rounded-3xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 h-full relative">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg dark:text-white">
            {t(step.title)}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t(step.description)}
          </p>
        </div>
        <div className="flex justify-center">
          <img src={step.image} alt={step.title} />
        </div>
      </div>
    </div>
  );
};
