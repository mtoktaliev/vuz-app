import {
  HeroSection,
  AdmissionSteps,
  Directions,
  Advantages,
  Benefits,
  Faqs,
  LegalBasis,
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AdmissionSteps />
      <Directions />
      <Advantages />
      <Benefits />
      <Faqs />
      <LegalBasis />
    </>
  );
};
