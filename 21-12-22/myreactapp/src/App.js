import "./App.css";
import { Button } from "./components/Button/Button";
import { Text } from "./components/Text/Text";

function App() {
  return (
    <>
      <div className="wrapper">
        <Text
          as="h2"
          content="CHOOSE YOUR FAVOURITE ANIMAL"
          variant="title"
        ></Text>
        <div className="btns-container">
          <Button
            variant="primary"
            children="🐱"
            onClick={() => console.log("meow")}
          />
          <Button
            variant="primary"
            children="🐶"
            onClick={() => console.log("wooof")}
          />
          <Button
            variant="primary"
            children="🐷"
            onClick={() => console.log("oink")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
