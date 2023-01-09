import { useState } from "react";
import { TodoList } from "./components/todo-list/TodoList";
import { InputGroup } from "./atoms/input-group/InputGroup";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <TodoList />
    </div>
  );
}

export default App;
