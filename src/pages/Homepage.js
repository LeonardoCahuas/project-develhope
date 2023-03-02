import { HeroSection } from "./HeroSection";
import { Cards } from "../components/Cards";
import { Teampage } from "../components/Teamsection";

import "../styles/index.css";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Teampage />
    </div>
  );
};
