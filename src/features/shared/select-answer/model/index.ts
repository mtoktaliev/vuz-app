// features/select-answer/model/index.ts
import { useAtom, useAtomValue } from "jotai";
import { answersAtom, currentStepAtom } from "~entities/landing/direction-quiz";

export const useSelectAnswer = () => {
  const currentStep = useAtomValue(currentStepAtom);
  const [answers, setAnswers] = useAtom(answersAtom);

  const handleSelect = (answerIndex: number) => {
    setAnswers({ ...answers, [currentStep - 1]: answerIndex });
  };

  return { handleSelect };
};
