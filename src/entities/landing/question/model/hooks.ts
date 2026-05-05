// entities/question/model/hooks.ts
import { QUESTIONS } from "~shared/config/questions";
import type { Question } from "./types";

export const useQuestions = () => {
  return {
    questions: QUESTIONS,
    total: QUESTIONS.length,
    getByIndex: (index: number): Question | undefined => QUESTIONS[index],
  };
};
