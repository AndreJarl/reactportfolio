import moon from '../assests/moon.svg'
import { Link } from "react-router-dom"

export default function Navbar (){
      
    return(
        <>
          <div className="navbar">
              <div className="navbar-container">
              
                  <h1 className='hh'><Link to="/" style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}>Andre Jarl</Link></h1>
                      <ul>
                            <img id="dark" style={{ cursor: 'pointer' }} src= {moon} alt=""></img>
                          <li> <Link to="/">Home</Link></li>
                          <li> <Link to="/about">About</Link></li>
                          <li> <Link to="/projects">Projects</Link></li>
                          <li> <Link to="/contact">Contacts</Link></li>
                          
                      </ul>
              </div>
          </div>
        </>
    )
 }
 