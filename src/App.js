import './index.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

function App() {
  const [allpokemon, setallPokemon] = useState([]);
  const [onepoke, onePokedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextpage, setNextPage] = useState("");
  const [prevpage, setPrevPage] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = ("");

  useEffect(() =>{
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage-1)*20}&limit=20`).then(response =>{
      setallPokemon(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    })
    .catch(error =>{
      setError("Error in fetching Data"+error);
    })
    setLoading(false);
  }, [currentPage]);

  useEffect(() =>{
    const promises = allpokemon.map(pok => axios.get(pok.url));
    Promise.all(promises).then(responses => {
      const pokemonData = responses.map(res => res.data);
      onePokedata(pokemonData);
    })
  }, [allpokemon]);

  const loadNextPage = () => {
    setCurrentPage(currentPage+1);
  };
  const LoadPrevPage = () =>{
    setCurrentPage(currentPage-1);
  }
  return (
      <div className='pokepage'>
      <div className='arrows'>
        <div className='arr-line'>{prevpage? <button onClick={LoadPrevPage}><i class="fa-solid fa-arrow-left-long"></i></button>:null}</div>
        <div className='arr-bars'><button><i class="fa-solid fa-bars"></i></button></div>
      </div>
      <div className='title'>Pokedex App</div>
      <div className='page-nav'>
        <div className='prev-page'>{prevpage? <button onClick={LoadPrevPage}>Prev Page</button>:null}</div>
        <div className='next-page'>{nextpage? <button onClick={loadNextPage}>Next Page</button>:null}</div>
      </div>
    {
      error? <div>{error}</div>:
      loading? <div className='load'><h1>Loading Data..</h1></div>:
      onepoke.map(itm =>{
        return (
            <div key={itm.name} className='card'>
              <div className='pokename'><Link to={`/${itm.name}`}>{itm.name}</Link></div>
              <div className='types'>{itm.types[0].type.name}</div>
              <div className='types_1'>{itm.types[1]? itm.types[1].type.name:null}</div>
              <div className='pokeimg'><img src={itm.sprites.front_default} alt={itm.name}/></div>
              {/* <Routes>
                <Route path={`/${itm.name}`} element={<Pokemon/>}>
                </Route>
              </Routes> */}
            </div>
        )
      })
    }
    </div>
  );
}

export default App;
