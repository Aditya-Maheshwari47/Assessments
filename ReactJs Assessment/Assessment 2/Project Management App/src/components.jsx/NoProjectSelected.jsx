import No_Project_image from '../assets/no-projects.png';
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="no-project-selected">  
            <img src={No_Project_image} alt="No_Project_image" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <button onClick={onStartAddProject}>Create new project</button>
        </div>
    );
} 