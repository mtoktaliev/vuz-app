import {
  LaptopMinimalistic,
  PieChart2,
  ShieldUser,
  HeartPulse,
  RulerPen,
  Notebook,
} from "@solar-icons/react-perf/Outline";
import type { IDirection } from "~entities/landing/direction";

export const DIRECTIONS: IDirection[] = [
  {
    id: "it",
    icon: <LaptopMinimalistic size={20} />,
    name: "Информационные технологии",
    description: "Программирование, кибербезопасность, искусственный интеллект",
    subjects: ["Математика", "Информатика"],
  },
  {
    id: "econ",
    icon: <PieChart2 size={20} />,
    name: "Экономика и финансы",
    description: "Банковское дело, бухгалтёрский учёт, предпринимательство",
    subjects: ["Математика", "Экономика"],
  },
  {
    id: "law",
    icon: <ShieldUser size={20} />,
    name: "Юриспруденция",
    description: "Государственное право, корпоративное право, дипломатия",
    subjects: ["История", "Обществознание"],
  },
  {
    id: "med",
    icon: <HeartPulse size={20} />,
    name: "Медицина",
    description: "Лечебное дело, стоматология, фармация",
    subjects: ["Биология", "Химия"],
  },
  {
    id: "eng",
    icon: <RulerPen size={20} />,
    name: "Инженерия и строительство",
    description: "Машиностроение, энергетика, гражданское строительство",
    subjects: ["Физика", "Математика"],
  },
  {
    id: "ped",
    icon: <Notebook size={20} />,
    name: "Педагогика",
    description: "Преподавание, воспитание, психология обучения",
    subjects: ["Психология", "Русский язык"],
  },
];
