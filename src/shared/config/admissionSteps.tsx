import { IAdmissionStep } from "~entities/landing/admission-step";
import registerImage from "~shared/assets/registration.png";
import sendImage from "~shared/assets/send.png";
import targetImage from "~shared/assets/target.png";
import checkImage from "~shared/assets/check.png";

export const ADMISSION_STEPS: IAdmissionStep[] = [
  {
    id: 1,
    title: "landing:admissionStep1",
    image: registerImage,
    link: "/register",
  },
  {
    id: 2,
    title: "landing:admissionStep2",
    image: targetImage,
    link: "/directions",
  },
  {
    id: 3,
    title: "landing:admissionStep3",
    image: sendImage,
    link: "/apply",
  },
  {
    id: 4,
    title: "landing:admissionStep4",
    image: checkImage,
    link: "/status",
  },
];
