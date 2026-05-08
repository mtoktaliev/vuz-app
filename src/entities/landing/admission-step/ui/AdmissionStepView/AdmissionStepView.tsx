import { Button } from "antd";
import { useTranslation } from "~shared/lib/i18n";
import { AltArrowRight } from "@solar-icons/react-perf/Outline";
import { IAdmissionStep } from "../../model";

interface Props {
  step: IAdmissionStep;
}

export const AdmissionStepView = ({ step }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="p-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col">
          <h3 className="font-semibold text-center text-lg dark:text-white">
            {t(step.title)}
          </h3>
          <Button
            type="link"
            size="large"
            icon={<AltArrowRight />}
            iconPlacement="end"
          >
            {t("buttons.learnMore")}
          </Button>
        </div>
        <div className="flex justify-center">
          <img src={step.image} alt={step.title} />
        </div>
      </div>
    </div>
  );
};
