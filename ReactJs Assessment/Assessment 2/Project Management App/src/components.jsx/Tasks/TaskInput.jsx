import { useState } from "react"

export default function TaskInput({addTask}){
    const[task,setTask] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        addTask(task);
        setTask("");
    }
    return(
    <div className="task-input">
        <form onSubmit={handleSubmit}>
            <div>
                <input id="input"
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <button id="button" type="submit">
                    Add task
                </button>
            </div>
        

            
            

        </form>
    </div>
    )

}