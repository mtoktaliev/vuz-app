import { AdmissionStepView } from "~entities/landing/admission-step";
import { useTranslation } from "~shared/lib/i18n";
import { ADMISSION_STEPS } from "~shared/config/admissionSteps";
import { Button } from "antd";
import { VideoPlayer } from "~features/shared/video-player";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const AdmissionSteps: React.FC = () => {
  const { t } = useTranslation();
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );
  const videoRef = useScrollAnimation<HTMLDivElement>();
  return (
    <div className="bg-white dark:bg-slate-950/50">
      <div className="container mx-auto px-6 flex flex-col gap-12 py-28">
        <div ref={headerRef} className="grid grid-cols-12 anim-fade-up">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
            <h2 className="text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
              {t("landing:admissionTitle")}
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              {t("landing:admissionDescription")}
            </p>
          </div>
        </div>
        <div ref={itemRef} className="grid grid-cols-12 gap-6">
          {ADMISSION_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="col-span-3 anim-fade-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AdmissionStepView step={step} />
            </div>
          ))}
        </div>
        <div ref={videoRef} className="flex justify-center anim-fade-up">
          <VideoPlayer
            video_id="DkvdY0VjlRI?si=SSjBXa23R-z0BT68"
            video_title="Абитуриент v2.0"
            actionSlot={(setOpen) => (
              <Button
                type="primary"
                size="large"
                ghost
                shape="round"
                style={{ padding: "24px 30px" }}
                onClick={() => setOpen(true)}
              >
                {t("cm:buttons:watchVideo")}
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
};
