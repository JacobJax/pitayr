import './Recomendations.css'
import egg from './img/dinoegg.png'

function Recomendations() {
   return (
      <ul className="recomendations">
         <li className="recom-header">Recommendations</li>
         <li className="recomendation">
            <div className="recom-l">
               <div className="recom-img">
                  <img src={ egg } alt="" />
               </div>
               <div className="recom-name">
                  <p className="username">lynshot</p>
                  <p className="handle">@lyn201</p>
               </div>
            </div>
            <a href="#" className="recom-link btn">Follow</a>
         </li>
         <li className="recomendation">
            <div className="recom-l">
               <div className="recom-img">
                  <img src={ egg } alt="" />
               </div>
               <div className="recom-name">
                  <p className="username">lynshot</p>
                  <p className="handle">@lyn201</p>
               </div>
            </div>
            <a href="#" className="recom-link btn">Follow</a>
         </li>
         <li className="recomendation">
            <div className="recom-l">
               <div className="recom-img">
                  <img src={ egg } alt="" />
               </div>
               <div className="recom-name">
                  <p className="username">lynshot</p>
                  <p className="handle">@lyn201</p>
               </div>
            </div>
            <a href="#" className="recom-link btn">Follow</a>
         </li>
         <li className="recomendation">
            <div className="recom-l">
               <div className="recom-img">
                  <img src={ egg } alt="" />
               </div>
               <div className="recom-name">
                  <p className="username">lynshot</p>
                  <p className="handle">@lyn201</p>
               </div>
            </div>
            <a href="#" className="recom-link btn">Follow</a>
         </li>
      </ul>
   )
}

export default Recomendations