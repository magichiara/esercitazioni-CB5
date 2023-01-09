import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import "./todoitem.scss";

export const TodoItem = (props) => {
  const { children, isDone, changeStatus, index } = props;

  const clickHandler = () => {
    changeStatus(index, isDone);
  };

  return (
    <ul>
      <li>
        {isDone ? <FiCheck /> : <FiX />} <span>{children}</span>
        <button onClick={clickHandler}>{isDone ? "UNDONE" : "DONE"}</button>
      </li>
    </ul>
  );
};
