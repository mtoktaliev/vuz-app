import { useAtomValue } from "jotai";
import { currentStepAtom } from "~entities/landing/quiz-session";
import { useQuestions } from "~entities/landing/question";
import { StepProgress } from "~shared/ui/StepProgress";
import { QuestionView } from "~entities/landing/question";
import { answersAtom } from "~entities/landing/quiz-session";

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
