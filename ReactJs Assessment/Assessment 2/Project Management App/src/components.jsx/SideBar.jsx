
export default function SideBar({projects, onSelectProject, onStartAddProject}){
    return(
            <aside className="sidebar">
                <h3>Your Projects</h3>
                <button onClick={onStartAddProject}>+ Add Button</button>
                <ul>
                
                {projects.map((project)=> {
                    <li key={project.id}>
                        <button onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>
                } )} 
                </ul>
            </aside>
    );
}  