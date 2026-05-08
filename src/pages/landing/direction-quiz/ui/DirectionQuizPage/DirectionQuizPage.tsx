import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  quizStatusAtom,
  resetQuizAtom,
  isLoadingResultAtom,
} from "~entities/landing/direction-quiz";
import { QuizStepper } from "~widgets/landing";
import { ResultCard } from "~widgets/landing";
import { AiLoader } from "~shared/ui/AiLoader";
import { useTranslation } from "react-i18next";

export const DirectionQuizPage = () => {
  const status = useAtomValue(quizStatusAtom);
  const isLoadingResult = useAtomValue(isLoadingResultAtom);
  const resetQuiz = useSetAtom(resetQuizAtom);
  const { t } = useTranslation();

  useEffect(() => {
    return () => resetQuiz();
  }, [resetQuiz]);

  return (
    <>
      <div className="container mx-auto px-6 flex flex-col gap-6 py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-4xl font-semibold dark:text-white text-center flex justify-center items-center">
                {t("landing:directionQuizTitle")}
              </h2>
              <p className="text-lg text-center text-slate-500 dark:text-slate-400">
                {t("landing:directionQuizDescription")}
              </p>
            </div>
            <div className="bg-white dark:bg-slate-950/50 p-12 rounded-3xl">
              {isLoadingResult ? (
                <AiLoader />
              ) : status === "finished" ? (
                <ResultCard />
              ) : (
                <QuizStepper />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
