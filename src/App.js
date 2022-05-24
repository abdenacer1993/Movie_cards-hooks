import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import Searsh from './components/Searsh';
import { data } from './data'
import { useState } from 'react';


function App() {
  const [Moviec, setMoviec] = useState([])
  const [Moviesearchval, setMoviesearchval] = useState("")
  const [Moviesearchrate, setMoviesearchrate] = useState(0)
  const clickShearchVal = (value) => {setMoviesearchval(value)}
  const clickSearchByRate = (rate) => {setMoviesearchrate(rate)}
  
  
  return (
    <div className="container-fluid movie-app">
      <div className='row'>
      <Searsh clickShearchVal={clickShearchVal} Moviesearchrate={Moviesearchrate} clickSearchByRate={clickSearchByRate}/>
      <MovieList data={data.filter(
          (el)=>el.Title.toLowerCase().includes(Moviesearchval.trim().toLowerCase())
          &&el.Rate>=Moviesearchrate
        )} />
      
      </div>
    </div>
  );
}

export default App;
