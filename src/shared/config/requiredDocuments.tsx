import { VerifiedCheck, Diploma, Notes } from "@solar-icons/react-perf/Outline";
import type { IRequiredDocument } from "~entities/landing/required-document";

export const REQUIRED_DOCUMENTS: IRequiredDocument[] = [
  {
    id: "passport",
    icon: <VerifiedCheck size={28} />,
    name: "Паспорт или свидетельство о рождении",
    color:
      "text-white bg-linear-to-b from-olive-800 to-olive-950 p-3 rounded-xl w-fit border-2 border-olive-900",
    description:
      "Для подтверждения вашей личности и гражданства вам необходимо предоставить паспорт или свидетельство о рождении. Это обязательный документ для всех абитуриентов",
  },
  {
    id: "diploma",
    icon: <Diploma size={28} />,
    name: "Аттестат или диплом о среднем профессиональном образовании",
    color:
      "text-white bg-linear-to-b from-fuchsia-800 to-fuchsia-950 p-3 rounded-xl w-fit border-2 border-fuchsia-900",
    description:
      "Для подтверждения вашего образования вам необходимо предоставить аттестат или диплом о среднем профессиональном образовании",
  },
  {
    id: "notes",
    icon: <Notes size={28} />,
    name: "Сертификат ОРТ",
    color:
      "text-white bg-linear-to-b from-rose-800 to-rose-950 p-3 rounded-xl w-fit border-2 border-rose-900",
    description:
      "Для подтверждения ваших знаний и навыков вам необходимо предоставить сертификат ОРТ. Этот сертификат подтверждает, что вы успешно сдали экзамены",
  },
];
