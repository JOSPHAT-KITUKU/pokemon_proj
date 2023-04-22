import React from "react";
import './Basestats.css';

export default function Basestats(prop){
    const colorchos = (value) =>{
        if (value > 49){
            return ('#006400');
        }else{
            return ('#FF4500');
        }
    }
    return (
        <div className='basestat-wrapper'>
            <div className='name'>{prop.data.stats[0].stat.name}</div>
            <div className='val'>{prop.data.stats[0].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[0].base_stat}%`, background: colorchos(prop.data.stats[0].base_stat)}}></div>
            </div>
            <div className='name'>{prop.data.stats[1].stat.name}</div>
            <div className='val'>{prop.data.stats[1].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[1].base_stat}%`, background: colorchos(prop.data.stats[1].base_stat)}}></div>
            </div>
            <div className='name'>{prop.data.stats[2].stat.name}</div>
            <div className='val'>{prop.data.stats[2].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[2].base_stat}%`, background: colorchos(prop.data.stats[2].base_stat)}}></div>
            </div>
            <div className='name'>{prop.data.stats[3].stat.name}</div>
            <div className='val'>{prop.data.stats[3].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[3].base_stat}%`, background: colorchos(prop.data.stats[3].base_stat)}}></div>
            </div>
            <div className='name'>{prop.data.stats[4].stat.name}</div>
            <div className='val'>{prop.data.stats[4].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[4].base_stat}%`, background: colorchos(prop.data.stats[4].base_stat)}}></div>
            </div>
            <div className='name'>{prop.data.stats[5].stat.name}</div>
            <div className='val'>{prop.data.stats[5].base_stat}</div>
            <div className='bar-wrapper'>
                <div className="bar" style={{ width: `${prop.data.stats[5].base_stat}%`, background: colorchos(prop.data.stats[5].base_stat)}}></div>
            </div>
        </div>
    );
}
