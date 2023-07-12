import moon from '../images/moon.svg'

export default function Navbar (){
    return(
        <>
          <div className="navbar">
              <div className="navbar-container">
                  <h1>Andre Jarl</h1>
                      <ul>
                            <img id="dark" style={{ cursor: 'pointer' }} src= {moon} alt=""></img>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contacts</li>
                      </ul>
              </div>
          </div>
        </>
    )
 }
 