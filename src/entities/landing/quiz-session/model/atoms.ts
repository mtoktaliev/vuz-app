// entities/quiz-session/model/atoms.ts
import { atom } from "jotai";

type QuizStatus = "in-progress" | "finished";

export const currentStepAtom = atom<number>(1);
export const answersAtom = atom<Record<number, number>>({});
export const quizStatusAtom = atom<QuizStatus>("in-progress");

// derived — текущий ответ на шаге
export const currentAnswerAtom = atom((get) => {
  const step = get(currentStepAtom);
  const answers = get(answersAtom);
  return answers[step - 1];
});
