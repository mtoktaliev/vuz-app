import { Button } from "antd";
import { useTranslation } from "~shared/lib/i18n";
import heroImage from "~shared/assets/heroImg.svg";
import heroImageWhite from "~shared/assets/heroImgWhite.svg";
import { useTheme } from "~shared/lib/theme";
import BlurText from "~features/shared/blur-text/BlurText";
import ShinyText from "~features/shared/shiny-text/ShinyText";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 py-32">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-6">
            <div className="bg-white py-1 px-4 w-fit mx-auto rounded-full dark:bg-slate-800">
              <ShinyText
                text="✨ 2020.edu.gov.kg/vuz v2.0"
                speed={2}
                delay={3}
                color="#62748e"
                shineColor="#F7941D"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </div>
            <BlurText
              text={t("landing:heroTitle")}
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl font-semibold leading-tight dark:text-white text-center flex justify-center items-center"
            />
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
