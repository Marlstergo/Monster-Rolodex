import React from 'react';
import { Card } from '../cards-container/card-contianer.component';

import './card-list.style.css';

export const CardList = props => {
    return <div className="card-list col"> 
    {
        props.monsters.map(monster =>(
        <Card key={monster.id} monster={monster} >
            
            
        </Card>))
        }
    </div>    
}