import Message from "./Message";
import Typography from "./Typography";
import Template from "./Template";
import TextInputs from "./textInputs";
import "./index.css"

function App() {
  return (
    <div>
      <h1 class="text-center text-3xl">Design system</h1>
      <div class="grid grid-cols-2 justify-center justify-items-center gap-20 items-center">
        <Message/>
        <Typography/>
        <Template/>
        <TextInputs/>
      </div>
    </div>
  );
}

export default App;
