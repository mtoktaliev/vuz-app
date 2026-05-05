// widgets/quiz-stepper/ui/QuizStepper.tsx
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
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 px-4">
      <StepProgress current={currentStep} total={questions.length} />
      <QuestionView
        question={question}
        currentStep={currentStep}
        totalSteps={questions.length}
      />
    </div>
  );
};
