// features/navigate-question/model/index.ts
import { useAtom, useSetAtom } from "jotai";
import {
  currentStepAtom,
  quizStatusAtom,
  isTransitioningAtom,
} from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";
import confetti from "canvas-confetti";

export const useNavigateQuestion = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const [isTransitioning, setIsTransitioning] = useAtom(isTransitioningAtom);
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
    setIsTransitioning(true);

    if (currentStep === total) {
      // показываем лоадер — статус меняем через 2.5с
      setTimeout(() => {
        setStatus("finished");
        setIsTransitioning(false);
        fireConfetti();
      }, 2500);
    } else {
      // небольшая задержка → меняем шаг → снимаем transitioning
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
    }
  };

  const goBack = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep((s) => Math.max(1, s - 1));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 400);
  };

  return {
    goNext,
    goBack,
    canGoBack: currentStep > 1,
    isLast: currentStep === total,
    isTransitioning,
  };
};
