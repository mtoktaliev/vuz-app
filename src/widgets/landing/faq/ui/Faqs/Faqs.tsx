import { FaqAccordion } from "~entities/landing/faq";
import { FAQ } from "~shared/config/faq";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const Faqs = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );

  return (
    <div className="bg-white dark:bg-slate-950/50">
      <div className="container mx-auto px-6 grid grid-cols-12 gap-12 py-28">
        <div
          ref={headerRef}
          className="col-span-8 col-start-3 text-center flex flex-col gap-6 anim-fade-up"
        >
          <h2 className="text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
            Вопросы-Ответы
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            Самые частые вопросы и ответы от абитуриентов. Если у вас остались
            вопросы, то вы всегда можете связаться с нами через форму обратной
            связи или позвонить по телефону.
          </p>
        </div>
        <div ref={itemRef} className="col-span-8 col-start-3">
          <div ref={itemRef}>
            {FAQ.map((faq, index) => (
              <div
                className="anim-fade-up flex flex-col gap-3"
                key={faq.id}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <FaqAccordion faq={faq} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
