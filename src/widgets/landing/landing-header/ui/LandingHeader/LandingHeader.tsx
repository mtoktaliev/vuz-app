import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Login3 } from "@solar-icons/react-perf/Outline";
import { SquareAcademicCap } from "@solar-icons/react-perf/Bold";

import { SetLocaleView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router/types";
import { Button } from "antd";
import { Header } from "~shared/ui/layout";
import { ThemeSwitcher } from "~features/shared/theme-switcher";

export const LandingHeader: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
    { key: RoutesUrls.openData, label: t("routes.openData") },
    { key: RoutesUrls.faq, label: t("routes.faq") },
  ];

  const selectedKey =
    navLinks.find((link) =>
      link.key === RoutesUrls.home
        ? pathname === RoutesUrls.home
        : pathname.startsWith(link.key),
    )?.key ?? null;
  const isLoginPage = pathname.startsWith(RoutesUrls.universities);

  return (
    <Header className="container mx-auto px-6 bg-white/50 rounded-xl backdrop-blur dark:bg-slate-950/50">
      <div className="grid grid-cols-12 items-center h-12 gap-6">
        <div className="col-span-3">
          <SquareAcademicCap
            size={24}
            color="#000"
            className="dark:text-white"
          />
        </div>

        <nav className="col-span-6 flex items-center justify-center gap-2 w-full">
          {navLinks.map((link) => {
            const isActive = selectedKey === link.key;

            return (
              <Link
                key={link.key}
                to={link.key}
                className={`px-3 text-sm transition-colors ${
                  isActive
                    ? "dark:text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="col-span-3 flex items-center gap-6 w-full justify-end">
          {!isLoginPage && (
            <Link to={RoutesUrls.home}>
              <Button type="primary" icon={<Login3 />}>
                {t("cm:buttons.login")}
              </Button>
            </Link>
          )}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <SetLocaleView />
          </div>
        </div>
      </div>
    </Header>
  );
};
