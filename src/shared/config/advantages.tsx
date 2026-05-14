import online from "~shared/assets/online.png";
import tunduk from "~shared/assets/tunduk.png";
import automation from "~shared/assets/automatic.png";
import { IAdvantage } from "~entities/landing/advantage";

export const ADVANTAGES: IAdvantage[] = [
  {
    id: 1,
    title: "Поступление полностью онлайн",
    description:
      "Подайте заявление на участие в конкурсе и выберите вуз в электронном формате — быстро, удобно и без лишней бюрократии",
    image: online,
    color:
      "bg-gradient-to-t from-slate-100/0 to-slate-100/50 backdrop-blur-2xl dark:bg-gradient-to-t dark:from-slate-700/0 dark:to-slate-700",
  },
  {
    id: 2,
    title: "Прозрачное и автоматизированное зачисление",
    description:
      "Система автоматически учитывает результаты ОРТ, формирует рейтинги и списки рекомендованных к зачислению абитуриентов",
    image: automation,
    color:
      "bg-gradient-to-t from-slate-100/0 to-slate-100 backdrop-blur-2xl dark:bg-gradient-to-t dark:from-slate-800/0 dark:to-slate-800",
  },
  {
    id: 3,
    title: "Интеграция с государственными сервисами",
    description:
      "Необходимые документы и данные предоставляются через систему межведомственного взаимодействия «Тундук», что упрощает процесс поступления для абитуриентов и вузов",
    image: tunduk,
    color:
      "bg-gradient-to-t from-slate-200/0 to-slate-200/50 backdrop-blur-2xl dark:bg-gradient-to-t dark:from-slate-900/0 dark:to-slate-900",
  },
];
