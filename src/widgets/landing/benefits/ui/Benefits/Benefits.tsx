import { useTheme } from "~shared/lib/theme";
import { BenefitsIcon, MilitaryIcon } from "~shared/ui";
import { useScrollAnimation } from "~shared/lib/use-scroll-animation";
import { Link } from "react-router-dom";

export const Benefits = () => {
  const { theme } = useTheme();
  const itemRef = useScrollAnimation<HTMLDivElement>(
    { threshold: 0.1 },
    ".anim-fade-up",
  );
  return (
    <div
      ref={itemRef}
      className="grid grid-cols-12 gap-3 py-3 lg:p-3 bg-white dark:bg-slate-950/50"
    >
      <Link
        to="#"
        style={{ transitionDelay: `${1 * 150}ms` }}
        className="col-span-12 lg:col-span-6 bg-slate-100 dark:bg-slate-900 p-12 lg:px-12 lg:py-16 grid grid-cols-6 lg:rounded-3xl flex-col lg:gap-12 anim-fade-up"
      >
        <div className="flex flex-col col-span-6 lg:col-span-4 gap-6 lg:gap-12 lg:col-start-2 text-lg lg:text-2xl font-semibold text-center dark:text-white">
          <h2 className="">Перечень льготников и необходимых документов</h2>
          <div className="grid grid-cols-6">
            <div className="col-span-4 col-start-2">
              <BenefitsIcon
                themeColor={theme === "dark" ? "#ffffff" : "#000000"}
              />
            </div>
          </div>
        </div>
      </Link>

      <Link
        to="#"
        style={{ transitionDelay: `${2 * 150}ms` }}
        className="col-span-12 lg:col-span-6 bg-stone-100 dark:bg-slate-900 p-12 lg:px-12 lg:py-16 grid grid-cols-6 lg:rounded-3xl flex-col lg:gap-12 anim-fade-up"
      >
        <div className="flex flex-col col-span-6 lg:col-span-4 gap-6 lg:gap-12 lg:col-start-2 text-lg lg:text-2xl font-semibold text-center dark:text-white">
          <h2 className="">Участие в конкурсе после срочной военной службы</h2>
          <div className="grid grid-cols-6">
            <div className="col-span-4 col-start-2">
              <MilitaryIcon
                themeColor={theme === "dark" ? "#ffffff" : "#000000"}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
