import React from 'react';
import Card from './Card';

const CardContainer = ({players}) => {
    // console.log('this players',players);
    return (
        players.map((item, index) => (
            <Card players={item} key={item.id}/>
        ))
        
    )

}

export default CardContainer;

