import { Progress } from "antd";

interface Props {
  answered: number;
  total: number;
}

export const StepProgress = ({ answered, total }: Props) => {
  const percent = Math.round((answered / total) * 100);
  return <Progress percent={percent} showInfo={false} size="small" />;
};
