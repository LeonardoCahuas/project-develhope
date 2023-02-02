import { HeroSection } from "./HeroSection";
import { LoginForm } from "./LoginForm";
import { Navbar } from "./Navbar";

import "./index.css"

function Homepage() {
  return (
    <div className="bg-base-300 ">
      <Navbar/>
      <HeroSection/>
      <div className="flex flex-row px-24">
      <LoginForm/>
    </div>
    </div>
  );
}

export default Homepage;