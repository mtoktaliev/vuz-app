// widgets/result-card/ui/ResultCard.tsx
import { useAtomValue, useSetAtom } from "jotai";
import {
  answersAtom,
  quizStatusAtom,
  currentStepAtom,
} from "~entities/landing/quiz-session";
import { useCalculateResult } from "~features/shared/calculate-result";
import { DirectionCard } from "./DirectionCard";

export const ResultCard = () => {
  const answers = useAtomValue(answersAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const setStep = useSetAtom(currentStepAtom);
  const { topDirections } = useCalculateResult(answers);

  const handleReset = () => {
    setStatus("in-progress");
    setStep(1);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 px-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-medium">Ваши направления</h2>
        <p className="text-sm text-gray-500">
          На основе ваших ответов мы рекомендуем:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {topDirections.map((direction, index) => (
          <DirectionCard
            key={direction.id}
            direction={direction}
            isPrimary={index === 0}
          />
        ))}
      </div>

      <button
        onClick={handleReset}
        className="self-start text-sm text-gray-500 border border-gray-200 
                   px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all"
      >
        ← Пройти заново
      </button>
    </div>
  );
};
