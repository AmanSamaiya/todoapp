import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [ todos , setTodos ]= useState([

    {id:1,text:"todo1",isFinished:false},
    {id:2,text:"todo2",isFinished:false}

  ]);


  function addTodos(todotext) {
    const nextId = todos.length + 1 ;
    if(todotext.length>0) {
      setTodos([...todos , {id:nextId , text : todotext , isFinished : false}])
    }
    } 

  


  return (
    <div className="App">
      <AddTodo addTodo={addTodos} />
    <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
