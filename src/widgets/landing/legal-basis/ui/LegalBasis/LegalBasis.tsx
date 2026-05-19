// widgets/landing/legal-basis/ui/LegalBasis.tsx
import { useState } from "react";
import { Segmented } from "antd";
import { AltArrowRight } from "@solar-icons/react-perf/Outline";

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

  return (
    <div className="bg-white dark:bg-slate-950/50">
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-8 col-start-3 flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-4xl font-semibold dark:text-white">
              Нормативная правовая база
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Документы регулирующие процесс поступления в вузы Кыргызстана
            </p>
          </div>

          <div className="">
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
            />
          </div>

          {/* Карточка */}
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-slate-950 rounded-2xl p-8
              border-2 border-slate-200 dark:border-slate-800
              hover:border-primary transition-all flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 ">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {active.label}
                </span>
                <h3 className="text-xl font-semibold dark:text-white leading-snug">
                  {active.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {active.description}
                </p>
              </div>
              <AltArrowRight
                size={20}
                className="shrink-0 mt-1 text-slate-400 group-hover:text-primary transition-colors"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
