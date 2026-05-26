import { useState } from "react";
import { Segmented, Tag } from "antd";
import { AltArrowRight } from "@solar-icons/react-perf/Outline";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

const LEGAL_ITEMS = [
  {
    id: "postanovlenie",
    label: "Постановление",
    title:
      "Об утверждении нормативных правовых актов в сфере высшего и среднего профессионального образования Кыргызской Республики",
    href: "https://cbd.minjust.gov.kg/159275/edition/1232046/ru",
    description: "Постановление Правительства Кыргызской Республики",
  },
  {
    id: "polozhenie",
    label: "Положение",
    title:
      "О государственных образовательных грантах и бюджетных местах образовательных организаций высшего и среднего профессионального образования КР",
    href: "https://cbd.minjust.gov.kg/159290/edition/1175542/ru",
    description: "Положение о государственных образовательных грантах",
  },
  {
    id: "poryadok",
    label: "Порядок",
    title: "Приема в высшие учебные заведения Кыргызской Республики",
    href: "https://cbd.minjust.gov.kg/159289/edition/1249929/ru",
    description: "Порядок приёма абитуриентов в вузы КР",
  },
  {
    id: "perechen",
    label: "Перечень",
    title:
      "Перечень вузов, для поступления в которые результаты общереспубликанского тестирования не обязательны",
    href: "https://2020.edu.gov.kg/docs/Перечень_вузов.docx",
    description: "Список вузов без обязательного ОРТ",
  },
];

export const LegalBasis = () => {
  const [activeId, setActiveId] = useState(LEGAL_ITEMS[0].id);
  const active = LEGAL_ITEMS.find((item) => item.id === activeId)!;
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );

  return (
    <div className="bg-white dark:bg-slate-950/50 py-12 lg:py-28">
      <div className="container mx-auto px-6 flex flex-col gap-12">
        <div className="grid grid-cols-12">
          <div
            ref={headerRef}
            className="col-span-12 lg:col-span-8 lg:col-start-3 flex flex-col gap-4 lg:gap-12 anim-fade-up"
          >
            <div className="flex flex-col gap-2 lg:gap-6 text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold dark:text-white text-shadow-md">
                Нормативная правовая база
              </h2>
              <p className="lg:text-xl text-slate-500 dark:text-slate-400">
                Документы регулирующие процесс поступления в вузы Кыргызстана
              </p>
            </div>

            <div ref={itemRef} className="flex flex-col gap-3 lg:gap-6">
              <div className="hidden lg:grid grid-cols-12">
                <Segmented
                  options={LEGAL_ITEMS.map((item) => ({
                    label: item.label,
                    value: item.id,
                  }))}
                  value={activeId}
                  onChange={(val) => setActiveId(val as string)}
                  size="large"
                  shape="round"
                  block
                  className="anim-fade-up col-span-12 lg:col-span-8 lg:col-start-3"
                  style={{ transitionDelay: `${2 * 150}ms` }}
                />
              </div>
              <div className="lg:hidden">
                <Segmented
                  options={LEGAL_ITEMS.map((item) => ({
                    label: item.label,
                    value: item.id,
                  }))}
                  value={activeId}
                  onChange={(val) => setActiveId(val as string)}
                  // size="small"
                  // shape="round"
                  block
                  vertical
                  className="anim-fade-up"
                  style={{ transitionDelay: `${2 * 150}ms` }}
                />
              </div>
              <a
                href={active.href}
                target="_blank"
                className="group bg-slate-100 dark:bg-slate-950 rounded-2xl lg:rounded-3xl p-6 lg:p-12
              border border-slate-100 dark:border-slate-950
              hover:border-primary transition-all"
              >
                <div className="flex items-center justify-between gap-4 lg:gap-6">
                  <div className="flex flex-col gap-3">
                    <Tag
                      variant="filled"
                      color="gold"
                      className="uppercase w-fit"
                    >
                      {active.label}
                    </Tag>
                    <h3 className="lg:text-xl font-semibold dark:text-white leading-snug">
                      {active.title}
                    </h3>
                    <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400">
                      {active.description}
                    </p>
                  </div>
                  <AltArrowRight
                    size={24}
                    className="shrink-0 text-slate-400 group-hover:text-primary transition-colors"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
