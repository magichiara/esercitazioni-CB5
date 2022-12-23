import { useState } from "react";
import { TodoList } from "./components/list/TodoList";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <TodoList />
    </div>
  );
}

export default App;
