import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Project from "../components/Project"
import Footer from "../components/Footer"
import Achievements from "../components/Achievements"

export default function Home(){
     return(
         <div>
            <Navbar />
            <Hero />
            <Project />
            <Achievements />
            <Footer />
         </div>
     )
}