import { Button } from "antd";
import { Link } from "react-router-dom";
import { FaqAccordion } from "~entities/landing/faq";
import { FAQ } from "~shared/config/faq";
import { RoutesUrls } from "~shared/lib/router/types";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";

export const Faqs = () => {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const linkRef = useScrollAnimation<HTMLAnchorElement>();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );

  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-12 container mx-auto px-4 lg:px-6 py-12 lg:py-28">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div
            ref={headerRef}
            className="col-span-10 lg:col-span-8 col-start-2 lg:col-start-3 text-center flex flex-col gap-2 lg:gap-6 anim-fade-up"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
              Вопросы-Ответы
            </h2>
            <p className="lg:text-xl text-slate-500 dark:text-slate-400">
              Самые частые вопросы и ответы от абитуриентов
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
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
        <Link
          ref={linkRef}
          to={RoutesUrls.faq}
          className="flex justify-center anim-fade-up"
        >
          <div className="lg:hidden">
            <Button
              type="primary"
              ghost
              shape="round"
              style={{ padding: "20px 20px" }}
            >
              Все вопросы-ответы
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button
              type="primary"
              size="large"
              ghost
              shape="round"
              style={{ padding: "24px 30px" }}
            >
              Все вопросы-ответы
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};
