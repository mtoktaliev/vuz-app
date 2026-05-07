// widgets/result-card/ui/AiLoader.tsx

import { Spin } from "antd";
import { useTheme } from "~shared/lib/theme";

export const AiLoader = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col items-center gap-8 py-20">
      <Spin
        size="large"
        style={theme === "dark" ? { color: "white" } : { color: "" }}
      />

      <div className="flex flex-col items-center gap-1">
        <p className="text-xl font-semibold animate-pulse dark:text-white">
          Анализируем ваши ответы
        </p>
        <p className="text-slate-500 animate-pulse dark:text-slate-400">
          Подбираем подходящие направления...
        </p>
      </div>
    </div>
  );
};
