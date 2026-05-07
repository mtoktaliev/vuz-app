import type { ReactNode } from "react";

export interface IDirection {
  id: string;
  icon?: ReactNode;
  name: string;
  description: string;
  subjects: string[];
}
