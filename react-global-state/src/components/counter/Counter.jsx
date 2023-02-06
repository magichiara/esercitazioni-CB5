import styles from "./styles.module.scss";
import { useReducer } from "react";

const initState = { count: 0 };

const reducer = (state, action) => {
  if (action.type === "decrement") return { count: state.count - 1 };
  if (action.type === "increment") return { count: state.count + 1 };
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className={styles.main}>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <h3>{state.count}</h3>
      <button
        className={styles.increment}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
