import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import Info from "./components/Info/Info";
import gentlemen from "./gentlemen";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info selectedNumber={0} />
        <Button />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => (
            <Gentleman {...gentleman} key={gentleman.id} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
