import { useAtomValue } from "jotai";
import {
  currentStepAtom,
  useQuestions,
  QuestionView,
  answersAtom,
} from "~entities/landing/direction-quiz";
import { StepProgress } from "~shared/ui/StepProgress";

export const QuizStepper = () => {
  const currentStep = useAtomValue(currentStepAtom);
  const answers = useAtomValue(answersAtom);
  const { questions } = useQuestions();

  const question = questions[currentStep - 1];
  const answered = Object.keys(answers).length;

  return (
    <div className="flex flex-col gap-6">
      <StepProgress answered={answered} total={questions.length} />
      <QuestionView
        question={question}
        currentStep={currentStep}
        totalSteps={questions.length}
      />
    </div>
  );
};
