
import { HeroSection } from "./HeroSection";
import "./index.css"
import { LoginForm } from "./LoginForm";
import { Navbar } from "./Navbar";

function App() {
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

export default App;
