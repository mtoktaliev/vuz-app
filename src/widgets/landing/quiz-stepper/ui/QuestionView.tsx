import { useAtomValue } from "jotai";
import { isTransitioningAtom } from "~entities/landing/quiz-session";
import { SelectAnswer } from "~features/shared/select-answer";
import { NavigateQuestion } from "~features/shared/navigate-question";
import type { Question } from "~entities/landing/question";

interface Props {
  question: Question;
  currentStep: number;
  totalSteps: number;
}

export const QuestionView = ({ question, currentStep, totalSteps }: Props) => {
  const isTransitioning = useAtomValue(isTransitioningAtom);

  return (
    <div
      style={{
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "translateX(-40px)" : "translateX(0)",
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Вопрос {currentStep} / {totalSteps}
          </span>
          <h2 className="text-xl font-semibold dark:text-white">
            {question.text}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((option, index) => (
            <SelectAnswer key={index} option={option} index={index} />
          ))}
        </div>
        <NavigateQuestion />
      </div>
    </div>
  );
};
