// features/navigate-question/model/index.ts
import { useAtom, useSetAtom } from "jotai";
import {
  currentStepAtom,
  quizStatusAtom,
} from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";
import confetti from "canvas-confetti";

export const useNavigateQuestion = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const { total } = useQuestions();

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
      });
    }, 300);
  };

  const goNext = () => {
    if (currentStep === total) {
      fireConfetti();
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
    isLast: currentStep === total,
  };
};
