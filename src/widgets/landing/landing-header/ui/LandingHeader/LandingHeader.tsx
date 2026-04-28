import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Login3 } from "@solar-icons/react-perf/Outline";
import { SquareAcademicCap } from "@solar-icons/react-perf/Bold";

import { SetLocaleView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router/types";
import { Menu, Button } from "antd";
import { Header } from "~shared/ui/layout";

export interface LandingHeader extends Partial<ComponentWithChild> {}

type MenuItem = Required<MenuProps>["items"][number];

export const LandingHeader: React.FC<LandingHeaderProps> = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
  ];

  const items: MenuItem[] = navLinks.map((link) => ({
    key: link.key,
    label: <Link to={link.key}>{link.label}</Link>,
  }));

  const selectedKey =
    navLinks.find((link) =>
      link.key === RoutesUrls.home
        ? pathname === RoutesUrls.home
        : pathname.startsWith(link.key),
    )?.key ?? null;
  const isLoginPage = pathname.startsWith(RoutesUrls.home);

  return (
    <Header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <SquareAcademicCap size={24} color="#000" />
        <div className="flex items-center gap-3">
          <Menu
            selectedKeys={selectedKey ? [selectedKey] : []}
            mode="horizontal"
            items={items}
            disabledOverflow
            className="flex border-0 overflow-visible"
          />
          {!isLoginPage && (
            <Link to={RoutesUrls.home}>
              <Button type="primary" icon={<Login3 />}>
                {t("routes.login")}
              </Button>
            </Link>
          )}
          <SetLocaleView />
        </div>
      </div>
    </Header>
  );
};
