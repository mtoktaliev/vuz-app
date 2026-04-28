import { Button } from "antd";
import { useTranslation } from "~shared/lib/i18n";
import heroImage from "~shared/assets/heroImg.svg";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 py-32">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
            <h1 className="text-5xl font-semibold">{t("landing:heroTitle")}</h1>
            <p className="text-2xl text-slate-500">
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
              <img src={heroImage} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
