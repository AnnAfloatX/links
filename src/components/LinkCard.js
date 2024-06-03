import './css/LinkCard.css'

function LinkCard({title, type, day, time, location, buttonLink, buttonText}) {
  return (
    <a href={buttonLink} className='link-card'>
      <div className='link-main'>
        <div className='link-title'>{title}</div>
        <div className='link-loc' href={location.map}>{location.name}</div>
      </div>
      <div className='link-button' href={buttonLink}>
        <div className='button-text'>{buttonText}</div>
      </div>
    </a>
  )
}

export default LinkCard;