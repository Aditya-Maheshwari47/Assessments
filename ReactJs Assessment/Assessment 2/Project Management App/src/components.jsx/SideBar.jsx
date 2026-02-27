
export default function SideBar({projects, onSelectProject, onStartAddProject}){
    return(
            <aside className="sidebar">
                <h1>Your Projects</h1>
                <button onClick={onStartAddProject}>+ Add Project</button>
                <ul>          
                {projects.map((project)=> {
                    return (
                    <li key={project.id}>
                        <button onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>

                    )
                } )} 
                </ul>
            </aside>
    );
}  