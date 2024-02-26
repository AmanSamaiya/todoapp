import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import todoContext from "./context/todoContext";
import TodoReducer from "./Reducers/TodoReducer";

function App() {

 const [todos , dispatch] = useReducer(TodoReducer , []);

  return (
    <div className="App">
      <todoContext.Provider value = {{todos , dispatch}}>
        <AddTodo/>
        <TodoList/>
      </todoContext.Provider>
    </div>
  );
}

export default App;
