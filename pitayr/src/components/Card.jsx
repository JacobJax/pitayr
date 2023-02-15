import './Card.css'
import dino from './img/dino.png'

function Card() {
   return (
      <div className="card">
         <div className="card-icon">
            <img className='avt' src={dino} alt="avatar" />
         </div>
         <div className="card-details">
            <div className="detail-header">
               <p className="name">darktan .<small> 2m ago</small></p>
               <a href="#" className='btn'>Follow</a>
            </div>
            <p className="card-title">Python Data Science facts</p>
            <img src={dino} alt="" className="card-img" />
            <div className="detail-text">
               <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestiae.</p>
               <div className="tags">
                  <p className="hashtags">
                     <span className="tag"><a href="#" className='btn tag-link '> #trennding</a></span>
                     <span className="tag"><a href="#" className='btn tag-link'> #top</a></span>
                     <span className="tag"><a href="#" className='btn tag-link'> #new</a></span>
                     <span className="tag"><a href="#" className='btn tag-link'> #grammy</a></span>
                     <span className="tag"><a href="#" className='btn tag-link'> #hot</a></span>
                     <span className="tag"><a href="#" className='btn tag-link'> #music</a></span>
                  </p>
               </div>
               <div className="stats">
                  <div className="stat-left">
                     <p className="comment-count">36 comments</p>
                  </div>
                  <div className="stat-right">
                     <a href="#" className="like btn">🔥</a>
                     <a href="#" className="comment btn">💬</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card