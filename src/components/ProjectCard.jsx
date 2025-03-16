import { Link } from "react-router-dom"

export default function ProjectCard({link, desc, imgsrc, lang}) {

   const langArray = Array.isArray(lang) ? lang : [lang];

      return (
        <>
            <Link to={link}>
            <div className="cardContainer">
            <div className='bgcard'> 
              <div className="desc-butt">
            <p>{desc}</p>
            <button>Visit Website</button>
            </div>
        <div className="lang">
           {langArray.map((img, index) => (
              <img key={index} className='lang1' src={img} alt="" />   
            ))}
        </div>
            </div>

            <img className='cardimg' src={imgsrc} alt="" />     
            
            </div>    
            </Link>
          </>                            
      )
}