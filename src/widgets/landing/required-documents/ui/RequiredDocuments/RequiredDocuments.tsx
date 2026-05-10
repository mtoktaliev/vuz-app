// widgets/landing/required-documents/ui/RequiredDocuments.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DOCUMENTS = [
  {
    id: 1,
    title: "Аттестат об окончании школы",
    description:
      "Оригинал или нотариально заверенная копия аттестата о среднем образовании",
    icon: "🎓",
    color: "bg-gradient-to-t from-slate-200/0 to-slate-200/50 backdrop-blur-md",
  },
  {
    id: 2,
    title: "Удостоверение личности",
    description:
      "Паспорт или удостоверение личности гражданина Кыргызской Республики",
    icon: "🪪",
    color: "bg-gradient-to-t from-slate-300/0 to-slate-300/50 backdrop-blur-md",
  },
  {
    id: 3,
    title: "Сертификат ОРТ",
    description: "Результаты Общереспубликанского тестирования текущего года",
    icon: "📋",
    color: "bg-gradient-to-t from-slate-400/0 to-slate-400/50 backdrop-blur-md",
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
        rounded-2xl p-10
        flex flex-col gap-6
        mx-auto w-full
      `}
    >
      <div className="flex items-center gap-4">
        <span className="text-5xl">{doc.icon}</span>
        <div>
          <p className="text-sm text-slate-400 mb-1">
            Документ {index + 1} из {total}
          </p>
          <h3 className="text-2xl font-semibold dark:text-white">
            {doc.title}
          </h3>
        </div>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
        {doc.description}
      </p>
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
              Документы необходимые для поступления
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              Подготовьте эти документы перед подачей заявления
            </p>
          </div>
        </div>

        {/* высота контейнера = кол-во карточек × высота секции */}
        <div
          ref={containerRef}
          style={{ height: `${DOCUMENTS.length * 100}vh` }}
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
