import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name !== "") {
      alert(`Welcome ${name}`);
    }
  }, [name]);

  const [number, setNumber] = useState(0);
  const multipliedValue = useMemo(() => {
    console.log("Calculating...");
    return number * 5;
  }, [number]);

  const showWelcome = useCallback(() => {
    alert("Welcome to react App!");
  }, []);

  const showHello = useCallback(() => {
    alert("Hello, React!");
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h2>Student Name Display</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Welcome {name}</h3>

        <hr />

        <h2>Multiply Number by 5</h2>
        <h3>Number: {number}</h3>
        <button onClick={() => setNumber(number + 1)}>Increase</button>
        <h3>Result: {multipliedValue}</h3>

        <hr />

        <h2>Show Welcome Message</h2>
        <button onClick={showWelcome}>Show Welcome</button>
        <button onClick={showHello}>Show Hello</button>

      </header>
    </div>
  );
}

export default App;