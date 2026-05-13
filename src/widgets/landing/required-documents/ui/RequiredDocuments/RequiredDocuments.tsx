// widgets/landing/required-documents/ui/RequiredDocuments.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PassportMinimalistic,
  Diploma,
  DiplomaVerified,
} from "@solar-icons/react-perf/Linear";

import online from "~shared/assets/online.png";
import tunduk from "~shared/assets/tunduk.png";
import automation from "~shared/assets/automatic.png";

const DOCUMENTS = [
  {
    id: 1,
    title: "Поступление полностью онлайн",
    description:
      "Подайте заявление на участие в конкурсе и выберите вуз в электронном формате — быстро, удобно и без лишней бюрократии",
    image: online,
    icon: null,
    color:
      "bg-gradient-to-t from-slate-200/0 to-slate-200/50 backdrop-blur-md dark:bg-gradient-to-t dark:from-slate-100/0 dark:to-slate-950/50",
    // color: "bg-gradient-to-t from-slate-100/0 to-slate-100 backdrop-blur-md",
  },
  {
    id: 2,
    title: "Прозрачное и автоматизированное зачисление",
    description:
      "Система автоматически учитывает результаты ОРТ, формирует рейтинги и списки рекомендованных к зачислению абитуриентов",
    image: automation,
    icon: <Diploma />,
    color: "bg-gradient-to-t from-indigo-100/0 to-indigo-100 backdrop-blur-xl",
  },
  {
    id: 3,
    title: "Интеграция с государственными сервисами",
    description:
      "Необходимые документы и данные предоставляются через систему межведомственного взаимодействия «Тундук», что упрощает процесс поступления для абитуриентов и вузов",
    image: tunduk,
    icon: <DiplomaVerified />,
    color: "bg-gradient-to-t from-teal-200/0 to-teal-200 backdrop-blur-xl",
  },
];

interface CardProps {
  doc: (typeof DOCUMENTS)[0];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const DocumentCard = ({ doc, index, total, containerRef }: CardProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["0px", `${(total - index - 1) * -12}px`],
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, 1 - (total - index - 1) * 0.04],
  );

  const top = `${index * 24 + 98}px`;

  return (
    <motion.div
      style={{
        y,
        scale,
        top,
        position: "sticky",
        height: "calc(100vh - 200px)",
      }}
      className={`
        ${doc.color}
        rounded-3xl p-20
        flex flex-col gap-6 items-center
        mx-auto w-full
      `}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl text-center font-semibold dark:text-white">
                {doc.title}
              </h3>
              <p className="text-center text-xl text-slate-500 dark:text-slate-400">
                {doc.description}
              </p>
            </div>
            <span className="text-5xl text-primary flex justify-center items-center">
              {doc.image ? <img src={doc.image} alt={doc.title} /> : doc.icon}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const RequiredDocuments = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white dark:bg-slate-900 py-28">
      <div className="container mx-auto px-6 flex flex-col gap-12">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-4">
            <h2 className="text-5xl font-semibold dark:text-white">
              Почему это удобно?
            </h2>
          </div>
        </div>

        {/* высота контейнера = кол-во карточек × высота секции */}
        <div
          ref={containerRef}
          // style={{ height: `${DOCUMENTS.length * 100}vh` }}
          className="relative"
        >
          {DOCUMENTS.map((doc, index) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              index={index}
              total={DOCUMENTS.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
