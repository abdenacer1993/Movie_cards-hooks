import React from 'react'
import { Rating } from 'react-simple-star-rating'

function Searsh({clickShearchVal,clickSearchByRate,Moviesearchrate}) {
  return (
    <div className='searchnacer'>
        <input className="form__input" type='text' placeholder='Search Movie ...' onChange={(e)=>clickShearchVal(e.target.value)}/>
        <Rating  onClick={clickSearchByRate} Moviesearchrate={Moviesearchrate} />
    </div>
  )
}

export default Searsh