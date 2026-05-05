// shared/config/questions.ts
import type { Question } from "~entities/landing/question";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Какой предмет вам нравится больше всего?",
    options: [
      {
        icon: "➗",
        label: "Математика",
        scores: { it: 3, econ: 2, law: 0, med: 0, eng: 2, ped: 0 },
      },
      {
        icon: "💻",
        label: "Информатика",
        scores: { it: 4, econ: 1, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: "🧬",
        label: "Биология",
        scores: { it: 0, econ: 0, law: 0, med: 4, eng: 0, ped: 1 },
      },
      {
        icon: "📜",
        label: "История",
        scores: { it: 0, econ: 1, law: 3, med: 0, eng: 0, ped: 2 },
      },
      {
        icon: "⚗️",
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
        icon: "🔧",
        label: "Чинить или собирать устройства",
        scores: { it: 2, econ: 0, law: 0, med: 0, eng: 4, ped: 0 },
      },
      {
        icon: "📈",
        label: "Следить за рынком и новостями",
        scores: { it: 0, econ: 4, law: 1, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: "🎮",
        label: "Играть или создавать игры",
        scores: { it: 4, econ: 0, law: 0, med: 0, eng: 1, ped: 1 },
      },
      {
        icon: "🩺",
        label: "Помогать людям, волонтёрить",
        scores: { it: 0, econ: 0, law: 1, med: 4, eng: 0, ped: 3 },
      },
      {
        icon: "⚖️",
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
        icon: "🧩",
        label: "Логические головоломки и алгоритмы",
        scores: { it: 4, econ: 2, law: 1, med: 0, eng: 2, ped: 0 },
      },
      {
        icon: "📊",
        label: "Расчёты, таблицы, финансы",
        scores: { it: 1, econ: 4, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: "🔬",
        label: "Эксперименты и исследования",
        scores: { it: 1, econ: 0, law: 0, med: 4, eng: 3, ped: 1 },
      },
      {
        icon: "📝",
        label: "Написание текстов и анализ",
        scores: { it: 0, econ: 1, law: 4, med: 1, eng: 0, ped: 3 },
      },
      {
        icon: "🏗️",
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
        icon: "🖥️",
        label: "В IT-компании или стартапе",
        scores: { it: 5, econ: 1, law: 0, med: 0, eng: 1, ped: 0 },
      },
      {
        icon: "🏦",
        label: "В банке или собственном бизнесе",
        scores: { it: 0, econ: 5, law: 1, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: "🏥",
        label: "В больнице или клинике",
        scores: { it: 0, econ: 0, law: 0, med: 5, eng: 0, ped: 1 },
      },
      {
        icon: "🏛️",
        label: "В суде или госструктуре",
        scores: { it: 0, econ: 1, law: 5, med: 0, eng: 0, ped: 0 },
      },
      {
        icon: "🏗️",
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
        icon: "💡",
        label: "Сам разбираюсь — пробую и ошибаюсь",
        scores: { it: 3, econ: 1, law: 0, med: 1, eng: 3, ped: 1 },
      },
      {
        icon: "📖",
        label: "Читаю и запоминаю теорию",
        scores: { it: 0, econ: 2, law: 3, med: 2, eng: 0, ped: 2 },
      },
      {
        icon: "👥",
        label: "Обсуждаю с другими, работаю в группе",
        scores: { it: 1, econ: 3, law: 3, med: 1, eng: 1, ped: 4 },
      },
      {
        icon: "🧪",
        label: "Через практику и лабораторные работы",
        scores: { it: 2, econ: 0, law: 0, med: 3, eng: 3, ped: 2 },
      },
      {
        icon: "🎯",
        label: "Решаю задачи и кейсы",
        scores: { it: 3, econ: 3, law: 1, med: 1, eng: 2, ped: 1 },
      },
    ],
  },
];
