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

  const del = (idd) => {
    setMoviec(Moviec.filter((el) => el.Id !== idd))
  }
 

  return (
    <div>
    <div className="container-fluid movie-app">
      <div className='row'>
      <Searsh clickShearchVal={clickShearchVal} Moviesearchrate={Moviesearchrate} clickSearchByRate={clickSearchByRate}/>
      {Moviec.length ? <MovieList data={Moviec.filter(
          (el)=>el.Title.toLowerCase().includes(Moviesearchval.trim().toLowerCase())
          &&el.Rate>=Moviesearchrate
        )} del={del}/>: <h1 className="no_movies" >no movies</h1>}
      
      </div>
    </div>
      <Add AddMovie={AddMovie}/>

    </div>
  );
}

export default App;
