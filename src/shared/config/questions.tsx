import type { IQuestion } from "~entities/landing/question";
import {
  CalculatorMinimalistic,
  Laptop,
  Dna,
  Notebook2,
  TestTubeMinimalistic,
  Sledgehammer,
  GraphUp,
  Gamepad,
  Stethoscope,
  UserSpeak,
  BoxMinimalistic,
  ChatSquare2,
  BenzeneRing,
  DocumentAdd,
  RulerAngular,
  LaptopMinimalistic,
  Buildings3,
  Hospital,
  Case,
  PaintRoller,
  LightbulbBolt,
  NotebookBookmark,
  UsersGroupTwoRounded,
  TestTube,
  Target,
} from "@solar-icons/react-perf/Outline";

export const QUESTIONS: IQuestion[] = [
  {
    id: 1,
    text: "Какой предмет вам нравится больше всего?",
    options: [
      {
        icon: <CalculatorMinimalistic size={20} />,
        label: "Математика",
        scores: { it: 3, econ: 2, law: 0, med: 0, eng: 2, ped: 0 },
      },
      {
        icon: <Laptop size={20} />,
        label: "Информатика",
        scores: { it: 4, econ: 1, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: <Dna size={20} />,
        label: "Биология",
        scores: { it: 0, econ: 0, law: 0, med: 4, eng: 0, ped: 1 },
      },
      {
        icon: <Notebook2 size={20} />,
        label: "История",
        scores: { it: 0, econ: 1, law: 3, med: 0, eng: 0, ped: 2 },
      },
      {
        icon: <TestTubeMinimalistic size={20} />,
        label: "Химия",
        scores: { it: 0, econ: 0, law: 0, med: 3, eng: 3, ped: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "Что вам больше всего нравится делать в свободное время?",
    options: [
      {
        icon: <Sledgehammer size={20} />,
        label: "Чинить или собирать устройства",
        scores: { it: 2, econ: 0, law: 0, med: 0, eng: 4, ped: 0 },
      },
      {
        icon: <GraphUp size={20} />,
        label: "Следить за рынком и новостями",
        scores: { it: 0, econ: 4, law: 1, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: <Gamepad size={20} />,
        label: "Играть или создавать игры",
        scores: { it: 4, econ: 0, law: 0, med: 0, eng: 1, ped: 1 },
      },
      {
        icon: <Stethoscope size={20} />,
        label: "Помогать людям, волонтёрить",
        scores: { it: 0, econ: 0, law: 1, med: 4, eng: 0, ped: 3 },
      },
      {
        icon: <UserSpeak size={20} />,
        label: "Спорить, отстаивать своё мнение",
        scores: { it: 0, econ: 1, law: 4, med: 0, eng: 0, ped: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Какой тип задач вам ближе?",
    options: [
      {
        icon: <BoxMinimalistic size={20} />,
        label: "Логические головоломки и алгоритмы",
        scores: { it: 4, econ: 2, law: 1, med: 0, eng: 2, ped: 0 },
      },
      {
        icon: <ChatSquare2 size={20} />,
        label: "Расчёты, таблицы, финансы",
        scores: { it: 1, econ: 4, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: <BenzeneRing size={20} />,
        label: "Эксперименты и исследования",
        scores: { it: 1, econ: 0, law: 0, med: 4, eng: 3, ped: 1 },
      },
      {
        icon: <DocumentAdd size={20} />,
        label: "Написание текстов и анализ",
        scores: { it: 0, econ: 1, law: 4, med: 1, eng: 0, ped: 3 },
      },
      {
        icon: <RulerAngular size={20} />,
        label: "Проектирование и конструирование",
        scores: { it: 2, econ: 0, law: 0, med: 0, eng: 4, ped: 0 },
      },
    ],
  },
  {
    id: 4,
    text: "Где вы видите себя через 10 лет?",
    options: [
      {
        icon: <LaptopMinimalistic size={20} />,
        label: "В IT-компании или стартапе",
        scores: { it: 5, econ: 1, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: <Buildings3 size={20} />,
        label: "В банке или собственном бизнесе",
        scores: { it: 0, econ: 5, law: 1, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: <Hospital size={20} />,
        label: "В больнице или клинике",
        scores: { it: 0, econ: 0, law: 0, med: 5, eng: 0, ped: 1 },
      },
      {
        icon: <Case size={20} />,
        label: "В суде или госструктуре",
        scores: { it: 0, econ: 1, law: 5, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: <PaintRoller size={20} />,
        label: "На стройке или производстве",
        scores: { it: 0, econ: 0, law: 0, med: 0, eng: 5, ped: 0 },
      },
    ],
  },
  {
    id: 5,
    text: "Как вы лучше всего учитесь?",
    options: [
      {
        icon: <LightbulbBolt size={20} />,
        label: "Сам разбираюсь — пробую и ошибаюсь",
        scores: { it: 3, econ: 1, law: 0, med: 1, eng: 3, ped: 1 },
      },
      {
        icon: <NotebookBookmark size={20} />,
        label: "Читаю и запоминаю теорию",
        scores: { it: 0, econ: 2, law: 3, med: 2, eng: 0, ped: 2 },
      },
      {
        icon: <UsersGroupTwoRounded size={20} />,
        label: "Обсуждаю с другими, работаю в группе",
        scores: { it: 1, econ: 3, law: 3, med: 1, eng: 1, ped: 4 },
      },
      {
        icon: <TestTube size={20} />,
        label: "Через практику и лабораторные работы",
        scores: { it: 2, econ: 0, law: 0, med: 3, eng: 3, ped: 2 },
      },
      {
        icon: <Target size={20} />,
        label: "Решаю задачи и кейсы",
        scores: { it: 3, econ: 3, law: 1, med: 1, eng: 2, ped: 1 },
      },
    ],
  },
];
