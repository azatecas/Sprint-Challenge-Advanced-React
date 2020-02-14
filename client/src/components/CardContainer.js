import React from 'react';
import Card from './Card';

const CardContainer = ({players}) => {
    // console.log('this players',players);
    return (
        <div className="card-container">
            {players.map((item, index) => (
                <Card players={item} key={item.id}/>
            ))}
        </div>
        
    )

}

export default CardContainer;

