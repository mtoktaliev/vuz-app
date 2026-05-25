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
        ${advantage.color}
        rounded-2xl lg:rounded-3xl p-6 lg:p-20
        flex flex-col gap-6 items-center
        mx-auto w-full
      `}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 col-start-1 lg:col-span-6 lg:col-start-4">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 lg:gap-6 text-center">
              <h3 className="text-xl lg:text-3xl bg-linear-to-r from-primary via-purple-500 to-green-500 font-semibold dark:text-white bg-clip-text text-transparent">
                {advantage.title}
              </h3>
              <p className="lg:text-xl text-slate-500 dark:text-slate-400">
                {advantage.description}
              </p>
            </div>
            <img src={advantage.image} alt={advantage.title} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
