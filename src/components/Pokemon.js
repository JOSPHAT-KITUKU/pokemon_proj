import React from 'react';
import {Route, Routes, Link, useParams} from 'react-router-dom'
import './Pokemon.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import About from './About';
import Basestats from './Basestats';
import Evolution from './Evolution';
import Moves from './Moves';

const Pokemon = () =>{
    const {pokename} = useParams();
    const [pokedata, setPokedata1] = useState(null);

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
        .then(response =>{
            setPokedata1(response.data);
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [pokename]);

    if (!pokedata){
        return (<h1>Loading...</h1>)
    }
        return (
            <div className='wall'>
                <div className='top'>
                    <div className='pok-btn'><button className='btn-pok'><Link to="/"><i class="fa-solid fa-arrow-left-long"></i></Link></button></div>
                    <div className='name-id-wrapper'>
                        <div className='pok-pokename'>{pokedata.name}</div>
                        <div className='id'>#00{pokedata.id}</div>
                    </div>
                    <div className='types-wrapper'>
                    {pokedata.types[0]?<div className='type1'>{pokedata.types[0].type.name}</div>:null}
                    {pokedata.types[1]? <div className='type2'>{pokedata.types[1].type.name}</div>:null}
                    </div>
                </div>
                <div className='bottom'>
                <div className='poke-pokeimg'><img src={pokedata.sprites.front_default} alt={pokedata.name}></img></div>
                    <nav className='pok-det-navbar'>
                        <ul>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="basestats">basestats</Link></li>
                            <li><Link to="evolution">evolution</Link></li>
                            <li><Link to="moves">moves</Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="about" element={<About data={pokedata}/>}></Route>
                        <Route path="basestats" element={<Basestats data={pokedata}/>}></Route>
                        <Route path='evolution' element={<Evolution data={pokedata}/>}></Route>
                        <Route path='moves' element={<Moves data={pokedata}/>}></Route>
                    </Routes>
                </div>
           </div>
        );

}
export default Pokemon;


