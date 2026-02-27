export default function TaskList({tasks}){
    return (
        <>
            <div className="task-list">
                <ul>
                    {tasks.map((task) =>{
                        return(
                            <li key={task.id}>
                                {task.description}                              
                            </li>
                        )
                    })}

                </ul>

            </div>
                
        </>
        
    )


}