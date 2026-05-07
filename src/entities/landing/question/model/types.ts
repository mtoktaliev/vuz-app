import type { ReactNode } from "react";

export interface IQuestionOption {
  icon: ReactNode;
  label: string;
  scores: Record<string, number>; // { it: 3, econ: 2, law: 0, med: 0 }
}

export interface IQuestion {
  id: number;
  text: string;
  options: IQuestionOption[];
}
