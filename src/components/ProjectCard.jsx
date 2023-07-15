import { Link } from "react-router-dom"

export default function ProjectCard(props) {
      return (
        <>
            <Link to={props.link}><div className="cardContainer">
            <div className='bgcard'> 
            <p>{props.desc}</p>
            </div>
            <img className='cardimg' src={props.imgsrc} alt="" />     
            </div>    
            </Link>
          </>                            
      )
}