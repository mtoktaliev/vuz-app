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

export interface LandingHeader extends Partial<ComponentWithChild> {}

export const LandingHeader: React.FC<LandingHeaderProps> = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
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
      <div className="flex justify-between items-center h-12">
        <SquareAcademicCap size={24} color="#000" className="dark:text-white" />

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = selectedKey === link.key;

            return (
              <Link
                key={link.key}
                to={link.key}
                className={`px-3 text-sm transition-colors ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover: hover:text-gray-500 dark:hover:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          {!isLoginPage && (
            <Link to={RoutesUrls.home}>
              <Button type="primary" icon={<Login3 />}>
                {t("routes.login")}
              </Button>
            </Link>
          )}
          <ThemeSwitcher />
          <SetLocaleView />
        </div>
      </div>
    </Header>
  );
};
