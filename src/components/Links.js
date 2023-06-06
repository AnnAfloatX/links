import './css/Links.css';
import LinkCard from './LinkCard.js';
import {links} from '../const/linkseed';


function Links() {
  return (
    <div id='links'>
      {
        links.map(({id, title, type, day, time, date, location, buttonLink, buttonText})=> {
          let expired = false
          if(type === 'Performance') {
            const now = new Date()
            const performanceDate = new Date(date)
            if(now > performanceDate) {
              expired = true
            }
          }
          return( 
            <LinkCard 
              key={id}
              title={title}
              type={type}
              day={day}
              time={time}
              location={location}
              buttonLink={buttonLink}
              buttonText={expired ? 'Expired' : buttonText}
              expired={expired}
            />
          )
        })
      }
    </div>
  )
}

export default Links