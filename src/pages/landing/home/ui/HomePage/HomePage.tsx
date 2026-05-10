import {
  HeroSection,
  AdmissionSteps,
  PopularDirections,
  RequiredDocuments,
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AdmissionSteps />
      <PopularDirections />
      <RequiredDocuments />
      <PopularDirections />
    </>
  );
};
