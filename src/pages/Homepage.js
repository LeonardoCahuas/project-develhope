import { HeroSection } from "./HeroSection";
import { LoginForm } from "../components/LoginForm";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-row px-24">
          <LoginForm />
      </div>
    </div>
  );
}

