// features/navigate-question/ui/NavigateQuestion.tsx
import { useAtomValue } from "jotai";
import { currentAnswerAtom } from "~entities/landing/quiz-session";
import { useNavigateQuestion } from "../model";

export const NavigateQuestion = () => {
  const { goNext, goBack, canGoBack, isLast } = useNavigateQuestion();
  const currentAnswer = useAtomValue(currentAnswerAtom);
  const hasAnswer = currentAnswer !== undefined;

  return (
    <div className="flex items-center justify-between mt-2">
      <button
        onClick={goBack}
        disabled={!canGoBack}
        className={`
          px-5 py-2.5 rounded-xl border text-sm font-medium transition-all
          ${
            canGoBack
              ? "border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer"
              : "border-transparent text-transparent cursor-default"
          }
        `}
      >
        ← Назад
      </button>

      <button
        onClick={goNext}
        disabled={!hasAnswer}
        className={`
          px-6 py-2.5 rounded-xl text-sm font-medium transition-all
          ${
            hasAnswer
              ? "bg-violet-600 text-white hover:bg-violet-700 cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-default"
          }
        `}
      >
        {isLast ? "Узнать результат" : "Далее →"}
      </button>
    </div>
  );
};
