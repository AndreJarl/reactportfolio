import { useState } from 'react'
import moon from '../assests/moon.svg'
import { Link } from "react-router-dom"
import { BsMoon} from 'react-icons/Bs';
import { LiaSun } from 'react-icons/Lia';

export default function Navbar (){
      const [isclicked, setClicked] = useState(false);

      const handleClicked = () => {
            setClicked(!isclicked);
            
      }
    return(
        <>
          <div id='nav' className="navbar">
              <div className="navbar-container">
              
                  <h1 className='hh'><Link to="/" style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}>Andre Jarl</Link></h1>
                      <ul>
                         <li><h2>{isclicked ? (<LiaSun style={{cursor: 'pointer'}} onClick={handleClicked}/>) : (< BsMoon style={{cursor: 'pointer'}}  onClick={handleClicked}/>)}</h2></li>
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
 