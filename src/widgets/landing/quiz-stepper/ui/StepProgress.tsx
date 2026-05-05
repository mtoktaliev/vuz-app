import { useAtomValue } from "jotai";
import { answersAtom } from "~entities/landing/quiz-session";
import { Progress } from "antd";

interface Props {
  total: number;
}

export const StepProgress = ({ total }: Props) => {
  const answers = useAtomValue(answersAtom);
  const answered = Object.keys(answers).length;
  const percent = Math.round((answered / total) * 100);

  return <Progress percent={percent} showInfo={false} size="small" />;
};
