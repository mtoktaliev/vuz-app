import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Login3 } from "@solar-icons/react-perf/Linear";

import { SetRegistrationView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router";
import { Menu, Button } from "~shared/ui";
import { Header, SiteLogo } from "~shared/ui";

export interface SiteHeaderProps extends Partial<ComponentWithChild> {}

type MenuItem = Required<MenuProps>["items"][number];

export const SiteHeader: React.FC<SiteHeaderProps> = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navLinks = [
    { key: RoutesUrls.root, label: t("routes.main") },
    { key: RoutesUrls.statistics, label: t("routes.statistics") },
    { key: RoutesUrls.aboutProject, label: t("routes.aboutProject") },
    { key: RoutesUrls.registration, label: t("routes.registration") },
  ];

  const items: MenuItem[] = navLinks.map((link) => ({
    key: link.key,
    label: <Link to={link.key}>{link.label}</Link>,
  }));

  const selectedKey =
    navLinks.find((link) =>
      link.key === RoutesUrls.root
        ? pathname === RoutesUrls.root
        : pathname.startsWith(link.key),
    )?.key ?? null;
  const isLoginPage = pathname.startsWith(RoutesUrls.login);

  return (
    <Header className="bg-white border-b">
      <div className="container h-16 flex justify-between items-center">
        <SiteLogo />
        <div className="flex items-center gap-3">
          <Menu
            selectedKeys={selectedKey ? [selectedKey] : []}
            mode="horizontal"
            items={items}
            disabledOverflow
            className="flex h-16 pt-2 border-0 overflow-visible"
          />
          {!isLoginPage && (
            <Link to={RoutesUrls.login}>
              <Button type="primary" icon={<Login3 />}>
                {t("routes.login")}
              </Button>
            </Link>
          )}
          <SetRegistrationView />
        </div>
      </div>
    </Header>
  );
};
