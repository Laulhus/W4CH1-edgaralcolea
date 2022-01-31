import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Gentleman from "./Components/Gentleman/Gentleman";
import Info from "./Components/Info/Info";
import gentlemen from "./gentlemen";

function App() {
  const [number, setNumber] = useState(0);

  const selectAll = () => {
    for (let gentleman of gentlemen) {
      gentleman.selected = true;
    }
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info selectedNumber={number} />
        <Button actionOnClick={setNumber(gentlemen.length)} />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => (
            <Gentleman {...gentleman} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
