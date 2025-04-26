import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 20;
  let addValue = () => {
    if (counter == 20) {
      setCounter((counter = 20));
    } else {
      setCounter(counter + 1);
    }
  };

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter((counter = 0));
    }
  };
  return (
    <>
      <h1>Vite + React</h1>
      <p>Counter Value: {counter}</p>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
