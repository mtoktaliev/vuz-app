import { useAtomValue } from "jotai";
import { currentStepAtom } from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";
import { StepProgress } from "./StepProgress";
import { QuestionView } from "./QuestionView";

export const QuizStepper = () => {
  const currentStep = useAtomValue(currentStepAtom);
  const { questions } = useQuestions();

  const question = questions[currentStep - 1];

  return (
    <div className="flex flex-col gap-6">
      <StepProgress total={questions.length} />
      <QuestionView
        question={question}
        currentStep={currentStep}
        totalSteps={questions.length}
      />
    </div>
  );
};
