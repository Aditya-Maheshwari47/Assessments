export default function TaskList({ tasks,onDeleteTask }) {
    return (
        <>
            <div className="task-list">
                <ul>
                    {tasks.map((task) => {
                        return (
                            <div className="tasks" key={task.id}>
                            <li id="task-item" >
                                {task.description}
                            </li>
                            <button onClick = {() =>onDeleteTask(task.id)}>Clear</button>
                            </div>
                        )
                    })}

                </ul>

            </div>

        </>

    )


}