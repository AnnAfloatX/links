import './css/Links.css';
import LinkCard from './LinkCard.js';
import {links} from '../const/linkseed';


function Links() {
  return (
    <div id='links'>
      {
        links.map(({id, title, type, day, time, date, location, buttonLink, buttonText})=> {

          return( 
            <LinkCard 
              key={id}
              title={title}
              type={type}
              day={day}
              time={time}
              location={location}
              buttonLink={buttonLink}
              buttonText={buttonText}
            />
          )
        })
      }
    </div>
  )
}

export default Links