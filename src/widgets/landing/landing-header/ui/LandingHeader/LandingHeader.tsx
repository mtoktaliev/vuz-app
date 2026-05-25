import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Login3 } from "@solar-icons/react-perf/Outline";
import { SquareAcademicCap } from "@solar-icons/react-perf/Bold";

import { SetLocaleView } from "~features/shared/locale";
import { RoutesUrls } from "~shared/lib/router/types";
import { Button } from "antd";
import { Header } from "~shared/ui/layout";
import { AnimatedThemeToggler } from "~features/shared/animated-theme-toggler/AnimatedThemeToggler";

export const LandingHeader: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
                <Button icon={<SquareAcademicCap />} color="default" variant="link">
                  Абитуриент v2.0
                </Button>
              </div>
              <div className="lg:hidden">
                <Button icon={<SquareAcademicCap />} color="default" variant="link"/>
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
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px] rounded-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </Header>

      {/* Мобильное меню — оверлей */}
      <div
        className={`lg:hidden fixed top-12 inset-0 z-10 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Затемнение фона */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Само меню — выезжает сверху */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white/90 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200/70 dark:border-slate-800/70 shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Навигационные ссылки */}
          <nav className="flex flex-col px-3 py-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.key}
                to={link.key}
                className={`transition-all duration-300 ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms" }}
              >
                <Button
                  color="default"
                  variant="link"
                  className="w-full !justify-start !text-base py-3 h-auto"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Кнопка входа */}
          <div
            className={`px-3 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: menuOpen ? `${navLinks.length * 50 + 150}ms` : "0ms" }}
          >
            <Link to={RoutesUrls.login} className="block mt-2">
              <Button
                color="primary"
                variant="solid"
                icon={<Login3 />}
                className="w-full"
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