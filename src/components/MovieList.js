import React from 'react'
import MovieCard from './MovieCard'

function MovieList({data}) {
  return (
    <div >
        {data.map((el)=><MovieCard key={el.id} el={el} />)}
  
  
  
  
    </div>

  )
}

export default MovieList