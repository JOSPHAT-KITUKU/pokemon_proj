import React from 'react';
import './Evolution.css';

function Evolution(props){
    return (
        <div>
            <div className='pok-ev-name'>{`${props.data.name}`}</div>
            <div className='pok-ev-data'>No Data for Evolution from the Api!!</div>
        </div>
    )
}

export default Evolution;
