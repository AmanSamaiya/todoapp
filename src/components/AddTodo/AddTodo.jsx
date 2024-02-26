import { useContext, useState } from "react";
import "../AddTodo/AddTodo.css";
import todoContext from "../../context/todoContext";

function AddTodo() {

  const { todos, dispatch } = useContext(todoContext);

  const [todotext, setTodoText] = useState("");



  function addTodo(todotext) {
   dispatch({type:'add_todo' , payload:{todotext}})
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
      <button className="addbtn" onClick={()=>{
         addTodo(todotext)
         setTodoText("");
      }}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
