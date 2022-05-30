import React from 'react'
import { Rating } from 'react-simple-star-rating'

function MovieCard({el,del}) {

  

  return (
      <div className="hero-container">
    <div className="main-container">
      <div className="poster-container">
      
          <img src={el.Poster} className="poster" alt=''/>
      
      </div><br/>
      <div className="ticket-container">
      <div className="ticket__content">
          <h4 className="ticket__movie-title" style={{fontSize:"20px", fontWeight: 'bold'}}>{el.Title}</h4>
          <p className="ticket__movie-slogan">
          {el.Genre}
          </p>
          <p className="ticket__current-price">{el.Released}</p>
          
          <Rating  ratingValue={el.Rate} readonly='true'/>
          <button className="ticket__buy-btn" onClick={()=>del(el.Id)}>Delete</button>
      </div>
    </div>
</div>
</div>
  )
}

export default MovieCard