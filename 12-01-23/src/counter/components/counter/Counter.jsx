import "./counter.scss";
import { useReducer } from "react";

const counterFunc = (state, action) => {
  if (action.type === "decrement") return { counter: state.counter - 1 };
  if (action.type === "increment") return { counter: state.counter + 1 };
  if (action.type === "clean") return { counter: 0 };
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterFunc, { counter: 0 });
  return (
    <div className="wrapper count">
      <div className="info-count">
        <div className="count-btns">
          <button
            className="count-btn"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <h3>{state.counter}</h3>
          <button
            className="count-btn"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="clean-btn"
            onClick={() => dispatch({ type: "clean" })}
          >
            CLEAN
          </button>
        </div>
      </div>
    </div>
  );
};
