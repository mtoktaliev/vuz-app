import { useAtomValue } from "jotai";
import { currentAnswerAtom } from "~entities/landing/quiz-session";
import { useNavigateQuestion } from "../model";
import { Button } from "antd";
import { ArrowLeft, ArrowRight } from "@solar-icons/react-perf/Outline";

export const NavigateQuestion = () => {
  const { goNext, goBack, canGoBack, isLast } = useNavigateQuestion();
  const currentAnswer = useAtomValue(currentAnswerAtom);
  const hasAnswer = currentAnswer !== undefined;

  return (
    <div className="flex items-center justify-between mt-2">
      <Button
        onClick={goBack}
        disabled={!canGoBack}
        size="large"
        icon={<ArrowLeft />}
        shape="round"
        style={{ padding: "24px 30px" }}
      >
        Назад
      </Button>

      <Button
        onClick={goNext}
        disabled={!hasAnswer}
        type="primary"
        size="large"
        icon={isLast ? undefined : <ArrowRight />}
        iconPlacement="end"
        shape="round"
        style={{ padding: "24px 30px" }}
      >
        {isLast ? "Узнать результат" : "Далее"}
      </Button>
    </div>
  );
};
