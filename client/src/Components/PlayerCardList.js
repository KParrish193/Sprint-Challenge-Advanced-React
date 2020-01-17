import React from 'react';

import PlayerCard from './PlayerCard';

const PlayerCardList = (props) => {
    console.log(props);
    
    return (
    <div className="card-list">
        {props.map(data => (
            <PlayerCard 
            key={id} 
            name={name}
            country={country}
            searches={searches} 
            />
        ))}
    </div>
    );
}

export default PlayerCardList;