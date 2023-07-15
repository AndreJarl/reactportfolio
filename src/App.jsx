import Contact from './routes/Contact'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import './components/style.css'
import { Route, Routes } from 'react-router-dom'

export default function App(){
     return(
        <>
           <Routes>
                 <Route path = "/" element={<Home />}/>
                 <Route path = "/about" element={<About />}/>
                 <Route path = "/projects" element={<Projects />}/>
                 <Route path = "/contact" element={<Contact />}/>
           </Routes>
        </>
     )

}
