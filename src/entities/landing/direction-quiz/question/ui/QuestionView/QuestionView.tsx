import { useAtomValue } from "jotai";
import { isTransitioningAtom } from "~entities/landing/direction-quiz";
import { SelectAnswer } from "~features/landing/direction-quiz";
import { NavigateQuestion } from "~features/landing/direction-quiz";
import type { IQuestion } from "~entities/landing/direction-quiz";

interface Props {
  question: IQuestion;
  currentStep: number;
  totalSteps: number;
}

export const QuestionView = ({ question, currentStep, totalSteps }: Props) => {
  const isTransitioning = useAtomValue(isTransitioningAtom);

  return (
    <div>
      <style>{`
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(100px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
            <div
              key={index}
              style={{
                animation: !isTransitioning
                  ? `slide-in 0.35s ease forwards`
                  : "none",
                animationDelay: !isTransitioning ? `${index * 0.07}s` : "0s",
                opacity: 0,
              }}
            >
              <SelectAnswer option={option} index={index} />
            </div>
          ))}
        </div>
        <NavigateQuestion />
      </div>
    </div>
  );
};
