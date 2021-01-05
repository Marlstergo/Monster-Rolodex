import React from 'react';

import './card-container.style.css';

export const Card = props =>{
    return <div className="card-container"> 
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=360x260`} alt="monsters"/>
    <h2>{props.monster.name}</h2>
    <div className="email"> 
        <h2>{props.monster.email}</h2>
    </div>
    </div>
}