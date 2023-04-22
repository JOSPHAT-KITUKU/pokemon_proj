import React from "react";
import './About.css';
function About(props){
    return (
    <div className='about_data'>
        <div className='species-wrapper'>
            <div className="spec-txt">Species:</div>
            <div className="spec-value">{props.data.species.name}</div>
        </div>
        <div className='height-wrapper'>
            <div className="spec-txt">Height :</div>
            <div className="spec-value">{props.data.height}</div>
        </div>
        <div className='height-wrapper'>
            <div className="spec-txt">Weight  :</div>
            <div className="spec-value">{props.data.weight}</div>
        </div>
        <div className='height-wrapper'>
            <div className="spec-txt">Abilities:</div>
            <div className="ability-value">{props.data.abilities[0]? props.data.abilities[0].ability.name:null}, {props.data.abilities[1]? props.data.abilities[1].ability.name:null}</div>
        </div>
        <div><h5>Breeding</h5></div>
        <div className='egg-wrapper'>
            <div className="spec-txt">Egg Groups:</div>
            <div className="ability-value">{props.data.egg_group}</div>
        </div>
    </div>);
}
export default About;
