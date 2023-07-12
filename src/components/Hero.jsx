
import wallpaper from '../images/wallpaper.jpg';

export default function Hero (){
    return(
        <>
          <div className="hero">
              <div className="hero-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam eum laborum praesentium id in qui dignissimos, iure aspernatur dolor quibusdam porro quia aut minima eligendi, accusamus nesciunt alias atque?</p>
                <img width={400} src={wallpaper} alt="" />
             </div>
          </div>
        </>
    )
 }