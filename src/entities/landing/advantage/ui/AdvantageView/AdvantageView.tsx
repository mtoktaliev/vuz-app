import { motion, useScroll, useTransform } from "framer-motion";
import { IAdvantage } from "~entities/landing/advantage";

interface Props {
  advantage: IAdvantage;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const AdvantageView = ({
  advantage,
  index,
  total,
  containerRef,
}: Props) => {
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
    [1, 1 - (total - index - 1) * 0.05],
  );

  const top = `${index * 24 + 78}px`;

  return (
    <motion.div
      style={{
        y,
        scale,
        top,
        // height: "calc(100vh - 200px)",
      }}
      className={`
        ${advantage.color}
        rounded-2xl lg:rounded-3xl
        flex flex-col gap-6 items-center
        mx-auto w-full sticky h-full
      `}
    >
      <div className="grid grid-cols-12 p-6 lg:p-20">
        <div className="col-span-12 col-start-1 lg:col-span-6 lg:col-start-4">
          <div className="flex flex-col lg:gap-12">
            <div className="flex flex-col gap-2 lg:gap-6 text-center">
              <h3 className="text-xl lg:text-3xl font-semibold dark:text-white">
                {advantage.title}
              </h3>
              <p className="lg:text-xl text-slate-500 dark:text-slate-400">
                {advantage.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="rounded-2xl w-full h-full object-cover"
        src={advantage.image}
        alt={advantage.title}
      />
    </motion.div>
  );
};
