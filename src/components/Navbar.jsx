import { useState, useEffect } from 'react'
import moon from '../assests/moon.svg'
import { Link } from "react-router-dom"
import { BsMoon} from 'react-icons/Bs';
import { LiaSun } from 'react-icons/Lia';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";


export default function Navbar (){
      const [isclicked, setClicked] = useState(false);
      const [isOpen, setOpen] = useState(false);
      const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
      );
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }, [darkMode]);

      const handleClicked = () => {
            setClicked(!isclicked);
            setDarkMode(!darkMode);
      }

      const openClose = () =>{
          setOpen(!isOpen);
      }
    return(
        <>
          <div id='nav' className="navbar">
              <div className="navbar-container">
              
                <Link to="/" style={{textDecoration:"none"}}>  <h1 className='hh' >Andre Jarl</h1></Link>
                      <ul>
                         <li><h2>{isclicked ? (<LiaSun style={{cursor: 'pointer'}} onClick={handleClicked}/>) : (< BsMoon style={{cursor: 'pointer'}}  onClick={handleClicked}/>)}</h2></li>
                          <li> <Link to="/">Home</Link></li>
                          <li> <Link to="/about">About</Link></li>
                          <li> <Link to="/projects">Projects</Link></li>
                          <li> <Link to="/contact">Contacts</Link></li>
                          
                      </ul>
              </div>
          </div>

          <div className='navbar-mobile'>
                  <div className='nav-container'>
                  <Link to="/" style={{textDecoration:"none"}}>  <h1 className='hh' >Andre Jarl</h1></Link>
                  <div className='nav-butt'>
                  <h2>{isclicked ? (<LiaSun style={{cursor: 'pointer'}} onClick={handleClicked}/>) : (< BsMoon style={{cursor: 'pointer'}}  onClick={handleClicked}/>)}</h2>
                   <h1>{isOpen ? (<FiX onClick={openClose}/>):(<RxHamburgerMenu onClick={openClose}/>)}</h1>
                  </div>
                  </div>

                  <div className={isOpen ? "sidebar" :"hide-sidebar"}>
                  <ul>
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
 