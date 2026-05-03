import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Login3 } from "@solar-icons/react-perf/Outline";
import { SquareAcademicCap } from "@solar-icons/react-perf/Bold";

import { SetLocaleView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router/types";
import { Button } from "antd";
import { Header } from "~shared/ui/layout";
import { ThemeSwitcher } from "~features/shared/theme-switcher";

export const LandingHeader: React.FC = () => {
  const { t } = useTranslation();

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
    { key: RoutesUrls.openData, label: t("routes.openData") },
    { key: RoutesUrls.faq, label: t("routes.faq") },
    { key: RoutesUrls.registration, label: t("routes.registration") },
  ];

  return (
    <Header className="container mx-auto px-3 bg-white/50 rounded-xl backdrop-blur dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-800/50">
      <div className="grid grid-cols-12 items-center h-12 gap-6">
        <div className="col-span-3">
          <Link to={RoutesUrls.home}>
            <Button icon={<SquareAcademicCap />} color="default" variant="link">
              Абитуриент v2.0
            </Button>
          </Link>
        </div>

        <nav className="col-span-6 flex items-center justify-center gap-2 w-full">
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
        <div className="col-span-3 flex items-center gap-1 w-full justify-end">
          <Link to={RoutesUrls.login}>
            <Button color="default" variant="link" icon={<Login3 />}>
              {t("cm:buttons.login")}
            </Button>
          </Link>
          <SetLocaleView />
          <ThemeSwitcher />
        </div>
      </div>
    </Header>
  );
};
