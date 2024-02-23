import { useContext, useState } from "react";
import "../AddTodo/AddTodo.css";
import todoContext from "../../context/todoContext";

function AddTodo() {
  const [todotext, setTodoText] = useState("");

  const { todos, setTodos } = useContext(todoContext);

  function addTodo() {
    const nextId = todos.length + 1;
    if (todotext.length > 0) {
      setTodos([...todos, { id: nextId, text: todotext, isFinished: false }]);
    }
    setTodoText("");
  }

  return (
    <div className="addContainer">
      <input
        className="addinput"
        type="text"
        placeholder="Add your To-Do's ..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todotext}
      />
      <button className="addbtn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
