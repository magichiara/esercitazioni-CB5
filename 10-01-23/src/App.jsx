import { useState } from "react";
import { NumsGenerator } from "./components/nums-generator/NumsGenerator";
import { Fetch } from "./components/fetch/Fetch";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <NumsGenerator />
      <hr />
      <Fetch />
    </div>
  );
}

export default App;
