import { useState } from "react";

import SideBar from "./components.jsx/SideBar";
import NoProjectSelected from "./components.jsx/NoProjectSelected";
import ProjectDetails from "./components.jsx/ProjectDetails";
import NewProject from "./components.jsx/NewProject";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 'p1',
      title :"Learning",
      description : "asdagsddvrere",
      dueDate:"2026-01-01",
      tasks: []
    },
    { id: 'p2',
      title :"Reading",
      description :"fdsfeegree",
      dueDate:"2026-01-01",
      tasks: []
    }
  ]);

  const [selectedProjectId, setSelectedProjectId ] = useState(null); 
  //null --> no project selected  , // "new" --> creating a new project , //"p1" --> show project

  function handleSelectProject(id){
    setSelectedProjectId(id);
  }
  function handleStartAddProject(){
    setSelectedProjectId("new");
  }
  
  function handleAddProject(newData){
    const newProject = {
      id: Date.now(),
      ...newData,
      task : []
    };
    
    setProjects(prevProjects => 
      [...prevProjects, newProject]);

    setSelectedProjectId(null);
  }
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  
  return (
    <div className="app-container">
      <SideBar
        projects = {projects}
        onSelectProject = {handleSelectProject}
        onStartAddProject = {handleStartAddProject}
      />
      {selectedProjectId === null &&  <NoProjectSelected/> }
      {selectedProjectId === "new" && (
        <NewProject
        onAdd = {handleAddProject}
        />)}

      {selectedProject && (
        <ProjectDetails
          project = {selectedProject}
        />)}
       
    </div>
  );
}

export default App;
