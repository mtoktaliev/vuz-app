// features/select-answer/ui/SelectAnswer.tsx
import { useAtomValue } from "jotai";
import { currentAnswerAtom } from "~entities/landing/quiz-session";
import { useSelectAnswer } from "../model";
import type { QuestionOption } from "~entities/landing/question";

interface Props {
  option: QuestionOption;
  index: number;
}

export const SelectAnswer = ({ option, index }: Props) => {
  const selectedAnswer = useAtomValue(currentAnswerAtom);
  const { handleSelect } = useSelectAnswer();
  const isSelected = selectedAnswer === index;

  return (
    <button
      onClick={() => handleSelect(index)}
      className={`
        flex items-center gap-3 p-4 rounded-xl border text-left
        transition-all duration-150 cursor-pointer
        ${
          isSelected
            ? "border-violet-600 bg-violet-50 text-violet-900"
            : "border-gray-200 bg-white hover:border-gray-400"
        }
      `}
    >
      <span className="text-xl w-7 text-center shrink-0">{option.icon}</span>
      <span className="text-sm font-medium leading-snug">{option.label}</span>
    </button>
  );
};
