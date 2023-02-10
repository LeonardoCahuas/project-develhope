import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { LoginForm } from "./LoginForm";

import "./index.css";

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

