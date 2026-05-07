import type { ReactNode } from "react";

export interface Direction {
  id: string;
  icon?: ReactNode;
  name: string;
  description: string;
  subjects: string[];
}
