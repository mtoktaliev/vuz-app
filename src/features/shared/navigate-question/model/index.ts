// features/navigate-question/model/index.ts
import { useAtom, useSetAtom } from "jotai";
import {
  currentStepAtom,
  quizStatusAtom,
} from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";

export const useNavigateQuestion = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const { total } = useQuestions();

  const goNext = () => {
    if (currentStep === total) {
      setStatus("finished");
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const goBack = () => {
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  return {
    goNext,
    goBack,
    canGoBack: currentStep > 1,
    canGoNext: true,
    isLast: currentStep === total,
  };
};
