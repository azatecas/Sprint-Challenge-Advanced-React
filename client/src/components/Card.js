import React from 'react';

const Card = ({players}) => {

    const { name, country, searches } = players;

    return(
        <div>
            <h1>{ name }</h1>
            <h3>{ country }</h3>
            <h3>{ searches }</h3>
        </div>
    )

}

export default Card;