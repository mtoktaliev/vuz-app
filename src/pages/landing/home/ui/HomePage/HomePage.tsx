import {
  HeroSection,
  HowToProceedSection,
  PopularDestinationsSection,
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowToProceedSection />
      <PopularDestinationsSection />
    </>
  );
};
