// features/calculate-result/model/index.ts
import { QUESTIONS } from "~shared/config/questions";
import { DIRECTIONS } from "~shared/config/directions";
import type { Direction } from "~entities/landing/direction";

export const useCalculateResult = (answers: Record<number, number>) => {
  const topDirections = calculate(answers);
  return { topDirections };
};

const calculate = (answers: Record<number, number>): Direction[] => {
  // 1. Считаем баллы по каждому направлению
  const scores: Record<string, number> = {};

  QUESTIONS.forEach((question, questionIndex) => {
    const answerIndex = answers[questionIndex];
    if (answerIndex === undefined) return;

    const option = question.options[answerIndex];
    if (!option) return;

    Object.entries(option.scores).forEach(([directionId, score]) => {
      scores[directionId] = (scores[directionId] ?? 0) + score;
    });
  });

  // 2. Сортируем направления по убыванию баллов
  const sorted = DIRECTIONS.map((direction) => ({
    direction,
    score: scores[direction.id] ?? 0,
  })).sort((a, b) => b.score - a.score);

  // 3. Возвращаем топ-2
  return sorted.slice(0, 2).map((item) => item.direction);
};
