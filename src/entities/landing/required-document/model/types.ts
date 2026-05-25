import type { ReactNode } from "react";

export interface IRequiredDocument {
  id: string;
  icon?: ReactNode;
  color: string;
  name: string;
  description: string;
}
