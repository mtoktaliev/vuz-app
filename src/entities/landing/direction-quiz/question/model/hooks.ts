import { QUESTIONS } from "~shared/config/questions";
import type { IQuestion } from "./types";

export const useQuestions = () => {
  return {
    questions: QUESTIONS,
    total: QUESTIONS.length,
    getByIndex: (index: number): IQuestion | undefined => QUESTIONS[index],
  };
};
