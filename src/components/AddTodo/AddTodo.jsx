import { useState } from "react";
import "../AddTodo/AddTodo.css";

function AddTodo({ addTodo }) {
  const [todotext, setTodoText] = useState("");

  return (
    <div className="addContainer">
      <input className="addinput"
        type="text"
        placeholder="Add your To-Do's ..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todotext}
      />
      <button className="addbtn"
        onClick={() => {
          addTodo(todotext);
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
