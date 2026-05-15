import { IAdmissionStep } from "~entities/landing/admission-step";
import { SendRequest, CreateAccount } from "~shared/ui";

export const ADMISSION_STEPS: IAdmissionStep[] = [
  {
    id: 1,
    title: "landing:admissionStep1",
    description: "landing:admissionStepDescription1",
    icon: CreateAccount,
  },
  {
    id: 2,
    title: "landing:admissionStep2",
    description: "landing:admissionStepDescription2",
    icon: SendRequest,
  },
  {
    id: 3,
    title: "landing:admissionStep3",
    description: "landing:admissionStepDescription3",
    icon: SendRequest,
  },
  {
    id: 4,
    title: "landing:admissionStep4",
    description: "landing:admissionStepDescription4",
    icon: SendRequest,
  },
];
