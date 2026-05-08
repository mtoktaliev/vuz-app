import {
  HeroSection,
  AdmissionSteps,
  PopularDirections,
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AdmissionSteps />
      <PopularDirections />
    </>
  );
};
