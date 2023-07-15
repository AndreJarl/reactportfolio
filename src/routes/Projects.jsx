import Navbar from "../components/Navbar"
import ProjectData from "../components/ProjectData"
import ProjectCard from "../components/ProjectCard"
export default function Projects(){
    return(
       <div>
       <Navbar />
       <div className="projects">
            <h1>MY  PERSONAL  PROJECTS</h1>
               <div className="project-container">
                  
                    <div className="projectCard">
                    {ProjectData.map((val, ind)=>{
                         return (
                              <ProjectCard 
                              key = {ind}
                              imgsrc ={val.imgsrc}
                              desc = {val.desc}
                              /> 
                         )
                    })}
                </div>                 
                    </div>
               </div>
       </div>
    )
}