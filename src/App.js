import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import todoContext from "./context/todoContext";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <todoContext.Provider value = {{todos , setTodos}}>
        <AddTodo/>
        <TodoList/>
      </todoContext.Provider>
    </div>
  );
}

export default App;
