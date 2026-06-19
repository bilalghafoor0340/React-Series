import { useState } from "react";
import "./App.css";



function App() {

 let [counter, setCounter] = useState(10)

  const addValue = () => {
   if(counter < 25){
    counter = counter + 1
    setCounter(counter)
   }
    
  }

  let removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    // setCounter(counter - 1)
  }
  

  return (
    <>
    <h1>Lets build a  Counter APP</h1>
    <h2>Count Here : {counter}</h2>


    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Subtract Value {counter}</button>
    <p>footer {counter}</p>
    </>
  );
}

export default App;
