import { useTheme } from "~shared/lib/theme";
import { BenefitsIcon } from "~shared/ui";

export const Benefits = () => {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-12 gap-3 px-3 bg-white dark:bg-slate-900">
      <div className="col-span-6 bg-blue-100 p-12  grid-cols-5 rounded-3xl flex flex-col gap-12">
        <h2 className="col-span-3 col-start-2 text-2xl font-semibold text-center dark:text-white">
          Перечень льготников и необходимых документов
        </h2>
        <div className="grid grid-cols-6">
          <div className="col-span-2 col-start-3">
            <BenefitsIcon
              themeColor={theme === "dark" ? "#ffffff" : "#000000"}
            />
          </div>
        </div>
      </div>
      <div className="col-span-6 bg-emerald-100 p-12 grid grid-cols-5 rounded-3xl">
        <h2 className="col-span-3 col-start-2 text-2xl font-semibold text-center dark:text-white">
          Заявка для участия в конкурсе абитуриентам, прошедших срочную военную
          службу
        </h2>
      </div>
    </div>
  );
};
