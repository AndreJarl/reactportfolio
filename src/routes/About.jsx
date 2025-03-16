import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import html from '../assests/html.png'
import css from '../assests/css.png'
import js from '../assests/Javascript.png'
import react from '../assests/react-removebg.png'
import boot from '../assests/Bootstrap.png'
import sass from '../assests/sass.png'
import vscode from '../assests/vscode.png'
import net from '../assests/dot-NET-Core.png'
import visual from '../assests/visual.png'
import git from '../assests/git.png'
import mongo from '../assests/mongo.png'
import node from '../assests/node.png'
import express from '../assests/express.png'
import tailwind from '../assests/tailwind.png'
import postman from '../assests/postman.png'
import figma from '../assests/figma.png'


export default function About(){
     return(
        <div>
        <Navbar />
        <div className="about">
               <h1 style={{fontSize: '50px'}}>ABOUT ME</h1>
           <div className="about-container">
              <div className="about-desc">
                <p>Hey there! I'm Andre Jarl Aniana, an 18-year-old second-year Computer Engineering student with a burning passion for web development. Ever since I first tinkered with coding, I knew I had found my calling. The digital world has become my playground, and I am determined to leave my mark by creating immersive and functional web experiences.
               </p>
               <p>
               Beyond coding, I find fulfillment in collaborating with like-minded individuals, as I believe teamwork enhances the potential of any project. I value open communication, constructive feedback, and the opportunity to learn from others.
               </p>
               
               <p>
               My vision for the future is to contribute to the web development community, making a positive impact on the digital landscape. With each step, I inch closer to my dream of becoming a versatile full-stack developer, armed with the skills to tackle complex challenges and build innovative solutions.
               </p>
              </div>
           </div>
           <div className="tech">
           <p style={{fontWeight: '700'}}>Technologies I've worked with</p>
         
              <div className="techimg">
                  <img src={html} alt="" srcset="" />
                  <img src={css} alt="" srcset="" />
                  <img src={sass} alt="" srcset="" />
                  <img src={boot} alt="" srcset="" />
                  <img src={js} alt="" srcset="" />
                  <img src={react} alt="" srcset="" />
                  <img src={net} alt="" srcset="" />
                  <img src={vscode} alt="" srcset="" />
                  <img style={{width: '60px'}} src={visual} alt="" srcset="" />
                  <img src={git} alt="" srcset="" />    
                  <img src={mongo} alt="" srcset="" />     
                  <img src={node} alt="" srcset="" />    
                  <img src={express} alt="" srcset="" />           
                  <img src={tailwind} alt="" srcset="" />  
                  <img src={postman} alt="" srcset="" />   
                  <img src={figma} alt="" srcset="" />              
               
              </div>
           </div>
          
        </div>
           <Footer />
        </div>
     )
}