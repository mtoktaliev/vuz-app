// entities/landing/admission-step/model/types.ts
export interface IAdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: React.FC<{
    blackColor?: string;
    whiteColor?: string;
  }>;
}
