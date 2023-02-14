import './Nav.css'
import { useState } from 'react'

function Nav() {

   const [page, setPage] = useState('home')

   function handleClick(page) {
      setPage(page)
   }

   return (
      <div className="nav">
         <ul>
            <li onClick={() => handleClick('home')} className={`nav-item ${page == 'home' && 'active'}`}><a href="#" className="nav-a"></a>Home</li>
            <li onClick={() => handleClick('trending')} className={`nav-item ${page == 'trending' && 'active'}`}><a href="#" className="nav-a"></a>Trending</li>
         </ul>
      </div>
   )
}

export default Nav