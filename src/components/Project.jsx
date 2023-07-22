import ProjectCard from "./ProjectCard"
import ProjectData from "./ProjectData"
import { Link } from "react-router-dom"

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
                              lang={val.lang}
                              /> 
                         )
                    })}
                </div>                 
                    </div>
                
                  <Link to='/projects'><button className="projBtn">See More</button></Link>
                    
               </div>
          </>
      )
}