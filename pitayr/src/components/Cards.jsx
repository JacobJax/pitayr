import './Cards.css'
import Main from './Main'
import Aside from './Aside'

function Cards() {
   return (
      <section id="page">
         <div className="span-lg page-cont">
            <Main />
            <Aside />
         </div>
      </section>
   )
}

export default Cards