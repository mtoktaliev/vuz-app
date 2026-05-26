import {
  HeroSection,
  AdmissionSteps,
  Directions,
  Benefits,
  Faqs,
  LegalBasis,
  RequiredDocuments
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AdmissionSteps />
      <RequiredDocuments />
      <Directions />
      <LegalBasis />
      <Benefits />
      <Faqs />
    </>
  );
};
