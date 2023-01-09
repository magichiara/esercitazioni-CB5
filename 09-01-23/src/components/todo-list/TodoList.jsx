import { useState } from "react";
import { InputGroup } from "../../atoms/input-group/InputGroup";
import { TodoItem } from "../todo-item/TodoItem";
import "./todolist.scss";
export const TodoList = () => {
  const [items, setItems] = useState([]);

  const formSubmHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // classe JS che permette di creare un FormData Object (obj che ci permette di vedere i valori all'interno di un form, aggiungerli, modificarli, ecc.)
    const label = formData.get("taskName");

    setItems((oldItems) => {
      const newItem = { label, isDone: false };
      return [...oldItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    setItems((oldItems) => {
      const newItems = oldItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;
    });
  };

  return (
    <div className="wrapper">
      <h1>MAGIC TODO LIST</h1>

      <form onSubmit={formSubmHandler}>
        <InputGroup label={"Insert task:"} name="taskName" />
      </form>

      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            isDone={item.isDone}
            changeStatus={changeStatus}
          >
            {item.label}
          </TodoItem>
        ))}
      </ul>
    </div>
  );
};
