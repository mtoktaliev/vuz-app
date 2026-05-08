import { useAtomValue } from "jotai";
import { currentAnswerAtom } from "~entities/landing/direction-quiz";
import { useSelectAnswer } from "../model";
import type { IQuestionOption } from "~entities/landing/direction-quiz";
import { Button } from "antd";

interface Props {
  option: IQuestionOption;
  index: number;
}

export const SelectAnswer = ({ option, index }: Props) => {
  const selectedAnswer = useAtomValue(currentAnswerAtom);
  const { handleSelect } = useSelectAnswer();
  const isSelected = selectedAnswer === index;

  return (
    <Button
      onClick={() => handleSelect(index)}
      type={isSelected ? "primary" : "default"}
      size="large"
      style={{
        padding: "30px 24px",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "16px",
        width: "100%",
      }}
      icon={option.icon}
      iconPlacement="start"
    >
      {option.label}
    </Button>
  );
};
