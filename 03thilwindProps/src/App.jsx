import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4">Hello world</h1>
      <Card username="bilal" />
      <Card />
    </>
  );
}

export default App;
