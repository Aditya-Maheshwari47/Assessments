import {useState} from "react";

import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList";

export default function App() {
  const[todos, setTodos] = useState([]);

  function addTodo(taskText){
    const newTodo = {
      id : Date.now(),
      text : taskText,
      completed :false,
    };

    if(newTodo.text.trim().length !== 0){
      setTodos((prevTodos)=>[...prevTodos,newTodo]);
    }
  }

  function toggleTodo(id){
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  } 
  function deleteTodo(id){
    setTodos((prevTodos) =>
      prevTodos.filter((todo) =>
        todo.id !== id
      )
    );
  }

  return (
  <div className="app">
    <Header/>
    <TodoForm addTodo = {addTodo}/>
    <TodoList 
      todos = {todos}
      toggleTodo = {toggleTodo}
      deleteTodo = {deleteTodo}
    />  
  </div>
  )
}


