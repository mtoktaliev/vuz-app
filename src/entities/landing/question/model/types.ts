// entities/question/model/types.ts

export interface QuestionOption {
  icon: string;
  label: string;
  scores: Record<string, number>; // { it: 3, econ: 2, law: 0, med: 0 }
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}
