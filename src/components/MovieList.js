import React from 'react'
import MovieCard from './MovieCard'

function MovieList({data,del}) {
  return (
    <div >
        {data.map((el)=><MovieCard key={el.id} el={el} del={del}/>)}
  
  
  
  
    </div>

  )
}

export default MovieList