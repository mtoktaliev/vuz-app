import { useRef } from "react";
import { ADVANTAGES } from "~shared/config/advantages";
import { AdvantageView } from "~entities/landing/advantage";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const Advantages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const itemsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-white dark:bg-slate-950/50 py-12 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col gap-6 lg:gap-12">
        <div ref={headerRef} className="grid grid-cols-12 anim-fade-up">
          <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3 text-center flex flex-col gap-4">
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white text-shadow-md">
              Почему это удобно?
            </h2>
          </div>
        </div>
        <div ref={itemsRef} className="anim-fade-up">
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
    </div>
  );
};
