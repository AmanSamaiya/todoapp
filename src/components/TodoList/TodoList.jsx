import { useContext } from "react";
import Todo from "../Todo/Todo.jsx";
import "../TodoList/TodoList.css";
import todoContext from "../../context/todoContext.js";


function TodoList() {

  const { todos , setTodos } = useContext(todoContext);


  function deleteTodo(id){
    const deleted = todos.filter((todo)=> todo.id !== id);
    setTodos(deleted)
   }


   function editTodo(editText,id){
      const edittedtodosList = todos.map((todo)=> {
        if(todo.id == id){
          todo.text = editText
        }
        return todo;
      });
      setTodos(edittedtodosList)
   }


   function onFinished(id){
    const edittedtodosList = todos.map((todo)=> {
      if(todo.id == id){
        todo.isFinished = ! (todo.isFinished)
      }
      return todo;
    });
    setTodos(edittedtodosList)
   }
   

  return (
    <div className="todoContainer">
      <h1 className="heading">To-Do List</h1>
      {todos &&
        todos.map((todo) => (
          <Todo
            deletetodos={()=>deleteTodo(todo.id)}
            edittodos = {(editText)=>editTodo(editText,todo.id)}
            finishtodos = {()=> onFinished(todo.id)}
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
