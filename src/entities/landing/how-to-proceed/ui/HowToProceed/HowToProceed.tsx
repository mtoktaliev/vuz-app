import { Button } from "antd";
import { useTranslation } from "~shared/lib/i18n";
import smartphone from "~shared/assets/smartphone.png";
import { useTheme } from "~shared/lib/theme";
import { VideoPlayer } from "~features/shared/video-player";

export const HowToProceed: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col gap-6 py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
            <h2 className="text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
              {t("landing:howToProceedTitle")}
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              {t("landing:howToProceedDescription")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 p-6 pb-0 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 min-h-115">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-center text-xl dark:text-white">
                {t("landing:howToProceedStep1")}
              </h3>
              <div className="flex justify-center">
                <img src={smartphone} alt="hero" />
              </div>
            </div>
          </div>
          <div className="col-span-3 p-6 pb-0 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 min-h-115">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-center text-xl dark:text-white">
                {t("landing:howToProceedStep2")}
              </h3>
              <div className="flex justify-center">
                <img src={smartphone} alt="hero" />
              </div>
            </div>
          </div>
          <div className="col-span-3 p-6 pb-0 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 min-h-115">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-center text-xl dark:text-white">
                {t("landing:howToProceedStep3")}
              </h3>
              <div className="flex justify-center">
                <img src={smartphone} alt="hero" />
              </div>
            </div>
          </div>
          <div className="col-span-3 p-6 pb-0 rounded-2xl bg-slate-100 dark:bg-slate-900 flex flex-col gap-6 min-h-115">
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-center text-xl dark:text-white">
                {t("landing:howToProceedStep4")}
              </h3>
              <div className="flex justify-center">
                <img src={smartphone} alt="hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
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
