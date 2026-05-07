import {
  HeroSection,
  HowToProceedSection,
  PopularDirections,
} from "~widgets/landing";

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowToProceedSection />
      <PopularDirections />
    </>
  );
};
