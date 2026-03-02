import { useState } from "react"
import TaskInput from "./Tasks/TaskInput";
import TaskList from "./Tasks/TaskList";

export default function ProjectDetails({project,onDelete,onaddTasks}){

    return(
        <div className="no-project">
            <button className="delete" onClick={onDelete}>Delete</button>
            <h1>{project.title}</h1>
            <p>Due Date : {project.dueDate}</p>
            <p>{project.description}</p>
            <hr />

            <h2>Tasks</h2>
            <TaskInput 
                addTask={onaddTasks}
            />
            {project.tasks.length ?
            <TaskList
                tasks ={project.tasks}
                /> :
                <p>This project does not have any tasks yet.</p>
            }

            
            
                    
        </div>

    )
}