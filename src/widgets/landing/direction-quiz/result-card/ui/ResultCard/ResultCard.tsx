import { Restart } from "@solar-icons/react-perf/Outline";
import { useAtomValue, useSetAtom } from "jotai";
import {
  answersAtom,
  quizStatusAtom,
  currentStepAtom,
} from "~entities/landing/direction-quiz";
import { useCalculateResult } from "~features/shared/calculate-result";
import { DirectionCardView } from "~entities/landing/direction";
import { Button } from "antd";

export const ResultCard = () => {
  const answers = useAtomValue(answersAtom);
  const setStatus = useSetAtom(quizStatusAtom);
  const setStep = useSetAtom(currentStepAtom);
  const { topDirections } = useCalculateResult(answers);
  const setAnswers = useSetAtom(answersAtom);

  const handleReset = () => {
    setStatus("in-progress");
    setStep(1);
    setAnswers({});
  };

  return (
    <div className="w-full mx-auto flex flex-col gap-6 px-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold dark:text-white">
          Ваши направления
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          На основе ваших ответов мы рекомендуем:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {topDirections.map((direction, index) => (
          <DirectionCardView
            key={direction.id}
            direction={direction}
            isPrimary={index === 0}
            showBadge={true}
          />
        ))}
      </div>
      <div>
        <Button
          onClick={handleReset}
          size="large"
          icon={<Restart />}
          shape="round"
          style={{ padding: "24px 30px" }}
        >
          Пройти заново
        </Button>
      </div>
    </div>
  );
};
