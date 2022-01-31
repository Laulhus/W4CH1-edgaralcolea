import { useState } from "react";
import "./App.css";
import Info from "./Components/Info/Info";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info selectedNumber={number} />
      </section>
    </div>
  );
}

export default App;
