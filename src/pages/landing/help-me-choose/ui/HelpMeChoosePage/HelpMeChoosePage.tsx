// pages/help-me-choose/ui/HelpMeChoosePage.tsx
import { useAtomValue } from "jotai";
import { quizStatusAtom } from "~entities/landing/quiz-session";
import { QuizStepper } from "~widgets/landing/quiz-stepper";
import { ResultCard } from "~widgets/landing";

export const HelpMeChoosePage = () => {
  const status = useAtomValue(quizStatusAtom);

  return (
    <main className="min-h-screen flex items-center justify-center">
      {status === "finished" ? <ResultCard /> : <QuizStepper />}
    </main>
  );
};
