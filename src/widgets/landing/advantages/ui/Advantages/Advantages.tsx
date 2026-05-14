import { useRef } from "react";
import { ADVANTAGES } from "~shared/config/advantages";
import { AdvantageView } from "~entities/landing/advantage";

export const Advantages = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white dark:bg-slate-950/50 py-28">
      <div className="container mx-auto px-6 flex flex-col gap-12">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 text-center flex flex-col gap-4">
            <h2 className="text-5xl font-semibold dark:text-white">
              Почему это удобно?
            </h2>
          </div>
        </div>
        <div ref={containerRef} className="relative">
          {ADVANTAGES.map((doc, index) => (
            <AdvantageView
              key={doc.id}
              advantage={doc}
              index={index}
              total={ADVANTAGES.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
