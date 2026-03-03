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
      description : "Learn three concepts",
      dueDate:"2026-05-01",
      tasks: []
    },
    { id: 'p2',
      title :"Reading",
      description :"Read articles",
      dueDate:"2026-06-02",
      tasks: []
    }
  ]);

  const [selectedProjectId, setSelectedProjectId ] = useState(null); 
  //null --> no project selected  , / "new" --> creating a new project , //"p1" --> show project

  function handleSelectProject(id){
    setSelectedProjectId(id);
  }
  function handleStartAddProject(){
    setSelectedProjectId("new");
  }
  
  function handleAddProject(newData){
    const newProject = {
      id: Date.now(),
      title : newData.title,
      description : newData.description,
      dueDate : newData.dueDate,
      tasks : []
    };
    
    setProjects(prevProjects => 
      [...prevProjects, newProject]);

    setSelectedProjectId(null);
  }

  function handleCancelAddProject() {
    setSelectedProjectId(null);
  }

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  function handleDeleteProject(){
    setProjects((prevProjects) =>{
      return prevProjects.filter((project) => project.id !== selectedProjectId);
      
    });
    setSelectedProjectId(null);
  }

  function handleAddTasks(taskData){
    if (taskData.trim().length === 0) {
    return;
  }
    setProjects((prevProjects) =>{
      return prevProjects.map(project =>{
        if(project.id === selectedProjectId){
          return{
            ...project,
            tasks : [...project.tasks,{id : Date.now(), description :taskData}],
          }
        }
        return project;
      });
    });
  }
  function handleDeleteTask(id){
    setProjects((prevprojects) =>{
      return prevprojects.map(project =>{
        if(project.id === selectedProjectId){
        return{
          ...project,
          tasks: project.tasks.filter((task)=>task.id !==id)
        }};
        return project;
      })
    })
  }

  return (
    <div className="app-container">
      <SideBar
        projects = {projects}
        onSelectProject = {handleSelectProject}
        onStartAddProject = {handleStartAddProject}
      />
      {selectedProjectId === null &&
        <NoProjectSelected onStartAddProject = {handleStartAddProject}/>}
      {selectedProjectId === "new" && (
        <NewProject
        onAdd = {handleAddProject}
        onCancel = {handleCancelAddProject}
        />)}

      {selectedProject && (
        <ProjectDetails
          project = {selectedProject}
          onDelete = {handleDeleteProject}
          onaddTasks = {handleAddTasks}
          onDeleteTask = {handleDeleteTask}
        />)}
       
    </div>
  );
}

export default App;
