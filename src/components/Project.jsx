import ProjectCard from "./ProjectCard"
import ProjectData from "./ProjectData"
export default function Project(){
      return(
          <>
            <div className="projects" id="projects">
            <h1>MY RECENT WORKS</h1>
               <div className="project-container">
                  
                    <div className="projectCard">
                    {ProjectData.slice(-2).map((val, ind)=>{
                         return (
                              <ProjectCard 
                              key = {ind}
                              link = {val.link}
                              imgsrc ={val.imgsrc}
                              desc = {val.desc}
                              /> 
                         )
                    })}
                </div>                 
                    </div>
               </div>
          </>
      )
}