import { HeroSection } from "./HeroSection";
import { LoginForm } from "../components/LoginForm";
import { Cards } from "../components/Cards";
import { Teampage } from "./Teampage";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-row px-24">
        <LoginForm />
      </div>
      <Cards />
      <Teampage />
    </div>
  );
};
