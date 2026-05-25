import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RoutesUrls } from "~shared/lib/router/types";
import { Button } from "antd";
import { MNVOIIcon, InstagramIcon, FacebookIcon, ChromeIcon } from "~shared/ui";
import { useTheme } from "~shared/lib/theme";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const LandingFooter: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const headerRef = useScrollAnimation<HTMLDivElement>();

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
    { key: RoutesUrls.openData, label: t("routes.openData") },
    { key: RoutesUrls.faq, label: t("routes.faq") },
    { key: RoutesUrls.registration, label: t("routes.registration") },
  ];

  return (
    <div ref={headerRef} className="bg-slate-200 dark:bg-slate-950 anim-fade-up">
      <div className="container mx-auto px-4 lg:px-6 pt-12 lg:pt-28 pb-4 lg:pb-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3 px-4 lg:px-0 flex flex-col gap-3">
          <div className="w-20">
            <MNVOIIcon themeColor={theme === "dark" ? "#ffffff" : "#264896"} />
          </div>
          <p className="text-xs lg:text-sm dark:text-white">
            Министерство науки, высшего образования и инноваций Кыргызской
            Республики
          </p>
          <div className="flex gap-3">
          <InstagramIcon />
          <FacebookIcon />
          <ChromeIcon />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 lg:gap-4">
          <p className="font-bold text-sm px-4 dark:text-white">Навигация</p>
          <nav className="flex flex-col lg:gap-3">
            {navLinks.map((link) => {
              return (
                <Link key={link.key} to={link.key}>
                  <Button color="default" variant="link">
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 lg:gap-4">
          <p className="font-bold text-sm px-4 dark:text-white">Вход</p>
          <div className="flex flex-col lg:gap-3">
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                Кабинет МНВОИ
              </Button>
            </Link>
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                Кабинет ЦООМО
              </Button>
            </Link>
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                Кабинет ВУЗ
              </Button>
            </Link>
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                Кабинет СПУЗ
              </Button>
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 lg:gap-4">
          <p className="font-bold text-sm px-4 dark:text-white">Контакты</p>
          <div className="flex flex-col lg:gap-3">
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                2020.edu.gov.kg@gmail.com
              </Button>
            </Link>
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                110
              </Button>
            </Link>
          </div>
          <p className="font-bold text-sm px-4 dark:text-white">Режим работы</p>
          <div className="flex flex-col lg:gap-3">
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                Понедельник - Пятница
              </Button>
            </Link>
            <Link to={RoutesUrls.login}>
              <Button color="default" variant="link">
                09:00 - 18:00
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 col-span-12">
        <p className="col-span-12 text-xs text-slate-500 dark:text-slate-400">
          Используя портал, вы подтверждаете согласие с настоящим
          Пользовательским соглашением. Портал предназначен исключительно для
          получения государственных услуг в сфере высшего образования на
          территории Кыргызской Республики. Регистрируясь на портале, вы даёте
          согласие на сбор, хранение и обработку персональных данных Оператором
          в целях оказания услуг. Вы несёте полную ответственность за
          достоверность введённых данных и за все действия, совершённые под
          вашей учётной записью, включая случаи добровольной передачи доступа
          третьим лицам. Запрещено использовать портал в коммерческих целях,
          передавать права доступа без согласия Оператора, распространять
          незаконный контент и применять вредоносное программное обеспечение.
        </p>
        <p className="col-span-12 text-xs text-slate-500 dark:text-slate-400">
          Разработчик: ОАО «Тундук» © Все права защищены
        </p>
        </div>
      </div>
    </div>
  );
};
