import Todo from "../Todo/Todo.jsx";
import "../TodoList/TodoList.css";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function deleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

  function editTodo(editText, id) {
    dispatch({ type: "edit_todo", payload: { editText, id } });
  }

  function onFinished(id) {
    dispatch({ type: "finish_todo", payload: { id } });
  }

  return (
    <div className="todoContainer">
      <h1 className="heading">To-Do List</h1>
      {todos &&
        todos.map((todo) => (
          <Todo
            deletetodos={() => deleteTodo(todo.id)}
            edittodos={(editText) => editTodo(editText, todo.id)}
            finishtodos={() => onFinished(todo.id)}
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isFinished={todo.isFinished}
          />
        ))}
    </div>
  );
}

export default TodoList;
