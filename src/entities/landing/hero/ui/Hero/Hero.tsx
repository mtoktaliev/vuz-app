import { Button } from "antd";
import { useTranslation } from "~shared/lib/i18n";
import heroImage from "~shared/assets/heroImg.svg";
import heroImageWhite from "~shared/assets/heroImgWhite.svg";
import { useTheme } from "~shared/lib/theme";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 py-32">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
            <h1 className="text-5xl font-semibold leading-tight dark:text-white">
              {t("landing:heroTitle")}
            </h1>
            <p className="text-2xl text-slate-500 dark:text-slate-400">
              {t("landing:heroDescription")}
            </p>
            <div className="flex justify-center gap-6">
              <Button
                type="primary"
                size="large"
                shape="round"
                className="min-h-12 min-w-48"
              >
                {t("cm:buttons:logInAccount")}
              </Button>
              <Button
                type="primary"
                size="large"
                shape="round"
                ghost
                className="min-h-12 min-w-48"
              >
                {t("cm:buttons:chooseUniversity")}
              </Button>
            </div>
            <div className="flex justify-center">
              {theme === "dark" ? (
                <img src={heroImageWhite} alt="hero" />
              ) : (
                <img src={heroImage} alt="hero" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
