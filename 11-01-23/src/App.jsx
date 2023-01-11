import { Addresses } from "./fetch/components/addresses/Addresses";
import { Banks } from "./fetch/components/banks/Banks";
import { BloodTypes } from "./fetch/components/blood_types/BloodTypes";
import { CreditCards } from "./fetch/components/credit_cards/CreditCards";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <Addresses />
      <Banks />
      <BloodTypes />
      <CreditCards />
    </div>
  );
}

export default App;
