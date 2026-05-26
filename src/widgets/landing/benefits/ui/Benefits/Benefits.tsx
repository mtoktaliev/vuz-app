import { useTheme } from "~shared/lib/theme";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";
import { Link } from "react-router-dom";
import { Button } from "antd";
import military from "~shared/assets/military.png";
import documents from "~shared/assets/documents.png";

export const Benefits = () => {
  const { theme } = useTheme();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );
  return (
    <div
      ref={itemRef}
      className="grid grid-cols-12 gap-3 py-3 bg-white dark:bg-slate-950/50"
    >
      <div
        style={{ transitionDelay: `${1 * 150}ms` }}
        className="col-span-12 lg:col-span-6 bg-slate-100 dark:bg-slate-900 px-6 py-12 lg:px-12 lg:py-16 grid grid-cols-6  flex-col lg:gap-12 anim-fade-up"
      >
        <div className="flex flex-col col-span-6 lg:col-span-4 gap-6 lg:gap-6 lg:col-start-2">
          <h2 className="text-xl lg:text-3xl font-bold text-center dark:text-white text-shadow-md">Перечень льготников и необходимых документов</h2>
          <div className="grid grid-cols-6">
            <div className="col-span-6 col-start-1">
              <div className="flex justify-center gap-3 lg:hidden">
                <Link to="#">
                  <Button
                    type="primary"
                    ghost
                    shape="round"
                    style={{ padding: "20px 20px" }}
                  >
                    Подробнее
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex justify-center gap-3">
                <Link to="#">
                  <Button
                    type="primary"
                    size="large"
                    ghost
                    shape="round"
                    style={{ padding: "24px 30px" }}
                  >
                    Подробнее
                  </Button>
                </Link>
              </div>
              <img src={documents} alt="documents" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ transitionDelay: `${2 * 150}ms` }}
        className="col-span-12 lg:col-span-6 bg-stone-100 dark:bg-slate-900 px-6 py-12 lg:px-12 lg:py-16 grid grid-cols-6 flex-col lg:gap-12 anim-fade-up"
      >
        <div className="flex flex-col col-span-6 lg:col-span-4 gap-6 lg:gap-6 lg:col-start-2">
          <h2 className="text-xl lg:text-3xl font-bold text-center dark:text-white text-shadow-md">Участие в конкурсе после срочной военной службы</h2>
          <div className="grid grid-cols-6">
            <div className="col-span-6">
              <div className="flex justify-center gap-3 lg:hidden">
                <Link to="#">
                  <Button
                    type="primary"
                    ghost
                    shape="round"
                    style={{ padding: "20px 20px" }}
                  >
                    Подробнее
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex justify-center gap-3">
                <Link to="#">
                  <Button
                    type="primary"
                    size="large"
                    ghost
                    shape="round"
                    style={{ padding: "24px 30px" }}
                  >
                    Подробнее
                  </Button>
                </Link>
              </div>
              <img src={military} alt="military" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
