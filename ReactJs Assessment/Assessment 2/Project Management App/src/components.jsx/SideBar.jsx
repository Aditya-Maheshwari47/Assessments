
export default function SideBar({projects, onSelectProject, onStartAddProject}){
    return(
            <aside className="sidebar">
                <h1>YOUR PROJECTS</h1>
                <button id="add-project" onClick={onStartAddProject}>+ Add Project</button>
                <ul>          
                {projects.map((project)=> {
                    return (
                    <li key={project.id}>
                        <button id="project" onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>

                    )
                } )} 
                </ul>
            </aside>
    );
}  