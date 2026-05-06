import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  quizStatusAtom,
  resetQuizAtom,
  isTransitioningAtom,
} from "~entities/landing/quiz-session";
import { QuizStepper } from "~widgets/landing";
import { ResultCard } from "~widgets/landing";
import { AiLoader } from "~widgets/landing/result-card/ui/AiLoader";

export const HelpMeChoosePage = () => {
  const status = useAtomValue(quizStatusAtom);
  const isTransitioning = useAtomValue(isTransitioningAtom);
  const resetQuiz = useSetAtom(resetQuizAtom);

  useEffect(() => {
    return () => {
      resetQuiz();
    };
  }, [resetQuiz]);

  {
    if (isTransitioning && status !== "finished") {
      return (
        <main className="min-h-screen flex items-center justify-center">
          <AiLoader />
        </main>
      );
    }
  }

  return (
    <>
      <div className="container mx-auto px-6 flex flex-col gap-6 py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 flex flex-col gap-6">
            <h2 className="text-5xl font-semibold dark:text-white text-center flex justify-center items-center">
              Поможем выбрать направление
            </h2>
            <p className="text-xl text-center text-slate-500 dark:text-slate-400">
              Ответьте на несколько вопросов — мы подберём направления, которые
              подойдут именно вам
            </p>
            <div className="bg-white dark:bg-slate-950 p-12 rounded-3xl">
              {status === "finished" ? <ResultCard /> : <QuizStepper />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
