export default function ProjectDetails({project}){
    return(
        <div className="no-project">
            <h1>{project.title}</h1>
            <p>Due Date : {project.dueDate}</p>
            <p>{project.description}</p>

            <hr />

            <h2>Tasks</h2>
            <p>This Project does not have any task.</p>


        </div>

    )
}