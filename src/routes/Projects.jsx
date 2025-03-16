import Navbar from "../components/Navbar"
import ProjectData from "../components/ProjectData"
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
export default function Projects(){
    return(
       <div>
       <Navbar />
       <div className="projects">
            <h1>MY  PERSONAL  PROJECTS</h1>
               <div  id="#proj" className="project-container">
                  
                    <div className="projectCard">
                    {ProjectData.map((val, ind)=>{
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
                    <div style={{transform: 'rotate(180deg)', marginBottom: '4em'}} class="arrow2" >
                                <a style={{ color: 'rgb(15, 154, 209)'}} href="#nav"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg></a>
                </div>
               </div>
              
               <Footer/>
       </div>
    )
}