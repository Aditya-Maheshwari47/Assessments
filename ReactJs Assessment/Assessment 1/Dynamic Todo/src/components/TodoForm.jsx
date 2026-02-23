import {useState} from "react";

export default function TodoForm({addTodo}){
    const[task, setTask] = useState("");

    function handleChange(e){
      setTask(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();   // stop page refresh
      addTodo(task);    
      setTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              required 
              placeholder="Enter task..."
              value={task}
              onChange={handleChange}/>
            <button
              type="submit"
            >
            Add</button>
        </form>
    );
}