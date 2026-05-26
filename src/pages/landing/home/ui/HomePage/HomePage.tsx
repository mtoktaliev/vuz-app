import {
  HeroSection,
  AdmissionSteps,
  Directions,
  Advantages,
  Benefits,
  Faqs,
  LegalBasis,
  RequiredDocuments
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Advantages />
      <AdmissionSteps />
      <RequiredDocuments />
      <Directions />
      <LegalBasis />
      <Benefits />
      <Faqs />
    </>
  );
};
