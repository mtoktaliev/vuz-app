import {
  HeroSection,
  AdmissionSteps,
  Directions,
  Advantages,
  Benefits,
} from "~widgets/landing";
import { Faqs } from "~widgets/landing/faq/ui/Faqs/Faqs";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AdmissionSteps />
      <Directions />
      <Advantages />
      <Benefits />
      <Faqs />
    </>
  );
};
