// widgets/quiz-stepper/ui/QuestionView.tsx
import { SelectAnswer } from "~features/shared/select-answer";
import { NavigateQuestion } from "~features/shared/navigate-question";
import type { Question } from "~entities/landing/question";

interface Props {
  question: Question;
  currentStep: number;
  totalSteps: number;
}

export const QuestionView = ({ question, currentStep, totalSteps }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">
          Вопрос {currentStep} из {totalSteps}
        </span>
        <h2 className="text-xl font-medium">{question.text}</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {question.options.map((option, index) => (
          <SelectAnswer key={index} option={option} index={index} />
        ))}
      </div>

      <NavigateQuestion />
    </div>
  );
};
