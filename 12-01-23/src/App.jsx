import { useState } from "react";
import { Counter } from "./counter/components/counter/Counter";
import { Addresses } from "./fetch/components/addresses/Addresses";
import { Banks } from "./fetch/components/banks/Banks";
import { BloodTypes } from "./fetch/components/blood_types/BloodTypes";
import { CreditCards } from "./fetch/components/credit_cards/CreditCards";
import { Selector } from "./switcher/selector/Selector";
import { DefaultComponent } from "./switcher/default_component/DefaultComponent";
import "./App.css";

const componentMap = {
  addresses: Addresses,
  banks: Banks,
  bloodTypes: BloodTypes,
  creditCards: CreditCards,
  counter: Counter,
  default: DefaultComponent,
};

const App = () => {
  const [component, setComponent] = useState("default");

  const changeHandler = (e) => {
    setComponent(e.target.value);
  };

  const DynamicComponent = componentMap[component];

  return (
    <div>
      <Selector changeHandler={changeHandler} />
      <DynamicComponent />
    </div>
  );
};

export default App;
