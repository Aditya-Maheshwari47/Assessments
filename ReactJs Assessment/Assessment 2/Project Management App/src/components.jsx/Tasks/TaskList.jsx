export default function TaskList({ tasks }) {
    return (
        <>
            <div className="task-list">
                <ul>
                    {tasks.map((task) => {
                        return (
                            <div>
                            <li id="task-item" key={task.id}>
                                {task.description}
                            </li>
                            </div>
                        )
                    })}

                </ul>

            </div>

        </>

    )


}