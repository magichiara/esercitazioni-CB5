import "./Button.css";

export function Button() {
  const showHello = () => {
    console.log("Hello World!");
  };
  return (
    <button className="btn" onClick={showHello}>
      CLICKME
    </button>
  );
}
