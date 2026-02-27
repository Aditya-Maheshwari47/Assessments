import { useState } from "react"
import TaskInput from "./Tasks/TaskInput";
import TaskList from "./Tasks/TaskList";

export default function ProjectDetails({project}){
    const [allTasks , setAllTasks] = useState([]);

    function handleAddTasks(data){
        if(data.trim().length !== 0){
            const newTask = {
                id : Date.now(),
                description : data 
            }
            setAllTasks(prevtasks => [...prevtasks,newTask]);    
        }
    }


    return(
        <div className="no-project">
            <h1>{project.title}</h1>
            <p>Due Date : {project.dueDate}</p>
            <p>{project.description}</p>
            <hr />

            <h2>Tasks</h2>
            <TaskInput 
                addTask={handleAddTasks}
            />
            {allTasks.length ?
            <TaskList
                tasks ={allTasks}
                /> :
                <p>This project does not have any tasks yet.</p>
            }
            
                    
        </div>

    )
}