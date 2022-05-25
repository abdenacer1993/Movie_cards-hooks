
import './App.css' ;

import MovieList from './components/MovieList';
import Searsh from './components/Searsh';
import { data } from './data'
import { useState } from 'react';
import Add from './components/Add';



function App() {
  const [Moviec, setMoviec] = useState(data)
  const [Moviesearchval, setMoviesearchval] = useState("")
  const [Moviesearchrate, setMoviesearchrate] = useState(0)
  const clickShearchVal = (value) => {setMoviesearchval(value)}
  const clickSearchByRate = (rate) => {setMoviesearchrate(rate)}
  
  const AddMovie = (movie) => { setMoviec([...Moviec,movie]) }

  return (
    <div>
    <div className="container-fluid movie-app">
      <div className='row'>
      <Searsh clickShearchVal={clickShearchVal} Moviesearchrate={Moviesearchrate} clickSearchByRate={clickSearchByRate}/>
      <MovieList data={Moviec.filter(
          (el)=>el.Title.toLowerCase().includes(Moviesearchval.trim().toLowerCase())
          &&el.Rate>=Moviesearchrate
        )} />
      
      </div>
      </div>
      <Add AddMovie={AddMovie}/>

    </div>
  );
}

export default App;
