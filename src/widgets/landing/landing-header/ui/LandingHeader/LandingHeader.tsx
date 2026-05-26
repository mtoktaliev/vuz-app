import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Login3 } from "@solar-icons/react-perf/Outline";
import { SquareAcademicCap } from "@solar-icons/react-perf/Bold";
import { SetLocaleView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router/types";
import { Button } from "antd";
import { Header } from "~shared/ui/layout";
import { AnimatedThemeToggler } from "~features/shared/animated-theme-toggler/AnimatedThemeToggler";
import { lockBodyScroll, unlockBodyScroll } from "~shared/lib/use-lockbodyscroll/Uselockbodyscroll";

export const LandingHeader: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
  setMenuOpen(false);
  unlockBodyScroll();
};

const toggleMenu = () => {
  if (menuOpen) {
    closeMenu();
  } else {
    setMenuOpen(true);
    lockBodyScroll();
  }
};

useEffect(() => {
  return () => unlockBodyScroll();
}, []);

  const navLinks = [
    { key: RoutesUrls.home, label: t("routes.home") },
    { key: RoutesUrls.universities, label: t("routes.universities") },
    { key: RoutesUrls.openData, label: t("routes.openData") },
    { key: RoutesUrls.faq, label: t("routes.faq") },
    { key: RoutesUrls.registration, label: t("routes.registration") },
  ];

  return (
    <>
      <Header className="sticky top-0 z-20 px-3 bg-white/50 lg:rounded-xl backdrop-blur dark:bg-slate-950/50 border-b lg:border border-slate-200/50 dark:border-slate-800/50">
        <div className="grid grid-cols-12 items-center h-12 gap-6">
          <div className="col-span-6 lg:col-span-3">
            <Link to={RoutesUrls.home}>
              <div className="hidden lg:block">
                <Button
                  icon={<SquareAcademicCap />}
                  color="default"
                  variant="link"
                >
                  Абитуриент v2.0
                </Button>
              </div>
              <div className="lg:hidden">
                <Button
                  icon={<SquareAcademicCap />}
                  color="default"
                  variant="link"
                />
              </div>
            </Link>
          </div>

          {/* Навигация — только на десктопе */}
          <nav className="hidden lg:flex col-span-6 items-center justify-center gap-2 w-full">
            {navLinks.map((link) => (
              <Link key={link.key} to={link.key}>
                <Button color="default" variant="link">
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="col-span-6 lg:col-span-3 flex items-center gap-1 w-full justify-end">
            {/* Кнопка входа — только на десктопе */}
            <div className="hidden lg:block">
              <Link to={RoutesUrls.login}>
                <Button color="default" variant="link" icon={<Login3 />}>
                  {t("cm:buttons.login")}
                </Button>
              </Link>
            </div>

            <SetLocaleView />
            <AnimatedThemeToggler variant="circle" duration={600} fromCenter />

            {/* Кнопка бургера — только на мобилке и планшете */}
            <button
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.25 rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-4 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-4 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Header>

      {/* Мобильное меню — оверлей */}
      <div
        className={`lg:hidden fixed top-12 inset-0 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Затемнение фона */}
        <div
          className="absolute  bg-black backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Само меню — выезжает сверху */}
        <div
        onClick={closeMenu}
          className={`absolute top-0 left-0 right-0 bg-white/50 dark:bg-slate-950/95 backdrop-blur-3xl transition-transform duration-300 ease-out h-screen ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Навигационные ссылки */}
          <nav className="flex flex-col px-3 py-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.key}
                to={link.key}
                onClick={closeMenu}
                className={`transition-all duration-300 ${
                  menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms",
                }}
              >
                <Button
                  color="default"
                  variant="link"
                  size="large"
                  className="w-full justify-start! text-xl! py-3 h-auto"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Кнопка входа */}
          <div
            className={`px-3 transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{
              transitionDelay: menuOpen
                ? `${navLinks.length * 50 + 150}ms`
                : "0ms",
            }}
          >
            <Link to={RoutesUrls.login} className="block mt-2">
              <Button
                color="primary"
                variant="solid"
                size="large"
                icon={<Login3 />}
                className="w-full"
                onClick={closeMenu}
              >
                {t("cm:buttons.login")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
