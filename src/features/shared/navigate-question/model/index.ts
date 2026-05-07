// features/navigate-question/model/index.ts
import { useAtom, useSetAtom } from "jotai";
import {
  currentStepAtom,
  quizStatusAtom,
  isTransitioningAtom,
  isLoadingResultAtom,
  answersAtom,
} from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";
import confetti from "canvas-confetti";

export const useNavigateQuestion = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const [isTransitioning, setIsTransitioning] = useAtom(isTransitioningAtom);
  const setIsLoadingResult = useSetAtom(isLoadingResultAtom);
  const [answers, setAnswers] = useAtom(answersAtom);
  const { total } = useQuestions();

  const fireConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(
      () =>
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
        }),
      150,
    );
    setTimeout(
      () =>
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
        }),
      300,
    );
  };

  const goNext = () => {
    if (isTransitioning) return;

    if (currentStep === total) {
      setIsLoadingResult(true);
      setTimeout(() => {
        setStatus("finished");
        setIsLoadingResult(false);
        fireConfetti();
      }, 2500);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goBack = () => {
    if (isTransitioning) return;

    // удаляем ответ текущего шага
    const updated = { ...answers };
    delete updated[currentStep - 1];
    setAnswers(updated);

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep((s) => Math.max(1, s - 1));
      setIsTransitioning(false);
    }, 150);
  };

  return {
    goNext,
    goBack,
    canGoBack: currentStep > 1,
    isLast: currentStep === total,
    isTransitioning,
  };
};
